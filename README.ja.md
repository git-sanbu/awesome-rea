# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · **日本語** · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**REA のソフトウェアを理解します。 何を建てますか?**

レガシー ゲームのポートから小さなカラー ピッカーまで、Reverse Engineer Anything を使用してパブリック プロジェクトを探索します。何が構築されたか、REA がどのように貢献したか、そして何が未検証のままなのかを確認してください。

[GitHub でコレクションを探索してスターを付けましょう](https://github.com/git-sanbu/awesome-rea) · [ソフトウェア、目的、キーワードを検索する](https://awesome-rea-e7l.pages.dev/ja/) · [ケースを送信する](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 公開ケース** — 5 公式ショーケースおよび 29 コミュニティ プロジェクトまたは著者の実験. 更新日: 2026-10-21。各ケースには独自の情報源レビュー日が保持されます。

> 情報源をレビューしました。著者のテストは独立して再実行されません。

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

この版は編集英語版から機械翻訳されたものです。元の引用は原文言語のままです。表現が不明瞭な場合は、英語とリンク先の情報源を参照してください。

## 人気プロジェクト

スナップショット: 2026-10-21。少なくとも 100 GitHub Stars を含む、ソースでレビューされたカタログ プロジェクト (星順に並べ替え)。 Stars は注意を示すものであり、独立した複製や制作の準備が整っていることを示すものではありません。 [スナップショットソース](data/popularity.json).

| プロジェクト/デモ | GitHub Stars | プロセスと制限事項 |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: REA 分析をマルチデバイス ダッシュボードに統合](cases/ja/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: キャンペーンのマルチプレイヤー エントリ ポイントを調査しています](cases/ja/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: TradingView インタラクションによって通知される市場端末](cases/ja/terminal-rs.md) |

