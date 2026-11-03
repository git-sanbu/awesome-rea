# App X-Ray：把 REA 发现转换为可分享的应用报告

[← 返回全部案例](../../README.zh-CN.md) · 工具与集成

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

- **作者 / 归属:** Eliot5566
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 开源 Electron 应用源码，以及额外的 APK、原生二进制和模型文件分析路径

## 想解决什么问题

如何将静态 REA 证据转化为可读的组件报告和版本差异？

## REA 具体做了什么

集成调用固定的 REA 6.7.0 CLI 并解析 JSON Evidence。JavaScript 分批分析让文件保留在同一根目录，维持导入解析；Electron fuse 检查是另一个 REA 操作。

## 原作者报告的成果

项目公开了报告生成、规则、CI 差异和展示目录。注明日期的第 5 周报告称扫描了 20 个 Electron 应用，全部识别到版本，其中 18 项在该容器上少于 60 秒。REA-Bench 从 20 应用语料的报告生成了 54 个问题。

## 局限与未验证项

这些是注明日期的作者扫描报告，不是当前漏洞或运行时联网结论。规则可能遗漏辅助函数创建的窗口、动态频道和发送方验证；静态地址不能证明网络流量。REA-Bench 衡量与 App X-Ray 报告的一致程度，不是独立真值，也未直接证明使用工具的代理更优。本目录未复跑扫描。

## 可以借鉴什么

让报告结论链接到源码，保留扫描提交与日期，并将静态规则和自动生成的基准答案视为可能出错。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [项目 / 演示](https://github.com/Eliot5566/app-xray)
- [补充来源 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [补充来源 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [补充来源 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [补充来源 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
