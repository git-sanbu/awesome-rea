# Eleven: connecting an agent-driven desktop workbench to REA

[← Back to all cases](../README.md) · Tools and integrations

[English](eleven.md) · [简体中文](zh-CN/eleven.md) · [繁體中文](zh-TW/eleven.md) · [日本語](ja/eleven.md) · [한국어](ko/eleven.md) · [Español](es/eleven.md) · [Français](fr/eleven.md) · [Deutsch](de/eleven.md) · [Português (Brasil)](pt-BR/eleven.md) · [Русский](ru/eleven.md) · [العربية](ar/eleven.md) · [हिन्दी](hi/eleven.md)

- **Author / attribution:** Zfinix
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Native binary analysis through REA/Ghidra and an ACP-agent desktop workbench

## The question

How can an agent inspect a binary while navigation and editable annotations remain visible in a shared workbench?

## What REA did

The engine launches REA MCP and calls open_binary and procedure views. A separate proxy forwards analysis tools while withholding REA annotation-write tools, directing those changes through Eleven project tools with visible history.

## Author-reported results

Public output includes the desktop application source, MCP tool documentation, project annotation and patch-suggestion paths, plus an author-provided live-agent test that asks an agent to open a /bin/ls function in the UI. README and upstream showcase describe the functioning workbench.

## Limitations and unverified claims

The catalog inspected source and test definitions, not an executed test receipt or installed release. Desktop platform support, debugger behavior, cache speedups and binary-analysis completeness were not independently checked. Rizin, jadx and other paths are separate engines; their results are not attributed to REA. Upstream showcase timings are author observations, not catalog benchmarks.

## What to learn

Separate analysis passthrough from project edits, keep authorship and undo history visible, and distinguish executable tests from observed test results.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## Original sources

- [Primary source / pinned evidence](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [Project / demo](https://github.com/Zfinix/eleven)
- [Additional source 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [Additional source 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [Additional source 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [Additional source 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
