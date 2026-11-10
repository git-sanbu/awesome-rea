# DESIGN:OS Studio: Figma の .fig を読み書きする独立したデスクトップスタジオ

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** jangtrinh
- **ソースレビュー日:** 2026-11-10
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Figma Desktop と Figma の .fig コンテナ形式（fig-kiwi、書き出しは version 106）

## 質問

独立したデスクトップスタジオで、Figma の .fig コンテナを読み書きし、エディタの振る舞いを再実装するにはどうすればよいか。

## REAがしたこと

公開仕様は、Figma フィールドのリバースエンジニアリングに morluto/rea 6.7.0（`npx -y rea-agents`）を使うと述べ、抽出したエディタ JavaScript に対して analyze-javascript-application を実行したと記録している。同じ説明では wasm 経路が当時利用できなかった（WABT と Ghidra が未導入）ため、kiwi スキーマはローカルの読み取り器で復号したとある。リポジトリに残された報告には、完了した inspect-macho および analyze-javascript-application の rea CLI 出力と、失敗した呼び出しも含まれる。製品 README は REA に言及していない。

## 著者が報告した結果

DESIGN:OS Studio は公開済みのデスクトップスタジオ（確認した版は v0.7.11）で、Figma の .fig コンテナを読み、コンテナ version 106 を書き出し、エディタの振る舞いをローカルで再実装し、39 ツールの stdio MCP サーバと多言語コード生成を同梱する。README は macOS CI 上の 6,000 件超のテストと designos-fig の往復テストを記している。メンテナは、この Figma 作業に REA を使ったと述べている。本カタログは公開仕様、チェックインされた rea 出力、README を確認した。スタジオはインストールしておらず、rea も再実行していない。

## 制限と未検証の主張

製品 README は REA をクレジットしていない。記録された rea 実行の一部は失敗している（未知のコマンド、または未設定のネイティブ分析プロバイダ）。他のメモで言及される完全なセッション下書きはリポジトリ外にある。既知の問題 #834 は未解決のままである。 .fig を保存すると番号付きリストの書式が落ち、インスタンス上の継承または変数バインドされた塗りが固定値として書き出される。ライセンスは PolyForm Shield 1.0.0（ソース利用可能であり、オープンソースライセンスではない）。本カタログは .fig 互換性を独自に再現しておらず、テストスイートも再実行していない。

## 何を学ぶか

REA の使用は、製品 README が沈黙していても、プロジェクト仕様とチェックインされた CLI 証拠に残ることがあり、REA の wasm 経路が使えないときは混合ワークフローでもローカルの代替が必要になり得る。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [プロジェクト/デモ](https://github.com/jangtrinh/design-os-studio)
- [追加ソース 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [追加ソース 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [追加ソース 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
