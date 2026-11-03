# REA Studio：在本地網頁展示 MCP 工具與已錄製 Evidence

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** theyishaik-lab
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** REA MCP 工具發現、按 schema 生成的表單，以及小型 C、JavaScript、Python 樣例

## 想解決什麼問題

如何在本地介面呈現已安裝的 REA 工具，並讓證據及侷限易於閱讀？

## REA 具體做了什麼

後端透過 stdio MCP 啟動 REA，分頁讀取 tools/list，並轉發帶進度與取消訊號的 tools/call。錄製指令碼對微型樣例呼叫 REA，再儲存結果供獨立的靜態演示構建使用。

## 原作者報告的成果

公開原始碼包含本地網頁介面、按 schema 生成的輸入、歷史記錄與 Evidence 檢視。倉庫演示檔案標註 REA 6.8.0，提供 229 個工具的目錄及 9 條樣例呼叫記錄（8 條完成、1 條錯誤）；未錄製操作明確返回錯誤。

## 侷限與未驗證項

線上演示回放儲存的響應並模擬進度；上傳檔案留在瀏覽器中，不會被分析。錄製結果由作者釋出，未獨立復跑。本地模式可對主機檔案呼叫工具，依賴已配置的 provider；本目錄未安裝測試後端，也未作安全審計。

## 可以借鑑什麼

從實時工具 schema 生成表單，在結果中保留侷限，並明確區分錄制演示與實時分析。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [專案 / 演示](https://github.com/theyishaik-lab/rea-studio)
- [補充來源 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [補充來源 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [補充來源 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [補充來源 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
