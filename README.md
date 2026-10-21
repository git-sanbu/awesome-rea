# Awesome REA — Reverse Engineer Anything 实践案例与用法

![Awesome REA: real projects, original sources, honest limits](assets/cover.svg)

**Real-world REA use cases, examples and AI-assisted reverse engineering case studies.**

收录网上公开的 **[REA — Reverse Engineer Anything](https://github.com/morluto/rea)** 实践：研究了什么、REA 具体帮了什么、最后做出了什么，以及哪些地方仍未验证。

**中文** · [English](README.en.md) · [在线搜索案例](https://awesome-rea-e7l.pages.dev/) · [投稿案例](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml) · [收录标准](CONTRIBUTING.md)

这是独立社区案例集。现有 **32 个案例**均附公开原始来源，其中 5 个来自官方 Showcase，27 个来自社区项目与作者实验。最近更新：**2026-10-21**；各条目保留独立核对日期。

> 这里的“已收录”表示已阅读来源并找到明确的 REA 使用说明。成果和测试数字按原作者报告转述，本仓库未独立复跑，不代表完整兼容或生产可用。

想找具体软件？打开 [可搜索案例目录](https://awesome-rea-e7l.pages.dev/)，输入 `Ghostty`、`PowerToys`、`Electron`、`游戏移植` 或 `录屏`。也可以按案例类别筛选。

## 最近更新 · 2026-10-21

- 新增 **3 个案例**：[OpenBattlefield2](cases/openbattlefield2.md) 准星 Evidence 与客户端重建、[GunZRs](cases/gunzrs.md) 加壳边界调查、[V5VPN](cases/v5vpn-rea-client.md) 门户与隧道兼容实现。
- 更新 Sketch（原 paper-rs）名称、rec-rs 的 Intel 发布范围、terminal-rs 的指标实现进展，以及 rea-lab 的 339 次 REA 调用运行口径；保留原有固定来源。
- 复查已有 22 个 GitHub 社区项目的 HEAD，7 项与收录版本不同；仅对已复核并影响摘要的 4 项刷新核对日期。详见 [更新记录](CHANGELOG.md) 与 [来源记录](SOURCES.md)。

## 从你的目的开始

- **想把老游戏搬到新平台：** 看 [Desktop Games](cases/desktop-games-nostalgia.md)、[Snowball War](cases/ski-or-die.md)。
- **想理解一个小功能并自己实现：** 看 [PowerToys 取色器](cases/hexgrab.md)、[Aegis 验证码](cases/aegis-totp.md)、[Ghostty 终端外壳](cases/adamterm.md)。
- **想做独立桌面应用：** 看 [Sketch 无限画布（原 paper-rs）](cases/paper-rs.md)、[录屏工具](cases/rec-rs.md)、[会计账本](cases/ledger-reborn.md)。
- **想研究协议或平台兼容：** 看 [声卡 DSP](cases/vsl-dsp.md)、[Linux VR 串流](cases/vd-streamer-linux.md)。
- **想先判断 REA 靠不靠谱：** 看 [源码对照](cases/rea-groundtruth.md)、[Windows 对照评测](cases/rea-lab.md)、[REA 分析自己](cases/rea-on-rea.md)。
- **想直接动手练习：** 看 [Electron 最小实践](cases/rea-playbook.md)、[CTF 检查器](cases/ductf-masked-squares.md)。

## 案例目录

每个详情页都包含：目标问题 → REA 的作用 → 公开成果 → 局限 → 原始来源。官方案例中的历史重建成果与新 REA 检查分别注明。

### 官方案例

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [DX-Ball：恢复声音左右声道计算](cases/dx-ball.md) | 画面中的位置怎样转换成音效声像？ | 来源记录：该函数通过 3,205 个原始 x86 差分用例，历史编译器重编译后的完整 63 字节匹配。 |
| [Notion：追踪 Electron 富文本剪贴板桥](cases/notion-clipboard.md) | 网页编辑器如何通过桌面端写入富文本剪贴板？ | 公开案例展示了 renderer → preload → IPC → main 的源码级解释，以及独立模块探针中的富文本标记与 Markdown 表格处理。 |
| [TH04：恢复 PC-98 弹幕环形角度算法](cases/th04.md) | 环形弹幕如何均匀展开，并叠加瞄准玩家的方向？ | 案例给出 REA 新检查结果，并引用历史 Turbo C++ 检查：包含该辅助函数的 2,139 字节范围匹配。 |
| [Aegis：从 Android APK 找出动态验证码算法](cases/aegis-totp.md) | 每 30 秒变化的六位登录码是怎么计算的？ | 官方页面报告：提取方法与独立实现对照 133 个用例，并核对 RFC 6238 的六个 SHA-1 参考样例。 |
| [DownUnderCTF：从二进制恢复 flag 检查方程](cases/ductf-masked-squares.md) | 没有符号和源码，如何找出输入校验逻辑？ | 官方记录了正确候选输出 Correct! / exit 0、错误候选输出 Incorrect! / exit 255；求解后再对照主办方源码与 metadata。 |

### 游戏实践

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [Desktop Games：把砸桌面小游戏移植到 macOS 和浏览器](cases/desktop-games-nostalgia.md) | 怎样理解 Peter 解释器和程序树，并移植交互与资源？ | 公开仓库包含 Swift macOS 版、浏览器版、反编译程序树及资源处理脚本。 |
| [Ski or Die：用 Rust 重建 Snowball War](cases/ski-or-die.md) | 怎样从旧 DOS 程序恢复投掷、碰撞、刷怪与计分规则？ | 作者公开了 Rust + SDL2 可玩重建、行为规格、逆向笔记与资产提取工具。 |
| [OpenBattlefield2：用函数级 Evidence 重建战地 2 客户端](cases/openbattlefield2.md) | 怎样把准星、HUD 与客户端行为的二进制调查，转成可追溯的引擎实现？ | 公开 C++20 引擎、函数笔记、测试与截图；作者报告可读取自有 BF2 1.5 安装、连接原版专用服务器并显示士兵和 HUD。准星已在连接模式绘出并随移动扩散、停止后收拢，附 test_weapon_hud 等检查。 |
| [GunZRs：先确认加壳边界，再从游戏数据重建](cases/gunzrs.md) | 原生主程序被加壳、游戏逻辑不能静态读取时，怎样界定调查范围并继续重建？ | 公开 Rust + Bevy 重建、数据格式笔记、查询脚本与测试说明；作者报告 Linux 上可玩，支持读取自有安装、地图、动作、机器人、浏览器版本和 LAN。框架记录生成 ELF/PE 的函数分析及 snapshot replay 通过；这些 fixture 检查与游戏兼容性分别记录。 |

### 应用实践

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [Sketch（原 paper-rs）：研究 Paper 后构建 Rust 无限画布](cases/paper-rs.md) | 怎样理解画布、布局和编辑器交互，并实现独立设计工具？ | 公开项目包含无限画布、页面、布局、矢量编辑、白板与 MCP 接口，并列出测试与功能差异。 2026-10-21 复核：项目已更名 Sketch，程序名为 sketch-rs，作者说明首次启动迁移旧项目目录，并兼容旧文件和环境变量；不另计新案例。 |
| [rec-rs：研究 OBS 后做原生 macOS 录屏工具](cases/rec-rs.md) | 怎样做更聚焦的屏幕、摄像头与音频录制工具？ | 项目公开屏幕/摄像头录制、音频混合、回放缓冲与直播功能；作者报告在 Apple Silicon Mac 上开发和测试。 2026-10-21 的 README 增加 Apple Silicon + Intel universal 发布、签名/公证及 Sparkle 更新说明。 |
| [terminal-rs：研究 TradingView 交互后做行情终端](cases/terminal-rs.md) | 如何把图表交互调查转化为独立 Rust 行情界面？ | 项目公开 Rust GPU 图表、键盘命令、面板布局与数据接入；界面采用 Bloomberg 风格。 2026-10-21 复核：作者新增 151 个内置指标及参数、边界输入测试说明，并提供 macOS universal 发布脚本；这些是后续实现进展，不代表新做了 REA 分析。 |
| [Wispr Flow：拆解语音输入链路并做本地小原型](cases/wispr-flow.md) | 录音、转写、上下文和粘贴是如何串起来的？ | 公开拆解报告、Ghidra 补充调查、开发过程与本地 flowlite.py 原型。 |
| [hexgrab：从 PowerToys 二进制研究取色器](cases/hexgrab.md) | 全局快捷键、像素取色和剪贴板怎样配合？ | 公开源码与 docs/rea-findings.md；作者报告 9 条发现中 8 条完全正确。 |
| [AdamTerm：研究 Ghostty 外壳后做自己的终端](cases/adamterm.md) | 终端核心、原生窗口、菜单和服务之间怎么分工？ | 作者以 AppKit + SwiftTerm 做了带原生标签页的精简 macOS 终端，并提供自检命令。 |
| [Ledger Reborn：研究 QuickBooks 后做本地账本](cases/ledger-reborn.md) | 如何理解桌面会计工作流，并做独立本地应用？ | 公开 preview 包、源码和案例记录；作者列出发票、付款、库存、银行对账和报表等已实现流程。 |
| [DiskLens：用已发布程序核对磁盘扫描与树图算法](cases/disklens.md) | 怎样确认磁盘扫描、矩形树图和重复文件检测的实现，再做独立界面？ | 公开 Rust 引擎与 Tauri/Svelte 界面、REA evidence IDs；作者报告 24 个引擎测试，以及约 130 万文件的单机扫描与树图检查。 |
| [Hyper3D：从网页包分析到独立 3D 生成原型](cases/hyper3d-clone.md) | 怎样把网页分析得到的界面与接口观察转化为一个可导出模型的原型？ | 公开 Next.js 16 原型、API blueprint 与差异说明；作者报告 67 个测试，支持图像/文本到场景规格、three.js 几何生成，以及 GLB、GLTF、OBJ、STL、USDZ 导出。 |

### 硬件与兼容

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [VSL-DSP：把厂商库分析用于声卡 DSP 工具](cases/vsl-dsp.md) | 厂商控制程序如何发现设备、注册参数和表示增益？ | 作者将调查结果用于 dB 命令、参数命名和线性/dB 转换，并提供 CMocka 测试。 |
| [Virtual Desktop Streamer：替换平台层实现 Linux 移植](cases/vd-streamer-linux.md) | 如何保留协议库，把采集、编码、音频和输入换成 Linux 实现？ | 公开 Linux 移植源码、构建与模拟头显测试，使用 PipeWire/X11、GStreamer 和 uinput。 |
| [Pixel Watch：分析配套 APK 后做 eSIM 导航助手](cases/watch-esim-helper.md) | 怎样找到配套应用已有的手表 eSIM 下载入口，并从独立助手交接？ | 公开 Android 助手、companion-analysis.md 和测试记录；测试文档报告 25 个单元测试与模拟器交接。作者在 README 后续补充：Pixel Watch 2 LTE 安装成功，并在支持的运营商上验证 data-only eSIM 联网。 |
| [PicoPrint：让手机热敏打印机接入 Windows 打印](cases/picoprint.md) | 已有驱动能连接却不出纸时，怎样定位握手差异并接入 Windows 打印系统？ | 公开基于 thermoprint 的 Go 打印服务与协议说明；作者报告在 Windows 11 + LX-D02 真机上，通过系统 Ctrl+P 打印文本、图片和文档，并将握手修正反馈上游。 |
| [V5VPN：研究客户端协议后实现独立门户与隧道工具](cases/v5vpn-rea-client.md) | 怎样从原厂客户端调查认证、资源发现与连接流程，做一个范围明确的独立客户端？ | 公开 Go/MyGo 桌面与 CLI 源码、协议说明和测试文件；作者报告在 Windows 开发环境与两套生产网关完成端到端连通性验证，实现 SSL VPN 门户、授权资源获取与 HTTP CONNECT 隧道路径。 |

### 分析与评测

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [OpenBSD netcat：静态审计已发布 ELF](cases/netcat-analysis.md) | 已发布 netcat 包含哪些网络、代理和安全相关实现？ | 公开函数/字符串/调用路径调查、results.txt 与 files/ 下的原始 JSON 结果。 |
| [REA on REA：分析工具自身并检验预测](cases/rea-on-rea.md) | REA 如何选择原生分析 provider，又怎样判断 provider 不可用？ | 公开完整过程与测试回执；作者报告四个回答都只部分正确，八个 Ghidra 检查结果中预测错了三个。 |
| [rea-groundtruth：对照已知源码找分析盲点](cases/rea-groundtruth.md) | 工具报告零个 IPC/窗口时，是程序真的没有，还是分析漏掉了？ | 作者公开一键复现：特定 webpack 形态的 Electron API 没被识别，并记录签名后 ASAR integrity mismatch 的处理方式。 |
| [rea-lab：测量 REA 对 Windows 逆向任务的实际帮助](cases/rea-lab.md) | 加上 REA 后，代理解决任务的成功率、耗时和成本怎样变化？ | 作者现已公开五项预注册研究：Study 1 为两组均解出 28/30；Study 2 为无 REA 11/24、用 REA 4/24；Study 3 为 71/72 与 68/72。新增 Study 4 用 DeepSeek 模型为 20/20 与 19/20，未检测到显著差异；Study 5 的改进 skill 相对官方版本成本增加 14%（p=0.012），准确率未显著改变。 2026-10-21 补充 Evidence 留存观察：作者明确总计 482 次研究运行中，336 次调用 REA，加上 3 次因重启中断后重跑，合计 339 次调用运行均未主动保留 Evidence，评分器从客户端记录重建。 |
| [bzip2：用带符号构建核对去符号二进制分析](cases/bzip2-groundtruth.md) | 没有函数名时，怎样从一条输出字符串找出函数，再核对调用关系？ | 作者报告定位到 uncompress，1 个调用者与 24 个被调用者和对照构建一致；公开构建步骤、裁剪后的 MCP 调用记录及两类错误返回。 |
| [本地 27B 模型：压缩 MCP 工具列表后完成函数调查](cases/local-model-mcp.md) | 本地模型只有 32K 上下文时，怎样让 REA 的工具描述与实际调查一起装得下？ | 作者报告完整 206 工具提示超出上下文；62 工具配置在读提示后遭遇 GPU reset；10 工具配置提示为 4,407 tokens，三次均找到目标字符串并解释检查逻辑，每次约 80 秒。 |
| [Open-source REA Lab：固定 npm 包后只分析入口切片](cases/opensource-rea-lab.md) | 怎样先固定发布物身份，再在有限预算里回答入口文件做什么？ | 公开固定摘要、审计 JSON、脱敏 Evidence 摘要和复现脚本；切片报告 1 个已解析 JS、469 AST 节点、14 条 findings、零解析失败，并明确完整包分析曾因语义扩展而中断。 |

### 学习与复现

| 案例 | 用 REA 干什么 | 成果与状态 |
| --- | --- | --- |
| [rea-playbook：把 Electron Evidence 变成可读报告与重建](cases/rea-playbook.md) | 拿到巨大 Evidence JSON 后，怎样提取可读事实并验证重建？ | 公开脱敏 Evidence fixture、file:line 报告、recreate 与断言；作者报告 10/10 重建检查通过。 |
| [ReaFuse：分析两个开源库的行为后组合新工具](cases/reafuse.md) | 怎样把两个项目的行为整理成规格，再实现一个同时利用两者的新工具？ | 公开 ratewise（传输速率与 ETA）和 objdelta（结构 diff/patch）源码、报告与 Evidence；作者分别报告 18/18 和 17/17 契约测试通过，并记录自己的 7/7、6/6 测试。两个示例合并为一个项目案例。 |

## 我们怎样收录

1. **必须有公开原文。** 优先作者 README、调查报告、代码/测试与官方案例；第三方案例集用于发现线索，再回到一手来源。
2. **必须明确使用 REA。** 仅仅使用 Claude、Codex、Ghidra，或名字里带 REA，不足以收录。
3. **写清实际贡献。** REA 分析、其他工具、人工阅读与独立重写分别说明；同一项目不拆成多个案例凑数。
4. **保留局限和失败。** 没有运行对照、只用模拟设备、功能未实现、分析漏报，都在详情页注明。
5. **固定出处。** GitHub 原文尽量固定到提交 SHA；版本与结论保留核对日期，后续修复不自动推翻历史记录。

不把镜像仓库、新闻转载、工具安装成功或尚未实施的需求 Issue 算作实践成果。收录不改变原项目代码、资产或品牌的权利归属；请在有权研究的目标上复现。

## 常见问题

### REA 能做什么？这里有哪些真实用法？

这里收录 REA 游戏移植、桌面应用分析、独立功能实现、协议调查、平台兼容与工具评测。每个条目说明 **REA 使用场景、操作过程、公开成果和局限**，适合寻找 REA examples、REA tutorials 和 reverse engineering use cases 的读者。

### REA、rea-agents 与 Reverse Engineer Anything 是什么关系？

本仓库中的 REA 指 [morluto/rea](https://github.com/morluto/rea)，全称 Reverse Engineer Anything，npm 包名为 `rea-agents`。它为支持 MCP 的 coding agents 提供逆向分析工具，也支持 CLI。它与其他同名 REA 项目无关。

### 所有案例都需要 Ghidra 或 IDA 吗？

不一定。[Electron 最小实践](cases/rea-playbook.md) 使用 JavaScript 静态路径，[AdamTerm](cases/adamterm.md) 使用包与元数据检查；原生代码深度分析常借助 Ghidra、Hopper 或 IDA。具体前提见案例与官方文档。

### 怎样快速找到相关实践？

用 [在线目录](https://awesome-rea-e7l.pages.dev/) 搜索软件名、问题或英文关键词。要用 GitHub 搜 README，可以搜索 [`"rea-agents" in:readme user:git-sanbu`](https://github.com/search?q=%22rea-agents%22+in%3Areadme+user%3Agit-sanbu&type=repositories)。

### 可以贡献别人的案例，或失败的尝试吗？

可以。提供公开一手链接、实际 REA 使用说明和产出即可；失败与对照评测也有价值。按照 [贡献指南](CONTRIBUTING.md) 投稿，中文或英文都欢迎。觉得有用可以 **Star 保存**，以后更容易找到。

## REA 官方入口

- [官方仓库](https://github.com/morluto/rea) · [官方网站](https://rea.tools/) · [安装说明](https://github.com/morluto/rea/blob/main/docs/installation.md)
- [官方实操指南](https://rea.tools/guides/) · [官方 Showcase](https://rea.tools/showcase/)

本仓库记录案例，不分发 REA 安装包。安装和版本要求以官方入口为准。

## 贡献与数据

欢迎通过 [Issue 投稿](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml) 或 PR 补充案例、更新状态、纠正归因。请提供**原始链接、REA 的具体用途、成果与局限**。

- [贡献指南](CONTRIBUTING.md) · [案例模板](templates/case.md)
- [机器可读案例数据](data/cases.json) · [检索与来源记录](SOURCES.md)
- 本仓库原创整理采用 [MIT License](LICENSE)，外链项目与摘录保留各自权利与许可证。
