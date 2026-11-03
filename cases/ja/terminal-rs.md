# Terminal (formerly terminal-rs): TradingView インタラクションによって通知されるマーケットターミナル

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** michaelshimeles
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** ログアウトされたパブリックの TradingView チャート ページの動作

## 質問

チャートとの相互作用の調査は、独立した Rust 市場インターフェイスにどのように情報を提供できるでしょうか?

## REAがしたこと

作成者は、パブリック ページのパッシブ キャプチャに REA Web サイト モードを使用しています。調査結果、Evidence ID、および設計への影響は docs/analysis. に記録されます。

## 著者が報告した結果

このプロジェクトは、Rust GPU チャート、キーボード コマンド、パネル レイアウト、および Bloomberg スタイルのインターフェイスによるデータ統合を公開しています。 2026-10-21: のレビュー 151 組み込みインジケーター、パラメーターおよび境界入力テスト、および macOS ユニバーサル リリース スクリプトが追加されました。これらは後の実装変更であり、新しい REA 調査ではありません。 2026-11-03: で確認したところ、リポジトリはターミナルになり、同じ安定したカタログ ID が付けられました。その README には、開示フィード、SnapTrade アカウントのビュー、およびオプトイン取引が文書化されています。これらの実装機能は、REA チャートの動作調査とは別のものです。

## 制限と未検証の主張

Web に表示される動作のみが調査されました。これは、TradingView または Bloomberg ソース コードのリカバリではありません。データ ソース、レート制限、およびデータ使用条件には、個別の制約が課されます。著者は、模擬 brokerage/order テストと、ライブ サービスからのシミュレートされたデータを区別します。このカタログは仲介業者への接続、注文、または現在のデータの正確性の検証を行っていません。古い README コミットは履歴の出所として保持されますが、このレビュー中に HTTP 404 が返されました。

## 何を学ぶか

公開 Web 観察では、バイナリ逆コンパイルと表現されることなく、追跡可能な設計入力を提供できます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> tradingview.com with [REA](https://github.com/morluto/rea) in website mode

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/michaelshimeles/terminal/blob/0690de8c6c86e1939d9226a482ebe7476cc79156/README.md)
- [プロジェクト/デモ](https://github.com/michaelshimeles/terminal)
- [追加ソース 1](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [追加ソース 2](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
