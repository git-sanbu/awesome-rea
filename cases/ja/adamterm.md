# AdamTerm: Ghostty のシェルを調査し、端末を構築しています

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** AdamLinCodes
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Ghostty 1.3.1 macOS アプリバンドル

## 質問

ターミナルコア、ネイティブウィンドウ、メニュー、サービスはどのように分割されていますか?

## REAがしたこと

REA は、Mach-O、plist、署名、Objective-C メタデータ、Interface Builder、およびダイナミック ライブラリ解決を検査します。このパスは Hopper または Ghidra を使用しませんでした。

## 著者が報告した結果

著者は、AppKit、SwiftTerm、およびネイティブ タブを備えた小型の macOS ターミナルを構築し、セルフチェック コマンドを提供します。

## 制限と未検証の主張

Ghostty の Zig コアを再構築するのではなく、SwiftTerm を使用します。分割ペイン、検索バー、設定ファイル、クイック ターミナルは実装されていません。

## 何を学ぶか

パッケージのメタデータとインターフェイス リソースは、深い逆コンパイルの前に、アーキテクチャに関するいくつかの質問に答えることができます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [プロジェクト/デモ](https://github.com/AdamLinCodes/AdamTerm)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
