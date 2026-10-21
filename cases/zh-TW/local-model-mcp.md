# 本地 27B 模型：壓縮 MCP 工具列表後完成函式調查

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** CassieFox23
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 自建 C token 檢查程式；Qwen3.8-27B、llama.cpp、OpenCode 與 REA MCP

## 想解決什麼問題

本地模型只有 32K 上下文時，怎樣讓 REA 的工具描述與實際調查一起裝得下？

## REA 具體做了什麼

作者使用 PR #3026 的 d993ffeb1 版本和 Ghidra 12.1.4，透過工具族與 OpenCode 客戶端 allowlist 僅暴露 10 個 REA 工具；模型開啟目標、查詢函式、反編譯並關閉會話。

## 原作者報告的成果

作者報告完整 206 工具提示超出上下文；62 工具配置在讀提示後遭遇 GPU reset；10 工具配置提示為 4,407 tokens，三次均找到目標字串並解釋檢查邏輯，每次約 80 秒。

## 侷限與未驗證項

三次使用同一個極小程式與提示，不是三個獨立任務；未比較其他模型或客戶端。實驗執行在當時的 PR 提交，不能把歷史工具數量、開關或時間當成當前發行版保證。

## 可以借鑑什麼

先測工具 schema 的上下文佔用，再做最小工具集合實驗；同一任務重複成功不能代表普遍能力。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> With the full tool list, nothing fits.

## 原始來源

- [公開原文 / 核對時可編輯的討論原帖](https://github.com/morluto/rea/discussions/3098)
- [專案 / 演示](https://github.com/morluto/rea/discussions/3098)
- [補充來源 1](https://github.com/morluto/rea/pull/3026)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
