# rea-playbook：把 Electron Evidence 變成可讀報告與重建

[← 返回全部案例](../../README.zh-TW.md) · 學習與復現

[English](../rea-playbook.md) · [简体中文](../zh-CN/rea-playbook.md) · [繁體中文](../zh-TW/rea-playbook.md) · [日本語](../ja/rea-playbook.md) · [한국어](../ko/rea-playbook.md) · [Español](../es/rea-playbook.md) · [Français](../fr/rea-playbook.md) · [Deutsch](../de/rea-playbook.md) · [Português (Brasil)](../pt-BR/rea-playbook.md) · [Русский](../ru/rea-playbook.md) · [العربية](../ar/rea-playbook.md) · [हिन्दी](../hi/rea-playbook.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** jinshi666888
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 倉庫自帶的八檔案最小 Electron 示例

## 想解決什麼問題

拿到巨大 Evidence JSON 後，怎樣提取可讀事實並驗證重建？

## REA 具體做了什麼

固定 REA 6.3.0，提供 analyze → extract → verify 命令鏈，另有 MCP handshake 與真實工具呼叫 probe。

## 原作者報告的成果

公開脫敏 Evidence fixture、file:line 報告、recreate 與斷言；作者報告 10/10 重建檢查透過。

## 侷限與未驗證項

離線 demo 只讀取已有 fixture，不能冒充新執行 REA；自建小目標也不能代表複雜商業應用。

## 可以借鑑什麼

入門可以從可控小樣本開始，把證據、可讀規格和迴歸檢查串起來。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> npm run analyze will fetch rea-agents@6.3.0 on first use via npx fallback.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md)
- [專案 / 演示](https://github.com/jinshi666888/rea-playbook)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
