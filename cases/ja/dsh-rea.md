# dsh-rea: MCP コントラクトを保持しながら、オンデマンドでツールを公開する

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** JeremyWangCY
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** REA 6.8.0 MCP DeepSeek Harness 内のツール、プロンプト、およびスキル

## 質問

アダプターは、各エージェントのリクエストから未使用のスキーマを排除しながら、アップストリーム ツールのコントラクトをどのように保持できるでしょうか?

## REAがしたこと

アダプターは、固定されたアップストリームの MCP 実行可能ファイルを DSH ブリッジ経由で起動し、プロンプトと完了のために接続を共有し、エージェントごとのツール マスクを使用します。 /rea コマンドはカタログとスキルを表示します。 /rea of​​f はそれらを再び非表示にします。

## 著者が報告した結果

著者は、アダプター コード、スキーマ測定、および 229 ツールをリストした制限付き差分レポートと、ネイティブ モードと PTC モードでの決定的呼び出しの比較を公開しています。測定されたモデル入力カタログは 273、264 バイトです。これはスキーマ ペイロードの測定であり、LLM トークンやコスト ベンチマークではありません。

## 制限と未検証の主張

リポジトリには、合格比較レポートと、検証コマンドの Windows integrity_mismatch エラーに関する別のドキュメントが含まれています。カタログ管理者は、Windows での検証実行が成功したことを確認していません。ツール定義が一致しても、すべてのツールが実行されたことを意味するわけではありません。報告された比較は、ネイティブ エンジン、ライブ キャプチャ、またはすべてのプロバイダーをカバーしておらず、同等の言語モデル応答を確立していません。カタログ管理者はこれらのテストを実行しませんでした。

## 何を学ぶか

スキーマと完全な決定論的な結果エンベロープを比較し、過去の合格記録を保持し、現在の障害を個別に開示します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> REA is an exact npm dependency, not a reimplementation.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [プロジェクト/デモ](https://github.com/JeremyWangCY/dsh-rea)
- [追加ソース 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [追加ソース 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [追加ソース 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [追加ソース 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [追加ソース 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
