# Wispr Flow：拆解語音輸入鏈路並做本地小原型

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../wispr-flow.md) · [简体中文](../zh-CN/wispr-flow.md) · [繁體中文](../zh-TW/wispr-flow.md) · [日本語](../ja/wispr-flow.md) · [한국어](../ko/wispr-flow.md) · [Español](../es/wispr-flow.md) · [Français](../fr/wispr-flow.md) · [Deutsch](../de/wispr-flow.md) · [Português (Brasil)](../pt-BR/wispr-flow.md) · [Русский](../ru/wispr-flow.md) · [العربية](../ar/wispr-flow.md) · [हिन्दी](../hi/wispr-flow.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** az9713
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Wispr Flow 1.6.1102 的 Electron 包與原生 helper

## 想解決什麼問題

錄音、轉寫、上下文和貼上是如何串起來的？

## REA 具體做了什麼

結合 REA CLI 的 JavaScript 靜態分析、直接閱讀 bundles，以及 REA + Ghidra 對 helper 貼上程式碼的調查；報告標記 proven / inferred / hidden。

## 原作者報告的成果

公開拆解報告、Ghidra 補充調查、開發過程與本地 flowlite.py 原型。

## 侷限與未驗證項

最初兩個 MCP 呼叫超時；部分結論來自其他工具和人工讀程式碼；未執行原應用或捕獲網路，服務端模型與行為仍不可見。原型跳過上下文、流式處理和完整驗證。

## 可以借鑑什麼

完整記錄失敗和補充工具；客戶端分析無法替代對服務端能力的瞭解。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Wispr Flow, reverse engineered with REA

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [專案 / 演示](https://github.com/az9713/wispr-flow-rea-teardown)
- [補充來源 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
