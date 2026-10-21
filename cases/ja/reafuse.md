# ReaFuse: 2 つのライブラリの動作を調査した後に結合する

[← すべてのケースに戻る](../../README.ja.md) · 学習と生殖

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** sickpyramid
- **ソースレビュー日:** 2026-10-19
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** オープンソース JavaScript ライブラリの 2 つのペア: ms + pretty-bytes、および dequal + klona

## 質問

2 つのプロジェクトがどのようにして動作仕様になり、さらに新しい統合ツールになるのでしょうか?

## REAがしたこと

REA 6.4.0 JavaScript 静的解析は 2 つの入力を読み取ります。 README ファイルとテストは、動作仕様の作成に役立ちます。モデルは個別に組み合わせを提案し、受諾契約と新しいコードを作成し、作成者のテストと類似性スキャンを実行します。

## 著者が報告した結果

著者は、ratewise (転送レートとETA) および objdelta (構造的 diff/patch)、レポートおよび Evidence を公開しています。報告された契約結果は、18/18 および 17/17 に加え、新しいツールの 7/7 および 6/6 テストです。どちらの例も 1 つのプロジェクト ケースとしてカウントされます。

## 制限と未検証の主張

公開されている JavaScript の例は 2 つだけレビューされました。プロジェクトは v0.1 アルファです。同じワークフローで仕様と実装が作成されます。著者のクリーンルームラベルは独立した法的結論ではありません。類似性スキャンとテストの合格は、一般的な独創性や完全な同等性を確立するものではありません。このカタログではそれらを再掲載しませんでした。

## 何を学ぶか

動作仕様を通じて分析を実装に接続し、テストを入力動作または新しい組み合わせにマッピングします。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Every donor goes through REA's static JavaScript analysis

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [プロジェクト/デモ](https://github.com/sickpyramid/ReaFuse)
- [追加ソース 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [追加ソース 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
