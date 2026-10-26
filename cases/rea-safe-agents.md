# REA Safe Agent: brokering static analysis between two contained processes

[← Back to all cases](../README.md) · Tools and integrations

[English](rea-safe-agents.md) · [简体中文](zh-CN/rea-safe-agents.md) · [繁體中文](zh-TW/rea-safe-agents.md) · [日本語](ja/rea-safe-agents.md) · [한국어](ko/rea-safe-agents.md) · [Español](es/rea-safe-agents.md) · [Français](fr/rea-safe-agents.md) · [Deutsch](de/rea-safe-agents.md) · [Português (Brasil)](pt-BR/rea-safe-agents.md) · [Русский](ru/rea-safe-agents.md) · [العربية](ar/rea-safe-agents.md) · [हिन्दी](hi/rea-safe-agents.md)

- **Author / attribution:** dagoSte
- **Source review date:** 2026-10-26
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** REA 6.7.0 integration with Ghidra 12.1.4 and JADX; benign ELF fixtures and an F-Droid APK

## The question

How can an agent query REA while access to inputs, host tools and model requests remains bounded?

## What REA did

The implementation runs REA and its receiving agent in separate Docker containers and relays allowlisted MCP calls through a host controller. Frozen input snapshots, tool/path checks and bounded results constrain what crosses the boundary; REA supplies the actual static analysis.

## Author-reported results

Dated macOS ARM64 receipts report 11 successful REA calls with Claude and 9 with Codex on the same benign ELF, checking its hash, FNV-1a constants and decoded string against known source. The validation record separately reports 39 successful REA calls for a live F-Droid 2.0.2 analysis.

## Limitations and unverified claims

These are author-published receipts, not an independent security certification. Static analysis does not execute the target. Containment depends on Docker and the host controller; analyzed text reaches the model service, and Windows Docker integration is experimental. Whole-image vulnerability findings remain despite the separate clean npm audit.

## What to learn

Separate mock-policy tests, real tool calls and live model runs; attach each claim to a dated target, host and receipt.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> "rea_version": "6.7.0",

## Original sources

- [Primary source / pinned evidence](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [Project / demo](https://github.com/dagoSte/rea-safe-agents)
- [Additional source 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [Additional source 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [Additional source 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [Additional source 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
