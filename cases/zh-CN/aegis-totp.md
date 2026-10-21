# Aegis：从 Android APK 找出动态验证码算法

[← 返回全部案例](../../README.zh-CN.md) · 官方案例

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

- **作者 / 归属:** REA 官方案例团队；原项目作者见来源
- **核对日期:** 2026-10-16
- **收录状态:** 已阅读公开原文，未独立复跑作者测试。
- **分析目标:** Aegis Authenticator 3.4.3 Android APK

## 想解决什么问题

每 30 秒变化的六位登录码是怎么计算的？

## REA 具体做了什么

REA Android 分析定位生成、显示和复制相关方法，阅读 HOTP/TOTP 计算，再编写可调整时钟的浏览器演示。

## 原作者报告的成果

官方页面报告：提取方法与独立实现对照 133 个用例，并核对 RFC 6238 的六个 SHA-1 参考样例。

## 局限与未验证项

范围是验证码生成计算；不代表完成密钥库、加密存储或整款应用的重建。本仓库没有复跑这些用例。

## 可以借鉴什么

选一个可独立验证的小功能，用公开标准测试向量约束实现。

## 原文中的 REA 使用证据

短摘录简化了排版，完整上下文以原文为准。

> Inspected with REA 6.1.0 on 9 October 2026.

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [项目 / 演示](https://rea.tools/showcase/aegis/)
- [补充来源 1](https://github.com/beemdevelopment/Aegis)

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。

<!-- 由案例数据生成；如需更新，请编辑数据文件。 -->
