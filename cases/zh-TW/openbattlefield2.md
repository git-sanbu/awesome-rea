# OpenBattlefield2：用函式級 Evidence 重建戰地 2 客戶端

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Moxnatiy
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Battlefield 2 1.5 的 Refractor 2 客戶端、渲染 DLL 與原版資料

## 想解決什麼問題

怎樣把準星、HUD 與客戶端行為的二進位制調查，轉成可追溯的引擎實現？

## REA 具體做了什麼

使用 REA 4.1.0 + Ghidra 12.1.4 讀取 32 位 PE，先獲取函式完整 Evidence dossier，再用直接 Ghidra 查詢、遊戲資料及伺服器符號補充。準星筆記記錄 GuiIndex、位置和偏移累加函式的地址及 REA Evidence IDs；REA 只承擔其中的分析環節。

## 原作者報告的成果

公開 C++20 引擎、函式筆記、測試與截圖；作者報告可讀取自有 BF2 1.5 安裝、連線原版專用伺服器並顯示士兵和 HUD。準星已在連線模式繪出並隨移動擴散、停止後收攏，附 test_weapon_hud 等檢查。

## 侷限與未驗證項

研究專案尚缺開火、車輛駕駛、聲音等功能；準星的切槍、縮放和開火更新仍有待完成，hosted 模式沒有準星。主要平臺為 macOS arm64，Windows 構建未實際執行驗證。多工具協作的整體成果不能全部歸於 REA；本倉庫未復跑。

## 可以借鑑什麼

從一個具體可觀察功能出發，把地址、Evidence、實現與驗收命令放在同一條證據鏈上。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [專案 / 演示](https://github.com/Moxnatiy/OpenBattlefield2)
- [補充來源 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [補充來源 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [補充來源 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
