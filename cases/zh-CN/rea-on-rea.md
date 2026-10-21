# REA on REA：分析工具自身并检验预测

[← 返回全部案例](../../README.zh-CN.md) · 分析与评测

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

- **作者 / 归属:** az9713
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 已安装的 rea-agents 6.3.0 包

## 想解决什么问题

REA 如何选择原生分析 provider，又怎样判断 provider 不可用？

## REA 具体做了什么

REA 静态分析自身五个目录，代理先写可证伪预测，再运行 doctor，最后查看源码答案并自评。

## 原作者报告的成果

公开完整过程与测试回执；作者报告四个回答都只部分正确，八个 Ghidra 检查结果中预测错了三个。

## 局限与未验证项

单次自评，且 doctor 测试不等同于 open_binary 测试；存在安装包与源码 checkpoint 差异。

## 可以借鉴什么

把听起来合理的解释转化为能验证的预测，并公开失败。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [项目 / 演示](https://github.com/az9713/REA-demo)
- [补充来源 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
