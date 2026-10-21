# hexgrab：從 PowerToys 二進位制研究取色器

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** iammukeshm
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Microsoft PowerToys 隨發行版提供的取色器二進位制

## 想解決什麼問題

全域性快捷鍵、畫素取色和剪貼簿怎樣配合？

## REA 具體做了什麼

作者用 REA 分析已釋出二進位制，再利用公開原始碼逐條核對發現，使用 .NET 10 / WPF 獨立實現精簡取色器。

## 原作者報告的成果

公開原始碼與 docs/rea-findings.md；作者報告 9 條發現中 8 條完全正確。

## 侷限與未驗證項

僅在單顯示器、125% 縮放下測試；混合 DPI 多顯示器未做真實硬體驗證。8/9 是作者對該次調查的核對，不是 REA 通用準確率。

## 可以借鑑什麼

選擇原始碼公開的軟體做逆向練習，有條件檢查工具到底對了多少。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [專案 / 演示](https://github.com/iammukeshm/hexgrab)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
