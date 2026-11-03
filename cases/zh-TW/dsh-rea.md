# dsh-rea：保持 MCP 契約並按需展示工具

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** JeremyWangCY
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** DeepSeek Harness 中的 REA 6.8.0 MCP 工具、提示詞及 skill

## 想解決什麼問題

如何在保留上游工具契約的同時，讓未使用的 schema 不佔每次代理請求？

## REA 具體做了什麼

介面卡透過 DSH 橋啟動固定版本的上游 MCP 程式，提示詞與補全共享連線，並使用逐代理工具遮罩。/rea 顯示目錄與 skill，/rea off 再次隱藏。

## 原作者報告的成果

作者公開適配程式碼、schema 測量及限定範圍的差分報告，記錄 229 個工具，以及 native、PTC 模式下確定性呼叫的比較。模型輸入目錄測量為 273,264 位元組；這是 schema 載荷，不是 LLM token 或費用基準。

## 侷限與未驗證項

倉庫包含一份透過的比較報告，以及驗證命令出現 Windows integrity_mismatch 錯誤的單獨說明。本目錄無法確認該命令目前能在 Windows 透過。工具定義匹配不代表執行過全部工具。原生引擎、實時捕獲、全部 provider 和模型回答等價均不在該比較範圍內。目錄維護者未執行這些測試。

## 可以借鑑什麼

比較 schema 與完整確定性結果，保留歷史透過記錄，並單獨披露當前失敗。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA is an exact npm dependency, not a reimplementation.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [專案 / 演示](https://github.com/JeremyWangCY/dsh-rea)
- [補充來源 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [補充來源 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [補充來源 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [補充來源 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [補充來源 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
