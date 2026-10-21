# Desktop Games：把砸桌面小游戏移植到 macOS 和浏览器

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

- **作者 / 归属:** ucodia
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Gemtree 2000 年 Desktop Games / Stress Reducers 的 Windows 程序

## 想解决什么问题

怎样理解 Peter 解释器和程序树，并移植交互与资源？

## REA 具体做了什么

作者使用 Claude Code、REA 与 Ghidra；REA 用于解释器中图像压缩、资源布局、计时、精灵运动、声音与坐标规则的调查；配套 Python 工具处理程序树和资源。

## 原作者报告的成果

公开仓库包含 Swift macOS 版、浏览器版、反编译程序树及资源处理脚本。

## 局限与未验证项

作者注明使用真彩色而非原调色板，并调整了阴影实现；案例收录不表示本仓库验证了完整兼容性或第三方素材的再分发权。

## 可以借鉴什么

遇到嵌入解释器的程序，要区分解释器、程序树和资源三个层次。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> The interpreter was decompiled with REA

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [项目 / 演示](https://github.com/ucodia/desktop-games-nostalgia)
- [补充来源 1](https://ucodia.github.io/desktop-games-nostalgia/)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
