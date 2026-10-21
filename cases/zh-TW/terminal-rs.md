# terminal-rs：研究 TradingView 互動後做行情終端

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** michaelshimeles
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** TradingView 公開、未登入圖表頁面的行為

## 想解決什麼問題

如何把圖表互動調查轉化為獨立 Rust 行情介面？

## REA 具體做了什麼

作者使用 REA website mode 做公開頁面的被動捕獲，在 docs/analysis 記錄發現、Evidence IDs 與設計含義。

## 原作者報告的成果

專案公開 Rust GPU 圖表、鍵盤命令、面板佈局與資料接入；介面採用 Bloomberg 風格。 2026-10-21 複核：作者新增 151 個內建指標及引數、邊界輸入測試說明，並提供 macOS universal 釋出指令碼；這些是後續實現進展，不代表新做了 REA 分析。

## 侷限與未驗證項

僅研究網頁可見行為，不是 TradingView/Bloomberg 原始碼恢復；資料來源、限流和資料使用條款另有約束。

## 可以借鑑什麼

公開網頁行為觀察也可以形成可追溯的設計輸入，無需把它稱為二進位制反編譯。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> tradingview.com with REA in website mode

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [專案 / 演示](https://github.com/michaelshimeles/terminal-rs)
- [補充來源 1](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
