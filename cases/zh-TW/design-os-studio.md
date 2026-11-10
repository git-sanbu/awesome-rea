# DESIGN:OS Studio：獨立讀寫 Figma .fig 並重實現編輯器的桌面工作室

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** jangtrinh
- **核對日期:** 2026-11-10
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Figma Desktop 與 Figma 的 .fig 容器格式（fig-kiwi，寫出 version 106）

## 想解決什麼問題

怎樣在獨立的桌面工作室中讀寫 Figma 的 .fig 容器，並重實現編輯器行為？

## REA 具體做了什麼

專案公開規格寫明用 morluto/rea 6.7.0（`npx -y rea-agents`）逆向 Figma 欄位，並記錄它對提取出的編輯器 JavaScript 執行了 analyze-javascript-application。同一說明稱 wasm 路徑當時不可用（未安裝 WABT 與 Ghidra），因此用本地讀取器解碼 kiwi schema。倉庫中還存有 rea CLI 輸出，包括已完成的 inspect-macho 與 analyze-javascript-application，以及部分失敗呼叫。產品 README 沒有提及 REA。

## 原作者報告的成果

DESIGN:OS Studio 是已釋出的桌面工作室（審閱版本 v0.7.11），可讀取 Figma 的 .fig 容器並寫出容器版本 106，在本地重實現編輯器行為，並附帶 39 個工具的 stdio MCP 伺服器及多語言程式碼生成。README 記載 macOS CI 上有 6000 餘項測試以及 designos-fig 往返測試。維護者宣告此項 Figma 工作使用了 REA。本目錄查閱了公開規格、入庫的 rea 輸出和 README，未安裝該工作室，也未重跑 rea。

## 侷限與未驗證項

產品 README 沒有署明 REA。部分入庫的 rea 執行失敗（未知命令或原生分析提供方未配置）。其他筆記提到的完整會話草稿儲存在倉庫之外。已知問題 #834 仍未關閉：儲存 .fig 時編號列表格式會丟失，例項上繼承或變數繫結的填色會寫成固定值。許可為 PolyForm Shield 1.0.0（原始碼可用，不是開源協議）。本目錄未獨立復現 .fig 相容性，也未重跑測試套件。

## 可以借鑑什麼

即使產品 README 未寫明，專案規格和入庫的 CLI 證據仍可說明使用了 REA；在 REA 的 wasm 路徑不可用時，混合流程仍可能需要本地回退。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [專案 / 演示](https://github.com/jangtrinh/design-os-studio)
- [補充來源 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [補充來源 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [補充來源 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
