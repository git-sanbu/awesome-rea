# Open-source REA Lab: npm アーティファクトの固定とそのエントリ スライスの分析

[← すべてのケースに戻る](../../README.ja.md) · 分析と評価

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** martinlofranodeoliveira
- **ソースレビュー日:** 2026-10-19
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** 公式 npm 試薬 6.4.0 package.json および scripts/rea.mjs

## 質問

制限されたエントリ ファイルの質問に答える前に、リリース アーティファクトをどのように特定できるでしょうか?

## REAがしたこと

独立した Python 監査人が最初にアーカイブ構造とハッシュをチェックします。 REA は、検証済みのパッケージから抽出された 2 つの未変更のファイルを静的に分析します。エントリブランチのセマンティクスでは、手動による構文チェックも使用されます。監査人および手動の結論は REA 出力ではありません。

## 著者が報告した結果

著者は、固定されたダイジェスト、監査 JSON、サニタイズされた Evidence 概要、および再現スクリプトを公開しています。このスライスは、1 で解析された JavaScript ファイル、469 AST ノード、14 の結果、および解析失敗がゼロであることを報告しますが、セマンティック拡張中にフルパッケージ分析が中断されたことを指摘しています。

## 制限と未検証の主張

14 の調査結果は脆弱性の数ではありません。スライスは 110 セマンティック未知を保持し、dist 実装がないため、完全なパッケージのセキュリティや実行時の正確性を確立できません。サニタイズされた概要は再生できない正規の Evidence です。フルパッケージの適用範囲は部分的です。このカタログではそれを再掲載しませんでした。

## 何を学ぶか

中断や不明点を保持しながら、質問と入力をバインドします。構造チェック、バイトの同一性、および実行時の安全性は、異なる結論になります。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Can REA statically parse the actual shipped dispatcher?

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [プロジェクト/デモ](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [追加ソース 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [追加ソース 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
