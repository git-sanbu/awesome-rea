# PicoPrint: モバイル サーマル プリンターを Windows 印刷に接続する

[← すべてのケースに戻る](../../README.ja.md) · ハードウェアと互換性

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** bigtower17
- **ソースレビュー日:** 2026-10-19
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** LX-D02 Bluetooth サーマル プリンターおよび Funny Print React Native Android アプリ

## 質問

ドライバーが接続しても印刷できない場合、ハンドシェイクの違いはどのようにして見つけられるのでしょうか?

## REAがしたこと

REA ディスカッション #4152 で、著者は、REA 6.5.0 が医師、ADB デバイス チェック、および Android 調査エントリ ポイントを提供したと述べています。実際の Hermes バイトコードの逆コンパイルには hermes-dec が使用されます。プロトコル推論とトラフィック比較は、REA のみの作業ではありませんでした。

## 著者が報告した結果

著者は、サーモプリントベースの Go 印刷サービスとプロトコル ノートを公開し、実際の LX-D02 を使用した Windows 11 でのテキスト、画像、ドキュメントの Ctrl+P 印刷とアップストリーム ハンドシェイクの修正を報告しています。

## 制限と未検証の主張

ワンクリック インストーラー、トレイ ステータス、自動再接続のない初期のプロジェクト。この議論では、当時、REA がこのターゲットの Hermes 分析ステップをカバーしていなかったことが明示的に指摘されています。 1 つのデバイスと OS では、すべてのファームウェアまたは Windows バージョンとの互換性が確立されるわけではありません。

## 何を学ぶか

接続と印刷を区別し、各ツールで処理された正確な手順を記録します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> used to analyse the Android app.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [プロジェクト/デモ](https://github.com/bigtower17/picoprint)
- [追加ソース 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [追加ソース 2](https://github.com/morluto/rea/discussions/4152)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
