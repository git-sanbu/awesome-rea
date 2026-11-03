# rec-rs：研究 OBS 後做原生 macOS 錄屏工具

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../rec-rs.md) · [简体中文](../zh-CN/rec-rs.md) · [繁體中文](../zh-TW/rec-rs.md) · [日本語](../ja/rec-rs.md) · [한국어](../ko/rec-rs.md) · [Español](../es/rec-rs.md) · [Français](../fr/rec-rs.md) · [Deutsch](../de/rec-rs.md) · [Português (Brasil)](../pt-BR/rec-rs.md) · [Русский](../ru/rec-rs.md) · [العربية](../ar/rec-rs.md) · [हिन्दी](../hi/rec-rs.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** michaelshimeles
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** OBS Studio 的架構和行為

## 想解決什麼問題

怎樣做更聚焦的螢幕、攝像頭與音訊錄製工具？

## REA 具體做了什麼

作者宣告使用 REA 與 Claude Code 研究 OBS，再以 Rust 和 Apple 原生框架實現獨立工具。

## 原作者報告的成果

專案公開螢幕/攝像頭錄製、音訊混合、回放緩衝與直播功能；作者報告在 Apple Silicon Mac 上開發和測試。 2026-10-21 的 README 增加 Apple Silicon + Intel universal 釋出、簽名/公證及 Sparkle 更新說明。 2026-11-03 複查：應用新增實時逐來源音量推子/靜音及單次編碼的多目的地同時推流。作者報告在本地 MediaMTX 伺服器同時測試了兩條 RTMP 路徑與一個 WHIP 端點。

## 侷限與未驗證項

要求 macOS 15+；作者實測環境仍是 Apple Silicon M4 Pro，新增 Intel 下載與構建說明不能當成 Intel 實機錄製驗收。屬於特定場景實現，不能理解為完整 OBS 替代或跨平臺重建；本倉庫未復跑。 據報告未直接向 YouTube、Twitch 或 Kick 推流。目的地共享同一編碼並採用最低配置限制；更改目的地需停止推流。本地伺服器結果不能證明外部服務互通。

## 可以借鑑什麼

從成熟應用提取所需架構，為一個具體使用場景實現較小的產品。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> by studying its architecture and behavior with REA and Claude Code

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/michaelshimeles/rec-rs/blob/93dd4948cdc8919e8b444a5af0141cf7c3628e7c/README.md)
- [專案 / 演示](https://github.com/michaelshimeles/rec-rs)
- [補充來源 1](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [補充來源 2](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
