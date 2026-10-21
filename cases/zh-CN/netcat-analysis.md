# OpenBSD netcat：静态审计已发布 ELF

[← 返回全部案例](../../README.zh-CN.md) · 分析与评测

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

- **作者 / 归属:** NullLabTests
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Ubuntu netcat-openbsd 1.234-1 二进制

## 想解决什么问题

已发布 netcat 包含哪些网络、代理和安全相关实现？

## REA 具体做了什么

用 REA 的 pwntools 布局检查与 Ghidra 路径分析同一镜像，再用 readelf、objdump、nm、strings 交叉核对。

## 原作者报告的成果

公开函数/字符串/调用路径调查、results.txt 与 files/ 下的原始 JSON 结果。

## 局限与未验证项

这是特定构建的静态分析；不能从 imports 或伪代码直接断言所有运行场景，更不是完整安全认证。

## 可以借鉴什么

同时保存 REA 原始输出和独立工具核对结果，让结论可审查。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [项目 / 演示](https://github.com/NullLabTests/OpenBSD_netcat_REA)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
