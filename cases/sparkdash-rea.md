# sparkDash：把 REA 分析任务接入多设备仪表盘

[← 返回案例目录](../README.md) · 工具与集成

- **作者 / 来源归属：** MiaAI-Lab
- **核对日期：** 2026-10-21
- **收录状态：** 已阅读公开来源；本仓库未独立复跑。
- **分析目标：** Linux 远程设备上的 REA CLI、待分析文件，以及分析结果与 Evidence 视图

## 想解决什么问题

怎样从网页提交远程 REA 任务，让长分析在断开浏览器后继续，并按需查看大结果？

## REA 具体做了什么

项目实际通过 CLI 调用上游 REA，固定 rea-agents 6.4.0 及 lockfile。server/rea 实现后台任务、输入上传、运行状态、结果分页和导出；命令模块驱动 inspect-analysis-view 与 compare 等 REA 能力，仪表盘本身不实现反编译器。

## 公开成果

以下是来源作者报告的成果：

公开 Tools → REA 页面及服务端实现：远程分离运行、日志、摘要、limitations/unknowns、按需结果视图、JSON 导出与 Evidence 比较。源码同时公开版本固定、任务管理和上传测试；核对的是已实现的 REA 集成功能，没有把安装步骤本身当作分析成果。

## 局限与未验证项

本条为工具集成案例，不是用 REA 重建 sparkDash，也不证明所有上游分析路径已通过实机验收。仅支持 Linux 设备，功能默认关闭，目标格式依赖额外 provider。所读 manager 测试使用 fake REA 和本地 shell，不能替代真实 Ghidra/远程设备验证；本仓库未安装、运行或复跑。

## 可以借鉴什么

将上游能力和自己的调度界面分开归因，保留分析结果的证据、限制和失败状态，而不只显示任务成功。

## REA 使用证据

原文定位摘录（排版简化，完整上下文以链接为准）：

> sparkDash uses the CLI only

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [项目入口](https://github.com/MiaAI-Lab/sparkDash)
- [补充来源 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [补充来源 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [补充来源 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [补充来源 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

本页为独立中文整理，署名与成果归原作者。没有分发目标软件、安装包或完整反编译输出。
