# App X-Ray: REA の結果を共有可能なアプリ レポートに変換

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Eliot5566
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** オープンソース Electron アプリケーション ソース (追加の APK、ネイティブ バイナリ、モデル ファイル パスを含む)

## 質問

静的な REA の証拠は、どのようにして読みやすいコンポーネント レポートやバージョン間の差分になるのでしょうか?

## REAがしたこと

この統合は、固定された REA 6.7.0 CLI 操作を呼び出し、JSON Evidence を解析します。 JavaScript 分析バッチは、インポート解像度を維持するためにファイルを同じルートに保持します。 Electron ヒューズ検査は、別の REA 操作です。

## 著者が報告した結果

このプロジェクトは、レポートの生成、ルール、CI の差分、およびギャラリーを公開します。その日付の week-5 レポートには、20 Electron アプリがスキャンされ、すべての 20 のバージョンが見つかり、そのコンテナーで 60 秒以内に 18 スキャンが行われたと記載されています。 REA-Bench は、20-app コーパス全体のレポートから派生した 54 の質問を提供します。

## 制限と未検証の主張

これらは作成者によって報告された日付の古いスキャンであり、現在の脆弱性やランタイム ネットワークの発見ではありません。ルールでは、ヘルパーが作成したウィンドウ、計算されたチャネル、送信者の検証が欠落する可能性があります。静的アドレスはトラフィックを証明するものではありません。 REA-Bench は、独立したグラウンド トゥルースではなく、App X-Ray レポートとの一致を測定し、それ自体がツール対応エージェントの利点を実証するものではありません。このカタログではスキャンが再実行されませんでした。

## 何を学ぶか

レポートの主張をソースにリンクし、スキャンのコミットと日付を保持し、静的なルールと生成されたベンチマークの回答を誤りとして扱います。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [プロジェクト/デモ](https://github.com/Eliot5566/app-xray)
- [追加ソース 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [追加ソース 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [追加ソース 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [追加ソース 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
