# V5VPN: スコープ付きポータルおよびトンネル クライアントのプロトコル調査

[← すべてのケースに戻る](../../README.ja.md) · ハードウェアと互換性

[English](../v5vpn-rea-client.md) · [简体中文](../zh-CN/v5vpn-rea-client.md) · [繁體中文](../zh-TW/v5vpn-rea-client.md) · [日本語](../ja/v5vpn-rea-client.md) · [한국어](../ko/v5vpn-rea-client.md) · [Español](../es/v5vpn-rea-client.md) · [Français](../fr/v5vpn-rea-client.md) · [Deutsch](../de/v5vpn-rea-client.md) · [Português (Brasil)](../pt-BR/v5vpn-rea-client.md) · [Русский](../ru/v5vpn-rea-client.md) · [العربية](../ar/v5vpn-rea-client.md) · [हिन्दी](../hi/v5vpn-rea-client.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

- **著者/帰属:** hygkui
- **ソースレビュー日:** 2026-10-21
- **レビュー状況:** 情報源をレビューしました。著者のテストは独立して再実行されません。
- **ターゲット:** LeadSec V5VPN 5.3.3.x クライアントおよび v2.0 ゲートウェイ プロトコル

## 質問

認証、リソース検出、接続調査はどのようにしてスコープ指定された独立したクライアントに情報を提供できるのでしょうか?

## REAがしたこと

著者は、リバース エンジニアリングのリファレンスとして morluto/rea を明示的に引用し、SecUI.exe、SecController.dll、SecLogin.dll、SecSSL.dll、および VpnServ.exe のシンボル、逆アセンブリ、およびメモリ マッピングを文書化しています。 README は、認証、パスワード有効期限ブランチ、リソース検出、および HTTP CONNECT を独立した Go/MyGo 実装に接続します。完全な REA 通話ログは公開されていません。

## 著者が報告した結果

パブリック Go/MyGo デスクトップと CLI ソース、プロトコル ノート、およびテストが提供されます。著者は、Windows 開発マシンと 2 つの運用ゲートウェイでのエンドツーエンド接続を報告し、SSL VPN ポータル、承認されたリソース、HTTP CONNECT トンネルをカバーしています。

## 制限と未検証の主張

報告されたスコープは 5.3.3.x で、プロトコル v2.0. Linux/macOS はコンパイルされましたが、テストされていませんでした。カーネル仮想アダプター、IPsec、またはネットワーク全体のルーティングはありません。 USB キー、匿名ログイン、および中国語の暗号化スイートはサポートされていません。このカタログはゲートウェイへの接続やセキュリティの検証を行っておらず、「完全に解読された」という文言を確立された結論として扱っていません。

## 何を学ぶか

プロトコル スコープをプラットフォーム テストから分離します。クライアントのユーザビリティには、特定のゲートウェイおよびシナリオに対する検証が必要です。

## ソース内の REA 使用の証拠

抜粋の書式設定が簡素化されています。完全な文脈については、元のソースを読んでください。

> 基于 REA (Reverse Engineer Anything) 逆向分析技术与 MyGo 跨平台桌面技术架构，重新实现的现代化 V5VPN 客户端。

## オリジナルの情報源

- [一次情報源/固定された証拠](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md)
- [プロジェクト/デモ](https://github.com/hygkui/v5vpn-rea-client)
- [追加ソース 1](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/auth_test.go)
- [追加ソース 2](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/tunnel_test.go)

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。

<!-- カタログデータから生成。データ ファイルを編集してこのメ​​モを更新してください。 -->
