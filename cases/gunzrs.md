# GunZRs：先确认加壳边界，再从游戏数据重建

[← 返回案例目录](../README.md) · 游戏实践

- **作者 / 来源归属：** OpenRsG
- **核对日期：** 2026-10-21
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** GunZ: The Duel 的 Steam 安装、Gunz.exe 与 .mrs 数据归档

## 想解决什么问题

原生主程序被加壳、游戏逻辑不能静态读取时，怎样界定调查范围并继续重建？

## REA 具体做了什么

通过 REA 与 Ghidra 调查原生文件；作者记录 Gunz.exe 的 Themida 节、入口 RVA 和解包桩，并标注本地 REA Evidence 路径。游戏格式随后主要由数据文件的结构分析恢复；另公开 REA 查询包装器和生成 ELF/PE fixture 的分析、缓存及失败传播检查。

## 公开成果

以下是来源作者报告的成果：

公开 Rust + Bevy 重建、数据格式笔记、查询脚本与测试说明；作者报告 Linux 上可玩，支持读取自有安装、地图、动作、机器人、浏览器版本和 LAN。框架记录生成 ELF/PE 的函数分析及 snapshot replay 通过；这些 fixture 检查与游戏兼容性分别记录。

## 局限与未验证项

不能将游戏全部功能归于 REA：主程序被 Themida 加壳，游戏代码未被静态恢复，部分行为和时序是推断。原始 Evidence 留在作者本地，公开的是说明和脚本；Windows/macOS 有 CI 构建测试，但作者未在其上游玩。地图统计随笔记范围不同，未将其作为完整兼容证明；未独立复跑。

## 可以借鉴什么

分析失败也能给出有用边界：明确哪些事实来自二进制、数据文件或推断。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [项目 / 演示](https://github.com/OpenRsG/GunZRs)
- [补充来源 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [补充来源 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [补充来源 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
