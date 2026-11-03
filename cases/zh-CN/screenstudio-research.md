# Screen Studio：区分静态检查、录制与导出证据

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

- **作者 / 归属:** Royo-Qiao
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Screen Studio 3.7.3-4540，包含本地重新打包的 Apple Silicon 副本

## 想解决什么问题

如何区分 Electron 与原生辅助程序的静态发现，以及录制、导出和兼容性的实际证据？

## REA 具体做了什么

REA 的 fuse 与 Mach-O 检查提供了带 Evidence ID 和哈希的选编静态记录。限定范围的 JavaScript 应用分析两次超时，作者未声称得到完整图谱或原生函数反编译结果。

## 原作者报告的成果

作者公开了应用检查、项目事件汇总与导出验证工具。历史原生录制据报导出了 3,337 帧、1104 × 720、60 fps 的视频并完整解码；后续只读工具复查检查了已保存的视频及人工输入事件汇总。

## 局限与未验证项

私人录制及完整证据账本未公开，无法重放。Mach-O 哈希对应本地重打包副本。联网授权失败，裁剪尝试未生效，最终签名后未完整重测录制；仅测试一种 Apple Silicon/macOS 环境。解码通过不能证明录制来源或画面等价，本目录未复跑实验。

## 可以借鉴什么

分别记录静态元数据、界面观察、文件解码与人工反馈，并同时公开失败项。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [项目 / 演示](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [补充来源 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [补充来源 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [补充来源 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [补充来源 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
