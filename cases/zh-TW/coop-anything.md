# Co-op Anything：用 REA 調查單機戰役的聯機接入點

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** cranebeaker 與社群貢獻者
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** C&C3 Tiberium Wars / Kane’s Wrath 的 Steam 構建，以及 World in Conflict 的客戶端與專用伺服器

## 想解決什麼問題

單機戰役怎樣保留任務指令碼和陣營，再允許第二位玩家加入？

## REA 具體做了什麼

公開 C&C3 筆記明確記錄 REA/Ghidra 12.1.4 對 TW 1.10 可執行檔案的觀察，定位準備多人/遭遇戰時移除戰役陣營的函式。World in Conflict 筆記記錄 Ghidra 經 REA 分析專用伺服器的角色選擇函式，區分單人角色限制、伺服器狀態與待驗證推斷。其他指令碼、偵錯程式和執行測試單獨承擔後續工作。

## 原作者報告的成果

公開 MCP/技能、同步測試工具和具體遊戲調查筆記。C&C3 筆記給出函式地址、資料格式及實驗記錄；World in Conflict 作者報告區域網戰役主機可執行任務，第二客戶端能加入並看到實時同步的單位，但仍不能控制自己的單位。整個專案有多個遊戲條目，各自保留 QA 級別。

## 侷限與未驗證項

僅把已閱讀的 C&C3 與 World in Conflict 調查歸於 REA，不把目錄內所有模組都說成 REA 成果。World in Conflict 的第二玩家控制、部署區、視野和網際網路聯機仍未完成，相關記錄僅驗證 LAN；C&C3 也有戰役失敗與上下文未解決問題。星標反映關注度，不證明戰役可通關；本倉庫未執行遊戲或復跑測試。

## 可以借鑑什麼

從引擎的具體狀態分支建立實驗，把“第二客戶端連上”“看到同步”和“真正能協作通關”分別驗收。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [專案 / 演示](https://github.com/cranebeaker/coop-anything)
- [補充來源 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [補充來源 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
