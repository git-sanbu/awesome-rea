# VSL-DSP：把廠商庫分析用於音效卡 DSP 工具

[← 返回全部案例](../../README.zh-TW.md) · 硬體與相容

[English](../vsl-dsp.md) · [简体中文](../zh-CN/vsl-dsp.md) · [繁體中文](../zh-TW/vsl-dsp.md) · [日本語](../ja/vsl-dsp.md) · [한국어](../ko/vsl-dsp.md) · [Español](../es/vsl-dsp.md) · [Français](../fr/vsl-dsp.md) · [Deutsch](../de/vsl-dsp.md) · [Português (Brasil)](../pt-BR/vsl-dsp.md) · [Русский](../ru/vsl-dsp.md) · [العربية](../ar/vsl-dsp.md) · [हिन्दी](../hi/vsl-dsp.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** grisuno
- **核對日期:** 2026-10-16
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** PreSonus Universal Control 的 libucnet.so 與 libfatchannelplugins.so

## 想解決什麼問題

廠商控制程式如何發現裝置、註冊引數和表示增益？

## REA 具體做了什麼

透過 LazyOwn 的 rea 擴充套件驅動 REA + Ghidra 分析廠商庫，保留 Evidence envelope 並形成協議與引數規格。

## 原作者報告的成果

作者將調查結果用於 dB 命令、引數命名和線性/dB 轉換，並提供 CMocka 測試。

## 侷限與未驗證項

REA 的作用限定為部分廠商庫發現與後續改進，不應把整個驅動歸功於 REA；mute wire code 沒有恢復。

## 可以借鑑什麼

協議調查適合補齊現有專案中的具體缺口，未知控制碼要保持未知。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> lazyaddon, which drives REA (Reverse Engineer Anything) with Ghidra 12.1.4

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md)
- [專案 / 演示](https://github.com/grisuno/VSL-DSP)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
