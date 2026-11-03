# REA Studio: ローカル Web UI での MCP ツールと記録された Evidence の表示

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** theyishaik-lab
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** REA MCP ツール検出、スキーマ生成フォーム、および小規模な C、JavaScript、Python サンプル

## 質問

ローカル インターフェイスは、インストールされている REA ツールを公開し、その証拠と制限を読み取れるようにするにはどうすればよいでしょうか?

## REAがしたこと

バックエンドは、stdio MCP を介して REA を起動し、tools/list をページ分割し、進行信号とキャンセル信号を含む tools/call を転送します。記録スクリプトは、小さなサンプル アーティファクトに対して REA を呼び出し、別の静的デモ ビルド用に結果を保存します。

## 著者が報告した結果

パブリック ソースには、ローカル Web インターフェイス、スキーマ駆動の入力、履歴、Evidence ビューが含まれます。チェックインされたデモ アーティファクトは、REA 6.8.0 を識別し、229-tool カタログと 9 記録されたサンプル実行 (8 完了、1 エラー) を提供します。サポートされていないデモ アクションは、明示的な未記録エラーを返します。

## 制限と未検証の主張

ホストされたデモでは、保存された応答とシミュレートされた進行状況が再生されます。アップロードはブラウザ内に留まり、分析されません。録画は著者によって公開されたものであり、独立した再放送ではありません。ローカル使用では、ホスト ファイル上のツールを呼び出すことができ、構成されたプロバイダーに依存します。カタログはバックエンドのインストールやテストを行っておらず、セキュリティ監査も確立していません。

## 何を学ぶか

ライブ ツール スキーマからフォームを生成し、結果ビューの制限を維持し、記録されたデモとライブ分析を明確に区別します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [プロジェクト/デモ](https://github.com/theyishaik-lab/rea-studio)
- [追加ソース 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [追加ソース 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [追加ソース 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [追加ソース 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
