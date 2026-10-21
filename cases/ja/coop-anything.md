# Co-op Anything: キャンペーンのマルチプレイヤー エントリ ポイントを調査しています

[← すべてのケースに戻る](../../README.ja.md) · ゲーム

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** cranebeaker and community contributors
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Steam C&C3 Tiberium Wars / Kane’s Wrath ビルドおよび World in Conflict client/dedicated サーバー

## 質問

2 人目のプレイヤーを参加させながら、キャンペーンのスクリプトとサイドを維持するにはどうすればよいでしょうか?

## REAがしたこと

C&C3 ノートは、TW 1.10 実行可能ファイルの REA/Ghidra 12.1.4 観察を明示的に記録し、multiplayer/skirmish の準備中にキャンペーン側を削除する関数を特定します。 World in Conflict ノートは、REA/Ghidra による専用サーバーの役割選択分析を文書化し、シングルプレイヤーの制限、サーバーの状態、未検証の推論を分離します。他のスクリプト、デバッガー、およびランタイム テストは、後の作業を処理します。

## 著者が報告した結果

このプロジェクトは、MCP/スキル、同期テスト ツール、およびゲーム固有の研究を公開しています。 C&C3 メモには、アドレス、形式、実験が含まれます。 World in Conflict の場合、作成者は、2 番目のクライアントが参加してライブ同期ユニットを表示している間、LAN キャンペーン ホストがミッションを実行していると報告していますが、独自のユニットを制御できません。各ゲームには独自の QA レベルが保持されます。

## 制限と未検証の主張

REA の帰属は、ディレクトリ内のすべての MOD ではなく、レビューされた C&C3 および World in Conflict の調査に限定されます。 World in Conflict では、プレーヤー 2 のコントロール、展開ゾーン、可視性、およびインターネット プレイが未完成のままです。レポートは LAN のみを検証します。 C&C3 にも、未解決のキャンペーンの失敗とコンテキストの問題があります。 Stars は、完了可能なキャンペーンであることを証明しません。このカタログではゲームやテストは実行されませんでした。

## 何を学ぶか

クライアント接続、同期された可視性、および真にプレイ可能な協力プレイを個別の結果として検証します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [プロジェクト/デモ](https://github.com/cranebeaker/coop-anything)
- [追加ソース 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [追加ソース 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
