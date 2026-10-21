# rea-lab: Windows リバース エンジニアリングに対する REA の貢献を測定する

[← すべてのケースに戻る](../../README.ja.md) · 分析と評価

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** pablodiazjorge
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** 小さな Windows チャレンジ、デコイを備えた大規模なバイナリ、および実際のオープンソース プログラム

## 質問

REA を追加すると、エージェントの成功率、時間、コストにどのような影響がありますか?

## REAがしたこと

著者は、Windows および Ghidra を設定し、事前登録された対照研究を実行し、引用された Evidence を検証し、記事、環境、およびアップストリームの修正を公開します。

## 著者が報告した結果

事前登録された 5 件の研究が公開されています。両方のグループで 1: 28/30 を研究します。 2: REA を使用しない 11/24 と、REA を使用する 4/24 を比較してください。スタディ 3: 71/72 と 68/72. スタディ 4 は DeepSeek を使用します: 20/20 と 19/20、有意差は検出されません。スタディ 5 では、精度に大きな変化はなく、改訂されたスキルのコストは公式スキル (p=0.012) よりも 14% 高くなります。 2026-10-21 Evidence 保持メモは、482 スタディ実行、REA を呼び出した 336、および 3 再起動中断再実行を区別します。これらの 339 REA 呼び出し実行は、プロアクティブに保持されません。 Evidence;グレーダーはクライアントの記録からそれを再構築しました。

## 制限と未検証の主張

すべてのスタディは、REA 6.4.0、Claude Code 2.1.296 とそれぞれのモデル、タスク、権限をピン留めします。結果を現在のバージョンやすべてのリバース エンジニアリングに一般化することはできません。研究 2 と 3 の成功率の差は、著者のテストでは統計的に有意ではありませんでした。調査 3 Evidence 認定は、採点者の修正後に 142/144 から 144/144 に修正されました。解決カウントは変更されませんでした。スタディ 4 には、20 ペアのみがあります。調査 5 では、クライアントの自動読み込みではなく、プロンプトに挿入されたスキル テキストを比較しています。このカタログは研究を再実行したものではありません。 339 の数は、研究サンプルの合計ではなく、REA 呼び出しの実行数であり、Evidence コンテンツの欠落や認定の失敗を意味するものではありません。

## 何を学ぶか

コントロール、タスクの分散、コスト、証拠の品質を一緒に評価します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [プロジェクト/デモ](https://github.com/pablodiazjorge/rea-lab)
- [追加ソース 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [追加ソース 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [追加ソース 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [追加ソース 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
