# Wispr Flow：拆解语音输入链路并做本地小原型

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../wispr-flow.md) · [简体中文](../zh-CN/wispr-flow.md) · [繁體中文](../zh-TW/wispr-flow.md) · [日本語](../ja/wispr-flow.md) · [한국어](../ko/wispr-flow.md) · [Español](../es/wispr-flow.md) · [Français](../fr/wispr-flow.md) · [Deutsch](../de/wispr-flow.md) · [Português (Brasil)](../pt-BR/wispr-flow.md) · [Русский](../ru/wispr-flow.md) · [العربية](../ar/wispr-flow.md) · [हिन्दी](../hi/wispr-flow.md)

- **作者 / 归属:** az9713
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Wispr Flow 1.6.1102 的 Electron 包与原生 helper

## 想解决什么问题

录音、转写、上下文和粘贴是如何串起来的？

## REA 具体做了什么

结合 REA CLI 的 JavaScript 静态分析、直接阅读 bundles，以及 REA + Ghidra 对 helper 粘贴代码的调查；报告标记 proven / inferred / hidden。

## 原作者报告的成果

公开拆解报告、Ghidra 补充调查、开发过程与本地 flowlite.py 原型。

## 局限与未验证项

最初两个 MCP 调用超时；部分结论来自其他工具和人工读代码；未运行原应用或捕获网络，服务端模型与行为仍不可见。原型跳过上下文、流式处理和完整验证。

## 可以借鉴什么

完整记录失败和补充工具；客户端分析无法替代对服务端能力的了解。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Wispr Flow, reverse engineered with REA

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [项目 / 演示](https://github.com/az9713/wispr-flow-rea-teardown)
- [补充来源 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
