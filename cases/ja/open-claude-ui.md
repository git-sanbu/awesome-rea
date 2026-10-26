# Open Claude UI: デスクトップ操作の文書化と再利用可能な UI コンポーネントの公開

[← すべてのケースに戻る](../../README.ja.md) · アプリケーション

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** Caho1
- **ソースレビュー日:** 2026-10-26
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** クロード デスクトップ macOS パッケージ;著者が報告した @ant/desktop 2.37337.1 ベースラインとバンドルされた Web UI

## 質問

入力構成、スクロール、およびデスクトップのインタラクション ルールは、再利用可能なインターフェイス コンポーネントにどのように通知されるのでしょうか?

## REAがしたこと

著者は、ASAR、JavaScript AST および CSS の調査が REA 6.5.0. に起因すると考えています。インタラクションの章では、バンドルされたコードの抜粋が入力ガードとスクロール ルールにリンクされています。別の TypeScript サンプルでは、​​これらの動作が実装されています。

## 著者が報告した結果

このリポジトリは、バージョン管理されたデザイン ノート、コンポーネント ストーリーブック、CSS トークン、RichComposerWithMentions.tsx の構成状態チェックや構成後の Enter ガードを含む実装例を公開しています。

## 制限と未検証の主張

これは UI ライブラリと作成者が報告した分解であり、完全な Claude クライアントまたはモデル サービスではありません。生の REA セッション レコードと独立した動作または視覚的等価性テストは、レビューされたファイルには見つかりませんでした。バージョンと忠実性の主張は引き続き作成者に帰属します。

## 何を学ぶか

1 つの相互作用ルールをその引用されたバンドルの場所と実装に接続します。設計文書と測定された同等性を区別します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [プロジェクト/デモ](https://github.com/Caho1/open-claude-ui)
- [追加ソース 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [追加ソース 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [追加ソース 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
