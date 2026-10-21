# bzip2：用带符号构建核对去符号二进制分析

[← 返回全部案例](../../README.zh-CN.md) · 分析与评测

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

- **作者 / 归属:** CassieFox23
- **核对日期:** 2026-10-19
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** gcc -O2 编译并去符号的 bzip2 1.0.8，Linux x86-64

## 想解决什么问题

没有函数名时，怎样从一条输出字符串找出函数，再核对调用关系？

## REA 具体做了什么

REA 6.4.0 + Ghidra 从字符串定位目标函数、列出调用者与被调用者，返回带 observed/derived 标记的 Evidence；作者另外使用同源未去符号构建、源码、nm 与 objdump 核对。

## 原作者报告的成果

作者报告定位到 uncompress，1 个调用者与 24 个被调用者和对照构建一致；公开构建步骤、裁剪后的 MCP 调用记录及两类错误返回。

## 局限与未验证项

仅覆盖一个程序、编译设置与目标函数，不是工具优劣对照；24 条边是 provider 解析出的直接调用，不能外推完整运行时图。完整客户端脚本未公开，压缩包只记录 hash，未验签；本仓库未复跑。

## 可以借鉴什么

用同源带符号构建建立 ground truth，把工具观察、推导与对照验证分开。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## 原始来源

- [公开原文 / 核对时可编辑的讨论原帖](https://github.com/morluto/rea/discussions/2254)
- [项目 / 演示](https://github.com/morluto/rea/discussions/2254)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
