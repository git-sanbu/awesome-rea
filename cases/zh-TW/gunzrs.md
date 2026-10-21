# GunZRs：先確認加殼邊界，再從遊戲資料重建

[← 返回全部案例](../../README.zh-TW.md) · 遊戲實踐

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** OpenRsG
- **核對日期:** 2026-10-21
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** GunZ: The Duel 的 Steam 安裝、Gunz.exe 與 .mrs 資料歸檔

## 想解決什麼問題

原生主程式被加殼、遊戲邏輯不能靜態讀取時，怎樣界定調查範圍並繼續重建？

## REA 具體做了什麼

透過 REA 與 Ghidra 調查原生檔案；作者記錄 Gunz.exe 的 Themida 節、入口 RVA 和解包樁，並標註本地 REA Evidence 路徑。遊戲格式隨後主要由資料檔案的結構分析恢復；另公開 REA 查詢包裝器和生成 ELF/PE fixture 的分析、快取及失敗傳播檢查。

## 原作者報告的成果

公開 Rust + Bevy 重建、資料格式筆記、查詢指令碼與測試說明；作者報告 Linux 上可玩，支援讀取自有安裝、地圖、動作、機器人、瀏覽器版本和 LAN。框架記錄生成 ELF/PE 的函式分析及 snapshot replay 透過；這些 fixture 檢查與遊戲相容性分別記錄。

## 侷限與未驗證項

不能將遊戲全部功能歸於 REA：主程式被 Themida 加殼，遊戲程式碼未被靜態恢復，部分行為和時序是推斷。原始 Evidence 留在作者本地，公開的是說明和指令碼；Windows/macOS 有 CI 構建測試，但作者未在其上游玩。地圖統計隨筆記範圍不同，未將其作為完整相容證明；未獨立復跑。

## 可以借鑑什麼

分析失敗也能給出有用邊界：明確哪些事實來自二進位制、資料檔案或推斷。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [專案 / 演示](https://github.com/OpenRsG/GunZRs)
- [補充來源 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [補充來源 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [補充來源 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
