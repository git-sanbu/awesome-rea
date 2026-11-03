# REA Studio: presenting MCP tools and recorded Evidence in a local web UI

[← Back to all cases](../README.md) · Tools and integrations

[English](rea-studio.md) · [简体中文](zh-CN/rea-studio.md) · [繁體中文](zh-TW/rea-studio.md) · [日本語](ja/rea-studio.md) · [한국어](ko/rea-studio.md) · [Español](es/rea-studio.md) · [Français](fr/rea-studio.md) · [Deutsch](de/rea-studio.md) · [Português (Brasil)](pt-BR/rea-studio.md) · [Русский](ru/rea-studio.md) · [العربية](ar/rea-studio.md) · [हिन्दी](hi/rea-studio.md)

- **Author / attribution:** theyishaik-lab
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** REA MCP tool discovery, schema-generated forms and small C, JavaScript and Python samples

## The question

How can a local interface expose installed REA tools and make their evidence and limitations readable?

## What REA did

The backend launches REA over stdio MCP, paginates tools/list and forwards tools/call with progress and cancellation signals. A recording script calls REA on tiny sample artifacts and saves results for a separate static-demo build.

## Author-reported results

Public source includes a local web interface, schema-driven inputs, history and an Evidence view. Checked-in demo artifacts identify REA 6.8.0 and provide a 229-tool catalog plus 9 recorded sample runs (8 completed, 1 error); unsupported demo actions return an explicit not-recorded error.

## Limitations and unverified claims

The hosted demo replays saved responses and simulated progress; uploads stay in the browser and are not analyzed. Recordings are author-published, not independent reruns. Local use can invoke tools on host files and depends on configured providers; the catalog did not install or test the backend or establish a security audit.

## What to learn

Generate forms from the live tool schema, preserve limitations in the result view, and clearly distinguish recorded demos from live analysis.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## Original sources

- [Primary source / pinned evidence](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [Project / demo](https://github.com/theyishaik-lab/rea-studio)
- [Additional source 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [Additional source 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [Additional source 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [Additional source 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
