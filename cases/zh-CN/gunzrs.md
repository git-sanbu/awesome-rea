# GunZRs：先确认加壳边界，再从游戏数据重建

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

- **作者 / 归属:** OpenRsG
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** GunZ: The Duel 的 Steam 安装、Gunz.exe 与 .mrs 数据归档

## 想解决什么问题

原生主程序被加壳、游戏逻辑不能静态读取时，怎样界定调查范围并继续重建？

## REA 具体做了什么

通过 REA 与 Ghidra 调查原生文件；作者记录 Gunz.exe 的 Themida 节、入口 RVA 和解包桩，并标注本地 REA Evidence 路径。游戏格式随后主要由数据文件的结构分析恢复；另公开 REA 查询包装器和生成 ELF/PE fixture 的分析、缓存及失败传播检查。

## 原作者报告的成果

公开 Rust + Bevy 重建、数据格式笔记、查询脚本与测试说明；作者报告 Linux 上可玩，支持读取自有安装、地图、动作、机器人、浏览器版本和 LAN。框架记录生成 ELF/PE 的函数分析及 snapshot replay 通过；这些 fixture 检查与游戏兼容性分别记录。

## 局限与未验证项

不能将游戏全部功能归于 REA：主程序被 Themida 加壳，游戏代码未被静态恢复，部分行为和时序是推断。原始 Evidence 留在作者本地，公开的是说明和脚本；Windows/macOS 有 CI 构建测试，但作者未在其上游玩。地图统计随笔记范围不同，未将其作为完整兼容证明；未独立复跑。

## 可以借鉴什么

分析失败也能给出有用边界：明确哪些事实来自二进制、数据文件或推断。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [项目 / 演示](https://github.com/OpenRsG/GunZRs)
- [补充来源 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [补充来源 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [补充来源 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
