# 西班牙语 REA 实验：重建作者自有的密钥校验器

[← 返回全部案例](../../README.zh-CN.md) · 学习与复现

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

- **作者 / 归属:** harkiventures
- **核对日期:** 2026-10-26
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 作者自编教学程序 licencia-cli.stripped 及带符号参考版本

## 想解决什么问题

如何从小型无符号程序恢复接受规则，并与原始程序核对？

## REA 具体做了什么

作者报告使用 REA 与 Ghidra 返回的伪代码，以及从 0x102040 读取的字节，恢复字符转换、加权累积、循环移位和接受条件，再编写独立 Python 校验器。

## 原作者报告的成果

免费西班牙语样例包含实验环境搭建、完整案例、无符号与带符号练习二进制、参考 C 源码及重建的 Python 校验器；校验器列出 4 个预期样例，作者报告已与真实二进制比较。

## 局限与未验证项

练习对象是作者自有的小型无保护程序，不是商业授权绕过，也不代表对受保护软件普遍有效。4 个样例只是有限检查，不是穷尽等价验证；本目录未执行二进制或复跑比较，计划中的完整课程尚未交付。

## 可以借鉴什么

用自有样本和暂时隐藏的参考源码恢复一个有边界的规则，先测试接受与拒绝输入，再对照源码。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [项目 / 演示](https://github.com/harkiventures/rea-muestra-gratuita)
- [补充来源 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [补充来源 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [补充来源 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
