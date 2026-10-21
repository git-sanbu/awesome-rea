# AdamTerm：研究 Ghostty 外壳后做自己的终端

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

- **作者 / 归属:** AdamLinCodes
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Ghostty 1.3.1 macOS app bundle

## 想解决什么问题

终端核心、原生窗口、菜单和服务之间怎么分工？

## REA 具体做了什么

使用 REA 检查 Mach-O、plist、签名、Objective-C 元数据、Interface Builder 与动态库解析；该路径未使用 Hopper/Ghidra。

## 原作者报告的成果

作者以 AppKit + SwiftTerm 做了带原生标签页的精简 macOS 终端，并提供自检命令。

## 局限与未验证项

使用 SwiftTerm 而非重建 Ghostty 的 Zig 核心；分屏、搜索栏、配置文件、快捷终端等未实现。

## 可以借鉴什么

包元数据和界面资源就能回答一部分架构问题，不必一开始深度反编译。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [项目 / 演示](https://github.com/AdamLinCodes/AdamTerm)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
