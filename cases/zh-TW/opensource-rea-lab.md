# Open-source REA Lab：固定 npm 包後只分析入口切片

[← 返回全部案例](../../README.zh-TW.md) · 分析與評測

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** martinlofranodeoliveira
- **核對日期:** 2026-10-19
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** 官方 npm rea-agents 6.4.0 包的 package.json 與 scripts/rea.mjs

## 想解決什麼問題

怎樣先固定釋出物身份，再在有限預算裡回答入口檔案做什麼？

## REA 具體做了什麼

獨立 Python 審計器先檢查壓縮包結構與 hash；REA 靜態分析從已核對包提取的兩個原樣檔案。入口分支的語義說明還結合人工語法檢查，不能把獨立審計器或人工結論歸為 REA 輸出。

## 原作者報告的成果

公開固定摘要、審計 JSON、脫敏 Evidence 摘要和復現指令碼；切片報告 1 個已解析 JS、469 AST 節點、14 條 findings、零解析失敗，並明確完整包分析曾因語義擴充套件而中斷。

## 侷限與未驗證項

14 條 findings 不是漏洞數；切片保留 110 個語義未知項，缺失 dist 實現，不能推出完整包安全或執行正確。脫敏摘要不是可重放的 canonical Evidence，完整包僅有部分覆蓋；本倉庫未復跑。

## 可以借鑑什麼

縮小問題與輸入邊界，保留中斷和未知項；結構檢查、位元組身份與執行安全是不同結論。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> Can REA statically parse the actual shipped dispatcher?

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [專案 / 演示](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [補充來源 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [補充來源 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
