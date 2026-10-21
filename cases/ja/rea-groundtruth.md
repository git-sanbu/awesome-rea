# rea-groundtruth: 既知のソースに対して分析の盲点をチェックする

[← すべてのケースに戻る](../../README.ja.md) · 分析と評価

[English](../rea-groundtruth.md) · [简体中文](../zh-CN/rea-groundtruth.md) · [繁體中文](../zh-TW/rea-groundtruth.md) · [日本語](../ja/rea-groundtruth.md) · [한국어](../ko/rea-groundtruth.md) · [Español](../es/rea-groundtruth.md) · [Français](../fr/rea-groundtruth.md) · [Deutsch](../de/rea-groundtruth.md) · [Português (Brasil)](../pt-BR/rea-groundtruth.md) · [Русский](../ru/rea-groundtruth.md) · [العربية](../ar/rea-groundtruth.md) · [हिन्दी](../hi/rea-groundtruth.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** UnknownHacker1
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** MongoDB Compass 1.43.4 および手書きの Electron 治具

## 質問

IPC コールまたはウィンドウがゼロというレポートは、アプリまたは分析ギャップを反映していますか?

## REAがしたこと

REA 6.4.0 は、既知のソースを持つアプリを分析します。さまざまな Webpack ラッパーを使用した最小限の例がコントロールを提供します。

## 著者が報告した結果

著者は、特定の Webpack フォームで欠落していた Electron API を 1 つのコマンドで再現したものを公開し、署名後の ASAR 整合性の不一致がどのように処理されたかを記録しています。

## 制限と未検証の主張

このレポートは、Windows 11 および REA 6.4.0. の特定のビルドに関するものであり、それ以降のバージョンでは問題が修正される可能性があります。このカタログは、過去のバグが最新バージョンにも残っているとは主張していません。

## 何を学ぶか

所見がゼロであっても欠席は証明されません。ソースが既知のフィクスチャは、アナライザーのカバレッジをテストできます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [プロジェクト/デモ](https://github.com/UnknownHacker1/rea-groundtruth)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
