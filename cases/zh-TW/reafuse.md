# ReaFuse：分析兩個開源庫的行為後組合新工具

[← 返回全部案例](../../README.zh-TW.md) · 學習與復現

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** sickpyramid
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** ms + pretty-bytes，以及 dequal + klona 兩組 JavaScript 開源庫

## 想解決什麼問題

怎樣把兩個專案的行為整理成規格，再實現一個同時利用兩者的新工具？

## REA 具體做了什麼

使用 REA 6.4.0 的 JavaScript 靜態分析讀取兩個輸入專案，結合 README 與測試生成行為規格；模型另行提出組合方案、編寫驗收契約和新程式碼，再執行作者的測試與相似性掃描。

## 原作者報告的成果

公開 ratewise（傳輸速率與 ETA）和 objdelta（結構 diff/patch）原始碼、報告與 Evidence；作者分別報告 18/18 和 17/17 契約測試透過，並記錄自己的 7/7、6/6 測試。兩個示例合併為一個專案案例。

## 侷限與未驗證項

僅核對公開的兩個 JS 示例，專案處於 v0.1 alpha；同一流程生成規格與實現，不應把作者的 clean-room 標籤當成獨立法律結論。相似性掃描與全綠測試不能證明普遍原創性或完整等價，未由本倉庫復跑。

## 可以借鑑什麼

用行為規格連線分析與實現，並把測試逐條對應到輸入專案或新組合功能。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Every donor goes through REA's static JavaScript analysis

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [專案 / 演示](https://github.com/sickpyramid/ReaFuse)
- [補充來源 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [補充來源 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
