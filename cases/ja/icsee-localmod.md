# iCSee localmod: ストックドライバーを保持しながらカメラコマンドをトレースします

[← すべてのケースに戻る](../../README.ja.md) · ハードウェアと互換性

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Vittuu
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** 1 台の XM530V200 / IPG-X2-WQ-BL カメラとそのストック Sofia アプリケーション

## 質問

ネイティブ コマンドの研究により、動作するドライバーと SD 録画を維持しながら、ローカル カメラの制御を有効にするにはどうすればよいでしょうか?

## REAがしたこと

REA 6.8.0 および Ghidra は、Sofia コマンド文字列と、照明および PTZ ハンドラーへの相互参照をトレースしました。公開されたワークフローは、バイナリ固有のアンカーを記録します。プロトコル応答と物理的動作は個別に検証されました。

## 著者が報告した結果

著者は、ローカル C panel/API、ソース、および Home Assistant のサンプルを公開しています。所有者は、物理 PTZ および白色 LED チェック、デコードされた audio/video、ブート持続性、および独立した再起動後のネイティブ WFS 記録の継続を報告します。別の公開シミュレート バックエンド レコードには、22 がテストに合格したことがリストされており、明示的に hardware_tested=false と記載されています。

## 制限と未検証の主張

完全なファームウェア、逆コンパイル、プライベート Evidence バンドルは公開されていません。ハードウェア結果は 1 台のユニットの所有者レポートです。シミュレートされたテストでは、ファームウェアのインストールや物理的な動作は検証されません。これはストック ファームウェアの拡張機能であり、ユニバーサル イメージ、完全なインターコム、測定された遅延の改善はありません。ルート削除ガードはファイアウォールではありません。このカタログはデバイスをテストしていません。

## 何を学ぶか

制限されたコマンドをトレースし、認証された応答を確認し、物理的なアクションと永続性を別の手順として検証します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [プロジェクト/デモ](https://github.com/Vittuu/icsee-localmod)
- [追加ソース 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [追加ソース 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [追加ソース 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
