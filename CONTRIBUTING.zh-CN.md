# 贡献指南

欢迎提交你自己或网上发现的 REA 实践。中文和英文都可以。

## 快速投稿

打开 [案例投稿 Issue](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)，填写：

1. 案例名称、原作者与原始公开链接。
2. 原文哪里明确说使用了 [morluto/rea](https://github.com/morluto/rea)。
3. 分析目标、要解决的问题与 REA 实际承担的工作。
4. 已公开的产出、测试、截图或报告。
5. 未实现、近似、失败与未验证项。

你不需要先整理成文章。有可靠一手链接就可以提线索；审核后再收录。

## 直接提 PR

- 英文主数据维护于 `data/cases.json`；中文编辑稿维护于 `data/locales/zh-CN.json`，其他语言维护于对应 locale 文件。
- `id` 使用稳定英文短名称，类别使用 `official`、`games`、`apps`、`hardware`、`analysis`、`learning` 或 `integrations`。
- 按 [多语言维护说明](LOCALIZATION.md) 更新翻译与来源摘要后，运行 `node scripts/build-site.mjs` 生成 README、案例 Markdown 与在线目录。
- 运行 `node scripts/build-site.mjs --check`、`python3 scripts/check-site.py` 与 `git diff --check` 检查生成内容和语言对应关系；不要直接编辑生成文件。
- GitHub 原文优先使用 `blob/<完整提交 SHA>/...`，同时保留项目入口。
- 写核对日期与版本；分清作者报告、本仓库复跑和未验证项。初次收录默认 `source-reviewed-not-reproduced`。
- 保留作者署名，原创整理，不整篇复制别人的文章或案例集。

## 收录门槛

**应收录：** 有具体问题、实际使用过程、公开产出，并明确归因于 REA 的案例。局部成功、失败实验和工具评测都可以。

**不作为案例收录：** 泛泛的介绍、安装说明、镜像、未实施的计划、没有 REA 使用证据的 AI 重写。第三方案例集可作为发现线索，不能代替一手来源。

使用 REA 提供功能的工具可收录到“工具与集成”，但须有实际调用代码和公开功能产出；单纯推荐安装仍不计入。须区分集成测试、模拟 REA 与真实目标分析。

同一个项目保持一个条目。若只在某个阶段使用 REA，就写明那个阶段；不能把其他工具或历史成果都归因于 REA。测试数字应说明范围和出处，不能用一个函数的成功证明整款应用兼容。

请提交公开且有权分享的材料；不上传秘密、目标软件安装包、账号配置或未经许可的完整反编译输出。外链项目的许可证不因本仓库采用 MIT 而改变。

## 更新或纠错

用 [资料纠错 Issue](https://github.com/git-sanbu/awesome-rea/issues/new?template=correction.yml) 或 PR 提供新原文、提交与日期。若工具版本已修复历史问题，保留旧版本背景，再添加更新说明。
