/**
 * 123 云盘 WebDAV 发布资产源（纯逻辑，env 绑定见 pan123.ts）。
 *
 * 发布资产由 .github/actions/pan123-upload 经 WebDAV 上传到授权目录下的
 * `<OSS_RELEASE_PREFIX>/<版本>/<组件>/<file>`（与 OSS 同一对象键，releaseObjectKey）。
 * WebDAV 的 GET 不返回文件体，而是 302 到一个免鉴权、支持 Range、约 7 天有效的 CDN 签名链接：
 * 官网先 PROPFIND 确认大小与 GitHub 资产一致，再取这个链接 302 给下载者（不代理流量）。
 */

/** WebDAV PROPFIND（Depth: 0）响应里的 getcontentlength；命名空间前缀由服务端决定。 */
export function webdavContentLength(xml: string): number | null {
  const m = /<(?:[A-Za-z][\w.-]*:)?getcontentlength>\s*(\d+)\s*</.exec(xml);
  if (!m) return null;
  const size = Number(m[1]);
  return Number.isSafeInteger(size) ? size : null;
}

/**
 * 123 的 CDN 链接形如 `https://<节点>/<调度域名>/<路径>?…`：节点按「请求 WebDAV 的一方」
 * （官网服务器）就近选出。去掉节点前缀改指调度域名，由调度域名按真实下载者再 302 到就近节点。
 * 不符合该形态时原样使用；非 https 或带 userinfo 的地址拒绝。
 */
export function pan123SchedulerUrl(location: string): string | null {
  let url: URL;
  try {
    url = new URL(location);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.username || url.password) return null;
  const [, first, ...rest] = url.pathname.split("/");
  if (first && rest.length > 0 && rest.some((part) => part !== "") &&
      /^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(first)) {
    return `https://${first.toLowerCase()}/${rest.join("/")}${url.search}`;
  }
  return url.href;
}

/** 链接 `t=` 参数（过期时刻，秒）换算成毫秒；缺失或非法为 null。 */
function linkExpiryMs(link: string): number | null {
  const t = new URL(link).searchParams.get("t");
  return t && /^\d{9,11}$/.test(t) ? Number(t) * 1000 : null;
}

const POSITIVE_TTL_MS = 3_600_000;
const UNKNOWN_EXPIRY_TTL_MS = 600_000;
const NEGATIVE_TTL_MS = 60_000;

/**
 * 返回 `(key, expectedSize) => 下载链接 | null`。结果按 key + 大小缓存：成功最多 1 小时且不超过
 * 链接剩余有效期的一半，失败 60 秒；同一 key 并发合并；在途数达到 `capacity` 视作不可用。
 */
export function createPan123Resolver(
  base: string,
  authorization: string,
  request: (input: string, init: RequestInit) => Promise<Response> =
    (input, init) => fetch(input, init),
  now = Date.now,
  capacity = 256,
) {
  const root = base.replace(/\/+$/, "");
  const cache = new Map<string, { until: number; link: string | null }>();
  const inflight = new Map<string, Promise<string | null>>();

  async function resolve(key: string, expectedSize: number): Promise<string | null> {
    const target = `${root}/${key.split("/").map(encodeURIComponent).join("/")}`;
    const propfind = await request(target, {
      method: "PROPFIND",
      headers: { Authorization: authorization, Depth: "0" },
      signal: AbortSignal.timeout(5000),
      redirect: "error",
    });
    if (propfind.status !== 207 || webdavContentLength(await propfind.text()) !== expectedSize) {
      return null;
    }
    const get = await request(target, {
      method: "GET",
      headers: { Authorization: authorization },
      signal: AbortSignal.timeout(5000),
      redirect: "manual",
    });
    // 只要响应头：非重定向时也不能把文件体读进官网进程。
    await get.body?.cancel();
    if (![301, 302, 303, 307, 308].includes(get.status)) return null;
    const location = get.headers.get("location");
    return location ? pan123SchedulerUrl(location) : null;
  }

  return async (key: string, expectedSize: number): Promise<string | null> => {
    if (!Number.isSafeInteger(expectedSize) || expectedSize < 0) return null;
    const cacheKey = JSON.stringify([key, expectedSize]);
    const hit = cache.get(cacheKey);
    if (hit && now() < hit.until) return hit.link;
    const pending = inflight.get(cacheKey);
    if (pending) return pending;
    if (inflight.size >= capacity) return null;
    const work = Promise.resolve().then(async () => {
      let link: string | null = null;
      try {
        link = await resolve(key, expectedSize);
      } catch {
        // 超时、网络与解析错误均按资产不可用处理，交给下一个下载源。
      }
      const at = now();
      let ttl = NEGATIVE_TTL_MS;
      if (link) {
        const expiry = linkExpiryMs(link);
        ttl = expiry === null ? UNKNOWN_EXPIRY_TTL_MS : Math.min(POSITIVE_TTL_MS, (expiry - at) / 2);
        if (ttl <= 0) link = null;
      }
      cache.delete(cacheKey);
      while (cache.size >= capacity) cache.delete(cache.keys().next().value!);
      cache.set(cacheKey, { until: at + Math.max(ttl, 0), link });
      return link;
    }).finally(() => inflight.delete(cacheKey));
    inflight.set(cacheKey, work);
    return work;
  };
}
