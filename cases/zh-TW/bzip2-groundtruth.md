# bzip2：用帶符號構建核對去符號二進位制分析

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** CassieFox23
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** gcc -O2 編譯並去符號的 bzip2 1.0.8，Linux x86-64

## 想解決什麼問題

沒有函式名時，怎樣從一條輸出字串找出函式，再核對呼叫關係？

## REA 具體做了什麼

REA 6.4.0 + Ghidra 從字串定位目標函式、列出呼叫者與被呼叫者，返回帶 observed/derived 標記的 Evidence；作者另外使用同源未去符號構建、原始碼、nm 與 objdump 核對。

## 原作者報告的成果

作者報告定位到 uncompress，1 個呼叫者與 24 個被呼叫者和對照構建一致；公開構建步驟、裁剪後的 MCP 呼叫記錄及兩類錯誤返回。

## 侷限與未驗證項

僅覆蓋一個程式、編譯設定與目標函式，不是工具優劣對照；24 條邊是 provider 解析出的直接呼叫，不能外推完整執行時圖。完整客戶端指令碼未公開，壓縮包只記錄 hash，未驗籤；本倉庫未復跑。

## 可以借鑑什麼

用同源帶符號構建建立 ground truth，把工具觀察、推導與對照驗證分開。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## 原始來源

- [公開原文 / 核對時可編輯的討論原帖](https://github.com/morluto/rea/discussions/2254)
- [專案 / 演示](https://github.com/morluto/rea/discussions/2254)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
