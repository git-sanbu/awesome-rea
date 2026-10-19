# DiskLens：用已发布程序核对磁盘扫描与树图算法

[← 返回案例目录](../README.md) · 应用实践

- **作者 / 来源归属：** KarlssonChristoffer
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** WinDirStat 2.5.0 的 Windows 可执行文件与公开源码

## 想解决什么问题

怎样确认磁盘扫描、矩形树图和重复文件检测的实现，再做独立界面？

## REA 具体做了什么

Claude Code 使用 REA + Ghidra 检查已安装的 WinDirStat.exe，确认目录枚举、NTFS MFT 读取器、树图默认值与 SHA-512 去重。作者明确说明算法细节主要来自阅读 WinDirStat 源码，REA 用于核对发行版并定位调查方向。

## 公开成果

以下是来源作者报告的成果：

公开 Rust 引擎与 Tauri/Svelte 界面、REA evidence IDs；作者报告 24 个引擎测试，以及约 130 万文件的单机扫描与树图检查。

## 局限与未验证项

作者明确未审阅 AI 生成代码，多项文件操作和系统集成尚未在真实界面验证；缺少快速 MFT 扫描，硬链接会重复计数。部分算法直接移植 GPL 源码，不属于闭源软件的净室重建；单机耗时不是对照性能结论。

## 可以借鉴什么

有公开源码时，把二进制观察与源码阅读分别归因，同时列出文件操作的实际验证范围。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [项目 / 演示](https://github.com/KarlssonChristoffer/DiskLens)
- [补充来源 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
