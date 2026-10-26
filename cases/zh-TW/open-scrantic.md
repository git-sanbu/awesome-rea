# Open Scrantic：用 Rust 重建 Johnny Castaway 屏保引擎

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** glauberlima
- **核對日期:** 2026-10-26
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 1992 年 Screen Antics: Johnny Castaway 的 Windows 3.1 SCRANTIC.SCR 及匹配資原始檔

## 想解決什麼問題

16 位屏保的指令碼直譯器、劇情排程與隨機行為，怎樣在現代系統執行？

## REA 具體做了什麼

開發者明確說明使用 Claude Code 與 REA 反彙編、反編譯 SCRANTIC.SCR，恢復資源格式和指令碼語義，並生成 Rust 實現及文件。

## 原作者報告的成果

公開 Rust 引擎實現資源載入、TTM/ADS 指令碼執行、劇情推進、計時及原隨機數生成器；ENGINE.md 記錄恢復出的規則和有意差異，作者提供 Windows、macOS、Linux 釋出入口。

## 侷限與未驗證項

執行需要使用者自備匹配的原始檔案，載入器會拒絕其他可執行檔案版本。整幀重繪、可選影象音訊處理和設定與原作存在差異；本目錄未獨立測試跨平臺行為或等價性，所讀檔案未見原始 REA 會話。

## 可以借鑑什麼

把原始素材權屬與引擎程式碼分開，保留算術及排程規則，並記錄有意採用的相容差異。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [專案 / 演示](https://github.com/glauberlima/open-scrantic)
- [補充來源 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [補充來源 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [補充來源 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
