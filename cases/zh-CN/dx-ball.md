# DX-Ball：恢复声音左右声道计算

[← 返回全部案例](../../README.zh-CN.md) · 官方案例

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

- **作者 / 归属:** REA 官方案例团队；原项目作者见来源
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** DX-Ball 1.07 的 Windows i386 可执行文件

## 想解决什么问题

画面中的位置怎样转换成音效声像？

## REA 具体做了什么

用 REA + Ghidra 查看目标函数、调用者、指令与常量；结合维护者的重建代码解释被反编译伪代码漏掉的 x87 表达式。

## 原作者报告的成果

来源记录：该函数通过 3,205 个原始 x86 差分用例，历史编译器重编译后的完整 63 字节匹配。

## 局限与未验证项

验证仅覆盖一个函数与指定 checkpoint；网页更新复用了已有执行和编译记录，不能据此说整个游戏被完整还原。

## 可以借鉴什么

伪代码不完整时，追到调用者、汇编和常量；把语义测试与字节匹配分别记录。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [项目 / 演示](https://rea.tools/showcase/dx-ball/)
- [补充来源 1](https://github.com/N0zoM1z0/dx-ball)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
