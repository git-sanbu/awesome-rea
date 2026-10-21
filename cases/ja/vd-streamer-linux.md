# Virtual Desktop Streamer: 置換プラットフォーム層を介した Linux ポート

[← すべてのケースに戻る](../../README.ja.md) · ハードウェアと互換性

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** cudanexus
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** 公式 Virtual Desktop macOS および Windows インストール パッケージ

## 質問

プロトコル ライブラリを保持したまま、キャプチャ、エンコード、オーディオ、入力を Linux に移行するにはどうすればよいですか?

## REAがしたこと

著者は、Claude Code と REA が両方のパッケージを分析すると述べています。リーダーによって提供される macOS プロトコル ライブラリが再利用され、Linux プラットフォーム層が書き換えられます。

## 著者が報告した結果

パブリック Linux ポートには、ソース、ビルド手順、および PipeWire/X11、GStreamer、および uinput を使用したシミュレートされたヘッドセット テストが含まれています。

## 制限と未検証の主張

実際のヘッドセット、Wi-Fi、または GPU エンコーダーのテストは実行されませんでした。 Windows ストリーマーの SteamVR/OpenXR ゲーム機能はサポートされていません。ベンダーのプロトコル ライブラリに依存しているということは、これが完全に独立したプロトコルの書き換えではないことを意味します。

## 何を学ぶか

互換性作業はプラットフォームの境界に重点を置き、シミュレートされたデバイスのテストと実際のハードウェアの受け入れを区別します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [プロジェクト/デモ](https://github.com/cudanexus/vd-streamer-linux)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
