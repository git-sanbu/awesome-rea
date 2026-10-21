# OpenBattlefield2：用函数级 Evidence 重建战地 2 客户端

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

- **作者 / 归属:** Moxnatiy
- **核对日期:** 2026-10-21
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Battlefield 2 1.5 的 Refractor 2 客户端、渲染 DLL 与原版数据

## 想解决什么问题

怎样把准星、HUD 与客户端行为的二进制调查，转成可追溯的引擎实现？

## REA 具体做了什么

使用 REA 4.1.0 + Ghidra 12.1.4 读取 32 位 PE，先获取函数完整 Evidence dossier，再用直接 Ghidra 查询、游戏数据及服务器符号补充。准星笔记记录 GuiIndex、位置和偏移累加函数的地址及 REA Evidence IDs；REA 只承担其中的分析环节。

## 原作者报告的成果

公开 C++20 引擎、函数笔记、测试与截图；作者报告可读取自有 BF2 1.5 安装、连接原版专用服务器并显示士兵和 HUD。准星已在连接模式绘出并随移动扩散、停止后收拢，附 test_weapon_hud 等检查。

## 局限与未验证项

研究项目尚缺开火、车辆驾驶、声音等功能；准星的切枪、缩放和开火更新仍有待完成，hosted 模式没有准星。主要平台为 macOS arm64，Windows 构建未实际运行验证。多工具协作的整体成果不能全部归于 REA；本仓库未复跑。

## 可以借鉴什么

从一个具体可观察功能出发，把地址、Evidence、实现与验收命令放在同一条证据链上。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [项目 / 演示](https://github.com/Moxnatiy/OpenBattlefield2)
- [补充来源 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [补充来源 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [补充来源 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
