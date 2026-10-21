# rea-playbook：把 Electron Evidence 变成可读报告与重建

[← 返回全部案例](../../README.zh-CN.md) · 学习与复现

[English](../rea-playbook.md) · [简体中文](../zh-CN/rea-playbook.md) · [繁體中文](../zh-TW/rea-playbook.md) · [日本語](../ja/rea-playbook.md) · [한국어](../ko/rea-playbook.md) · [Español](../es/rea-playbook.md) · [Français](../fr/rea-playbook.md) · [Deutsch](../de/rea-playbook.md) · [Português (Brasil)](../pt-BR/rea-playbook.md) · [Русский](../ru/rea-playbook.md) · [العربية](../ar/rea-playbook.md) · [हिन्दी](../hi/rea-playbook.md)

- **作者 / 归属:** jinshi666888
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 仓库自带的八文件最小 Electron 示例

## 想解决什么问题

拿到巨大 Evidence JSON 后，怎样提取可读事实并验证重建？

## REA 具体做了什么

固定 REA 6.3.0，提供 analyze → extract → verify 命令链，另有 MCP handshake 与真实工具调用 probe。

## 原作者报告的成果

公开脱敏 Evidence fixture、file:line 报告、recreate 与断言；作者报告 10/10 重建检查通过。

## 局限与未验证项

离线 demo 只读取已有 fixture，不能冒充新运行 REA；自建小目标也不能代表复杂商业应用。

## 可以借鉴什么

入门可以从可控小样本开始，把证据、可读规格和回归检查串起来。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> npm run analyze will fetch rea-agents@6.3.0 on first use via npx fallback.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md)
- [项目 / 演示](https://github.com/jinshi666888/rea-playbook)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
