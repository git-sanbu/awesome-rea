# OpenBSD netcat：靜態審計已釋出 ELF

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** NullLabTests
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Ubuntu netcat-openbsd 1.234-1 二進位制

## 想解決什麼問題

已釋出 netcat 包含哪些網路、代理和安全相關實現？

## REA 具體做了什麼

用 REA 的 pwntools 佈局檢查與 Ghidra 路徑分析同一映象，再用 readelf、objdump、nm、strings 交叉核對。

## 原作者報告的成果

公開函式/字串/呼叫路徑調查、results.txt 與 files/ 下的原始 JSON 結果。

## 侷限與未驗證項

這是特定構建的靜態分析；不能從 imports 或虛擬碼直接斷言所有執行場景，更不是完整安全認證。

## 可以借鑑什麼

同時儲存 REA 原始輸出和獨立工具核對結果，讓結論可審查。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [專案 / 演示](https://github.com/NullLabTests/OpenBSD_netcat_REA)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
