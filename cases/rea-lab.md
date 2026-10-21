# rea-lab: measuring REA’s contribution to Windows reverse engineering

[← Back to all cases](../README.md) · Analysis and evaluation

[English](rea-lab.md) · [简体中文](zh-CN/rea-lab.md) · [繁體中文](zh-TW/rea-lab.md) · [日本語](ja/rea-lab.md) · [한국어](ko/rea-lab.md) · [Español](es/rea-lab.md) · [Français](fr/rea-lab.md) · [Deutsch](de/rea-lab.md) · [Português (Brasil)](pt-BR/rea-lab.md) · [Русский](ru/rea-lab.md) · [العربية](ar/rea-lab.md) · [हिन्दी](hi/rea-lab.md)

- **Author / attribution:** pablodiazjorge
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Small Windows challenges, larger binaries with decoys and real open-source programs

## The question

How does adding REA affect an agent’s success rate, time and cost?

## What REA did

The author sets up Windows and Ghidra, runs preregistered controlled studies, verifies cited Evidence and publishes writeups, environments and upstream fixes.

## Author-reported results

Five preregistered studies are public. Study 1: 28/30 in both groups. Study 2: 11/24 without REA versus 4/24 with REA. Study 3: 71/72 versus 68/72. Study 4 uses DeepSeek: 20/20 versus 19/20, with no significant difference detected. In Study 5, the revised skill costs 14% more than the official skill (p=0.012), without a significant accuracy change. The 2026-10-21 Evidence-retention note distinguishes 482 study runs, 336 that called REA and 3 restart-interrupted reruns: none of these 339 REA-calling runs proactively retained Evidence; the grader reconstructed it from client records.

## Limitations and unverified claims

All studies pin REA 6.4.0, Claude Code 2.1.296 and their respective models, tasks and permissions; results cannot be generalized to current versions or all reverse engineering. Study 2 and 3 success-rate differences were not statistically significant under the author’s tests. Study 3 Evidence certification was corrected from 142/144 to 144/144 after a grader fix; solve counts were unchanged. Study 4 has only 20 pairs. Study 5 compares skill text injected into prompts, not automatic client loading. This catalog did not rerun the studies. The 339 count is REA-calling runs, not the total study sample, and does not imply missing Evidence content or failed certification.

## What to learn

Evaluate controls, task distribution, cost and evidence quality together.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## Original sources

- [Primary source / pinned evidence](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [Project / demo](https://github.com/pablodiazjorge/rea-lab)
- [Additional source 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [Additional source 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [Additional source 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [Additional source 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
