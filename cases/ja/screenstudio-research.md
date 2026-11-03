# Screen Studio: 静的検査を記録および輸出証拠から分離する

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Royo-Qiao
- **ソースレビュー日:** 2026-11-03
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Screen Studio 3.7.3-4540 (ローカルで再パッケージ化された Apple Silicon コピーを含む)

## 質問

Electron とネイティブ ヘルパーの検出結果を、記録、エクスポート、および互換性の証拠から分離するにはどうすればよいでしょうか?

## REAがしたこと

REA ヒューズと Mach-O の検査により、ID とハッシュを含む厳選された静的 Evidence の抜粋が提供されました。制限付き JavaScript アプリケーション分析が 2 回タイムアウトしました。完全なグラフやネイティブ関数の逆コンパイルは要求されていません。

## 著者が報告した結果

著者は、検査、プロジェクト統計の集計、および輸出検証ツールを公開しています。過去のネイティブ録画では、3、337 フレームを 1104 × 720 および 60 fps でエクスポートし、完全にデコードされたと報告されています。その後の読み取り専用ツール チェックでは、保存されたエクスポート イベントと集約された人間の入力イベントが検査されました。

## 制限と未検証の主張

プライベート録音と完全な台帳は再生できません。 Mach-O ハッシュは、ローカルで再パッケージ化されたコピーを識別します。ネットワーク認証が失敗し、トリミングの試行が有効にならず、最終署名の後に完全なキャプチャの再テストが行​​われず、Apple Silicon/macOS セットアップが 1 つだけ実行されました。ファイルのデコードは、記録の出所や視覚的な同等性を証明するものではありません。このカタログでは実験を再実行しませんでした。

## 何を学ぶか

静的メタデータ、UI の観察、ファイルのデコード、人間によるフィードバックを別個の証拠として保持し、失敗したチェックを成功とともに公開します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [プロジェクト/デモ](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [追加ソース 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [追加ソース 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [追加ソース 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [追加ソース 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
