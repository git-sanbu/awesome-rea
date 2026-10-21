# rec-rs：研究 OBS 后做原生 macOS 录屏工具

[← 返回案例目录](../README.md) · 应用实践

- **作者 / 来源归属：** michaelshimeles
- **核对日期：** 2026-10-21
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** OBS Studio 的架构和行为

## 想解决什么问题

怎样做更聚焦的屏幕、摄像头与音频录制工具？

## REA 具体做了什么

作者声明使用 REA 与 Claude Code 研究 OBS，再以 Rust 和 Apple 原生框架实现独立工具。

## 公开成果

以下是来源作者报告的成果：

项目公开屏幕/摄像头录制、音频混合、回放缓冲与直播功能；作者报告在 Apple Silicon Mac 上开发和测试。 2026-10-21 的 README 增加 Apple Silicon + Intel universal 发布、签名/公证及 Sparkle 更新说明。

## 局限与未验证项

要求 macOS 15+；作者实测环境仍是 Apple Silicon M4 Pro，新增 Intel 下载与构建说明不能当成 Intel 实机录制验收。属于特定场景实现，不能理解为完整 OBS 替代或跨平台重建；本仓库未复跑。

## 可以借鉴什么

从成熟应用提取所需架构，为一个具体使用场景实现较小的产品。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> by studying its architecture and behavior with REA and Claude Code

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [项目 / 演示](https://github.com/michaelshimeles/rec-rs)
- [补充来源 1](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
