# Open-source REA Lab：固定 npm 包后只分析入口切片

[← 返回案例目录](../README.md) · 分析与评测

- **作者 / 来源归属：** martinlofranodeoliveira
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** 官方 npm rea-agents 6.4.0 包的 package.json 与 scripts/rea.mjs

## 想解决什么问题

怎样先固定发布物身份，再在有限预算里回答入口文件做什么？

## REA 具体做了什么

独立 Python 审计器先检查压缩包结构与 hash；REA 静态分析从已核对包提取的两个原样文件。入口分支的语义说明还结合人工语法检查，不能把独立审计器或人工结论归为 REA 输出。

## 公开成果

以下是来源作者报告的成果：

公开固定摘要、审计 JSON、脱敏 Evidence 摘要和复现脚本；切片报告 1 个已解析 JS、469 AST 节点、14 条 findings、零解析失败，并明确完整包分析曾因语义扩展而中断。

## 局限与未验证项

14 条 findings 不是漏洞数；切片保留 110 个语义未知项，缺失 dist 实现，不能推出完整包安全或运行正确。脱敏摘要不是可重放的 canonical Evidence，完整包仅有部分覆盖；本仓库未复跑。

## 可以借鉴什么

缩小问题与输入边界，保留中断和未知项；结构检查、字节身份与运行安全是不同结论。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> Can REA statically parse the actual shipped dispatcher?

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [项目 / 演示](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [补充来源 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [补充来源 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
