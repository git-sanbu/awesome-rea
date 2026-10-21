# Sketch（原 paper-rs）：研究 Paper 后构建 Rust 无限画布

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

- **作者 / 归属:** michaelshimeles
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Paper 桌面设计应用的行为

## 想解决什么问题

怎样理解画布、布局和编辑器交互，并实现独立设计工具？

## REA 具体做了什么

作者声明用 REA 与 Claude Code 研究 Paper 桌面应用行为，再用 wgpu、winit、egui 实现独立 Rust 应用。

## 原作者报告的成果

公开项目包含无限画布、页面、布局、矢量编辑、白板与 MCP 接口，并列出测试与功能差异。 2026-10-21 复核：项目已更名 Sketch，程序名为 sketch-rs，作者说明首次启动迁移旧项目目录，并兼容旧文件和环境变量；不另计新案例。

## 局限与未验证项

作者明确未在真实 macOS 硬件启动过；部分功能近似或缺失。收录依据是作者公开声明，不是完整 Paper 等价验证。

## 可以借鉴什么

学习目标软件的行为和交互契约，明确独立实现的功能边界。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> by studying the behavior of the Paper desktop app with REA and Claude Code

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [项目 / 演示](https://github.com/michaelshimeles/paper-rs)
- [补充来源 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
