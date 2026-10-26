# REA Safe Agent: 含まれる 2 つのプロセス間の静的分析を仲介します

[← すべてのケースに戻る](../../README.ja.md) · ツールと統合

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** dagoSte
- **ソースレビュー日:** 2026-10-26
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** REA 6.7.0 と Ghidra 12.1.4 および JADX の統合。良性の ELF フィクスチャと F-Droid APK

## 質問

入力、ホスト ツール、モデル リクエストへのアクセスが制限されている間、エージェントはどのようにして REA をクエリできるでしょうか?

## REAがしたこと

この実装では、REA とその受信エージェントを別の Docker コンテナーで実行し、ホワイトリストに登録された MCP 呼び出しをホスト コントローラーを通じて中継します。凍結された入力スナップショット、tool/path チェック、および制限された結果により、境界を越えるものが制限されます。 REA は実際の静的解析を提供します。

## 著者が報告した結果

日付の付いた macOS ARM64 のレシートでは、同じ無害な ELF 上でクロードとの 11 回の REA 呼び出しと、Codex との 9 回の成功した REA 呼び出しが報告されており、そのハッシュ、FNV-1a 定数、およびデコードされた文字列を既知のソースと照合してチェックされています。検証レコードは、ライブ F-Droid 2.0.2 分析に対する 39 件の成功した REA 呼び出しを個別に報告します。

## 制限と未検証の主張

これらは著者が公開した検証記録であり、独立したセキュリティ認証ではありません。静的解析では対象を実行しません。隔離は Docker とホストコントローラーに依存します。解析されたテキストはモデルサービスに送られ、Windows の Docker 統合は実験段階です。個別の npm 監査に問題がなくても、イメージ全体の脆弱性の指摘は残っています。

## 何を学ぶか

個別のモックポリシーテスト、実際のツール呼び出し、ライブモデルの実行。各クレームを日付の入ったターゲット、ホスト、レシートに添付します。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> "rea_version": "6.7.0",

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [プロジェクト/デモ](https://github.com/dagoSte/rea-safe-agents)
- [追加ソース 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [追加ソース 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [追加ソース 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [追加ソース 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
