# Sketch (formerly paper-rs): Paper からインスピレーションを得た Rust 無限キャンバス

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** michaelshimeles
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Paper デスクトップ デザイン アプリケーションの動作

## 質問

キャンバス、レイアウト、エディターの相互作用は、独立したデザイン ツールにどのように情報を提供できるのでしょうか?

## REAがしたこと

著者は、wgpu、winit、egui を使用して別の Rust アプリを実装する前に、REA と Claude Code を使用して Paper のデスクトップ動作を調査したと述べています。

## 著者が報告した結果

このプロジェクトは、無限のキャンバス、ページ、レイアウト、ベクター編集、ホワイトボード、MCP インターフェイスを、テストと機能の違いとともに公開しています。 2026-10-21: でレビューされ、現在は Sketch という名前になっており、sketch-rs 実行可能ファイル、古いプロジェクト ディレクトリの初回起動移行、古いファイルと環境変数との互換性が含まれています。残り1件です。

## 制限と未検証の主張

作者は、実際の macOS ハードウェアでそれを起動していないことを明示的に示しました。一部の特徴は近似されているか、欠落しています。包含は著者の公開帰属に依存しており、Paper との同等性が検証されていません。

## 何を学ぶか

独立した実装の境界を示しながら、動作と相互作用の契約について学びます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> by studying the behavior of the Paper desktop app with REA and Claude Code

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [プロジェクト/デモ](https://github.com/michaelshimeles/paper-rs)
- [追加ソース 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
