# Desktop Games: デスクトップ おもちゃを macOS とブラウザに移植する

[← すべてのケースに戻る](../../README.ja.md) · ゲーム

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** ucodia
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Gemtree の 2000 デスクトップ ゲーム / ストレス軽減プログラム Windows プログラム

## 質問

Peter インタプリタ、プログラム ツリー、インタラクション、アセットをどのように理解して移植できるでしょうか?

## REAがしたこと

筆者はClaude Code、REA、Ghidraを使用しています。 REA は、インタプリタで画像圧縮、リソース レイアウト、タイミング、スプライトの動き、サウンド、座標を調査します。 Python ツールはプログラム ツリーとアセットを処理します。

## 著者が報告した結果

パブリック リポジトリには、Swift macOS バージョン、ブラウザ バージョン、逆コンパイルされたプログラム ツリー、およびアセット処理スクリプトが含まれています。

## 制限と未検証の主張

作成者は元のパレットの代わりにトゥルー カラーを使用し、影のレンダリングを変更します。含めることは、サードパーティ資産の完全な互換性または再配布権を検証するものではありません。

## 何を学ぶか

インタプリタが組み込まれたソフトウェアの場合、インタプリタ、プログラム ツリー、アセットを区別します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> The interpreter was decompiled with REA

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [プロジェクト/デモ](https://github.com/ucodia/desktop-games-nostalgia)
- [追加ソース 1](https://ucodia.github.io/desktop-games-nostalgia/)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
