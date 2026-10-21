# DownUnderCTF: フラグチェック方程式を回復しています

[← すべてのケースに戻る](../../README.ja.md) · 公式ショーケース

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** REA ショーケース チーム;元のプロジェクトの作者が情報源にクレジットされている
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** DownUnderCTF 2023 マスクされた正方形のフラグ チェッカー、剥がされた Linux ELF

## 質問

シンボルやソース コードを使用せずに入力検証を復元するにはどうすればよいでしょうか?

## REAがしたこと

REA は、プロンプト文字列と相互参照を検索し、チェッカーを分析して、マスクとターゲット テーブルを読み取ります。 Z3 は 26 制約を解決します。プロセス キャプチャは、元のチャレンジ バイナリをチェックします。

## 著者が報告した結果

公式記録には正しいことが示されています。 / 正しい候補の場合は 0 を終了し、不正解です。 / 候補が間違っている場合は、255 を終了します。次に、ソリューションは主催者のソースとメタデータと照合されます。

## 制限と未検証の主張

ソルバーは、共通のフラグ形式と文字セットを前提としています。 2 番目のモデルの検索がタイムアウトしたため、一意性が証明されませんでした。

## 何を学ぶか

静的推論によって候補が生成された後、元のプログラムを通じて正しい入力と誤った入力の両方を実行します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [プロジェクト/デモ](https://rea.tools/showcase/ctf/)
- [追加ソース 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
