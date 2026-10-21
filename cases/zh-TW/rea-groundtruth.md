# rea-groundtruth：對照已知原始碼找分析盲點

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../rea-groundtruth.md) · [简体中文](../zh-CN/rea-groundtruth.md) · [繁體中文](../zh-TW/rea-groundtruth.md) · [日本語](../ja/rea-groundtruth.md) · [한국어](../ko/rea-groundtruth.md) · [Español](../es/rea-groundtruth.md) · [Français](../fr/rea-groundtruth.md) · [Deutsch](../de/rea-groundtruth.md) · [Português (Brasil)](../pt-BR/rea-groundtruth.md) · [Русский](../ru/rea-groundtruth.md) · [العربية](../ar/rea-groundtruth.md) · [हिन्दी](../hi/rea-groundtruth.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** UnknownHacker1
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** MongoDB Compass 1.43.4 及手寫 Electron fixtures

## 想解決什麼問題

工具報告零個 IPC/視窗時，是程式真的沒有，還是分析漏掉了？

## REA 具體做了什麼

使用 REA 6.4.0 分析原始碼已知的應用，再用不同 webpack 包裝形式的最小樣本做對照。

## 原作者報告的成果

作者公開一鍵復現：特定 webpack 形態的 Electron API 沒被識別，並記錄簽名後 ASAR integrity mismatch 的處理方式。

## 侷限與未驗證項

報告針對 Windows 11 與 REA 6.4.0 的特定構建；後續版本可能修復。這裡沒有把歷史發現表述為最新版本仍存在的 bug。

## 可以借鑑什麼

零發現不等於不存在；有原始碼的 fixtures 能驗證分析器覆蓋範圍。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [專案 / 演示](https://github.com/UnknownHacker1/rea-groundtruth)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
