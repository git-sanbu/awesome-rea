# AdamTerm：研究 Ghostty 外殼後做自己的終端

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** AdamLinCodes
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Ghostty 1.3.1 macOS app bundle

## 想解決什麼問題

終端核心、原生視窗、選單和服務之間怎麼分工？

## REA 具體做了什麼

使用 REA 檢查 Mach-O、plist、簽名、Objective-C 後設資料、Interface Builder 與動態庫解析；該路徑未使用 Hopper/Ghidra。

## 原作者報告的成果

作者以 AppKit + SwiftTerm 做了帶原生標籤頁的精簡 macOS 終端，並提供自檢命令。

## 侷限與未驗證項

使用 SwiftTerm 而非重建 Ghostty 的 Zig 核心；分屏、搜尋欄、配置檔案、快捷終端等未實現。

## 可以借鑑什麼

包後設資料和介面資源就能回答一部分架構問題，不必一開始深度反編譯。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [專案 / 演示](https://github.com/AdamLinCodes/AdamTerm)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
