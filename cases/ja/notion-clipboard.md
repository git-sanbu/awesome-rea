# Notion: Electron リッチテキスト クリップボード ブリッジのトレース

[← すべてのケースに戻る](../../README.ja.md) · 公式ショーケース

[English](../notion-clipboard.md) · [简体中文](../zh-CN/notion-clipboard.md) · [繁體中文](../zh-TW/notion-clipboard.md) · [日本語](../ja/notion-clipboard.md) · [한국어](../ko/notion-clipboard.md) · [Español](../es/notion-clipboard.md) · [Français](../fr/notion-clipboard.md) · [Deutsch](../de/notion-clipboard.md) · [Português (Brasil)](../pt-BR/notion-clipboard.md) · [Русский](../ru/notion-clipboard.md) · [العربية](../ar/notion-clipboard.md) · [हिन्दी](../hi/notion-clipboard.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** REA ショーケース チーム;元のプロジェクトの作者が情報源にクレジットされている
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Notion デスクトップ 7.6.1 app.asar および別の時点でキャッシュされた Web エディター モジュール

## 質問

Web エディターはデスクトップのクリップボードを介してリッチ テキストをどのように書き込むのでしょうか?

## REAがしたこと

REA は、タブのプリロードを静的に分析して、コンテキスト ブリッジと IPC の呼び出しを見つけます。バンドルされたコードを直接読み取ることで、クリップボード API、チャネル、メインプロセス レシーバーに入力されます。

## 著者が報告した結果

ショーケースでは、ソース レベルでレンダラー → プリロード → IPC → メインを説明し、独立したモジュール プローブでリッチ テキスト マーカーとマークダウン テーブルを示します。

## 制限と未検証の主張

REA グラフは、完全なクリップボード チャネル チェーンを自動的に解決しませんでした。 Web エディターとデスクトップ パッケージはランタイム サンプルと一致しません。実際の copy/paste は同じバージョンでキャプチャされませんでした。

## 何を学ぶか

REA によって返される個別の構造、手動コード読み取りからの結論、および独立したプローブからの結果。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> The published npm REA 4.1.0 package inspected the saved tab preload on 7 October 2026

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md)
- [プロジェクト/デモ](https://rea.tools/showcase/notion/)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
