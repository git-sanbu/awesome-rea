# ReaFuse：分析两个开源库的行为后组合新工具

[← 返回案例目录](../README.md) · 学习与复现

- **作者 / 来源归属：** sickpyramid
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** ms + pretty-bytes，以及 dequal + klona 两组 JavaScript 开源库

## 想解决什么问题

怎样把两个项目的行为整理成规格，再实现一个同时利用两者的新工具？

## REA 具体做了什么

使用 REA 6.4.0 的 JavaScript 静态分析读取两个输入项目，结合 README 与测试生成行为规格；模型另行提出组合方案、编写验收契约和新代码，再执行作者的测试与相似性扫描。

## 公开成果

以下是来源作者报告的成果：

公开 ratewise（传输速率与 ETA）和 objdelta（结构 diff/patch）源码、报告与 Evidence；作者分别报告 18/18 和 17/17 契约测试通过，并记录自己的 7/7、6/6 测试。两个示例合并为一个项目案例。

## 局限与未验证项

仅核对公开的两个 JS 示例，项目处于 v0.1 alpha；同一流程生成规格与实现，不应把作者的 clean-room 标签当成独立法律结论。相似性扫描与全绿测试不能证明普遍原创性或完整等价，未由本仓库复跑。

## 可以借鉴什么

用行为规格连接分析与实现，并把测试逐条对应到输入项目或新组合功能。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> Every donor goes through REA's static JavaScript analysis

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [项目 / 演示](https://github.com/sickpyramid/ReaFuse)
- [补充来源 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [补充来源 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
