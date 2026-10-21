# Sketch（原 paper-rs）：研究 Paper 后构建 Rust 无限画布

[← 返回案例目录](../README.md) · 应用实践

- **作者 / 来源归属：** michaelshimeles
- **核对日期：** 2026-10-21
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** Paper 桌面设计应用的行为

## 想解决什么问题

怎样理解画布、布局和编辑器交互，并实现独立设计工具？

## REA 具体做了什么

作者声明用 REA 与 Claude Code 研究 Paper 桌面应用行为，再用 wgpu、winit、egui 实现独立 Rust 应用。

## 公开成果

以下是来源作者报告的成果：

公开项目包含无限画布、页面、布局、矢量编辑、白板与 MCP 接口，并列出测试与功能差异。 2026-10-21 复核：项目已更名 Sketch，程序名为 sketch-rs，作者说明首次启动迁移旧项目目录，并兼容旧文件和环境变量；不另计新案例。

## 局限与未验证项

作者明确未在真实 macOS 硬件启动过；部分功能近似或缺失。收录依据是作者公开声明，不是完整 Paper 等价验证。

## 可以借鉴什么

学习目标软件的行为和交互契约，明确独立实现的功能边界。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> by studying the behavior of the Paper desktop app with REA and Claude Code

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [项目 / 演示](https://github.com/michaelshimeles/paper-rs)
- [补充来源 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
