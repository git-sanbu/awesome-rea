# Ledger Reborn: QuickBooks の調査に基づいたローカル台帳

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../ledger-reborn.md) · [简体中文](../zh-CN/ledger-reborn.md) · [繁體中文](../zh-TW/ledger-reborn.md) · [日本語](../ja/ledger-reborn.md) · [한국어](../ko/ledger-reborn.md) · [Español](../es/ledger-reborn.md) · [Français](../fr/ledger-reborn.md) · [Deutsch](../de/ledger-reborn.md) · [Português (Brasil)](../pt-BR/ledger-reborn.md) · [Русский](../ru/ledger-reborn.md) · [العربية](../ar/ledger-reborn.md) · [हिन्दी](../hi/ledger-reborn.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** lxistired
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** QuickBooks Mac 用デスクトップ

## 質問

デスクトップ会計ワークフローはどのようにして独立したローカル アプリに情報を提供できるのでしょうか?

## REAがしたこと

著者は、QuickBooks の調査は REA によるものであると考え、ローカル SQLite 会計エンジンとデスクトップ インターフェイスを実装し、CASE_STUDY を公開します。

## 著者が報告した結果

このプロジェクトは、プレビュー パッケージ、ソース、ケース スタディを公開しています。著者は、実装された請求書、支払い、在庫、銀行調整、およびレポートのワークフローをリストします。

## 制限と未検証の主張

まだプレビューです: シングル ユーザー、1 台のマシン、USD のみ。給与計算、納税申告、オンライン バンキング、複数通貨、および QuickBooks ファイルの完全な移行は実装されていません。包括的な相互作用やピクセルの同等性は検証されていません。

## 何を学ぶか

研究を検査可能なビジネス ワークフローに変換し、財務ルールとサポートされていない業務を文書化します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> We used REA to investigate QuickBooks Desktop for Mac and independently implement a desktop accounting tool.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md)
- [プロジェクト/デモ](https://github.com/lxistired/ledger-reborn)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
