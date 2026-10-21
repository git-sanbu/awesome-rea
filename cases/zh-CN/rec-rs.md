# rec-rs：研究 OBS 后做原生 macOS 录屏工具

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../rec-rs.md) · [简体中文](../zh-CN/rec-rs.md) · [繁體中文](../zh-TW/rec-rs.md) · [日本語](../ja/rec-rs.md) · [한국어](../ko/rec-rs.md) · [Español](../es/rec-rs.md) · [Français](../fr/rec-rs.md) · [Deutsch](../de/rec-rs.md) · [Português (Brasil)](../pt-BR/rec-rs.md) · [Русский](../ru/rec-rs.md) · [العربية](../ar/rec-rs.md) · [हिन्दी](../hi/rec-rs.md)

- **作者 / 归属:** michaelshimeles
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** OBS Studio 的架构和行为

## 想解决什么问题

怎样做更聚焦的屏幕、摄像头与音频录制工具？

## REA 具体做了什么

作者声明使用 REA 与 Claude Code 研究 OBS，再以 Rust 和 Apple 原生框架实现独立工具。

## 原作者报告的成果

项目公开屏幕/摄像头录制、音频混合、回放缓冲与直播功能；作者报告在 Apple Silicon Mac 上开发和测试。 2026-10-21 的 README 增加 Apple Silicon + Intel universal 发布、签名/公证及 Sparkle 更新说明。

## 局限与未验证项

要求 macOS 15+；作者实测环境仍是 Apple Silicon M4 Pro，新增 Intel 下载与构建说明不能当成 Intel 实机录制验收。属于特定场景实现，不能理解为完整 OBS 替代或跨平台重建；本仓库未复跑。

## 可以借鉴什么

从成熟应用提取所需架构，为一个具体使用场景实现较小的产品。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> by studying its architecture and behavior with REA and Claude Code

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [项目 / 演示](https://github.com/michaelshimeles/rec-rs)
- [补充来源 1](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
