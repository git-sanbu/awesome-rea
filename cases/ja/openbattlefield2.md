# OpenBattlefield2: 関数レベル Evidence (Battlefield 2 クライアント用)

[← すべてのケースに戻る](../../README.ja.md) · ゲーム

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Moxnatiy
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** Battlefield 2 1.5 Refractor 2 クライアント、レンダリング DLL および元のゲーム データ

## 質問

クロスヘア、HUD、およびバイナリ動作の調査は、追跡可能なエンジンの実装にどのように情報を提供できるでしょうか?

## REAがしたこと

REA 4.1.0 および Ghidra 12.1.4 は、32-bit PE ファイルを読み取り、全機能の Evidence ドシエを収集します。直接の Ghidra クエリ、ゲーム データ、サーバー シンボルがこれを補います。十字線メモには、GuiIndex、位置およびオフセット累積アドレス、REA Evidence ID が含まれます。 REA は分析段階のみを処理します。

## 著者が報告した結果

このプロジェクトは、C++20 エンジン、関数ノート、テスト、スクリーンショットを公開しています。著者は、所有する BF2 1.5 インストールをロードし、元の専用サーバーに接続し、兵士と HUD を表示すると報告しています。接続モードでは、test_weapon_hud などのチェックを使用して十字線がレンダリングされ、移動中に拡大し、停止時に縮小します。

## 制限と未検証の主張

研究プロジェクトにはまだ発砲、車両の走行、音響が不足している。十字線の武器切り替え、ズーム、射撃のアップデートは未完成のままです。ホストモードには十字線がありません。メイン プラットフォームは macOS arm64 で、Windows ビルドは実行されませんでした。結果には複数のツールが関係しており、すべてが REA によるものであるとは限りません。このカタログではそれを再掲載しませんでした。

## 何を学ぶか

1 つの監視可能な機能のアドレス、Evidence、実装および受け入れコマンドを接続します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [プロジェクト/デモ](https://github.com/Moxnatiy/OpenBattlefield2)
- [追加ソース 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [追加ソース 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [追加ソース 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
