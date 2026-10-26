# REA Safe Agent：在两个受限进程之间转发静态分析

[← 返回全部案例](../../README.zh-CN.md) · 工具与集成

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

- **作者 / 归属:** dagoSte
- **核对日期:** 2026-10-26
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** REA 6.7.0、Ghidra 12.1.4 与 JADX 集成；无害 ELF 测试样本及 F-Droid APK

## 想解决什么问题

怎样让代理查询 REA，同时约束输入、主机工具和模型请求的访问范围？

## REA 具体做了什么

实现将 REA 与接收结果的代理放在两个独立 Docker 容器，由主机控制器转发允许的 MCP 调用；冻结输入副本、工具路径检查和结果大小限制约束跨界数据，实际静态分析由 REA 提供。

## 原作者报告的成果

带日期的 macOS ARM64 回执报告：Claude 对同一无害 ELF 成功调用 REA 11 次，Codex 成功调用 9 次，并与已知源码核对哈希、FNV-1a 常量及解码字符串；验证记录另报告对 F-Droid 2.0.2 的实时分析成功调用 REA 39 次。

## 局限与未验证项

这是作者公开的回执，不是独立安全认证。静态分析不执行目标。隔离依赖 Docker 与主机控制器；分析文本会送到模型服务，Windows Docker 集成仍为实验性。整镜像仍有漏洞扫描发现，不能与单独的干净 npm 审计混为一谈。

## 可以借鉴什么

区分模拟策略测试、真实工具调用和实时模型运行，将每项结论绑定到带日期的目标、主机和回执。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> "rea_version": "6.7.0",

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [项目 / 演示](https://github.com/dagoSte/rea-safe-agents)
- [补充来源 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [补充来源 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [补充来源 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [补充来源 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
