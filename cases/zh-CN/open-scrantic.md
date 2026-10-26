# Open Scrantic：用 Rust 重建 Johnny Castaway 屏保引擎

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

- **作者 / 归属:** glauberlima
- **核对日期:** 2026-10-26
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 1992 年 Screen Antics: Johnny Castaway 的 Windows 3.1 SCRANTIC.SCR 及匹配资源文件

## 想解决什么问题

16 位屏保的脚本解释器、剧情调度与随机行为，怎样在现代系统运行？

## REA 具体做了什么

开发者明确说明使用 Claude Code 与 REA 反汇编、反编译 SCRANTIC.SCR，恢复资源格式和脚本语义，并生成 Rust 实现及文档。

## 原作者报告的成果

公开 Rust 引擎实现资源加载、TTM/ADS 脚本执行、剧情推进、计时及原随机数生成器；ENGINE.md 记录恢复出的规则和有意差异，作者提供 Windows、macOS、Linux 发布入口。

## 局限与未验证项

运行需要用户自备匹配的原始文件，加载器会拒绝其他可执行文件版本。整帧重绘、可选图像音频处理和设置与原作存在差异；本目录未独立测试跨平台行为或等价性，所读文件未见原始 REA 会话。

## 可以借鉴什么

把原始素材权属与引擎代码分开，保留算术及调度规则，并记录有意采用的兼容差异。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [项目 / 演示](https://github.com/glauberlima/open-scrantic)
- [补充来源 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [补充来源 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [补充来源 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
