# Pixel Watch：分析配套 APK 后做 eSIM 导航助手

[← 返回案例目录](../README.md) · 硬件与兼容

- **作者 / 来源归属：** AllMySlop
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** Google Pixel Watch 配套 Android APK 5.0.0.958206140

## 想解决什么问题

怎样找到配套应用已有的手表 eSIM 下载入口，并从独立助手交接？

## REA 具体做了什么

作者说明 Codex 借助 morluto/rea 找到原版配套 APK 中的配置入口与导航路径；助手只解析二维码或手动输入，在确认后把激活信息交给原版应用，不直接操作 eSIM。

## 公开成果

以下是来源作者报告的成果：

公开 Android 助手、companion-analysis.md 和测试记录；测试文档报告 25 个单元测试与模拟器交接。作者在 README 后续补充：Pixel Watch 2 LTE 安装成功，并在支持的运营商上验证 data-only eSIM 联网。

## 局限与未验证项

README 的后续联网报告比 TESTING.md 更新，后者仍记载早期网络受限；不能混为同一次验证。作者未审阅生成代码，Codex 未在真表测试；助手没有安装结果回调，区域、运营商、固件和配套应用版本兼容性均有限。

## 可以借鉴什么

区分启动原应用、配置交付、安装成功与蜂窝联网；来源更新不一致时明确各自阶段。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> using https://github.com/morluto/rea

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md)
- [项目 / 演示](https://github.com/AllMySlop/pixel-watch-esim-writer)
- [补充来源 1](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/docs/companion-analysis.md)
- [补充来源 2](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/TESTING.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
