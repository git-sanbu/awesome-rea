# REA on REA：分析工具自身並檢驗預測

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** az9713
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 已安裝的 rea-agents 6.3.0 包

## 想解決什麼問題

REA 如何選擇原生分析 provider，又怎樣判斷 provider 不可用？

## REA 具體做了什麼

REA 靜態分析自身五個目錄，代理先寫可證偽預測，再執行 doctor，最後檢視原始碼答案並自評。

## 原作者報告的成果

公開完整過程與測試回執；作者報告四個回答都只部分正確，八個 Ghidra 檢查結果中預測錯了三個。

## 侷限與未驗證項

單次自評，且 doctor 測試不等同於 open_binary 測試；存在安裝包與原始碼 checkpoint 差異。

## 可以借鑑什麼

把聽起來合理的解釋轉化為能驗證的預測，並公開失敗。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [專案 / 演示](https://github.com/az9713/REA-demo)
- [補充來源 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
