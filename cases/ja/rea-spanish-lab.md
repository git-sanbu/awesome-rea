# REA in Spanish: 作成者所有のキーバリデーターの再構築

[← すべてのケースに戻る](../../README.ja.md) · 学習と生殖

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** harkiventures
- **ソースレビュー日:** 2026-10-26
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** 著者所有の教育用ライセンス-cli.ストリップされたバイナリとそのシンボル化されたリファレンス ビルド

## 質問

削除された小さなプログラムの受け入れルールを再構築し、オリジナルと照合するにはどうすればよいでしょうか?

## REAがしたこと

著者は、REA および Ghidra 擬似コードと 0x102040 で読み取られたバイトを使用して、文字変換、重み付き累積、回転、受け入れチェックを回復し、その後、別の Python 検証器を作成したと報告しています。

## 著者が報告した結果

無料のスペイン語サンプルには、ラボのセットアップと実際に動作したケース、ストリップおよびシンボル化された練習用バイナリ、リファレンス C ソース、および再構築された Python 検証ツールが含まれています。検証者は、4 の予想される例をリストします。著者は、実際のバイナリに対して再構築をチェックしていると報告しています。

## 制限と未検証の主張

この演習は、作成者独自の小さな保護されていないプログラムであり、商用ライセンスのバイパスや保護されたソフトウェアの一般的な結果ではありません。 4 の例は限定的なチェックであり、完全な同等性ではありません。このカタログはバイナリを実行したり、比較を再実行したりしませんでした。提案されたフルコースはまだ配信されていません。

## 何を学ぶか

非表示の参照ソースを持つ所有フィクスチャを使用し、1 つの制限されたルールを回復し、ソースと比較する前に受け入れられた入力と拒否された入力をテストします。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [プロジェクト/デモ](https://github.com/harkiventures/rea-muestra-gratuita)
- [追加ソース 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [追加ソース 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [追加ソース 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
