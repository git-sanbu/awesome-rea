# V5VPN：研究客户端协议后实现独立门户与隧道工具

[← 返回案例目录](../README.md) · 硬件与兼容

- **作者 / 来源归属：** hygkui
- **核对日期：** 2026-10-21
- **收录状态：** 已阅读公开来源，确认原文明确使用 REA；本仓库未独立复跑。
- **分析目标：** LeadSec / 网御星云 V5VPN 5.3.3.x 客户端及 v2.0 网关协议

## 想解决什么问题

怎样从原厂客户端调查认证、资源发现与连接流程，做一个范围明确的独立客户端？

## REA 具体做了什么

作者明确以 morluto/rea 为逆向分析技术参考，并记录对 SecUI.exe、SecController.dll、SecLogin.dll、SecSSL.dll 和 VpnServ.exe 的符号、反汇编及内存映射调查。README 将认证、口令过期分支、资源发现和 HTTP CONNECT 流程关联到独立 Go/MyGo 实现；未公开完整 REA 调用日志。

## 公开成果

以下是来源作者报告的成果：

公开 Go/MyGo 桌面与 CLI 源码、协议说明和测试文件；作者报告在 Windows 开发环境与两套生产网关完成端到端连通性验证，实现 SSL VPN 门户、授权资源获取与 HTTP CONNECT 隧道路径。

## 局限与未验证项

作者报告仅覆盖 5.3.3.x 与协议 v2.0；Linux/macOS 仅编译通过、未实测。不实现内核虚拟网卡、IPsec 或全网路由；USB Key、匿名登录及国密套件未支持。收录依据为公开作者报告和源码，未独立连接网关或验证安全性，不把“完全破解”表述当作已证实结论。

## 可以借鉴什么

将协议兼容范围和平台实测状态分开说明，独立客户端的可用性需要具体网关和场景验收。

## REA 使用证据

原文中的定位摘录（Markdown 排版已简化；完整上下文以链接为准）：

> 基于 REA (Reverse Engineer Anything) 逆向分析技术与 MyGo 跨平台桌面技术架构，重新实现的现代化 V5VPN 客户端。

## 原始来源

- [公开原文 / 固定版本证据](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md)
- [项目 / 演示](https://github.com/hygkui/v5vpn-rea-client)
- [补充来源 1](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/auth_test.go)
- [补充来源 2](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/tunnel_test.go)

本页为独立中文整理，署名与成果归原作者。没有重新发布目标软件、安装包或完整反编译输出。
