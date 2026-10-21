# Aegis：從 Android APK 找出動態驗證碼演算法

[← 返回全部案例](../../README.zh-TW.md) · 官方案例

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** REA 官方案例團隊；原專案作者見來源
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Aegis Authenticator 3.4.3 Android APK

## 想解決什麼問題

每 30 秒變化的六位登入碼是怎麼計算的？

## REA 具體做了什麼

REA Android 分析定位生成、顯示和複製相關方法，閱讀 HOTP/TOTP 計算，再編寫可調整時鐘的瀏覽器演示。

## 原作者報告的成果

官方頁面報告：提取方法與獨立實現對照 133 個用例，並核對 RFC 6238 的六個 SHA-1 參考樣例。

## 侷限與未驗證項

範圍是驗證碼生成計算；不代表完成金鑰庫、加密儲存或整款應用的重建。本倉庫沒有復跑這些用例。

## 可以借鑑什麼

選一個可獨立驗證的小功能，用公開標準測試向量約束實現。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Inspected with REA 6.1.0 on 9 October 2026.

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [專案 / 演示](https://rea.tools/showcase/aegis/)
- [補充來源 1](https://github.com/beemdevelopment/Aegis)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
