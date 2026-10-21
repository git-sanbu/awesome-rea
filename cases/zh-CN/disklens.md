# DiskLens：用已发布程序核对磁盘扫描与树图算法

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

- **作者 / 归属:** KarlssonChristoffer
- **核对日期:** 2026-10-19
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** WinDirStat 2.5.0 的 Windows 可执行文件与公开源码

## 想解决什么问题

怎样确认磁盘扫描、矩形树图和重复文件检测的实现，再做独立界面？

## REA 具体做了什么

Claude Code 使用 REA + Ghidra 检查已安装的 WinDirStat.exe，确认目录枚举、NTFS MFT 读取器、树图默认值与 SHA-512 去重。作者明确说明算法细节主要来自阅读 WinDirStat 源码，REA 用于核对发行版并定位调查方向。

## 原作者报告的成果

公开 Rust 引擎与 Tauri/Svelte 界面、REA evidence IDs；作者报告 24 个引擎测试，以及约 130 万文件的单机扫描与树图检查。

## 局限与未验证项

作者明确未审阅 AI 生成代码，多项文件操作和系统集成尚未在真实界面验证；缺少快速 MFT 扫描，硬链接会重复计数。部分算法直接移植 GPL 源码，不属于闭源软件的净室重建；单机耗时不是对照性能结论。

## 可以借鉴什么

有公开源码时，把二进制观察与源码阅读分别归因，同时列出文件操作的实际验证范围。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [项目 / 演示](https://github.com/KarlssonChristoffer/DiskLens)
- [补充来源 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
