# PicoPrint：让手机热敏打印机接入 Windows 打印

[← 返回案例目录](../README.md) · 硬件与兼容

- **作者 / 来源归属：** bigtower17
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** LX-D02 蓝牙热敏打印机与 Funny Print 的 React Native Android 应用

## 想解决什么问题

已有驱动能连接却不出纸时，怎样定位握手差异并接入 Windows 打印系统？

## REA 具体做了什么

作者在 REA discussion #4152 说明：REA 6.5.0 负责 doctor、ADB 设备检查与 Android 调查入口；真正的 Hermes 字节码反编译使用 hermes-dec，协议推导与流量对照不能归为 REA 单独完成。

## 公开成果

以下是来源作者报告的成果：

公开基于 thermoprint 的 Go 打印服务与协议说明；作者报告在 Windows 11 + LX-D02 真机上，通过系统 Ctrl+P 打印文本、图片和文档，并将握手修正反馈上游。

## 局限与未验证项

早期项目，尚无一键安装器、托盘状态与自动重连。原讨论明确 REA 当时未覆盖该目标的 Hermes 分析步骤；单一设备与系统的成功不证明全部固件或 Windows 版本兼容。

## 可以借鉴什么

先区分连接成功与打印成功；记录每个工具实际解决的环节，避免把整条链路归给一个工具。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> used to analyse the Android app.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [项目 / 演示](https://github.com/bigtower17/picoprint)
- [补充来源 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [补充来源 2](https://github.com/morluto/rea/discussions/4152)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
