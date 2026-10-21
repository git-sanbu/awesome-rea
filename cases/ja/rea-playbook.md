# rea-playbook: Electron Evidence をレポートにして再構成する

[← すべてのケースに戻る](../../README.ja.md) · 学習と生殖

[English](../rea-playbook.md) · [简体中文](../zh-CN/rea-playbook.md) · [繁體中文](../zh-TW/rea-playbook.md) · [日本語](../ja/rea-playbook.md) · [한국어](../ko/rea-playbook.md) · [Español](../es/rea-playbook.md) · [Français](../fr/rea-playbook.md) · [Deutsch](../de/rea-playbook.md) · [Português (Brasil)](../pt-BR/rea-playbook.md) · [Русский](../ru/rea-playbook.md) · [العربية](../ar/rea-playbook.md) · [हिन्दी](../hi/rea-playbook.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** jinshi666888
- **ソースレビュー日:** 2026-10-16
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** リポジトリに含まれる最小 8 ファイルの Electron サンプル

## 質問

大きな Evidence JSON をどのようにして読み取り可能なファクトとチェックされた再構成にすることができるでしょうか?

## REAがしたこと

プロジェクトは、REA 6.3.0 を固定し、分析→抽出→検証パイプライン、MCP ハンドシェイク、および実際のツール呼び出しプローブを提供します。

## 著者が報告した結果

著者は、サニタイズされた Evidence フィクスチャ、file:line レポート、再構築およびアサーションを公開し、10/10 再構築チェックが合格したことを報告します。

## 制限と未検証の主張

オフライン デモは既存のフィクスチャを読み取ります。これは、新たな REA の実行ではありません。小規模な自己構築ターゲットは、複雑な商用アプリを表すものではありません。

## 何を学ぶか

管理された小さなサンプルから始めて、証拠、読みやすい仕様、回帰チェックを結び付けます。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> npm run analyze will fetch rea-agents@6.3.0 on first use via npx fallback.

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md)
- [プロジェクト/デモ](https://github.com/jinshi666888/rea-playbook)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
