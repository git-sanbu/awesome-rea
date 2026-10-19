# rea-lab：测量 REA 对 Windows 逆向任务的实际帮助

[← 返回案例目录](../README.md) · 分析与评测

- **作者 / 来源归属：** pablodiazjorge
- **核对日期：** 2026-10-19
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** Windows 小型挑战、更大含诱饵二进制及真实开源程序

## 想解决什么问题

加上 REA 后，代理解决任务的成功率、耗时和成本怎样变化？

## REA 具体做了什么

搭建 Windows + Ghidra 环境，做预注册对照研究，核验引用 Evidence，公开 writeups、环境与上游修复。

## 公开成果

以下是来源作者报告的成果：

作者现已公开五项预注册研究：Study 1 为两组均解出 28/30；Study 2 为无 REA 11/24、用 REA 4/24；Study 3 为 71/72 与 68/72。新增 Study 4 用 DeepSeek 模型为 20/20 与 19/20，未检测到显著差异；Study 5 的改进 skill 相对官方版本成本增加 14%（p=0.012），准确率未显著改变。

## 局限与未验证项

所有研究固定 REA 6.4.0、Claude Code 2.1.296 与各自模型、任务及权限配置，不能外推当前版本或所有逆向工作。Study 2、3 的成功率差异未达原作者统计检验的显著水平。Study 3 的 Evidence 认证由初报 142/144 更正为 grader 修正后的 144/144，解题数字未改；Study 4 样本仅 20 对。Study 5 比较的是注入提示中的 skill 内容，并非客户端自动加载效果。本仓库仅复核报告，没有复跑。

## 可以借鉴什么

评估工具时同时看对照组、任务分布、成本与证据质量。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [项目 / 演示](https://github.com/pablodiazjorge/rea-lab)
- [补充来源 1](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [补充来源 2](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [补充来源 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
