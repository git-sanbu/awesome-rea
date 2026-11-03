# iCSee localmod：追踪摄像头命令并保留原厂驱动

[← 返回全部案例](../../README.zh-CN.md) · 硬件与兼容

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

- **作者 / 归属:** Vittuu
- **核对日期:** 2026-11-03
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** 一台 XM530V200 / IPG-X2-WQ-BL 摄像头及原厂 Sofia 应用

## 想解决什么问题

如何利用原生命令调查实现本地控制，同时保留可用驱动和 SD 录像？

## REA 具体做了什么

REA 6.8.0 与 Ghidra 通过 Sofia 命令字符串及交叉引用追踪灯光、云台处理函数。公开流程记录了特定二进制的地址线索；协议响应与物理行为另行验证。

## 原作者报告的成果

作者公开了本地 C 面板/API、源码与 Home Assistant 示例。设备所有者报告了云台、白灯实测、音视频解码、重启持久化及原生 WFS 录像继续工作。另一个公开模拟后端记录列出 22 项通过测试，并明确 hardware_tested=false。

## 局限与未验证项

完整固件、反编译内容和私人 Evidence 包未公开。硬件结果是单台设备的所有者报告；模拟测试不能验证刷写或物理行为。这是原厂固件扩展，没有通用镜像、完整对讲或实测延迟改善。删除路由的防护不等于防火墙，本目录未测试设备。

## 可以借鉴什么

先追踪一个限定命令，再核对认证响应，并分别验证物理动作与重启持久性。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [项目 / 演示](https://github.com/Vittuu/icsee-localmod)
- [补充来源 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [补充来源 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [补充来源 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
