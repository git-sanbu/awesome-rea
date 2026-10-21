# Co-op Anything：用 REA 调查单机战役的联机接入点

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

- **作者 / 归属:** cranebeaker 与社区贡献者
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** C&C3 Tiberium Wars / Kane’s Wrath 的 Steam 构建，以及 World in Conflict 的客户端与专用服务器

## 想解决什么问题

单机战役怎样保留任务脚本和阵营，再允许第二位玩家加入？

## REA 具体做了什么

公开 C&C3 笔记明确记录 REA/Ghidra 12.1.4 对 TW 1.10 可执行文件的观察，定位准备多人/遭遇战时移除战役阵营的函数。World in Conflict 笔记记录 Ghidra 经 REA 分析专用服务器的角色选择函数，区分单人角色限制、服务器状态与待验证推断。其他脚本、调试器和运行测试单独承担后续工作。

## 原作者报告的成果

公开 MCP/技能、同步测试工具和具体游戏调查笔记。C&C3 笔记给出函数地址、数据格式及实验记录；World in Conflict 作者报告局域网战役主机可运行任务，第二客户端能加入并看到实时同步的单位，但仍不能控制自己的单位。整个项目有多个游戏条目，各自保留 QA 级别。

## 局限与未验证项

仅把已阅读的 C&C3 与 World in Conflict 调查归于 REA，不把目录内所有模组都说成 REA 成果。World in Conflict 的第二玩家控制、部署区、视野和互联网联机仍未完成，相关记录仅验证 LAN；C&C3 也有战役失败与上下文未解决问题。星标反映关注度，不证明战役可通关；本仓库未运行游戏或复跑测试。

## 可以借鉴什么

从引擎的具体状态分支建立实验，把“第二客户端连上”“看到同步”和“真正能协作通关”分别验收。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [项目 / 演示](https://github.com/cranebeaker/coop-anything)
- [补充来源 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [补充来源 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
