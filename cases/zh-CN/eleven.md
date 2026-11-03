# Eleven：将代理驱动的桌面工作台连接到 REA

[← 返回全部案例](../../README.zh-CN.md) · 工具与集成

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

- **作者 / 归属:** Zfinix
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 通过 REA/Ghidra 分析原生二进制，以及 ACP 代理桌面工作台

## 想解决什么问题

如何让代理检查二进制，同时在共享工作台中展示导航与可编辑标注？

## REA 具体做了什么

引擎启动 REA MCP，调用 open_binary 与函数视图。独立代理转发分析工具，但屏蔽 REA 的标注写入工具，将这些修改引导至带可见历史的 Eleven 项目工具。

## 原作者报告的成果

公开产出包括桌面应用源码、MCP 工具文档、项目标注与补丁建议流程，以及要求真实代理在界面中打开 /bin/ls 函数的测试定义。README 和上游展示帖描述了可运行的工作台。

## 局限与未验证项

本目录检查的是源码和测试定义，没有执行测试凭据，也未安装发行版。桌面平台支持、调试器行为、缓存加速和分析完整性均未独立核验。Rizin、jadx 等是独立引擎，不将其结果归于 REA。上游展示帖的耗时是作者观察，不是本目录基准。

## 可以借鉴什么

将分析转发与项目编辑分开，显示作者和撤销历史，并区分可执行测试与实际测试结果。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [项目 / 演示](https://github.com/Zfinix/eleven)
- [补充来源 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [补充来源 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [补充来源 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [补充来源 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
