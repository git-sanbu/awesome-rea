# App X-Ray：把 REA 發現轉換為可分享的應用報告

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Eliot5566
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 開源 Electron 應用原始碼，以及額外的 APK、原生二進位制和模型檔案分析路徑

## 想解決什麼問題

如何將靜態 REA 證據轉化為可讀的元件報告和版本差異？

## REA 具體做了什麼

整合呼叫固定的 REA 6.7.0 CLI 並解析 JSON Evidence。JavaScript 分批分析讓檔案保留在同一根目錄，維持匯入解析；Electron fuse 檢查是另一個 REA 操作。

## 原作者報告的成果

專案公開了報告生成、規則、CI 差異和展示目錄。註明日期的第 5 週報告稱掃描了 20 個 Electron 應用，全部識別到版本，其中 18 項在該容器上少於 60 秒。REA-Bench 從 20 應用語料的報告生成了 54 個問題。

## 侷限與未驗證項

這些是註明日期的作者掃描報告，不是當前漏洞或執行時聯網結論。規則可能遺漏輔助函式建立的視窗、動態頻道和傳送方驗證；靜態地址不能證明網路流量。REA-Bench 衡量與 App X-Ray 報告的一致程度，不是獨立真值，也未直接證明使用工具的代理更優。本目錄未復跑掃描。

## 可以借鑑什麼

讓報告結論連結到原始碼，保留掃描提交與日期，並將靜態規則和自動生成的基準答案視為可能出錯。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [專案 / 演示](https://github.com/Eliot5566/app-xray)
- [補充來源 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [補充來源 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [補充來源 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [補充來源 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
