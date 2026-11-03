# Eleven: エージェント駆動のデスクトップ ワークベンチを REA に接続する

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Zfinix
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** REA/Ghidra および ACP エージェント デスクトップ ワークベンチによるネイティブ バイナリ分析

## 質問

共有ワークベンチにナビゲーションと編集可能な注釈を表示したままにして、エージェントがバイナリを検査するにはどうすればよいでしょうか?

## REAがしたこと

エンジンは REA MCP を起動し、open_binary ビューとプロシージャ ビューを呼び出します。別のプロキシは、REA 注釈書き込みツールを保留しながら分析ツールを転送し、履歴が表示される Eleven プロジェクト ツールを通じてそれらの変更を指示します。

## 著者が報告した結果

パブリック出力には、デスクトップ アプリケーション ソース、MCP ツールのドキュメント、プロジェクトの注釈、パッチ提案パスに加え、エージェントに UI で /bin/ls 関数を開くように求める作成者提供のライブ エージェント テストが含まれます。 README および上流のショーケースでは、機能するワークベンチについて説明します。

## 制限と未検証の主張

カタログは、実行されたテストのレシートやインストールされたリリースではなく、ソースとテストの定義を検査しました。デスクトップ プラットフォームのサポート、デバッガの動作、キャッシュの高速化、バイナリ解析の完全性は個別にチェックされていません。 Rizin、jadx、およびその他のパスは別個のエンジンです。その結果は REA に起因するものではありません。上流のショーケースのタイミングは作成者の観察であり、カタログのベンチマークではありません。

## 何を学ぶか

分析パススルーをプロジェクト編集から分離し、作成者と元に戻す履歴を表示したままにして、実行可能なテストと観察されたテスト結果を区別します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [プロジェクト/デモ](https://github.com/Zfinix/eleven)
- [追加ソース 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [追加ソース 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [追加ソース 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [追加ソース 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
