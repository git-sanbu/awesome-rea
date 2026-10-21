# OpenBSD netcat: 出荷された ELF の静的解析

[← すべてのケースに戻る](../../README.ja.md) · 分析と評価

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** NullLabTests
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Ubuntu netcat-openbsd 1.234-1 バイナリ

## 質問

出荷された netcat バイナリには、どのネットワーク、プロキシ、セキュリティ関連の実装が含まれていますか?

## REAがしたこと

REA の pwntools レイアウト チェックと Ghidra パスは、クロスチェックに使用される readelf、objdump、nm、および文字列を使用して、同じ画像を分析します。

## 著者が報告した結果

著者は、関数、文字列、コールパスの調査、results.txt、生の JSON 出力を files/. で公開しています。

## 制限と未検証の主張

これは特定のビルドの静的分析です。インポートと疑似コードだけでは、すべての実行時の動作が確立されたり、セキュリティ認定を構成したりするわけではありません。

## 何を学ぶか

結論をレビューできるように、生の REA 出力を独立したツールのチェックと並行して保管します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [プロジェクト/デモ](https://github.com/NullLabTests/OpenBSD_netcat_REA)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
