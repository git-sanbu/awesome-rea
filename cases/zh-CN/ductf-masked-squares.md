# DownUnderCTF：从二进制恢复 flag 检查方程

[← 返回全部案例](../../README.zh-CN.md) · 官方案例

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

- **作者 / 归属:** REA 官方案例团队；原项目作者见来源
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** DownUnderCTF 2023 的 masked squares flag checker，stripped Linux ELF

## 想解决什么问题

没有符号和源码，如何找出输入校验逻辑？

## REA 具体做了什么

用 REA 搜索提示字符串和交叉引用，分析校验函数、读取掩码与目标表；将 26 条约束交给 Z3 求解，并用进程捕获检查原题程序。

## 原作者报告的成果

官方记录了正确候选输出 Correct! / exit 0、错误候选输出 Incorrect! / exit 255；求解后再对照主办方源码与 metadata。

## 局限与未验证项

求解使用了常见 flag 格式和字符集假设；第二模型搜索超时，未证明唯一解。

## 可以借鉴什么

静态推理得到答案后，给原程序输入正确和错误样本，补上运行验证。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [项目 / 演示](https://rea.tools/showcase/ctf/)
- [补充来源 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
