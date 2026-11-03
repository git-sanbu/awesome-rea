# dsh-rea: preserving MCP contracts while revealing tools on demand

[← Back to all cases](../README.md) · Tools and integrations

[English](dsh-rea.md) · [简体中文](zh-CN/dsh-rea.md) · [繁體中文](zh-TW/dsh-rea.md) · [日本語](ja/dsh-rea.md) · [한국어](ko/dsh-rea.md) · [Español](es/dsh-rea.md) · [Français](fr/dsh-rea.md) · [Deutsch](de/dsh-rea.md) · [Português (Brasil)](pt-BR/dsh-rea.md) · [Русский](ru/dsh-rea.md) · [العربية](ar/dsh-rea.md) · [हिन्दी](hi/dsh-rea.md)

- **Author / attribution:** JeremyWangCY
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** REA 6.8.0 MCP tools, prompts and skill inside DeepSeek Harness

## The question

How can an adapter preserve upstream tool contracts while keeping unused schemas out of each agent request?

## What REA did

The adapter launches the pinned upstream MCP executable through a DSH bridge, shares its connection for prompts and completions, and uses per-agent tool masks. The /rea command reveals the catalog and skill; /rea off hides them again.

## Author-reported results

The author publishes adapter code, schema measurements and a bounded differential report listing 229 tools and comparisons of deterministic calls in native and PTC modes. The measured model-input catalog is 273,264 bytes; this is a schema payload measurement, not an LLM token or cost benchmark.

## Limitations and unverified claims

The repository contains a passing comparison report and separate documentation of a Windows integrity_mismatch error in the verification command. The catalog maintainers have not confirmed a successful verification run on Windows. Matching tool definitions does not mean that all tools were executed. The reported comparison does not cover native engines, live capture or every provider, and does not establish equivalent language-model responses. The catalog maintainers did not run these tests.

## What to learn

Compare schemas and complete deterministic result envelopes, retain historical pass records, and disclose current failures separately.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA is an exact npm dependency, not a reimplementation.

## Original sources

- [Primary source / pinned evidence](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [Project / demo](https://github.com/JeremyWangCY/dsh-rea)
- [Additional source 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [Additional source 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [Additional source 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [Additional source 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [Additional source 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
