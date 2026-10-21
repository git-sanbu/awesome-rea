# sparkDash: REA 分析をマルチデバイス ダッシュボードに統合

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** MiaAI-Lab
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** REA CLI、リモート Linux デバイス上の入力ファイルおよび analysis/Evidence ビュー

## 質問

Web インターフェイスは、長時間実行されるリモート REA ジョブを送信し、オンデマンドで大量の結果を読み込むにはどうすればよいでしょうか?

## REAがしたこと

このプロジェクトは実際に、CLI を通じてアップストリーム REA を呼び出し、試薬 6.4.0 とそのロックファイルを固定します。 server/rea は、切り離されたジョブ、アップロード、ステータス、ページングされた結果、およびエクスポートを実装します。コマンドは、検査、分析、表示および比較を実行します。ダッシュボードには逆コンパイラーが実装されていません。

## 著者が報告した結果

公開ツール → REA ページとサーバー実装は、分離されたリモート実行、ログ、概要、limitations/unknowns、オンデマンド ビュー、JSON エクスポート、および Evidence 比較をサポートします。バージョンの固定、ジョブ管理、およびアップロードのテストは公開されています。含めるには、インストール手順だけではなく、実装された統合が関係します。

## 制限と未検証の主張

これは統合のケースであり、sparkDash の REA の再構築や、すべての上流の分析パスがハードウェアの承認に合格したことの証明ではありません。デバイスは Linux を実行する必要があり、この機能はデフォルトでオフになっており、ターゲット形式には追加のプロバイダーが必要です。レビューされたマネージャー テストでは偽の REA とローカル シェルが使用されており、本物の Ghidra やリモート デバイスのテストは置き換えられません。このカタログはインストールまたは実行しませんでした。

## 何を学ぶか

スケジューリングや UI 作業とは別にアップストリーム機能を属性化し、表示された結果の証拠、制限、および失敗を保存します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> sparkDash uses the CLI only

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [プロジェクト/デモ](https://github.com/MiaAI-Lab/sparkDash)
- [追加ソース 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [追加ソース 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [追加ソース 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [追加ソース 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
