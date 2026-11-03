# REA Studio：在本地网页展示 MCP 工具与已录制 Evidence

[← 返回全部案例](../../README.zh-CN.md) · 工具与集成

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

- **作者 / 归属:** theyishaik-lab
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** REA MCP 工具发现、按 schema 生成的表单，以及小型 C、JavaScript、Python 样例

## 想解决什么问题

如何在本地界面呈现已安装的 REA 工具，并让证据及局限易于阅读？

## REA 具体做了什么

后端通过 stdio MCP 启动 REA，分页读取 tools/list，并转发带进度与取消信号的 tools/call。录制脚本对微型样例调用 REA，再保存结果供独立的静态演示构建使用。

## 原作者报告的成果

公开源码包含本地网页界面、按 schema 生成的输入、历史记录与 Evidence 视图。仓库演示文件标注 REA 6.8.0，提供 229 个工具的目录及 9 条样例调用记录（8 条完成、1 条错误）；未录制操作明确返回错误。

## 局限与未验证项

线上演示回放保存的响应并模拟进度；上传文件留在浏览器中，不会被分析。录制结果由作者发布，未独立复跑。本地模式可对主机文件调用工具，依赖已配置的 provider；本目录未安装测试后端，也未作安全审计。

## 可以借鉴什么

从实时工具 schema 生成表单，在结果中保留局限，并明确区分录制演示与实时分析。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [项目 / 演示](https://github.com/theyishaik-lab/rea-studio)
- [补充来源 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [补充来源 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [补充来源 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [补充来源 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
