# Eleven：將代理驅動的桌面工作臺連線到 REA

[← 返回全部案例](../../README.zh-TW.md) · 工具與整合

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Zfinix
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 透過 REA/Ghidra 分析原生二進位制，以及 ACP 代理桌面工作臺

## 想解決什麼問題

如何讓代理檢查二進位制，同時在共享工作臺中展示導航與可編輯標註？

## REA 具體做了什麼

引擎啟動 REA MCP，呼叫 open_binary 與函式檢視。獨立代理轉發分析工具，但遮蔽 REA 的標註寫入工具，將這些修改引導至帶可見歷史的 Eleven 專案工具。

## 原作者報告的成果

公開產出包括桌面應用原始碼、MCP 工具文件、專案標註與補丁建議流程，以及要求真實代理在介面中開啟 /bin/ls 函式的測試定義。README 和上游展示帖描述了可執行的工作臺。

## 侷限與未驗證項

本目錄檢查的是原始碼和測試定義，沒有執行測試憑據，也未安裝發行版。桌面平臺支援、偵錯程式行為、快取加速和分析完整性均未獨立核驗。Rizin、jadx 等是獨立引擎，不將其結果歸於 REA。上游展示帖的耗時是作者觀察，不是本目錄基準。

## 可以借鑑什麼

將分析轉發與專案編輯分開，顯示作者和撤銷歷史，並區分可執行測試與實際測試結果。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [專案 / 演示](https://github.com/Zfinix/eleven)
- [補充來源 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [補充來源 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [補充來源 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [補充來源 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
