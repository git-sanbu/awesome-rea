# 西班牙語 REA 實驗：重建作者自有的金鑰校驗器

[← 返回全部案例](../../README.zh-TW.md) · 學習與復現

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** harkiventures
- **核對日期:** 2026-10-26
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 作者自編教學程式 licencia-cli.stripped 及帶符號參考版本

## 想解決什麼問題

如何從小型無符號程式恢復接受規則，並與原始程式核對？

## REA 具體做了什麼

作者報告使用 REA 與 Ghidra 返回的虛擬碼，以及從 0x102040 讀取的位元組，恢復字元轉換、加權累積、迴圈移位和接受條件，再編寫獨立 Python 校驗器。

## 原作者報告的成果

免費西班牙語樣例包含實驗環境搭建、完整案例、無符號與帶符號練習二進位制、參考 C 原始碼及重建的 Python 校驗器；校驗器列出 4 個預期樣例，作者報告已與真實二進位制比較。

## 侷限與未驗證項

練習物件是作者自有的小型無保護程式，不是商業授權繞過，也不代表對受保護軟體普遍有效。4 個樣例只是有限檢查，不是窮盡等價驗證；本目錄未執行二進位制或復跑比較，計劃中的完整課程尚未交付。

## 可以借鑑什麼

用自有樣本和暫時隱藏的參考原始碼恢復一個有邊界的規則，先測試接受與拒絕輸入，再對照原始碼。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [專案 / 演示](https://github.com/harkiventures/rea-muestra-gratuita)
- [補充來源 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [補充來源 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [補充來源 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
