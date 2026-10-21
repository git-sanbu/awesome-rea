# Ski or Die：用 Rust 重建 Snowball War

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** tuunanet
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** DOS 版 Ski or Die 的 Snowball War 小遊戲

## 想解決什麼問題

怎樣從舊 DOS 程式恢復投擲、碰撞、刷怪與計分規則？

## REA 具體做了什麼

REA CLI + Ghidra 16 位介面卡檢查解包後的 MZ 裝載映象，再透過呼叫者宣告的程式碼種子和 trace/function/search 調查各模組。

## 原作者報告的成果

作者公開了 Rust + SDL2 可玩重建、行為規格、逆向筆記與資產提取工具。

## 侷限與未驗證項

只重建 Snowball War；無聲音播放、無 DOS 原版並排執行對照；幀率與 PRNG 有近似。需讀者自己的遊戲副本生成素材。

## 可以借鑑什麼

先將行為寫成有地址證據的規格，再重寫；逐項標記近似行為。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Every analysis call therefore ran through the REA CLI

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [專案 / 演示](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
