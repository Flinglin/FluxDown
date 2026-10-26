import { defineMessages } from "../define";

/**
 * 文档首页「与 Ghost Downloader 对比」文案。
 *
 * 每格结论必须有出处:GD 侧引自其官方文档 / README(行级出处见 `DocsCompareGd.astro` 的 `src`),
 * FluxDown 侧以本仓源码与本站文档为准。改任一行先重新核对两侧,并同步更新 `checked`。
 */
export const docsCompare = defineMessages({
  en: {
    eyebrow: "Comparison",
    title: "FluxDown vs <em>Ghost Downloader</em>",
    lede: "Both are free, open-source, cross-platform download managers. This table lists where each one is ahead, including the rows FluxDown loses.",
    figTag: "FEATURE MATRIX",
    checked: "Checked 2026-10-26 · FluxDown v0.6.3 · Ghost Downloader v4.4.5",
    feature: "Feature",
    yes: "Supported",
    partial: "Partial",
    no: "Not available",
    source: "Source",
    footnote:
      "“Not available” for Ghost Downloader means its official docs and README did not mention the feature as of the check date. Every Ghost Downloader cell links to the page it was taken from.",
    sources: "Sources",
    sourceGdDocs: "Ghost Downloader docs",
    sourceGdRepo: "Ghost Downloader on GitHub",
    sourceFluxDown: "FluxDown source code",
    groups: {
      protocols: "Protocols",
      platforms: "Platforms",
      browser: "Browser",
      network: "Sites & network",
      tasks: "Task management",
      integration: "Extensibility & integration",
      basics: "Project",
    },
    rows: {
      http: {
        label: "HTTP / HTTPS segmented download",
        fd: "Adaptive segmentation, slow-segment rescue, resume",
        gd: "Adds threads automatically when slow, resume",
      },
      ftp: {
        label: "FTP",
        fd: "FTP with multiple connections and resume; no FTPS",
        gd: "FTP / FTPS with multiple threads and resume",
      },
      bt: {
        label: "BitTorrent / Magnet",
        fd: "Seeds after completion, stops by ratio or time",
        gd: "Seeds after completion; not in the Android build",
      },
      ed2k: {
        label: "eD2k",
        fd: "Built-in engine (download only)",
        gd: "Needs an external runtime installed first; not on Android",
      },
      hls: {
        label: "HLS (m3u8) / MPEG-DASH",
        fd: "HLS incl. AES-128 and DASH; muxing uses the ffmpeg component",
        gd: "M3U8 and MPEG-DASH",
      },
      live: {
        label: "Live stream recording",
        fd: "HLS live streams only",
        gd: "HLS and DASH live streams, output as .ts",
      },
      desktop: {
        label: "Windows / macOS / Linux",
        fd: "Windows 10+ x64/ARM64 · macOS 10.15+ · Linux x64",
        gd: "Windows 10+ · macOS 13+ · Linux glibc 2.35+, all x64/arm64",
      },
      android: {
        label: "Android",
        fd: "Android 8.0+, includes BitTorrent and eD2K",
        gd: "Android 10+ arm64, no BitTorrent or eD2k",
      },
      ios: {
        label: "iOS",
        fd: "TestFlight beta (no BT/eD2K/plugins) or sideloaded full IPA",
        gd: "Not available",
      },
      server: {
        label: "NAS / Docker with Web UI",
        fd: "Docker, Synology, QNAP, OpenWrt, Unraid; built-in Web UI",
        gd: "Not available",
      },
      extension: {
        label: "Browser extension",
        fd: "Chrome / Edge / Firefox: download takeover, media and m3u8/mpd sniffing",
        gd: "Chrome / Edge / Firefox: takeover, sniffing, hover download button, Cat Catch tools",
      },
      userscript: {
        label: "Userscript",
        fd: "Official Tampermonkey script",
        gd: "No official script; aria2-style scripts such as LinkSwift can push tasks",
      },
      sites: {
        label: "Video site parsing (YouTube, Bilibili…)",
        fd: "Through official plugins: yt-dlp, YouTube, Bilibili bangumi",
        gd: "Built in: Bilibili, YouTube (needs yt-dlp), GitHub / HuggingFace mirrors",
      },
      tls: {
        label: "Browser TLS fingerprint emulation",
        fd: "Not available",
        gd: "Emulates Chrome / Edge / Firefox / Safari, per-domain presets",
      },
      proxy: {
        label: "Proxy",
        fd: "Global, system proxy / PAC, bypass list; no per-domain rules",
        gd: "Global plus per-domain proxy via identity presets (wildcards)",
      },
      edit: {
        label: "Edit a task's parameters",
        fd: "Change URL and thread count after pausing",
        gd: "Change URL, threads, proxy, headers and fingerprint while downloading",
      },
      batch: {
        label: "Batch add",
        fd: "Multi-line paste and TXT import; no range templates",
        gd: "Template syntax such as [1-100] and {mp4,mkv}",
      },
      queue: {
        label: "Queues, speed limit, schedule",
        fd: "Multiple queues, each with its own concurrency, speed limit and daily schedule",
        gd: "Global speed limit and concurrency; no schedule",
      },
      after: {
        label: "Action when all downloads finish",
        fd: "Shut down (optional delay)",
        gd: "Shut down, restart, hibernate or open a file",
      },
      rss: {
        label: "RSS auto-download",
        fd: "Include/exclude/regex filters, episode de-dup, unattended",
        gd: "Not available",
      },
      category: {
        label: "Download categories",
        fd: "Route by type, extension, URL wildcard or regex",
        gd: "By extension into separate folders (off by default)",
      },
      plugins: {
        label: "Plugins",
        fd: "JavaScript / TypeScript SDK and a plugin marketplace",
        gd: "Python FeaturePacks; plugin API still stabilizing, no marketplace",
      },
      aria2: {
        label: "aria2 JSON-RPC compatibility",
        fd: "Task, queue and status methods plus WebSocket notifications",
        gd: "Only aria2.addUri / getVersion, localhost only",
      },
      api: {
        label: "REST API / MCP",
        fd: "REST API with OpenAPI, plus MCP for AI agents",
        gd: "Not available",
      },
      cli: {
        label: "Command line",
        fd: "fluxdown CLI, can also run the engine standalone",
        gd: "ghd CLI",
      },
      devices: {
        label: "Cross-device remote control",
        fd: "LAN pairing for remote control, FluxCloud sync",
        gd: "Not available",
      },
      license: {
        label: "License",
        fd: "AGPL-3.0",
        gd: "GPL-3.0",
      },
      stack: {
        label: "Tech stack",
        fd: "Rust engine, native GPUI desktop",
        gd: "Python, PySide6 (Qt)",
      },
      languages: {
        label: "UI languages",
        fd: "3: Simplified Chinese, Traditional Chinese, English",
        gd: "8, incl. Japanese, Russian, Spanish, Portuguese",
      },
    },
  },
  zh: {
    eyebrow: "对比",
    title: "FluxDown 与 <em>Ghost Downloader</em>",
    lede: "两者都是免费开源的跨平台下载器。下表逐项列出各自的长处,FluxDown 落后的项也照实写出。",
    figTag: "功能对照",
    checked: "核对于 2026-10-26 · FluxDown v0.6.3 · Ghost Downloader v4.4.5",
    feature: "功能",
    yes: "支持",
    partial: "部分支持",
    no: "不支持",
    source: "出处",
    footnote:
      "Ghost Downloader 一列的「不支持」指截至核对日其官方文档与 README 均未提及该功能。Ghost Downloader 每一格都链接到所引用的原始页面。",
    sources: "资料来源",
    sourceGdDocs: "Ghost Downloader 文档",
    sourceGdRepo: "Ghost Downloader GitHub 仓库",
    sourceFluxDown: "FluxDown 源码",
    groups: {
      protocols: "下载协议",
      platforms: "平台",
      browser: "浏览器",
      network: "站点与网络",
      tasks: "任务管理",
      integration: "扩展与集成",
      basics: "项目",
    },
    rows: {
      http: {
        label: "HTTP / HTTPS 分段下载",
        fd: "自适应分段、慢段救援、断点续传",
        gd: "速度不足自动加线程、断点续传",
      },
      ftp: {
        label: "FTP",
        fd: "FTP 多连接与续传;不支持 FTPS",
        gd: "FTP / FTPS 多线程与续传",
      },
      bt: {
        label: "BitTorrent / 磁力",
        fd: "完成后做种,可按分享率或时长停止",
        gd: "完成后自动做种;Android 版不含",
      },
      ed2k: {
        label: "eD2k",
        fd: "内置引擎(仅下载)",
        gd: "需先安装外部运行时;Android 不支持",
      },
      hls: {
        label: "HLS(m3u8)/ MPEG-DASH",
        fd: "HLS(含 AES-128)与 DASH;合并依赖 ffmpeg 组件",
        gd: "M3U8 与 MPEG-DASH",
      },
      live: {
        label: "直播录制",
        fd: "仅 HLS 直播",
        gd: "HLS 与 DASH 直播,输出 .ts",
      },
      desktop: {
        label: "Windows / macOS / Linux",
        fd: "Windows 10+ x64/ARM64 · macOS 10.15+ · Linux x64",
        gd: "Windows 10+ · macOS 13+ · Linux glibc 2.35+,均 x64/arm64",
      },
      android: {
        label: "Android",
        fd: "Android 8.0+,含 BT 与 eD2K",
        gd: "Android 10+ arm64,不含 BT 与 eD2k",
      },
      ios: {
        label: "iOS",
        fd: "TestFlight 公测(无 BT / eD2K / 插件)或侧载完整版 IPA",
        gd: "不支持",
      },
      server: {
        label: "NAS / Docker + Web UI",
        fd: "Docker、群晖、威联通、OpenWrt、Unraid,自带 Web UI",
        gd: "不支持",
      },
      extension: {
        label: "浏览器扩展",
        fd: "Chrome / Edge / Firefox:接管下载、嗅探音视频与 m3u8 / mpd",
        gd: "Chrome / Edge / Firefox:接管下载、嗅探、视频悬浮下载按钮、猫抓工具",
      },
      userscript: {
        label: "油猴脚本",
        fd: "官方 Tampermonkey 脚本",
        gd: "无官方脚本;LinkSwift 等 aria2 类脚本可推送任务",
      },
      sites: {
        label: "视频站解析(YouTube、B 站等)",
        fd: "经官方插件:yt-dlp 通用解析、YouTube、B 站番剧",
        gd: "内置:B 站、YouTube(需 yt-dlp)、GitHub / HuggingFace 镜像加速",
      },
      tls: {
        label: "浏览器 TLS 指纹模拟",
        fd: "不支持",
        gd: "模拟 Chrome / Edge / Firefox / Safari,可按域名预设",
      },
      proxy: {
        label: "代理",
        fd: "全局、系统代理 / PAC、免代理列表;无按域名规则",
        gd: "全局代理 + 身份预设按域名指定(支持通配)",
      },
      edit: {
        label: "修改任务参数",
        fd: "暂停后可更换链接、修改线程数",
        gd: "下载中可改 URL、线程数、代理、请求头、指纹",
      },
      batch: {
        label: "批量添加",
        fd: "多行粘贴、导入 TXT;无范围模板",
        gd: "[1-100]、{mp4,mkv} 等模板语法",
      },
      queue: {
        label: "队列 / 限速 / 定时",
        fd: "多队列,各自设置并发、限速与每日定时",
        gd: "全局限速与并发上限;无定时",
      },
      after: {
        label: "全部完成后动作",
        fd: "关机(可延迟)",
        gd: "关机、重启、休眠或打开文件",
      },
      rss: {
        label: "RSS 订阅自动下载",
        fd: "包含 / 排除 / 正则过滤、剧集去重、无人值守",
        gd: "不支持",
      },
      category: {
        label: "下载分类",
        fd: "按类型、扩展名、URL 通配或正则分目录",
        gd: "按扩展名归入独立目录(默认关闭)",
      },
      plugins: {
        label: "插件",
        fd: "JavaScript / TypeScript SDK 与插件市场",
        gd: "Python FeaturePack;插件 API 仍在稳定中,无市场",
      },
      aria2: {
        label: "aria2 JSON-RPC 兼容",
        fd: "任务、队列与状态方法,含 WebSocket 通知",
        gd: "仅 aria2.addUri / getVersion,仅限本机",
      },
      api: {
        label: "REST API / MCP",
        fd: "REST API(附 OpenAPI)与面向 AI 智能体的 MCP",
        gd: "不支持",
      },
      cli: {
        label: "命令行",
        fd: "fluxdown CLI,可内嵌引擎独立下载",
        gd: "ghd 命令行",
      },
      devices: {
        label: "跨设备远程控制",
        fd: "局域网配对远程控制、FluxCloud 同步",
        gd: "不支持",
      },
      license: {
        label: "开源协议",
        fd: "AGPL-3.0",
        gd: "GPL-3.0",
      },
      stack: {
        label: "技术栈",
        fd: "Rust 引擎、GPUI 原生桌面",
        gd: "Python、PySide6(Qt)",
      },
      languages: {
        label: "界面语言",
        fd: "3 种:简体中文、繁体中文、English",
        gd: "8 种,含日、俄、西、葡",
      },
    },
  },
});
