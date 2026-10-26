# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · **简体中文** · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**用 REA 看懂软件， 然后做出了什么？**

从老游戏移植到自己的取色器，收录大家用 Reverse Engineer Anything 完成的公开实践。看具体用途，也看结果背后的证据与局限。

[在 GitHub 查看与收藏案例集](https://github.com/git-sanbu/awesome-rea) · [搜索软件、用途或关键词](https://awesome-rea-e7l.pages.dev/zh-CN/) · [投稿案例](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**38 个公开案例** — 其中 5 个官方案例、33 个社区项目与作者实验. 最近更新：2026-10-26；各案例保留独立核对日期。

> 已阅读公开原文，未独立复跑作者测试。

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

## 热门项目

2026-10-26 快照 · 本目录已核对、达到 100 GitHub Stars 的项目，按星标排序。Stars 表示关注度，不代表复现成功或生产可用。 [查看快照来源](data/popularity.json).

| 项目 / 演示 | GitHub Stars | 过程与局限 |
| --- | ---: | --- |
| [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) | 1415 | [Open Claude UI：从桌面交互调查到可复用界面组件](cases/zh-CN/open-claude-ui.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 1391 | [Co-op Anything：用 REA 调查单机战役的联机接入点](cases/zh-CN/coop-anything.md) |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 763 | [sparkDash：把 REA 分析任务接入多设备仪表盘](cases/zh-CN/sparkdash-rea.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 301 | [terminal-rs：研究 TradingView 交互后做行情终端](cases/zh-CN/terminal-rs.md) |
| [michaelshimeles/rec-rs](https://github.com/michaelshimeles/rec-rs) | 104 | [rec-rs：研究 OBS 后做原生 macOS 录屏工具](cases/zh-CN/rec-rs.md) |

## 官方案例

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [DX-Ball：恢复声音左右声道计算](cases/zh-CN/dx-ball.md) | 画面中的位置怎样转换成音效声像？ | [原始出处](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion：追踪 Electron 富文本剪贴板桥](cases/zh-CN/notion-clipboard.md) | 网页编辑器如何通过桌面端写入富文本剪贴板？ | [原始出处](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04：恢复 PC-98 弹幕环形角度算法](cases/zh-CN/th04.md) | 环形弹幕如何均匀展开，并叠加瞄准玩家的方向？ | [原始出处](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis：从 Android APK 找出动态验证码算法](cases/zh-CN/aegis-totp.md) | 每 30 秒变化的六位登录码是怎么计算的？ | [原始出处](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF：从二进制恢复 flag 检查方程](cases/zh-CN/ductf-masked-squares.md) | 没有符号和源码，如何找出输入校验逻辑？ | [原始出处](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## 游戏实践

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [Desktop Games：把砸桌面小游戏移植到 macOS 和浏览器](cases/zh-CN/desktop-games-nostalgia.md) | 怎样理解 Peter 解释器和程序树，并移植交互与资源？ | [原始出处](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die：用 Rust 重建 Snowball War](cases/zh-CN/ski-or-die.md) | 怎样从旧 DOS 程序恢复投掷、碰撞、刷怪与计分规则？ | [原始出处](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2：用函数级 Evidence 重建战地 2 客户端](cases/zh-CN/openbattlefield2.md) | 怎样把准星、HUD 与客户端行为的二进制调查，转成可追溯的引擎实现？ | [原始出处](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs：先确认加壳边界，再从游戏数据重建](cases/zh-CN/gunzrs.md) | 原生主程序被加壳、游戏逻辑不能静态读取时，怎样界定调查范围并继续重建？ | [原始出处](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything：用 REA 调查单机战役的联机接入点](cases/zh-CN/coop-anything.md) | 单机战役怎样保留任务脚本和阵营，再允许第二位玩家加入？ | [原始出处](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |
| [Open Scrantic：用 Rust 重建 Johnny Castaway 屏保引擎](cases/zh-CN/open-scrantic.md) | 16 位屏保的脚本解释器、剧情调度与随机行为，怎样在现代系统运行？ | [原始出处](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md) |

## 应用实践

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [Sketch（原 paper-rs）：研究 Paper 后构建 Rust 无限画布](cases/zh-CN/paper-rs.md) | 怎样理解画布、布局和编辑器交互，并实现独立设计工具？ | [原始出处](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs：研究 OBS 后做原生 macOS 录屏工具](cases/zh-CN/rec-rs.md) | 怎样做更聚焦的屏幕、摄像头与音频录制工具？ | [原始出处](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs：研究 TradingView 交互后做行情终端](cases/zh-CN/terminal-rs.md) | 如何把图表交互调查转化为独立 Rust 行情界面？ | [原始出处](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow：拆解语音输入链路并做本地小原型](cases/zh-CN/wispr-flow.md) | 录音、转写、上下文和粘贴是如何串起来的？ | [原始出处](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab：从 PowerToys 二进制研究取色器](cases/zh-CN/hexgrab.md) | 全局快捷键、像素取色和剪贴板怎样配合？ | [原始出处](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm：研究 Ghostty 外壳后做自己的终端](cases/zh-CN/adamterm.md) | 终端核心、原生窗口、菜单和服务之间怎么分工？ | [原始出处](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn：研究 QuickBooks 后做本地账本](cases/zh-CN/ledger-reborn.md) | 如何理解桌面会计工作流，并做独立本地应用？ | [原始出处](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens：用已发布程序核对磁盘扫描与树图算法](cases/zh-CN/disklens.md) | 怎样确认磁盘扫描、矩形树图和重复文件检测的实现，再做独立界面？ | [原始出处](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D：从网页包分析到独立 3D 生成原型](cases/zh-CN/hyper3d-clone.md) | 怎样把网页分析得到的界面与接口观察转化为一个可导出模型的原型？ | [原始出处](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |
| [Open Claude UI：从桌面交互调查到可复用界面组件](cases/zh-CN/open-claude-ui.md) | 输入法合成、滚动与桌面交互规则，如何转化为可复用界面组件？ | [原始出处](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx) |

## 硬件与兼容

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [VSL-DSP：把厂商库分析用于声卡 DSP 工具](cases/zh-CN/vsl-dsp.md) | 厂商控制程序如何发现设备、注册参数和表示增益？ | [原始出处](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer：替换平台层实现 Linux 移植](cases/zh-CN/vd-streamer-linux.md) | 如何保留协议库，把采集、编码、音频和输入换成 Linux 实现？ | [原始出处](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch：分析配套 APK 后做 eSIM 导航助手](cases/zh-CN/watch-esim-helper.md) | 怎样找到配套应用已有的手表 eSIM 下载入口，并从独立助手交接？ | [原始出处](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint：让手机热敏打印机接入 Windows 打印](cases/zh-CN/picoprint.md) | 已有驱动能连接却不出纸时，怎样定位握手差异并接入 Windows 打印系统？ | [原始出处](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN：研究客户端协议后实现独立门户与隧道工具](cases/zh-CN/v5vpn-rea-client.md) | 怎样从原厂客户端调查认证、资源发现与连接流程，做一个范围明确的独立客户端？ | [原始出处](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## 分析与评测

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [OpenBSD netcat：静态审计已发布 ELF](cases/zh-CN/netcat-analysis.md) | 已发布 netcat 包含哪些网络、代理和安全相关实现？ | [原始出处](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA：分析工具自身并检验预测](cases/zh-CN/rea-on-rea.md) | REA 如何选择原生分析 provider，又怎样判断 provider 不可用？ | [原始出处](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth：对照已知源码找分析盲点](cases/zh-CN/rea-groundtruth.md) | 工具报告零个 IPC/窗口时，是程序真的没有，还是分析漏掉了？ | [原始出处](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab：测量 REA 对 Windows 逆向任务的实际帮助](cases/zh-CN/rea-lab.md) | 加上 REA 后，代理解决任务的成功率、耗时和成本怎样变化？ | [原始出处](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2：用带符号构建核对去符号二进制分析](cases/zh-CN/bzip2-groundtruth.md) | 没有函数名时，怎样从一条输出字符串找出函数，再核对调用关系？ | [原始出处](https://github.com/morluto/rea/discussions/2254) |
| [本地 27B 模型：压缩 MCP 工具列表后完成函数调查](cases/zh-CN/local-model-mcp.md) | 本地模型只有 32K 上下文时，怎样让 REA 的工具描述与实际调查一起装得下？ | [原始出处](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab：固定 npm 包后只分析入口切片](cases/zh-CN/opensource-rea-lab.md) | 怎样先固定发布物身份，再在有限预算里回答入口文件做什么？ | [原始出处](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## 学习与复现

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [rea-playbook：把 Electron Evidence 变成可读报告与重建](cases/zh-CN/rea-playbook.md) | 拿到巨大 Evidence JSON 后，怎样提取可读事实并验证重建？ | [原始出处](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse：分析两个开源库的行为后组合新工具](cases/zh-CN/reafuse.md) | 怎样把两个项目的行为整理成规格，再实现一个同时利用两者的新工具？ | [原始出处](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |
| [西班牙语 REA 实验：重建作者自有的密钥校验器](cases/zh-CN/rea-spanish-lab.md) | 如何从小型无符号程序恢复接受规则，并与原始程序核对？ | [原始出处](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py) |

## 工具与集成

| 项目 / 演示 | 想解决什么问题 | 原始出处 |
| --- | --- | --- |
| [sparkDash：把 REA 分析任务接入多设备仪表盘](cases/zh-CN/sparkdash-rea.md) | 怎样从网页提交远程 REA 任务，让长分析在断开浏览器后继续，并按需查看大结果？ | [原始出处](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |
| [REA Safe Agent：在两个受限进程之间转发静态分析](cases/zh-CN/rea-safe-agents.md) | 怎样让代理查询 REA，同时约束输入、主机工具和模型请求的访问范围？ | [原始出处](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md) |

## 什么样的实践会被收录？

公开原文明确使用 REA，有具体问题、实际过程和产出。分析、独立重写与历史成果分别归因；失败实验、工具评测以及有实际调用代码与功能产出的 REA 集成也会收录。只介绍工具、备份源码或提出尚未实施的计划，不计入案例。

[贡献指南](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [查看来源记录](SOURCES.md) · [开放案例数据](data/cases.json)

[安装与工具版本要求请查看 REA 官方项目。](https://github.com/morluto/rea)

独立社区案例集，由 Sanbu 整理。与 REA 上游项目无隶属关系。

本页为独立整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。 [MIT](LICENSE).
