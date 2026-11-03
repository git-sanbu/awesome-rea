# Sketch（原 paper-rs）：研究 Paper 後構建 Rust 無限畫布

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** michaelshimeles
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Paper 桌面設計應用的行為

## 想解決什麼問題

怎樣理解畫布、佈局和編輯器互動，並實現獨立設計工具？

## REA 具體做了什麼

作者宣告用 REA 與 Claude Code 研究 Paper 桌面應用行為，再用 wgpu、winit、egui 實現獨立 Rust 應用。

## 原作者報告的成果

公開專案包含無限畫布、頁面、佈局、向量編輯、白板與 MCP 介面，並列出測試與功能差異。 2026-10-21 複核：專案已更名 Sketch，程式名為 sketch-rs，作者說明首次啟動遷移舊專案目錄，併相容舊檔案和環境變數；不另計新案例。 2026-11-03 複查：作者現報告經公證的 macOS 通用構建已在 M4 Pro 執行，檢查包含 Metal 視窗啟動、Sparkle 載入、MCP 編輯和自動儲存。

## 侷限與未驗證項

2026-10-21 來源稱尚未在 macOS 硬體執行；新報告僅覆蓋有限的 M4 Pro 檢查。作者明確表示滑鼠、觸控板、鍵盤、選單、更新視窗及 Intel 架構仍未在 Mac 實測。部分功能近似或缺失。公開歸因及這些檢查不能證明與 Paper 等價，本目錄未復跑。

## 可以借鑑什麼

學習目標軟體的行為和互動契約，明確獨立實現的功能邊界。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> by studying the behavior of the Paper desktop app with REA and Claude Code

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/michaelshimeles/sketch/blob/af814b7ab2bd77328a906a1986a048c233e25f9c/README.md)
- [專案 / 演示](https://github.com/michaelshimeles/sketch)
- [補充來源 1](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [補充來源 2](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
