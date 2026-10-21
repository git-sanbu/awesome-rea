# VSL-DSP：把厂商库分析用于声卡 DSP 工具

[← 返回全部案例](../../README.zh-CN.md) · 硬件与兼容

[English](../vsl-dsp.md) · [简体中文](../zh-CN/vsl-dsp.md) · [繁體中文](../zh-TW/vsl-dsp.md) · [日本語](../ja/vsl-dsp.md) · [한국어](../ko/vsl-dsp.md) · [Español](../es/vsl-dsp.md) · [Français](../fr/vsl-dsp.md) · [Deutsch](../de/vsl-dsp.md) · [Português (Brasil)](../pt-BR/vsl-dsp.md) · [Русский](../ru/vsl-dsp.md) · [العربية](../ar/vsl-dsp.md) · [हिन्दी](../hi/vsl-dsp.md)

- **作者 / 归属:** grisuno
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** PreSonus Universal Control 的 libucnet.so 与 libfatchannelplugins.so

## 想解决什么问题

厂商控制程序如何发现设备、注册参数和表示增益？

## REA 具体做了什么

通过 LazyOwn 的 rea 扩展驱动 REA + Ghidra 分析厂商库，保留 Evidence envelope 并形成协议与参数规格。

## 原作者报告的成果

作者将调查结果用于 dB 命令、参数命名和线性/dB 转换，并提供 CMocka 测试。

## 局限与未验证项

REA 的作用限定为部分厂商库发现与后续改进，不应把整个驱动归功于 REA；mute wire code 没有恢复。

## 可以借鉴什么

协议调查适合补齐现有项目中的具体缺口，未知控制码要保持未知。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> lazyaddon, which drives REA (Reverse Engineer Anything) with Ghidra 12.1.4

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md)
- [项目 / 演示](https://github.com/grisuno/VSL-DSP)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
