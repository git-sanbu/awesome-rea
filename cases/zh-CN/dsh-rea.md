# dsh-rea：保持 MCP 契约并按需展示工具

[← 返回全部案例](../../README.zh-CN.md) · 工具与集成

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

- **作者 / 归属:** JeremyWangCY
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** DeepSeek Harness 中的 REA 6.8.0 MCP 工具、提示词及 skill

## 想解决什么问题

如何在保留上游工具契约的同时，让未使用的 schema 不占每次代理请求？

## REA 具体做了什么

适配器通过 DSH 桥启动固定版本的上游 MCP 程序，提示词与补全共享连接，并使用逐代理工具遮罩。/rea 显示目录与 skill，/rea off 再次隐藏。

## 原作者报告的成果

作者公开适配代码、schema 测量及限定范围的差分报告，记录 229 个工具，以及 native、PTC 模式下确定性调用的比较。模型输入目录测量为 273,264 字节；这是 schema 载荷，不是 LLM token 或费用基准。

## 局限与未验证项

仓库包含一份通过的比较报告，以及验证命令出现 Windows integrity_mismatch 错误的单独说明。本目录无法确认该命令目前能在 Windows 通过。工具定义匹配不代表执行过全部工具。原生引擎、实时捕获、全部 provider 和模型回答等价均不在该比较范围内。目录维护者未运行这些测试。

## 可以借鉴什么

比较 schema 与完整确定性结果，保留历史通过记录，并单独披露当前失败。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA is an exact npm dependency, not a reimplementation.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [项目 / 演示](https://github.com/JeremyWangCY/dsh-rea)
- [补充来源 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [补充来源 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [补充来源 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [补充来源 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [补充来源 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
