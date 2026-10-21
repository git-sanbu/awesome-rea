# 本地 27B 模型：压缩 MCP 工具列表后完成函数调查

[← 返回全部案例](../../README.zh-CN.md) · 分析与评测

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

- **作者 / 归属:** CassieFox23
- **核对日期:** 2026-10-19
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 自建 C token 检查程序；Qwen3.8-27B、llama.cpp、OpenCode 与 REA MCP

## 想解决什么问题

本地模型只有 32K 上下文时，怎样让 REA 的工具描述与实际调查一起装得下？

## REA 具体做了什么

作者使用 PR #3026 的 d993ffeb1 版本和 Ghidra 12.1.4，通过工具族与 OpenCode 客户端 allowlist 仅暴露 10 个 REA 工具；模型打开目标、查找函数、反编译并关闭会话。

## 原作者报告的成果

作者报告完整 206 工具提示超出上下文；62 工具配置在读提示后遭遇 GPU reset；10 工具配置提示为 4,407 tokens，三次均找到目标字符串并解释检查逻辑，每次约 80 秒。

## 局限与未验证项

三次使用同一个极小程序与提示，不是三个独立任务；未比较其他模型或客户端。实验运行在当时的 PR 提交，不能把历史工具数量、开关或时间当成当前发行版保证。

## 可以借鉴什么

先测工具 schema 的上下文占用，再做最小工具集合实验；同一任务重复成功不能代表普遍能力。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> With the full tool list, nothing fits.

## 原始来源

- [公开原文 / 核对时可编辑的讨论原帖](https://github.com/morluto/rea/discussions/3098)
- [项目 / 演示](https://github.com/morluto/rea/discussions/3098)
- [补充来源 1](https://github.com/morluto/rea/pull/3026)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
