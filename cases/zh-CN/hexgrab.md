# hexgrab：从 PowerToys 二进制研究取色器

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

- **作者 / 归属:** iammukeshm
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Microsoft PowerToys 随发行版提供的取色器二进制

## 想解决什么问题

全局快捷键、像素取色和剪贴板怎样配合？

## REA 具体做了什么

作者用 REA 分析已发布二进制，再利用公开源码逐条核对发现，使用 .NET 10 / WPF 独立实现精简取色器。

## 原作者报告的成果

公开源码与 docs/rea-findings.md；作者报告 9 条发现中 8 条完全正确。

## 局限与未验证项

仅在单显示器、125% 缩放下测试；混合 DPI 多显示器未做真实硬件验证。8/9 是作者对该次调查的核对，不是 REA 通用准确率。

## 可以借鉴什么

选择源码公开的软件做逆向练习，有条件检查工具到底对了多少。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [项目 / 演示](https://github.com/iammukeshm/hexgrab)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
