# Ski or Die：用 Rust 重建 Snowball War

[← 返回全部案例](../../README.zh-CN.md) · 游戏实践

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

- **作者 / 归属:** tuunanet
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** DOS 版 Ski or Die 的 Snowball War 小游戏

## 想解决什么问题

怎样从旧 DOS 程序恢复投掷、碰撞、刷怪与计分规则？

## REA 具体做了什么

REA CLI + Ghidra 16 位适配器检查解包后的 MZ 装载镜像，再通过调用者声明的代码种子和 trace/function/search 调查各模块。

## 原作者报告的成果

作者公开了 Rust + SDL2 可玩重建、行为规格、逆向笔记与资产提取工具。

## 局限与未验证项

只重建 Snowball War；无声音播放、无 DOS 原版并排运行对照；帧率与 PRNG 有近似。需读者自己的游戏副本生成素材。

## 可以借鉴什么

先将行为写成有地址证据的规格，再重写；逐项标记近似行为。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Every analysis call therefore ran through the REA CLI

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [项目 / 演示](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
