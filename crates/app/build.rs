//! 为 GPUI 桌面客户端嵌入 Windows 程序资源，并调整 macOS dev 链接参数。

const WINDOWS_APP_ICON: &str = "../../assets/logo/windows/app_icon.ico";

fn main() -> std::io::Result<()> {
    println!("cargo:rerun-if-changed={WINDOWS_APP_ICON}");
    println!("cargo:rerun-if-env-changed=PROFILE");

    #[cfg(windows)]
    embed_windows_resources()?;

    macos_dev_link_args();

    Ok(())
}

/// 未优化的 `fluxdown-desktop` 的 `__eh_frame` 超过 16MB，超出 compact unwind 表
/// 能编码的 DWARF 偏移上限，ld 每次链接都会报 `__eh_frame section too large`。
/// dev 构建关闭 compact unwind，unwind 统一走 `__eh_frame`（行为不变，仅 panic
/// 回溯查表稍慢）；release（O3 + LTO）体积远低于上限，保持默认。
fn macos_dev_link_args() {
    let target_os = std::env::var("CARGO_CFG_TARGET_OS").unwrap_or_default();
    let profile = std::env::var("PROFILE").unwrap_or_default();
    if target_os == "macos" && profile == "debug" {
        println!("cargo:rustc-link-arg-bin=fluxdown-desktop=-Wl,-no_compact_unwind");
    }
}

/// 资源 ID 1 是 Windows Explorer 与 GPUI Windows 后端共同读取的默认图标。
///
/// 后续运行时图标切换应覆盖窗口、任务栏和快捷方式引用；这里的默认资源始终
/// 保留，供未选择动态图标、重置图标及进程未运行时回退使用。
#[cfg(windows)]
fn embed_windows_resources() -> std::io::Result<()> {
    let mut resources = winresource::WindowsResource::new();
    resources.set_icon(WINDOWS_APP_ICON);
    resources.set("CompanyName", "FluxDown");
    resources.set("ProductName", "FluxDown");
    resources.set("FileDescription", "FluxDown");
    resources.set("InternalName", "com.fluxdown.app");
    resources.set("OriginalFilename", "fluxdown-desktop.exe");
    resources.set(
        "LegalCopyright",
        "Copyright (C) 2026 FluxDown. All rights reserved.",
    );
    resources.compile()
}
