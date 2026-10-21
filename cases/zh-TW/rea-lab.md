# rea-lab：測量 REA 對 Windows 逆向任務的實際幫助

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** pablodiazjorge
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Windows 小型挑戰、更大含誘餌二進位制及真實開源程式

## 想解決什麼問題

加上 REA 後，代理解決任務的成功率、耗時和成本怎樣變化？

## REA 具體做了什麼

搭建 Windows + Ghidra 環境，做預註冊對照研究，核驗引用 Evidence，公開 writeups、環境與上游修復。

## 原作者報告的成果

作者現已公開五項預註冊研究：Study 1 為兩組均解出 28/30；Study 2 為無 REA 11/24、用 REA 4/24；Study 3 為 71/72 與 68/72。新增 Study 4 用 DeepSeek 模型為 20/20 與 19/20，未檢測到顯著差異；Study 5 的改進 skill 相對官方版本成本增加 14%（p=0.012），準確率未顯著改變。 2026-10-21 補充 Evidence 留存觀察：作者明確總計 482 次研究執行中，336 次呼叫 REA，加上 3 次因重啟中斷後重跑，合計 339 次呼叫執行均未主動保留 Evidence，評分器從客戶端記錄重建。

## 侷限與未驗證項

所有研究固定 REA 6.4.0、Claude Code 2.1.296 與各自模型、任務及許可權配置，不能外推當前版本或所有逆向工作。Study 2、3 的成功率差異未達原作者統計檢驗的顯著水平。Study 3 的 Evidence 認證由初報 142/144 更正為 grader 修正後的 144/144，解題數字未改；Study 4 樣本僅 20 對。Study 5 比較的是注入提示中的 skill 內容，並非客戶端自動載入效果。本倉庫僅複核報告，沒有復跑。 339 次是呼叫過 REA 的執行口徑，不是五項研究的總樣本量；該觀察不等於 Evidence 內容缺失或認證失敗。

## 可以借鑑什麼

評估工具時同時看對照組、任務分佈、成本與證據質量。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [專案 / 演示](https://github.com/pablodiazjorge/rea-lab)
- [補充來源 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [補充來源 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [補充來源 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [補充來源 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
