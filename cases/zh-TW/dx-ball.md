# DX-Ball：恢復聲音左右聲道計算

[← 返回全部案例](../../README.zh-TW.md) · 官方案例

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** REA 官方案例團隊；原專案作者見來源
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** DX-Ball 1.07 的 Windows i386 可執行檔案

## 想解決什麼問題

畫面中的位置怎樣轉換成音效聲像？

## REA 具體做了什麼

用 REA + Ghidra 檢視目標函式、呼叫者、指令與常量；結合維護者的重建程式碼解釋被反編譯虛擬碼漏掉的 x87 表示式。

## 原作者報告的成果

來源記錄：該函式透過 3,205 個原始 x86 差分用例，歷史編譯器重編譯後的完整 63 位元組匹配。

## 侷限與未驗證項

驗證僅覆蓋一個函式與指定 checkpoint；網頁更新複用了已有執行和編譯記錄，不能據此說整個遊戲被完整還原。

## 可以借鑑什麼

虛擬碼不完整時，追到呼叫者、彙編和常量；把語義測試與位元組匹配分別記錄。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [專案 / 演示](https://rea.tools/showcase/dx-ball/)
- [補充來源 1](https://github.com/N0zoM1z0/dx-ball)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
