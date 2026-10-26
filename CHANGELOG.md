# Changelog

## 2026-10-26

- Add four source-reviewed projects: Open Claude UI (desktop interaction notes and reusable components), Open Scrantic (Johnny Castaway engine), REA Safe Agent (implemented static-analysis integration) and a Spanish lab using an author-owned validator. The catalog now contains 38 distinct cases: 5 official and 33 community projects or experiments.
- Pin every new source to a complete commit; distinguish author reports, code examples, real REA calls and limited tests. No third-party binaries were installed or run.
- Synchronize all 12 editions, READMEs, case notes and the 468-page static catalog. Preserve original quotations and all prior case review dates; translate only added editorial fields.
- Refresh the 31-repository GitHub Stars snapshot dated 2026-10-26. Open Claude UI and rec-rs now appear in the existing 100-Star popular section; Stars remain attention metrics, not verification.
- Record discovery queries, exclusions and remaining review gaps in [research notes](research/2026-10-26.md). Update source records and the documented site count.

## 2026-10-21

### English-first multilingual release

- English becomes the default repository README, case notes and website. The original Chinese text remains available in a complete Simplified Chinese edition.
- Add complete editions in Traditional Chinese, Japanese, Korean, Spanish, French, German, Brazilian Portuguese, Russian, Arabic and Hindi: 34 cases and one index per language, 420 HTML pages in total. The catalog still contains 34 distinct projects.
- Add native language navigation that keeps the current case and preserves index search/filter state. Arabic uses RTL layout. Each edition has localized metadata/schema, self-canonicals, reciprocal hreflang and English x-default; all canonical pages are in the sitemap.
- English and original Simplified Chinese remain editorial. Other translations are labeled as machine translation or script conversion; quotations and source links remain unchanged. Builds reject stale or missing translations instead of silently falling back to English.
- Document translation refresh, validation and provenance in LOCALIZATION.md. Preserve the existing English FAQ in ABOUT.md.

### 第二轮：热门项目

- 新增 Co-op Anything（721 Stars）与 sparkDash（738 Stars），案例由 32 增至 34；当前合计 5 个官方案例、29 个社区项目或作者实验。
- Co-op Anything 固定 C&C3 与 World in Conflict 的具体调查笔记，只归因已明确记录的 REA/Ghidra 工作；保留第二玩家控制、战役与网络验收限制。
- sparkDash 单列“工具与集成”：核对真实 CLI 调用代码、任务与结果界面，说明其 fake REA 测试不能代替远程设备实测。
- 新增 GitHub Stars 日期快照、README 中英文热门入口及在线热门项目区；仅展示已收录项目中达到 100 Stars 的条目，不代表完整 GitHub 排名或质量评估。
- BaoCut 原作者归因链接与博客本轮访问返回 403，未以第三方转述替代核实；pkg-unpacker 仅发现 REA 对接用法说明，暂未作为已完成 REA 分析案例加入。详细记录见 research/2026-10-21-popular.md。

### 第一轮：案例与已有项目更新

- 案例由 29 增至 32：新增 OpenBattlefield2、GunZRs、V5VPN，合计 5 项官方 Showcase、27 项社区项目或作者实验。
- OpenBattlefield2：以公开准星笔记的地址和 REA Evidence IDs 为使用证据；说明 REA、直接 Ghidra、游戏数据与服务器符号各自的作用，以及未实现的战斗功能。
- GunZRs：只将 REA 原生文件调查、加壳结论与框架检查归于 REA；格式恢复与游戏实现主要来自数据分析，保留推断、平台和未公开原始 Evidence 的限制。
- V5VPN：收录作者协议调查、Go/MyGo 实现及其报告的网关验证；限定 5.3.3.x / v2.0、门户与 HTTP CONNECT 路径，不宣称完整 VPN 功能或独立安全验证。
- 刷新 4 个既有条目：paper-rs 更名 Sketch（ID 保留）；rec-rs 增加 Intel universal 发布说明（作者实测仍为 Apple Silicon）；terminal-rs 新增 151 指标的作者报告；rea-lab 明确 339 次为调用 REA 的运行口径，含 3 次中断重跑，总研究运行数为 482。
- 复查 22 个既有 GitHub 社区项目：7 项 HEAD 有变化。其余改动与原收录的 REA 分析结论无新增关系或尚未完整复核，保留原固定版本和日期。审阅范围与待核查线索见 [本轮来源审阅](research/2026-10-21.md)。
- 中英文 README、来源记录、案例数据、Markdown 与在线目录同步；所有成果均为公开来源核对，未安装或复跑第三方项目。

## 2026-10-19

- 案例由 21 增至 29：新增 8 项公开实践，合计 5 项官方 Showcase、24 项社区项目或作者实验。
- 新增：DiskLens、Hyper3D 原型、Pixel Watch eSIM 助手、PicoPrint、bzip2 ground truth、本地模型 MCP、Open-source REA Lab、ReaFuse。
- rea-lab：补充 Study 4（无 REA 20/20、用 REA 19/20，未检测到显著差异）和 Study 5（改进 skill 相对官方版本成本增加 14%）；Study 3 的 Evidence 认证由初报 142/144 更正为 144/144，任务成功数不变。
- 复查原有 16 个社区项目的 HEAD 与 README 差异；保留未改变条目的历史核对日期，不将旧版本结果视为当前版本保证。
- 中英文 README、案例 Markdown、JSON 数据、来源记录与在线目录同步更新；官方/社区数量改为按数据自动统计。
- 所有新增及更新结论均为公开来源复核，未独立复跑。讨论原帖可编辑，固定提交与作者报告的证据级别在来源记录中注明。

## 2026-10-16

- 首次收录 21 项公开实践，上线可搜索的静态目录。
