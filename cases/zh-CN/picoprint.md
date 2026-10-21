# PicoPrint：让手机热敏打印机接入 Windows 打印

[← 返回全部案例](../../README.zh-CN.md) · 硬件与兼容

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

- **作者 / 归属:** bigtower17
- **核对日期:** 2026-10-19
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** LX-D02 蓝牙热敏打印机与 Funny Print 的 React Native Android 应用

## 想解决什么问题

已有驱动能连接却不出纸时，怎样定位握手差异并接入 Windows 打印系统？

## REA 具体做了什么

作者在 REA discussion #4152 说明：REA 6.5.0 负责 doctor、ADB 设备检查与 Android 调查入口；真正的 Hermes 字节码反编译使用 hermes-dec，协议推导与流量对照不能归为 REA 单独完成。

## 原作者报告的成果

公开基于 thermoprint 的 Go 打印服务与协议说明；作者报告在 Windows 11 + LX-D02 真机上，通过系统 Ctrl+P 打印文本、图片和文档，并将握手修正反馈上游。

## 局限与未验证项

早期项目，尚无一键安装器、托盘状态与自动重连。原讨论明确 REA 当时未覆盖该目标的 Hermes 分析步骤；单一设备与系统的成功不证明全部固件或 Windows 版本兼容。

## 可以借鉴什么

先区分连接成功与打印成功；记录每个工具实际解决的环节，避免把整条链路归给一个工具。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> used to analyse the Android app.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [项目 / 演示](https://github.com/bigtower17/picoprint)
- [补充来源 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [补充来源 2](https://github.com/morluto/rea/discussions/4152)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
