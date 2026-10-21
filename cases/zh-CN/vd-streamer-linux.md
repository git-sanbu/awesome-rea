# Virtual Desktop Streamer：替换平台层实现 Linux 移植

[← 返回全部案例](../../README.zh-CN.md) · 硬件与兼容

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

- **作者 / 归属:** cudanexus
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Virtual Desktop 官方 macOS 和 Windows 安装包

## 想解决什么问题

如何保留协议库，把采集、编码、音频和输入换成 Linux 实现？

## REA 具体做了什么

作者声明使用 Claude Code + REA 分析两种安装包，复用读者自行提供的 macOS 协议库，重写 Linux 平台层。

## 原作者报告的成果

公开 Linux 移植源码、构建与模拟头显测试，使用 PipeWire/X11、GStreamer 和 uinput。

## 局限与未验证项

没有真实头显、Wi-Fi 和 GPU 编码器测试；不支持 Windows streamer 的 SteamVR/OpenXR 游戏功能。依赖厂商协议库，不能理解为完整独立协议重写。

## 可以借鉴什么

兼容移植可以聚焦平台边界；模拟设备测试和真实硬件验收需分别报告。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [项目 / 演示](https://github.com/cudanexus/vd-streamer-linux)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
