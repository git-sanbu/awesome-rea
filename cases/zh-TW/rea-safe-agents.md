# REA Safe Agent：在兩個受限程序之間轉發靜態分析

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** dagoSte
- **核對日期:** 2026-10-26
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** REA 6.7.0、Ghidra 12.1.4 與 JADX 整合；無害 ELF 測試樣本及 F-Droid APK

## 想解決什麼問題

怎樣讓代理查詢 REA，同時約束輸入、主機工具和模型請求的訪問範圍？

## REA 具體做了什麼

實現將 REA 與接收結果的代理放在兩個獨立 Docker 容器，由主機控制器轉發允許的 MCP 呼叫；凍結輸入副本、工具路徑檢查和結果大小限制約束跨界資料，實際靜態分析由 REA 提供。

## 原作者報告的成果

帶日期的 macOS ARM64 回執報告：Claude 對同一無害 ELF 成功呼叫 REA 11 次，Codex 成功呼叫 9 次，並與已知原始碼核對雜湊、FNV-1a 常量及解碼字串；驗證記錄另報告對 F-Droid 2.0.2 的實時分析成功呼叫 REA 39 次。

## 侷限與未驗證項

這是作者公開的回執，不是獨立安全認證。靜態分析不執行目標。隔離依賴 Docker 與主機控制器；分析文字會送到模型服務，Windows Docker 整合仍為實驗性。整映象仍有漏洞掃描發現，不能與單獨的乾淨 npm 審計混為一談。

## 可以借鑑什麼

區分模擬策略測試、真實工具呼叫和實時模型執行，將每項結論繫結到帶日期的目標、主機和回執。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> "rea_version": "6.7.0",

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [專案 / 演示](https://github.com/dagoSte/rea-safe-agents)
- [補充來源 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [補充來源 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [補充來源 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [補充來源 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