## 公式ショーケース

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [DX-Ball: ステレオ サウンド パンニングの再構築](cases/ja/dx-ball.md) | 画面上の位置はどのようにしてサウンドパンの値になるのでしょうか? | [一次情報源](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: Electron リッチテキスト クリップボード ブリッジのトレース](cases/ja/notion-clipboard.md) | Web エディターはデスクトップのクリップボードを介してリッチ テキストをどのように書き込むのでしょうか? | [一次情報源](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: PC-98 の弾丸リング角度の回復](cases/ja/th04.md) | 弾丸はどのようにしてリングの周りに均等に分散され、プレイヤーに向けられるのでしょうか? | [一次情報源](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: Android TOTP アルゴリズムの検索](cases/ja/aegis-totp.md) | 6 桁のログイン コードは 30 秒ごとにどのように計算されますか? | [一次情報源](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: フラグチェック方程式を回復しています](cases/ja/ductf-masked-squares.md) | シンボルやソース コードを使用せずに入力検証を復元するにはどうすればよいでしょうか? | [一次情報源](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## ゲーム

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [Desktop Games: デスクトップ おもちゃを macOS とブラウザに移植する](cases/ja/desktop-games-nostalgia.md) | Peter インタプリタ、プログラム ツリー、インタラクション、アセットをどのように理解して移植できるでしょうか? | [一次情報源](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: Rust で Snowball War を再構築します](cases/ja/ski-or-die.md) | スロー、衝突、スポーン、およびスコアリングのルールを DOS ゲームからどのように復元できるでしょうか? | [一次情報源](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: 関数レベル Evidence (Battlefield 2 クライアント用)](cases/ja/openbattlefield2.md) | クロスヘア、HUD、およびバイナリ動作の調査は、追跡可能なエンジンの実装にどのように情報を提供できるでしょうか? | [一次情報源](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: ゲーム データから再構築する前にパッキング境界を特定する](cases/ja/gunzrs.md) | パックされた実行可能ファイルによってゲーム ロジックの静的回復が妨げられている場合、どのようにして再構築を続行できるでしょうか? | [一次情報源](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: キャンペーンのマルチプレイヤー エントリ ポイントを調査しています](cases/ja/coop-anything.md) | 2 人目のプレイヤーを参加させながら、キャンペーンのスクリプトとサイドを維持するにはどうすればよいでしょうか? | [一次情報源](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## アプリケーション

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [Sketch (formerly paper-rs): Paper からインスピレーションを得た Rust 無限キャンバス](cases/ja/paper-rs.md) | キャンバス、レイアウト、エディターの相互作用は、独立したデザイン ツールにどのように情報を提供できるのでしょうか? | [一次情報源](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: OBS からインスピレーションを得たネイティブ macOS レコーダー](cases/ja/rec-rs.md) | 焦点を合わせたスクリーン、カメラ、オーディオレコーダーはどのように構築できますか? | [一次情報源](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: TradingView インタラクションによって通知される市場端末](cases/ja/terminal-rs.md) | チャートとの相互作用の調査は、独立した Rust 市場インターフェイスにどのように情報を提供できるでしょうか? | [一次情報源](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: 音声入力の分解と小さなローカル プロトタイプ](cases/ja/wispr-flow.md) | 録音、文字起こし、コンテキスト、貼り付けはどのように接続されていますか? | [一次情報源](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: PowerToys カラーピッカーを調査しています](cases/ja/hexgrab.md) | グローバル ホットキー、ピクセル サンプリング、クリップボードはどのように連携しますか? | [一次情報源](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: Ghostty のシェルを調査し、端末を構築しています](cases/ja/adamterm.md) | ターミナルコア、ネイティブウィンドウ、メニュー、サービスはどのように分割されていますか? | [一次情報源](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: QuickBooks の調査に基づいたローカル台帳](cases/ja/ledger-reborn.md) | デスクトップ会計ワークフローはどのようにして独立したローカル アプリに情報を提供できるのでしょうか? | [一次情報源](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: リリースされたバイナリでのディスク スキャンおよびツリーマップ アルゴリズムのチェック](cases/ja/disklens.md) | 新しいインターフェイスを構築する前に、ディスク スキャン、ツリーマップ、重複検出をどのようにチェックできますか? | [一次情報源](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: キャプチャされた Web バンドルから独立した 3D プロトタイプまで](cases/ja/hyper3d-clone.md) | インターフェイスと API の観察は、3D モデルをエクスポートするプロトタイプにどのように情報を提供できるでしょうか? | [一次情報源](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## ハードウェアと互換性

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [VSL-DSP: ベンダー ライブラリの調査結果をオーディオ DSP ツールに適用する](cases/ja/vsl-dsp.md) | ベンダー コントローラーはどのようにデバイスを検出し、パラメーターを登録し、ゲインを表現するのでしょうか? | [一次情報源](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: 置換プラットフォーム層を介した Linux ポート](cases/ja/vd-streamer-linux.md) | プロトコル ライブラリを保持したまま、キャプチャ、エンコード、オーディオ、入力を Linux に移行するにはどうすればよいですか? | [一次情報源](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: コンパニオン APK 分析によって通知される eSIM ハンドオフ ヘルパー](cases/ja/watch-esim-helper.md) | 別のヘルパーは、コンパニオン アプリの既存の watch-eSIM ダウンロード フローをどのように見つけて開くことができますか? | [一次情報源](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: モバイル サーマル プリンターを Windows 印刷に接続する](cases/ja/picoprint.md) | ドライバーが接続しても印刷できない場合、ハンドシェイクの違いはどのようにして見つけられるのでしょうか? | [一次情報源](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: スコープ付きポータルおよびトンネル クライアントのプロトコル調査](cases/ja/v5vpn-rea-client.md) | 認証、リソース検出、接続調査はどのようにしてスコープ指定された独立したクライアントに情報を提供できるのでしょうか? | [一次情報源](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## 分析と評価

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [OpenBSD netcat: 出荷された ELF の静的解析](cases/ja/netcat-analysis.md) | 出荷された netcat バイナリには、どのネットワーク、プロキシ、セキュリティ関連の実装が含まれていますか? | [一次情報源](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: ツールの調査と予測のテスト](cases/ja/rea-on-rea.md) | REA はどのようにネイティブ分析プロバイダーを選択し、使用できないプロバイダーを検出しますか? | [一次情報源](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: 既知のソースに対して分析の盲点をチェックする](cases/ja/rea-groundtruth.md) | IPC コールまたはウィンドウがゼロというレポートは、アプリまたは分析ギャップを反映していますか? | [一次情報源](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: Windows リバース エンジニアリングに対する REA の貢献を測定する](cases/ja/rea-lab.md) | REA を追加すると、エージェントの成功率、時間、コストにどのような影響がありますか? | [一次情報源](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: ストリップされたバイナリの結果をシンボル化されたビルドと照合しています](cases/ja/bzip2-groundtruth.md) | 出力文字列から関数を見つけてその呼び出し関係を確認するにはどうすればよいでしょうか? | [一次情報源](https://github.com/morluto/rea/discussions/2254) |
| [ローカル 27B モデル: 小さい MCP ツール リストにより機能分析が可能になります](cases/ja/local-model-mcp.md) | REA ツールの説明と分析をローカル モデルの 32K コンテキストにどのように適合させることができますか? | [一次情報源](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: npm アーティファクトの固定とそのエントリ スライスの分析](cases/ja/opensource-rea-lab.md) | 制限されたエントリ ファイルの質問に答える前に、リリース アーティファクトをどのように特定できるでしょうか? | [一次情報源](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## 学習と生殖

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [rea-playbook: Electron Evidence をレポートにして再構成する](cases/ja/rea-playbook.md) | 大きな Evidence JSON をどのようにして読み取り可能なファクトとチェックされた再構成にすることができるでしょうか? | [一次情報源](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: 2 つのライブラリの動作を調査した後に結合する](cases/ja/reafuse.md) | 2 つのプロジェクトがどのようにして動作仕様になり、さらに新しい統合ツールになるのでしょうか? | [一次情報源](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## ツールと統合

| プロジェクト/デモ | 質問 | 一次情報源 |
| --- | --- | --- |
| [sparkDash: REA 分析をマルチデバイス ダッシュボードに統合](cases/ja/sparkdash-rea.md) | Web インターフェイスは、長時間実行されるリモート REA ジョブを送信し、オンデマンドで大量の結果を読み込むにはどうすればよいでしょうか? | [一次情報源](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## どのケースが含まれますか?

公開された一次ソースは、REA の使用法、具体的な質問、プロセス、および出力を明示的に示す必要があります。分析、独立した実装、および歴史的研究は個別に帰属します。失敗した実験、評価、実装された REA 統合は歓迎されます。ツールの紹介やミラー、未実装のプランは除きます。

[貢献する](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [ソースレコード](SOURCES.md) · [オープンケースデータ](data/cases.json)

[インストールとバージョンの要件については、REA アップストリーム プロジェクトを参照してください。](https://github.com/morluto/rea)

Sanbu によってキュレーションされた独立したコミュニティ コレクション。 REA アップストリーム プロジェクトとは無関係です。

独立した編集者の要約。クレジットは原作者に帰属します。ターゲット ソフトウェア、インストーラー、および完全な逆コンパイラー出力は、ここでは再配布されません。 [MIT](LICENSE).
