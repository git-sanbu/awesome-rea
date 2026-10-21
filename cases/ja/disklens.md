# DiskLens: リリースされたバイナリでのディスク スキャンおよびツリーマップ アルゴリズムのチェック

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** KarlssonChristoffer
- **ソースレビュー日:** 2026-10-19
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** WinDirStat 2.5.0 Windows 実行可能ファイルおよびパブリック ソース

## 質問

新しいインターフェイスを構築する前に、ディスク スキャン、ツリーマップ、重複検出をどのようにチェックできますか?

## REAがしたこと

Claude Code は、インストールされた WinDirStat.exe で REA および Ghidra を使用して、ディレクトリの列挙、NTFS MFT リーダー、ツリーマップのデフォルト、および SHA-512 の重複排除を確認します。著者は、アルゴリズムの詳細は主にソースを読むことから得たと述べています。 REA はリリースされたバイナリをチェックし、調査を指導しました。

## 著者が報告した結果

このプロジェクトは、Rust エンジン、Tauri/Svelte インターフェイス、および REA Evidence ID を公開します。著者は、24 エンジン テストと、1 台のマシン上で約 1.3 百万個のファイルの scan/treemap チェックを報告しています。

## 制限と未検証の主張

作成者は、生成されたコードを明示的にレビューしませんでした。いくつかのファイル操作とシステム統合には、リアル UI チェックがありません。高速 MFT スキャンが存在せず、ハード リンクが二重にカウントされます。一部のアルゴリズムは GPL ソースを直接移植しているため、これはクローズド ソース ソフトウェアをクリーンルームで再構築したものではありません。単一マシンのタイミングは、制御されたパフォーマンスの比較ではありません。

## 何を学ぶか

バイナリの観察とソースの読み取りを個別に属性化し、どのファイル操作が実際にテストされたかを記載します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [プロジェクト/デモ](https://github.com/KarlssonChristoffer/DiskLens)
- [追加ソース 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
