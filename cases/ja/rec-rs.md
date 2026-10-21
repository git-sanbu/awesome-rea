# rec-rs: OBS からインスピレーションを得たネイティブ macOS レコーダー

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../rec-rs.md) · [简体中文](../zh-CN/rec-rs.md) · [繁體中文](../zh-TW/rec-rs.md) · [日本語](../ja/rec-rs.md) · [한국어](../ko/rec-rs.md) · [Español](../es/rec-rs.md) · [Français](../fr/rec-rs.md) · [Deutsch](../de/rec-rs.md) · [Português (Brasil)](../pt-BR/rec-rs.md) · [Русский](../ru/rec-rs.md) · [العربية](../ar/rec-rs.md) · [हिन्दी](../hi/rec-rs.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** michaelshimeles
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** OBS Studioのアーキテクチャと動作

## 質問

焦点を合わせたスクリーン、カメラ、オーディオレコーダーはどのように構築できますか?

## REAがしたこと

著者は、Rust と Apple フレームワークを使用して独立したツールを構築する前に、OBS を調査するために REA と Claude Code を使用したと述べています。

## 著者が報告した結果

このプロジェクトは、screen/camera 録音、オーディオ ミキシング、リプレイ バッファー、およびストリーミング機能を公開します。著者は、Apple Silicon Mac での開発とテストを報告します。 2026-10-21 README には、Apple Silicon + Intel ユニバーサル リリース、signing/notarization、および Sparkle アップデートが追加されます。

## 制限と未検証の主張

macOS 15+. が必要 報告されたハードウェアは Apple Silicon M4 Pro のままです。 Intel のダウンロードおよびビルド手順では、実際の Intel Mac での記録は検証されません。これは範囲を限定した実装であり、完全な OBS の置き換えやクロスプラットフォームの再構築ではありません。このカタログではそれを再掲載しませんでした。

## 何を学ぶか

特定のユースケースに必要なアーキテクチャを抽出し、それに基づいて小規模な製品を構築します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> by studying its architecture and behavior with REA and Claude Code

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [プロジェクト/デモ](https://github.com/michaelshimeles/rec-rs)
- [追加ソース 1](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
