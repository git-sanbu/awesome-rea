# Pixel Watch：分析配套 APK 后做 eSIM 导航助手

[← 返回全部案例](../../README.zh-CN.md) · 硬件与兼容

[English](../watch-esim-helper.md) · [简体中文](../zh-CN/watch-esim-helper.md) · [繁體中文](../zh-TW/watch-esim-helper.md) · [日本語](../ja/watch-esim-helper.md) · [한국어](../ko/watch-esim-helper.md) · [Español](../es/watch-esim-helper.md) · [Français](../fr/watch-esim-helper.md) · [Deutsch](../de/watch-esim-helper.md) · [Português (Brasil)](../pt-BR/watch-esim-helper.md) · [Русский](../ru/watch-esim-helper.md) · [العربية](../ar/watch-esim-helper.md) · [हिन्दी](../hi/watch-esim-helper.md)

- **作者 / 归属:** AllMySlop
- **核对日期:** 2026-10-19
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Google Pixel Watch 配套 Android APK 5.0.0.958206140

## 想解决什么问题

怎样找到配套应用已有的手表 eSIM 下载入口，并从独立助手交接？

## REA 具体做了什么

作者说明 Codex 借助 morluto/rea 找到原版配套 APK 中的配置入口与导航路径；助手只解析二维码或手动输入，在确认后把激活信息交给原版应用，不直接操作 eSIM。

## 原作者报告的成果

公开 Android 助手、companion-analysis.md 和测试记录；测试文档报告 25 个单元测试与模拟器交接。作者在 README 后续补充：Pixel Watch 2 LTE 安装成功，并在支持的运营商上验证 data-only eSIM 联网。

## 局限与未验证项

README 的后续联网报告比 TESTING.md 更新，后者仍记载早期网络受限；不能混为同一次验证。作者未审阅生成代码，Codex 未在真表测试；助手没有安装结果回调，区域、运营商、固件和配套应用版本兼容性均有限。

## 可以借鉴什么

区分启动原应用、配置交付、安装成功与蜂窝联网；来源更新不一致时明确各自阶段。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> using https://github.com/morluto/rea

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md)
- [项目 / 演示](https://github.com/AllMySlop/pixel-watch-esim-writer)
- [补充来源 1](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/docs/companion-analysis.md)
- [补充来源 2](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/TESTING.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
