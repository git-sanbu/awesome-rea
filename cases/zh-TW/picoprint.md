# PicoPrint：讓手機熱敏印表機接入 Windows 列印

[← 返回全部案例](../../README.zh-TW.md) · 硬體與相容

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** bigtower17
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** LX-D02 藍芽熱敏印表機與 Funny Print 的 React Native Android 應用

## 想解決什麼問題

已有驅動能連線卻不出紙時，怎樣定位握手差異並接入 Windows 列印系統？

## REA 具體做了什麼

作者在 REA discussion #4152 說明：REA 6.5.0 負責 doctor、ADB 裝置檢查與 Android 調查入口；真正的 Hermes 位元組碼反編譯使用 hermes-dec，協議推導與流量對照不能歸為 REA 單獨完成。

## 原作者報告的成果

公開基於 thermoprint 的 Go 列印服務與協議說明；作者報告在 Windows 11 + LX-D02 真機上，透過系統 Ctrl+P 列印文字、圖片和文件，並將握手修正反饋上游。

## 侷限與未驗證項

早期專案，尚無一鍵安裝器、托盤狀態與自動重連。原討論明確 REA 當時未覆蓋該目標的 Hermes 分析步驟；單一裝置與系統的成功不證明全部韌體或 Windows 版本相容。

## 可以借鑑什麼

先區分連線成功與列印成功；記錄每個工具實際解決的環節，避免把整條鏈路歸給一個工具。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> used to analyse the Android app.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [專案 / 演示](https://github.com/bigtower17/picoprint)
- [補充來源 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [補充來源 2](https://github.com/morluto/rea/discussions/4152)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
