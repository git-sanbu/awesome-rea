# sparkDash：把 REA 分析任務接入多裝置儀表盤

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** MiaAI-Lab
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Linux 遠端裝置上的 REA CLI、待分析檔案，以及分析結果與 Evidence 檢視

## 想解決什麼問題

怎樣從網頁提交遠端 REA 任務，讓長分析在斷開瀏覽器後繼續，並按需檢視大結果？

## REA 具體做了什麼

專案實際透過 CLI 呼叫上游 REA，固定 rea-agents 6.4.0 及 lockfile。server/rea 實現後臺任務、輸入上傳、執行狀態、結果分頁和匯出；命令模組驅動 inspect-analysis-view 與 compare 等 REA 能力，儀表盤本身不實現反編譯器。

## 原作者報告的成果

公開 Tools → REA 頁面及服務端實現：遠端分離執行、日誌、摘要、limitations/unknowns、按需結果檢視、JSON 匯出與 Evidence 比較。原始碼同時公開版本固定、任務管理和上傳測試；核對的是已實現的 REA 整合功能，沒有把安裝步驟本身當作分析成果。

## 侷限與未驗證項

本條為工具整合案例，不是用 REA 重建 sparkDash，也不證明所有上游分析路徑已透過實機驗收。僅支援 Linux 裝置，功能預設關閉，目標格式依賴額外 provider。所讀 manager 測試使用 fake REA 和本地 shell，不能替代真實 Ghidra/遠端裝置驗證；本倉庫未安裝、執行或復跑。

## 可以借鑑什麼

將上游能力和自己的排程介面分開歸因，保留分析結果的證據、限制和失敗狀態，而不只顯示任務成功。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> sparkDash uses the CLI only

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [專案 / 演示](https://github.com/MiaAI-Lab/sparkDash)
- [補充來源 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [補充來源 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [補充來源 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [補充來源 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
