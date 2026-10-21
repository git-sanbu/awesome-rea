# Virtual Desktop Streamer：替換平臺層實現 Linux 移植

[← 返回全部案例](../../README.zh-TW.md) · 硬體與相容

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** cudanexus
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Virtual Desktop 官方 macOS 和 Windows 安裝包

## 想解決什麼問題

如何保留協議庫，把採集、編碼、音訊和輸入換成 Linux 實現？

## REA 具體做了什麼

作者宣告使用 Claude Code + REA 分析兩種安裝包，複用讀者自行提供的 macOS 協議庫，重寫 Linux 平臺層。

## 原作者報告的成果

公開 Linux 移植原始碼、構建與模擬頭顯測試，使用 PipeWire/X11、GStreamer 和 uinput。

## 侷限與未驗證項

沒有真實頭顯、Wi-Fi 和 GPU 編碼器測試；不支援 Windows streamer 的 SteamVR/OpenXR 遊戲功能。依賴廠商協議庫，不能理解為完整獨立協議重寫。

## 可以借鑑什麼

相容移植可以聚焦平臺邊界；模擬裝置測試和真實硬體驗收需分別報告。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [專案 / 演示](https://github.com/cudanexus/vd-streamer-linux)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
