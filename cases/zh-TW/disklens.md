# DiskLens：用已釋出程式核對磁碟掃描與樹圖演算法

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** KarlssonChristoffer
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** WinDirStat 2.5.0 的 Windows 可執行檔案與公開原始碼

## 想解決什麼問題

怎樣確認磁碟掃描、矩形樹圖和重複檔案檢測的實現，再做獨立介面？

## REA 具體做了什麼

Claude Code 使用 REA + Ghidra 檢查已安裝的 WinDirStat.exe，確認目錄列舉、NTFS MFT 讀取器、樹圖預設值與 SHA-512 去重。作者明確說明演算法細節主要來自閱讀 WinDirStat 原始碼，REA 用於核對發行版並定位調查方向。

## 原作者報告的成果

公開 Rust 引擎與 Tauri/Svelte 介面、REA evidence IDs；作者報告 24 個引擎測試，以及約 130 萬檔案的單機掃描與樹圖檢查。

## 侷限與未驗證項

作者明確未審閱 AI 生成程式碼，多項檔案操作和系統整合尚未在真實介面驗證；缺少快速 MFT 掃描，硬連結會重複計數。部分演算法直接移植 GPL 原始碼，不屬於閉源軟體的淨室重建；單機耗時不是對照效能結論。

## 可以借鑑什麼

有公開原始碼時，把二進位制觀察與原始碼閱讀分別歸因，同時列出檔案操作的實際驗證範圍。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [專案 / 演示](https://github.com/KarlssonChristoffer/DiskLens)
- [補充來源 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
