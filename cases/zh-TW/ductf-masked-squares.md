# DownUnderCTF：從二進位制恢復 flag 檢查方程

[← 返回全部案例](../../README.zh-TW.md) · 官方案例

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** REA 官方案例團隊；原專案作者見來源
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** DownUnderCTF 2023 的 masked squares flag checker，stripped Linux ELF

## 想解決什麼問題

沒有符號和原始碼，如何找出輸入校驗邏輯？

## REA 具體做了什麼

用 REA 搜尋提示字串和交叉引用，分析校驗函式、讀取掩碼與目標表；將 26 條約束交給 Z3 求解，並用程序捕獲檢查原題程式。

## 原作者報告的成果

官方記錄了正確候選輸出 Correct! / exit 0、錯誤候選輸出 Incorrect! / exit 255；求解後再對照主辦方原始碼與 metadata。

## 侷限與未驗證項

求解使用了常見 flag 格式和字符集假設；第二模型搜尋超時，未證明唯一解。

## 可以借鑑什麼

靜態推理得到答案後，給原程式輸入正確和錯誤樣本，補上執行驗證。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [專案 / 演示](https://rea.tools/showcase/ctf/)
- [補充來源 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
