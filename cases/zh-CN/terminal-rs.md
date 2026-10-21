# terminal-rs：研究 TradingView 交互后做行情终端

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

- **作者 / 归属:** michaelshimeles
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** TradingView 公开、未登录图表页面的行为

## 想解决什么问题

如何把图表交互调查转化为独立 Rust 行情界面？

## REA 具体做了什么

作者使用 REA website mode 做公开页面的被动捕获，在 docs/analysis 记录发现、Evidence IDs 与设计含义。

## 原作者报告的成果

项目公开 Rust GPU 图表、键盘命令、面板布局与数据接入；界面采用 Bloomberg 风格。 2026-10-21 复核：作者新增 151 个内置指标及参数、边界输入测试说明，并提供 macOS universal 发布脚本；这些是后续实现进展，不代表新做了 REA 分析。

## 局限与未验证项

仅研究网页可见行为，不是 TradingView/Bloomberg 源码恢复；数据源、限流和数据使用条款另有约束。

## 可以借鉴什么

公开网页行为观察也可以形成可追溯的设计输入，无需把它称为二进制反编译。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> tradingview.com with REA in website mode

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [项目 / 演示](https://github.com/michaelshimeles/terminal-rs)
- [补充来源 1](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
