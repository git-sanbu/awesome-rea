# iCSee localmod：追蹤攝像頭命令並保留原廠驅動

[← 返回全部案例](../../README.zh-TW.md) · 硬體與相容

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Vittuu
- **核對日期:** 2026-11-03
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 一臺 XM530V200 / IPG-X2-WQ-BL 攝像頭及原廠 Sofia 應用

## 想解決什麼問題

如何利用原生命令調查實現本地控制，同時保留可用驅動和 SD 錄影？

## REA 具體做了什麼

REA 6.8.0 與 Ghidra 透過 Sofia 命令字串及交叉引用追蹤燈光、雲臺處理函式。公開流程記錄了特定二進位制的地址線索；協議響應與物理行為另行驗證。

## 原作者報告的成果

作者公開了本地 C 面板/API、原始碼與 Home Assistant 示例。裝置所有者報告了雲臺、白燈實測、音影片解碼、重啟持久化及原生 WFS 錄影繼續工作。另一個公開模擬後端記錄列出 22 項透過測試，並明確 hardware_tested=false。

## 侷限與未驗證項

完整韌體、反編譯內容和私人 Evidence 包未公開。硬體結果是單臺裝置的所有者報告；模擬測試不能驗證刷寫或物理行為。這是原廠韌體擴充套件，沒有通用映象、完整對講或實測延遲改善。刪除路由的防護不等於防火牆，本目錄未測試裝置。

## 可以借鑑什麼

先追蹤一個限定命令，再核對認證響應，並分別驗證物理動作與重啟永續性。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [專案 / 演示](https://github.com/Vittuu/icsee-localmod)
- [補充來源 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [補充來源 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [補充來源 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
