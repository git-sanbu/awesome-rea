# Desktop Games：把砸桌面小遊戲移植到 macOS 和瀏覽器

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** ucodia
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Gemtree 2000 年 Desktop Games / Stress Reducers 的 Windows 程式

## 想解決什麼問題

怎樣理解 Peter 直譯器和程式樹，並移植互動與資源？

## REA 具體做了什麼

作者使用 Claude Code、REA 與 Ghidra；REA 用於直譯器中影象壓縮、資源佈局、計時、精靈運動、聲音與座標規則的調查；配套 Python 工具處理程式樹和資源。

## 原作者報告的成果

公開倉庫包含 Swift macOS 版、瀏覽器版、反編譯程式樹及資源處理指令碼。

## 侷限與未驗證項

作者註明使用真彩色而非原調色盤，並調整了陰影實現；案例收錄不表示本倉庫驗證了完整相容性或第三方素材的再分發權。

## 可以借鑑什麼

遇到嵌入直譯器的程式，要區分直譯器、程式樹和資源三個層次。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> The interpreter was decompiled with REA

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [專案 / 演示](https://github.com/ucodia/desktop-games-nostalgia)
- [補充來源 1](https://ucodia.github.io/desktop-games-nostalgia/)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
