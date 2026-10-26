# Open Claude UI：從桌面互動調查到可複用介面元件

[← 返回全部案例](../../README.zh-TW.md) · 應用實踐

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

- **作者 / 歸屬:** Caho1
- **核對日期:** 2026-10-26
- **收錄狀態:** 已閱讀公開原文，未獨立復跑作者測試。
- **分析目標:** Claude Desktop macOS 安裝包；作者宣告的 @ant/desktop 2.37337.1 基線及捆綁網頁介面

## 想解決什麼問題

輸入法合成、滾動與桌面互動規則，如何轉化為可複用介面元件？

## REA 具體做了什麼

作者將 ASAR、JavaScript AST 與 CSS 調查明確歸於 REA 6.5.0；互動章節把打包程式碼片段與輸入守衛、滾動規則對應，另以 TypeScript 示例實現這些行為。

## 原作者報告的成果

倉庫公開了按版本組織的設計筆記、元件故事書、CSS 令牌和實現示例；RichComposerWithMentions.tsx 包含合成狀態檢查及合成結束後的 Enter 守衛。

## 侷限與未驗證項

這是介面庫和作者報告的拆解，不是完整 Claude 客戶端或模型服務。所讀材料未見原始 REA 會話記錄及獨立行為、視覺等價測試；版本與還原程度仍屬於作者宣告。

## 可以借鑑什麼

把一個互動規則對應到其引用的打包位置和實現，區分設計文件與經過測量的等價性。

## 原文中的 REA 使用證據

短摘錄簡化了排版，完整上下文以原文為準。

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## 原始來源

- [公開原文 / 固定版本證據](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [專案 / 演示](https://github.com/Caho1/open-claude-ui)
- [補充來源 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [補充來源 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [補充來源 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。

<!-- 由案例資料生成；如需更新，請編輯資料檔案。 -->
