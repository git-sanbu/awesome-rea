# Open Scrantic: Rust で Johnny Castaway スクリーンセーバー エンジンを再構築する

[← すべてのケースに戻る](../../README.ja.md) · ゲーム

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** glauberlima
- **ソースレビュー日:** 2026-10-26
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Screen Antics: Johnny Castaway (1992)、Windows 3.1 SCRANTIC.SCR および一致するリソース ファイル

## 質問

16-bit スクリーンセーバーのスクリプト インタプリタ、ストーリー スケジュール、およびランダムな動作は、最新のシステムでどのように実行できるのでしょうか?

## REAがしたこと

開発者は、SCRANTIC.SCR の逆アセンブルと逆コンパイル、リソース形式とスクリプトのセマンティクスの回復、および Rust の実装とドキュメントの作成に関して、Claude Code と REA の功績を明示的に認めています。

## 著者が報告した結果

パブリック Rust エンジンは、リソースの読み込み、TTM/ADS スクリプトの実行、ストーリーの進行、タイミング、およびオリジナルの乱数ジェネレーターを実装します。 ENGINE.md は、回復されたルールと意図的な差異を記録します。作成者は、Windows、macOS、および Linux リリース パスを提供します。

## 制限と未検証の主張

このエンジンは、ユーザー自身の一致するオリジナル ファイルを必要とし、他の実行可能ビルドを拒否します。フルフレーム再描画、オプションのimage/audio処理および設定はオリジナルとは異なります。ここでは、クロスプラットフォームの動作と同等性は個別にテストされませんでした。生の REA セッションがレビューされたファイル内に見つかりませんでした。

## 何を学ぶか

元のアセットの所有権をエンジン コードから分離し、算術規則とスケジュール規則を保持し、意図的な互換性の違いを文書化します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [プロジェクト/デモ](https://github.com/glauberlima/open-scrantic)
- [追加ソース 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [追加ソース 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [追加ソース 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
