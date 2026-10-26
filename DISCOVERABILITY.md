# 搜索与社区发现：维护说明

配置与检查日期：2026-10-16。

## 已实施

- 名称保留 `awesome-rea`，首页明确写出 Reverse Engineer Anything 与 `rea-agents`，用中英文描述真实用途。
- 仓库简介覆盖 REA use cases、examples、case studies 与 AI reverse engineering；Topics 围绕实际工具和收录对象设置。
- 中英文 README 提供目的导航、常见问题、在线搜索入口和投稿入口。
- Cloudflare Pages 提供静态案例目录和独立案例页，带 title、description、canonical、Open Graph、结构化列表与 sitemap。案例正文直接出现在 HTML，搜索筛选仅作增强。
- 网站首页与仓库 About 的 Website 互相连接，所有案例链接回作者和固定原文。
- 保留贡献指南、投稿/纠错模板、公开数据和核对日期。

## GitHub 官方文档说明了什么

1. [Repository search](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)：未指定 `in:` 时搜索名称、简介和 Topics；README 内容需要 `in:readme`。
2. [Topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)：Topics 提供主题浏览与搜索入口，最多 20 个，应描述实际目的、领域与社区。
3. [Discovering projects](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github#discovering-relevant-projects)：Explore 个性化推荐与用户过去的贡献、Star 等活动有关。配置完整不等于获得推荐，也不保证进入 Trending。

没有官方的“开启推荐”开关；不设定 Star 阈值或推荐时间保证。静态站上线、sitemap 可访问也不等于 Google/Bing 已收录。

## 后续有价值的工作

- 发布有实质内容的新案例或版本更新，修正失效链接和旧版本结论；不要为了更新时间提交空改动。
- 保持一手来源与作者署名，补充读者真正会搜索的软件名、问题和关键流程。
- 有读者投稿时及时反馈，提供明确的小任务和审核标准。
- 对外分享可介绍独特价值：有来源、承认局限、同时收录失败和评测。向上游社区、其他 awesome lists 或社交平台投稿，需要仓库维护者主动决定；本次未代发消息或 PR。
- Search Console 验证或其他搜索平台提交需实际账号权限；本次未声称完成搜索引擎收录。

## 本地更新网站

```sh
node scripts/build-site.mjs
node scripts/build-site.mjs --check
python3 -m http.server 4178 --directory docs
# Publish the generated directory after reviewing changes:
npx wrangler pages deploy docs --project-name awesome-rea --branch main
```

在线目录使用 Cloudflare Pages 的独立地址 `https://awesome-rea-e7l.pages.dev/`。GitHub Pages 实际继承账号主站的旧域名 `tjystu.top` 并发生跳转，本次未修改账号主站。编辑 `data/cases.json` 后同步生成页面与 README；以 Cloudflare 部署回执和线上检查确认上线。截至 2026-10-26，网站为 38 个案例提供 12 种语言版本，共 468 个 HTML 页面；sitemap 覆盖各语言主页与案例页。

## 本次 GitHub 搜索实测

2026-10-16 使用 GitHub Search API 查询，以下三个查询均返回 `git-sanbu/awesome-rea`：

- `topic:rea-agents topic:case-studies`
- `"rea-agents" "use cases" in:description`
- `"REA" "实践" in:description user:git-sanbu`

这是关键词/主题可检出的证据，不表示通用词搜索排名、个性化推荐、Trending 或 Google/Bing 收录。
