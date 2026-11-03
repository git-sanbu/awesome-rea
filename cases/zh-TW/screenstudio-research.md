# Screen Studio：區分靜態檢查、錄製與匯出證據

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Royo-Qiao
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Screen Studio 3.7.3-4540，包含本地重新打包的 Apple Silicon 副本

## 想解決什麼問題

如何區分 Electron 與原生輔助程式的靜態發現，以及錄製、匯出和相容性的實際證據？

## REA 具體做了什麼

REA 的 fuse 與 Mach-O 檢查提供了帶 Evidence ID 和雜湊的選編靜態記錄。限定範圍的 JavaScript 應用分析兩次超時，作者未聲稱得到完整圖譜或原生函式反編譯結果。

## 原作者報告的成果

作者公開了應用檢查、專案事件彙總與匯出驗證工具。歷史原生錄製據報匯出了 3,337 幀、1104 × 720、60 fps 的影片並完整解碼；後續只讀工具複查檢查了已儲存的影片及人工輸入事件彙總。

## 侷限與未驗證項

私人錄製及完整證據賬本未公開，無法重放。Mach-O 雜湊對應本地重打包副本。聯網授權失敗，裁剪嘗試未生效，最終簽名後未完整重測錄製；僅測試一種 Apple Silicon/macOS 環境。解碼透過不能證明錄製來源或畫面等價，本目錄未復跑實驗。

## 可以借鑑什麼

分別記錄靜態後設資料、介面觀察、檔案解碼與人工反饋，並同時公開失敗項。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [專案 / 演示](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [補充來源 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [補充來源 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [補充來源 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [補充來源 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
