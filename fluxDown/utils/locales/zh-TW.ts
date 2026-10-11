/**
 * 台灣繁體中文翻譯
 */
const zhTW = {
  // Header
  "header.themeToggle": "切換主題",
  "header.checking": "檢測中...",
  "header.connected": "已連線",
  "header.disconnected": "未連線",

  // Main switch
  "switch.label": "下載攔截",
  "switch.enabled": "已開啟",
  "switch.disabled": "已關閉",

  // Stats
  "stats.title": "今日統計",
  "stats.sent": "已下載",
  "stats.failed": "失敗",
  "stats.reset": "重置統計",
  "stats.resetDone": "統計已重置",

  // Quick settings
  "settings.title": "快捷設定",
  "settings.interceptMode": "攔截模式",
  "settings.modeSmart": "智慧模式",
  "settings.modeAll": "攔截所有",
  "settings.hintSmart": "綜合檔名、型別、大小智慧判斷",
  "settings.hintAll": "攔截所有下載（除排除網網域外）",
  "settings.localDownloadHint":
    "網頁本地生成的 blob:/data: 檔案不支援接管，將由瀏覽器下載",
  "settings.minFileSize": "最小檔案大小",
  "settings.sizeNoLimit": "不限",
  "settings.interceptMagnet": "接管磁力連結",
  "settings.interceptMagnetHint": "關閉後交給系統預設磁力程式（如 qBittorrent）",
  "settings.altClickHint": "Alt+Shift+D 切換攔截",
  "settings.dotVisible": "懸浮球",

  // Remote download source
  "remote.title": "遠端下載源",
  "remote.mode": "模式",
  "remote.modeOff": "僅桌面",
  "remote.modeFallback": "桌面優先",
  "remote.modeAlways": "僅遠端",
  "remote.modeHintOff": "僅透過 Native Messaging 傳送到桌面應用",
  "remote.modeHintFallback": "優先使用桌面應用，不可達時投遞到遠端伺服器",
  "remote.modeHintAlways": "始終投遞到遠端伺服器，不再嘗試連線桌面應用",
  "remote.serverUrl": "伺服器地址",
  "remote.serverUrlPlaceholder": "如 http://192.168.1.10:17800",
  "remote.token": "訪問令牌",
  "remote.tokenPlaceholder": "輸入訪問令牌",
  "remote.testConnection": "測試連線",
  "remote.testing": "測試中...",
  "remote.testSuccess": "已連線（{app} v{version}）",
  "remote.testAuthFailed": "鑑權失敗，請檢查訪問令牌",
  "remote.testUnreachable": "無法連線到伺服器，請檢查地址和網路",
  "remote.testNotConfigured": "請先填寫伺服器地址",
  "remote.testFailed": "連線測試失敗：{message}",
  "remote.verifyRequired": "遠端模式需先在設定頁測試連線透過後才能選擇",
  "remote.openOptions": "設定伺服器",

  // Options page
  "options.title": "FluxDown 設定",
  "options.remoteDesc":
    "設定 fluxdown_server 的地址與訪問令牌，測試連線透過後即可在彈出窗中選擇遠端模式",
  "options.verifiedState": "狀態：已透過連線驗證",
  "options.unverifiedState": "狀態：未驗證（遠端模式不可用）",
  "options.navSettings": "設定",
  "options.nav.general": "通用",
  "options.nav.remote": "遠端伺服器",
  "options.general.languageTitle": "介面語言",
  "options.general.languageDesc": "選擇擴充套件介面的語言，獨立於瀏覽器語言",
  "options.general.languageAuto": "自動（跟隨瀏覽器）",
  "options.general.themeTitle": "外觀",
  "options.general.themeDesc": "擴充套件介面的主題",
  "options.theme.system": "跟隨系統",
  "options.theme.light": "淺色",
  "options.theme.dark": "深色",
  "options.tokenDesc": "服務端首次啟動時生成的管理令牌",
  "footer.settings": "全部設定",

  "diagnostics.title": "連線診斷",
  "diagnostics.description": "匯出最近 7 天、最多 200 條連線事件及擴充套件資訊，不包含 Cookie、令牌或下載連結。記錄僅存本機，不會自動上傳。",
  "diagnostics.export": "匯出記錄",
  "diagnostics.exporting": "正在匯出…",
  "diagnostics.exportStarted": "診斷記錄已開始下載",
  "diagnostics.exportFailed": "匯出診斷記錄失敗，請在「全部設定」中重試。",

  // 任务发送通知开关
  "options.general.notifyLocalTitle": "本地任務通知",
  "options.general.notifyLocalDesc":
    "任務傳送到本地桌面應用時彈出桌面通知（建立成功/失敗）",
  "options.general.notifyRemoteTitle": "遠端任務通知",
  "options.general.notifyRemoteDesc":
    "任務傳送到遠端伺服器時彈出桌面通知（建立成功/失敗）",

  // 拦截规则配置
  "options.nav.rules": "攔截規則",
  "options.rules.extTitle": "副檔名",
  "options.rules.extDesc":
    "命中這些副檔名的下載會被攔截（智慧模式下作為正向匹配）。可在下方追加自定義副檔名；內建項不可刪除",
  "options.rules.extPlaceholder": "如 .epub",
  "options.rules.add": "新增",
  "options.rules.builtinExts": "內建副檔名列表",
  "options.rules.extEmpty": "暫無自定義副檔名",
  "options.rules.extInvalid": "格式無效，示例：.epub",
  "options.rules.extExists": "{ext} 已在列表中",
  "options.rules.extAdded": "已新增 {ext}",
  "options.rules.mimeTitle": "MIME 型別",
  "options.rules.mimeDesc":
    "智慧模式下命中這些 MIME 型別的響應會被攔截。以斜槓結尾表示匹配整個類別（如 video/）",
  "options.rules.mimePlaceholder": "如 application/epub+zip 或 video/",
  "options.rules.mimeInvalid": "格式無效，示例：application/epub+zip 或 video/",
  "options.rules.resetMime": "恢復預設",
  "options.rules.mimeResetDone": "已恢復預設 MIME 列表",
  "options.rules.excludeExtTitle": "排除副檔名",
  "options.rules.excludeExtDesc":
    "命中這些副檔名的下載永不攔截，即使同時命中上方的包含規則（如 .torrent、.crx）",
  "options.rules.excludeExtPlaceholder": "如 .torrent",
  "options.rules.minFileSizeCustom": "自定義",
  "options.rules.minFileSizeCustomPlaceholder": "自定義大小（MB）",


  // Domain exclusion
  "domain.title": "排除網網域",
  "domain.addTitle": "手動新增網網域",
  "domain.add": "新增",
  "domain.cancel": "取消",
  "domain.placeholder": "輸入網網域，如 example.com",
  "domain.currentSite": "當前站點",
  "domain.empty": "暫無排除網網域",
  "domain.removed": "已移除 {domain}",
  "domain.exists": "{domain} 已在排除列表中",
  "domain.excluded": "已排除 {domain}",
  "domain.invalid": "無效的網網域：{domain}",
  "domain.cannotGetDomain": "無法獲取當前頁面網網域",
  "domain.excludeCurrent": "排除當前站點",

  // Notifications
  "notify.batchNoLinks": "未找到連結",
  "notify.batchNoLinksDetail": "當前頁面未發現任何連結",
  "notify.batchNoDownloadableLinks": "當前頁面未發現可下載的檔案連結",
  "notify.batchComplete": "批次下載完成",
  "notify.batchResult": "共 {total} 個檔案，成功 {sent} 個，失敗 {failed} 個",
  "notify.batchExtractFailed": "提取頁面連結失敗，請檢查頁面許可權",
  "notify.downloadSent": "下載已傳送",
  "notify.sentToFluxDown": "{name} 已傳送到 FluxDown",
  "notify.batchSentDetail": "{count} 個任務已傳送到 FluxDown",
  "notify.sendFailed": "傳送失敗",
  "notify.connectionFailed": "無法連線到 FluxDown 應用: {message}",
  "notify.fallbackBrowser": "已回退到瀏覽器下載",
  "notify.fallbackBrowserDetail":
    "無法傳送到 FluxDown，已交由瀏覽器繼續下載: {url}",
  "notify.videoSourceUnavailableTitle": "無法下載此影片/音訊",
  "notify.videoSourceUnavailableDetail":
    "該來源無法直接下載（可能是 blob:/MSE 流），請改用資源嗅探面板",
  "notify.selectionInvalidTitle": "未識別到可下載連結",
  "notify.selectionInvalidDetail":
    "選中內容不是完整的 magnet:/ed2k:/http(s) 連結",
  "notify.appUnavailable": "未檢測到 FluxDown 應用",
  "notify.appUnavailableDetail":
    "已暫時改用瀏覽器自帶下載。請確認 FluxDown 桌面端已啟動，稍後將自動恢復接管。",

  // Resource sniffer & panel
  "sniffer.title": "資源嗅探",
  "sniffer.resourceSniffing": "資源嗅探",
  "sniffer.resourceSniffingHint": "檢測網頁中的可下載資源，關閉即隱藏頁面內下載按鈕（重新開啟需重新整理）",
  "sniffer.showFloatingButton": "影片浮動按鈕",
  "sniffer.showFloatingButtonHint": "在影片元素上顯示快速下載按鈕",
  "sniffer.showResourcePanel": "資源面板",
  "sniffer.showResourcePanelHint": "頁面底部顯示檢測到的資源列表",
  "sniffer.sniffImages": "圖片嗅探",
  "sniffer.sniffImagesHint": "檢測網頁中的大圖片資源（>100KB）",

  // Resource panel (content script)
  "panel.selectAll": "全選",
  "panel.batchDownload": "批次下載",
  "panel.resources": "個資源",
  "panel.empty": "暫未檢測到可下載資源",
  "panel.collapse": "收起",
  "panel.more": "其他 {count} 項",
  "panel.hideDot": "隱藏懸浮球",
  "panel.download": "下載",
  "panel.floatDL": "下載",
  "panel.tabAll": "全部",
  "panel.tabVideo": "影片",
  "panel.tabAudio": "音訊",
  "panel.tabDocs": "檔案",
  "panel.tabArchive": "壓縮檔",
  "panel.tabStream": "流媒體",
  "panel.tabSubtitle": "字幕",
  "panel.tabMagnet": "磁力",
  "panel.tabOther": "其他",
  "panel.qualityPickerTitle": "選擇清晰度",
  "panel.trackVideo": "影片軌",
  "panel.trackAudio": "音訊軌",
  "panel.qualityUnknown": "未知畫質",
  "panel.videoCandidate": "影片候選",
  "panel.videoIndex": "影片",
  "panel.videoNeedsManifest": "已發現分片，但未找到播放清單，暫不下載原始分片",
  "panel.autoQuality": "自動",
  "panel.originalQuality": "原始",
  "panel.downloadCandidate": "下載影片",
  "panel.previewTitle": "預覽",
  "panel.previewClose": "關閉預覽",
  "panel.previewFailed": "預覽載入失敗，可能需要登入或存在跨網域限制",
  "panel.previewUnsupported": "該型別暫不支援預覽",
  "panel.previewFragmentUnsupported": "此分片無法獨立預覽，需合併後檢視",
  "panel.previewHlsUnsupported": "當前瀏覽器無法直接預覽 HLS，請在播放頁檢視或下載後用播放器開啟",
  "panel.previewDashUnsupported": "當前瀏覽器無法直接預覽此 DASH 流，請在播放頁檢視或下載後用播放器開啟",
  "panel.previewLimited": "預覽受限",
  "panel.previewLimitedHint": "瀏覽器預覽受跨網域/登入限制失敗，但下載仍可能成功（引擎會帶上登入態）",
  "panel.clearFailed": "清理預覽失敗項",
  "panel.clearFailedHint": "把預覽失敗的資源從列表隱藏（不影響其他資源，也不代表無法下載）",
  "panel.exportDebugLog": "匯出除錯記錄",
  "panel.exportDebugLogFailed": "匯出嗅探除錯記錄失敗",
  "panel.clearResources": "清除",
  "panel.clearResourcesTitle": "清除當前頁面的嗅探資源列表",
  "panel.exportDebugLogTitle": "匯出當前頁面的原始嗅探資源、播放清單和聚合關係",
  "panel.exportDebugLogDone": "嗅探除錯記錄已匯出",

  // Shortcut toggle
  "shortcut.toggleTitle": "攔截切換",
  "shortcut.interceptOn": "下載攔截已開啟",
  "shortcut.interceptOff": "下載攔截已關閉",

  // Context menu
  "contextMenu.sendToFluxDown": "使用 FluxDown 下載此連結",
  "contextMenu.sendVideoToFluxDown": "使用 FluxDown 下載此影片/音訊",
  "contextMenu.sendSelectionToFluxDown": "使用 FluxDown 下載選中內容",
  "contextMenu.sendImageToFluxDown": "使用 FluxDown 下載此圖片",
  "contextMenu.sendPageToFluxDown": "使用 FluxDown 下載此頁面",

  // Manifest
  "manifest.description":
    "攔截瀏覽器下載，傳送到 FluxDown 桌面應用進行高速下載",

  // 顶部 tab（popup）
  "popup.tabs.tasks": "任務",
  "popup.tabs.resources": "資源",
  "popup.tabs.settings": "設定",

  // 资源面板（popup）
  "popup.resources.empty": "當前頁面暫未嗅探到資源",

  // 任务面板（popup）
  "popup.tasks.downloading": "下載中",
  "popup.tasks.completed": "最近完成",
  "popup.tasks.empty": "暫無下載任務",
  "popup.tasks.appNotRunning": "FluxDown 未執行",
  "popup.tasks.startApp": "啟動 FluxDown",
  "popup.tasks.starting": "啟動中…",
  "popup.tasks.statsToday": "今日：",
  "popup.tasks.statsLineTitle": "開啟設定檢視更多",
  "popup.task.pause": "暫停",
  "popup.task.resume": "繼續",
  "popup.task.remove": "刪除",
  "popup.task.open": "開啟",
  "popup.task.reveal": "目錄",
  "popup.task.paused": "已暫停",
  "popup.task.pending": "等待中",
  "popup.task.preparing": "準備中",
  "popup.task.errorGeneric": "下載出錯",
  "popup.task.opFailed": "操作失敗",

  // 空态快捷下载（popup）
  "popup.quickDownload.placeholder": "貼上下載連結",
  "popup.quickDownload.button": "下載",
  "popup.quickDownload.invalidUrl": "請輸入有效的下載連結",
  "popup.quickDownload.sent": "已傳送到 FluxDown",
  "popup.quickDownload.failed": "傳送失敗",

  // Options 迁移项补充说明
  "options.general.statsDesc": "重置彈出視窗中顯示的已下載/失敗計數",
  "options.rules.minFileSizeDesc": "小於該大小的檔案不會被攔截",
  "options.rules.domainDesc": "這些網網域（含子網網域）下的下載，以及從這些網網域頁面發起的下載不會被攔截",

  // 自定义协议（fluxdown://）
  "options.protocol.label": "FluxDown 自定義協議",
  "options.protocol.enabled": "已啟用，經 fluxdown:// 喚起應用",
  "options.protocol.disabled": "關閉（預設）",
  "options.protocol.desc": "經 fluxdown:// 協議喚起應用下載，Windows / macOS / Linux / Android 均支援。本機通道功能更全，建議僅在其不可用時開啟",

  // 任务完成通知（任务面板）
  "notify.taskCompletedTitle": "下載完成",
  "notify.taskCompletedDetail": "{name} 已下載完成",
  "notify.openFile": "開啟檔案",
  "notify.openFolder": "開啟資料夾",
} as const;

export type MessageKey = keyof typeof zhTW;
export default zhTW;
