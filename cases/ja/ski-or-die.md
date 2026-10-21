# Ski or Die: Rust で Snowball War を再構築します

[← すべてのケースに戻る](../../README.ja.md) · ゲーム

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** tuunanet
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** DOS 版 Ski or Die の Snowball War ミニゲーム

## 質問

スロー、衝突、スポーン、およびスコアリングのルールを DOS ゲームからどのように復元できるでしょうか?

## REAがしたこと

REA CLI および Ghidra 16-bit アダプターは、解凍された MZ ロード イメージを検査します。呼び出し元が宣言したコード シードと trace/function/search クエリによってモジュールが調査されます。

## 著者が報告した結果

著者は、プレイ可能な Rust + SDL2 の再構成、動作仕様、リバース エンジニアリング メモ、およびアセット抽出ツールを公開しています。

## 制限と未検証の主張

Snowball War のみが再構築されます。オーディオの再生や、実行中のオリジナルの DOS との並べての比較はありません。フレーム レートと PRNG の動作は近似値です。アセットは読者自身のゲームコピーから取得する必要があります。

## 何を学ぶか

書き換える前にアドレスに基づいた動作仕様を作成し、それぞれの近似値にラベルを付けます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Every analysis call therefore ran through the REA CLI

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [プロジェクト/デモ](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
