/**
 * 123 云盘下载源的 env 绑定（逻辑见 download-pan123.ts）。
 * 账号与应用密码来自 123 云盘「第三方挂载」里只授权发布目录的 WebDAV 应用；缺任一项则关闭该下载源。
 */

import { PAN123_WEBDAV_PASSWORD, PAN123_WEBDAV_URL, PAN123_WEBDAV_USER } from "astro:env/server";
import { createPan123Resolver } from "@/lib/download-pan123";

export const pan123Configured = !!(PAN123_WEBDAV_USER && PAN123_WEBDAV_PASSWORD);

const authorization = `Basic ${Buffer.from(`${PAN123_WEBDAV_USER ?? ""}:${PAN123_WEBDAV_PASSWORD ?? ""}`).toString("base64")}`;

/**
 * 对象键（releaseObjectKey）对应资产的 123 CDN 下载链接；资产缺失、大小不符或 123 不可用时为 null。
 * 调用前须保证 `pan123Configured`。
 */
export const pan123DownloadUrl = createPan123Resolver(PAN123_WEBDAV_URL, authorization);
