# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · **繁體中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**用 REA 看懂軟體， 然後做出了什麼？**

從老遊戲移植到自己的取色器，收錄大家用 Reverse Engineer Anything 完成的公開實踐。看具體用途，也看結果背後的證據與侷限。

[在 GitHub 檢視與收藏案例集](https://github.com/git-sanbu/awesome-rea) · [搜尋軟體、用途或關鍵詞](https://awesome-rea-e7l.pages.dev/zh-TW/) · [投稿案例](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**38 個公開案例** — 其中 5 個官方案例、33 個社群專案與作者實驗. 最近更新：2026-10-26；各案例保留獨立核對日期。

> 已閱讀公開原文，未獨立復跑作者測試。

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。

## 熱門專案

2026-10-26 快照 · 本目錄已核對、達到 100 GitHub Stars 的專案，按星標排序。Stars 表示關注度，不代表復現成功或生產可用。 [檢視快照來源](data/popularity.json).

| 專案 / 演示 | GitHub Stars | 過程與侷限 |
| --- | ---: | --- |
| [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) | 1415 | [Open Claude UI：從桌面互動調查到可複用介面元件](cases/zh-TW/open-claude-ui.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 1391 | [Co-op Anything：用 REA 調查單機戰役的聯機接入點](cases/zh-TW/coop-anything.md) |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 763 | [sparkDash：把 REA 分析任務接入多裝置儀表盤](cases/zh-TW/sparkdash-rea.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 301 | [terminal-rs：研究 TradingView 互動後做行情終端](cases/zh-TW/terminal-rs.md) |
| [michaelshimeles/rec-rs](https://github.com/michaelshimeles/rec-rs) | 104 | [rec-rs：研究 OBS 後做原生 macOS 錄屏工具](cases/zh-TW/rec-rs.md) |

## 官方案例

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [DX-Ball：恢復聲音左右聲道計算](cases/zh-TW/dx-ball.md) | 畫面中的位置怎樣轉換成音效聲像？ | [原始出處](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion：追蹤 Electron 富文字剪貼簿橋](cases/zh-TW/notion-clipboard.md) | 網頁編輯器如何透過桌面端寫入富文字剪貼簿？ | [原始出處](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04：恢復 PC-98 彈幕環形角度演算法](cases/zh-TW/th04.md) | 環形彈幕如何均勻展開，併疊加瞄準玩家的方向？ | [原始出處](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis：從 Android APK 找出動態驗證碼演算法](cases/zh-TW/aegis-totp.md) | 每 30 秒變化的六位登入碼是怎麼計算的？ | [原始出處](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF：從二進位制恢復 flag 檢查方程](cases/zh-TW/ductf-masked-squares.md) | 沒有符號和原始碼，如何找出輸入校驗邏輯？ | [原始出處](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## 遊戲實踐

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [Desktop Games：把砸桌面小遊戲移植到 macOS 和瀏覽器](cases/zh-TW/desktop-games-nostalgia.md) | 怎樣理解 Peter 直譯器和程式樹，並移植互動與資源？ | [原始出處](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die：用 Rust 重建 Snowball War](cases/zh-TW/ski-or-die.md) | 怎樣從舊 DOS 程式恢復投擲、碰撞、刷怪與計分規則？ | [原始出處](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2：用函式級 Evidence 重建戰地 2 客戶端](cases/zh-TW/openbattlefield2.md) | 怎樣把準星、HUD 與客戶端行為的二進位制調查，轉成可追溯的引擎實現？ | [原始出處](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs：先確認加殼邊界，再從遊戲資料重建](cases/zh-TW/gunzrs.md) | 原生主程式被加殼、遊戲邏輯不能靜態讀取時，怎樣界定調查範圍並繼續重建？ | [原始出處](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything：用 REA 調查單機戰役的聯機接入點](cases/zh-TW/coop-anything.md) | 單機戰役怎樣保留任務指令碼和陣營，再允許第二位玩家加入？ | [原始出處](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |
| [Open Scrantic：用 Rust 重建 Johnny Castaway 屏保引擎](cases/zh-TW/open-scrantic.md) | 16 位屏保的指令碼直譯器、劇情排程與隨機行為，怎樣在現代系統執行？ | [原始出處](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md) |

## 應用實踐

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [Sketch（原 paper-rs）：研究 Paper 後構建 Rust 無限畫布](cases/zh-TW/paper-rs.md) | 怎樣理解畫布、佈局和編輯器互動，並實現獨立設計工具？ | [原始出處](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs：研究 OBS 後做原生 macOS 錄屏工具](cases/zh-TW/rec-rs.md) | 怎樣做更聚焦的螢幕、攝像頭與音訊錄製工具？ | [原始出處](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs：研究 TradingView 互動後做行情終端](cases/zh-TW/terminal-rs.md) | 如何把圖表互動調查轉化為獨立 Rust 行情介面？ | [原始出處](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow：拆解語音輸入鏈路並做本地小原型](cases/zh-TW/wispr-flow.md) | 錄音、轉寫、上下文和貼上是如何串起來的？ | [原始出處](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab：從 PowerToys 二進位制研究取色器](cases/zh-TW/hexgrab.md) | 全域性快捷鍵、畫素取色和剪貼簿怎樣配合？ | [原始出處](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm：研究 Ghostty 外殼後做自己的終端](cases/zh-TW/adamterm.md) | 終端核心、原生視窗、選單和服務之間怎麼分工？ | [原始出處](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn：研究 QuickBooks 後做本地賬本](cases/zh-TW/ledger-reborn.md) | 如何理解桌面會計工作流，並做獨立本地應用？ | [原始出處](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens：用已釋出程式核對磁碟掃描與樹圖演算法](cases/zh-TW/disklens.md) | 怎樣確認磁碟掃描、矩形樹圖和重複檔案檢測的實現，再做獨立介面？ | [原始出處](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D：從網頁包分析到獨立 3D 生成原型](cases/zh-TW/hyper3d-clone.md) | 怎樣把網頁分析得到的介面與介面觀察轉化為一個可匯出模型的原型？ | [原始出處](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |
| [Open Claude UI：從桌面互動調查到可複用介面元件](cases/zh-TW/open-claude-ui.md) | 輸入法合成、滾動與桌面互動規則，如何轉化為可複用介面元件？ | [原始出處](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx) |

## 硬體與相容

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [VSL-DSP：把廠商庫分析用於音效卡 DSP 工具](cases/zh-TW/vsl-dsp.md) | 廠商控制程式如何發現裝置、註冊引數和表示增益？ | [原始出處](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer：替換平臺層實現 Linux 移植](cases/zh-TW/vd-streamer-linux.md) | 如何保留協議庫，把採集、編碼、音訊和輸入換成 Linux 實現？ | [原始出處](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch：分析配套 APK 後做 eSIM 導航助手](cases/zh-TW/watch-esim-helper.md) | 怎樣找到配套應用已有的手錶 eSIM 下載入口，並從獨立助手交接？ | [原始出處](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint：讓手機熱敏印表機接入 Windows 列印](cases/zh-TW/picoprint.md) | 已有驅動能連線卻不出紙時，怎樣定位握手差異並接入 Windows 列印系統？ | [原始出處](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN：研究客戶端協議後實現獨立門戶與隧道工具](cases/zh-TW/v5vpn-rea-client.md) | 怎樣從原廠客戶端調查認證、資源發現與連線流程，做一個範圍明確的獨立客戶端？ | [原始出處](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## 分析與評測

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [OpenBSD netcat：靜態審計已釋出 ELF](cases/zh-TW/netcat-analysis.md) | 已釋出 netcat 包含哪些網路、代理和安全相關實現？ | [原始出處](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA：分析工具自身並檢驗預測](cases/zh-TW/rea-on-rea.md) | REA 如何選擇原生分析 provider，又怎樣判斷 provider 不可用？ | [原始出處](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth：對照已知原始碼找分析盲點](cases/zh-TW/rea-groundtruth.md) | 工具報告零個 IPC/視窗時，是程式真的沒有，還是分析漏掉了？ | [原始出處](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab：測量 REA 對 Windows 逆向任務的實際幫助](cases/zh-TW/rea-lab.md) | 加上 REA 後，代理解決任務的成功率、耗時和成本怎樣變化？ | [原始出處](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2：用帶符號構建核對去符號二進位制分析](cases/zh-TW/bzip2-groundtruth.md) | 沒有函式名時，怎樣從一條輸出字串找出函式，再核對呼叫關係？ | [原始出處](https://github.com/morluto/rea/discussions/2254) |
| [本地 27B 模型：壓縮 MCP 工具列表後完成函式調查](cases/zh-TW/local-model-mcp.md) | 本地模型只有 32K 上下文時，怎樣讓 REA 的工具描述與實際調查一起裝得下？ | [原始出處](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab：固定 npm 包後只分析入口切片](cases/zh-TW/opensource-rea-lab.md) | 怎樣先固定釋出物身份，再在有限預算裡回答入口檔案做什麼？ | [原始出處](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## 學習與復現

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [rea-playbook：把 Electron Evidence 變成可讀報告與重建](cases/zh-TW/rea-playbook.md) | 拿到巨大 Evidence JSON 後，怎樣提取可讀事實並驗證重建？ | [原始出處](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse：分析兩個開源庫的行為後組合新工具](cases/zh-TW/reafuse.md) | 怎樣把兩個專案的行為整理成規格，再實現一個同時利用兩者的新工具？ | [原始出處](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |
| [西班牙語 REA 實驗：重建作者自有的金鑰校驗器](cases/zh-TW/rea-spanish-lab.md) | 如何從小型無符號程式恢復接受規則，並與原始程式核對？ | [原始出處](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py) |

## 工具與整合

| 專案 / 演示 | 想解決什麼問題 | 原始出處 |
| --- | --- | --- |
| [sparkDash：把 REA 分析任務接入多裝置儀表盤](cases/zh-TW/sparkdash-rea.md) | 怎樣從網頁提交遠端 REA 任務，讓長分析在斷開瀏覽器後繼續，並按需檢視大結果？ | [原始出處](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |
| [REA Safe Agent：在兩個受限程序之間轉發靜態分析](cases/zh-TW/rea-safe-agents.md) | 怎樣讓代理查詢 REA，同時約束輸入、主機工具和模型請求的訪問範圍？ | [原始出處](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md) |

## 什麼樣的實踐會被收錄？

公開原文明確使用 REA，有具體問題、實際過程和產出。分析、獨立重寫與歷史成果分別歸因；失敗實驗、工具評測以及有實際呼叫程式碼與功能產出的 REA 整合也會收錄。只介紹工具、備份原始碼或提出尚未實施的計劃，不計入案例。

[貢獻指南](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [檢視來源記錄](SOURCES.md) · [開放案例資料](data/cases.json)

[安裝與工具版本要求請檢視 REA 官方專案。](https://github.com/morluto/rea)

獨立社群案例集，由 Sanbu 整理。與 REA 上游專案無隸屬關係。

本頁為獨立整理，成果歸原作者。目標軟體、安裝包和完整反編譯輸出不在此分發。 [MIT](LICENSE).
