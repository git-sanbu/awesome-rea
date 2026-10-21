# A local 27B model: a smaller MCP tool list enables function analysis

[← Back to all cases](../README.md) · Analysis and evaluation

[English](local-model-mcp.md) · [简体中文](zh-CN/local-model-mcp.md) · [繁體中文](zh-TW/local-model-mcp.md) · [日本語](ja/local-model-mcp.md) · [한국어](ko/local-model-mcp.md) · [Español](es/local-model-mcp.md) · [Français](fr/local-model-mcp.md) · [Deutsch](de/local-model-mcp.md) · [Português (Brasil)](pt-BR/local-model-mcp.md) · [Русский](ru/local-model-mcp.md) · [العربية](ar/local-model-mcp.md) · [हिन्दी](hi/local-model-mcp.md)

- **Author / attribution:** CassieFox23
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Self-built C token checker; Qwen3.8-27B, llama.cpp, OpenCode and REA MCP

## The question

How can REA tool descriptions and analysis fit into a local model’s 32K context?

## What REA did

The author uses PR #3026 commit d993ffeb1 and Ghidra 12.1.4. Tool families and an OpenCode allowlist expose only 10 REA tools; the model opens the target, locates and decompiles the function, then closes the session.

## Author-reported results

The author reports that all 206 tool descriptions exceeded context. A 62-tool setup hit a GPU reset after reading the prompt. The 10-tool prompt used 4,407 tokens; three runs found the target string and explained the checker, each taking about 80 seconds.

## Limitations and unverified claims

The three runs repeat one tiny program and prompt, not three independent tasks. No other model or client was compared. Results use a historical PR commit; tool counts, switches and timings are not guarantees for the current release.

## What to learn

Measure schema context cost before testing a minimal tool set. Repetition on one task does not establish general capability.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> With the full tool list, nothing fits.

## Original sources

- [Public discussion / editable at review time](https://github.com/morluto/rea/discussions/3098)
- [Project / demo](https://github.com/morluto/rea/discussions/3098)
- [Additional source 1](https://github.com/morluto/rea/pull/3026)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
