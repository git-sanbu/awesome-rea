# DESIGN:OS Studio：独立读写 Figma .fig 并重实现编辑器的桌面工作室

[← 返回全部案例](../../README.zh-CN.md) · 应用实践

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

- **作者 / 归属:** jangtrinh
- **核对日期:** 2026-11-10
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Figma Desktop 与 Figma 的 .fig 容器格式（fig-kiwi，写出 version 106）

## 想解决什么问题

怎样在独立的桌面工作室中读写 Figma 的 .fig 容器，并重实现编辑器行为？

## REA 具体做了什么

项目公开规格写明用 morluto/rea 6.7.0（`npx -y rea-agents`）逆向 Figma 字段，并记录它对提取出的编辑器 JavaScript 运行了 analyze-javascript-application。同一说明称 wasm 路径当时不可用（未安装 WABT 与 Ghidra），因此用本地读取器解码 kiwi schema。仓库中还存有 rea CLI 输出，包括已完成的 inspect-macho 与 analyze-javascript-application，以及部分失败调用。产品 README 没有提及 REA。

## 原作者报告的成果

DESIGN:OS Studio 是已发布的桌面工作室（审阅版本 v0.7.11），可读取 Figma 的 .fig 容器并写出容器版本 106，在本地重实现编辑器行为，并附带 39 个工具的 stdio MCP 服务器及多语言代码生成。README 记载 macOS CI 上有 6000 余项测试以及 designos-fig 往返测试。维护者声明此项 Figma 工作使用了 REA。本目录查阅了公开规格、入库的 rea 输出和 README，未安装该工作室，也未重跑 rea。

## 局限与未验证项

产品 README 没有署明 REA。部分入库的 rea 运行失败（未知命令或原生分析提供方未配置）。其他笔记提到的完整会话草稿保存在仓库之外。已知问题 #834 仍未关闭：保存 .fig 时编号列表格式会丢失，实例上继承或变量绑定的填色会写成固定值。许可为 PolyForm Shield 1.0.0（源码可用，不是开源协议）。本目录未独立复现 .fig 兼容性，也未重跑测试套件。

## 可以借鉴什么

即使产品 README 未写明，项目规格和入库的 CLI 证据仍可说明使用了 REA；在 REA 的 wasm 路径不可用时，混合流程仍可能需要本地回退。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [项目 / 演示](https://github.com/jangtrinh/design-os-studio)
- [补充来源 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [补充来源 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [补充来源 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
