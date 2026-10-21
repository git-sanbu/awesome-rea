# bzip2: checking stripped-binary findings against a symbolized build

[← Back to all cases](../README.md) · Analysis and evaluation

[English](bzip2-groundtruth.md) · [简体中文](zh-CN/bzip2-groundtruth.md) · [繁體中文](zh-TW/bzip2-groundtruth.md) · [日本語](ja/bzip2-groundtruth.md) · [한국어](ko/bzip2-groundtruth.md) · [Español](es/bzip2-groundtruth.md) · [Français](fr/bzip2-groundtruth.md) · [Deutsch](de/bzip2-groundtruth.md) · [Português (Brasil)](pt-BR/bzip2-groundtruth.md) · [Русский](ru/bzip2-groundtruth.md) · [العربية](ar/bzip2-groundtruth.md) · [हिन्दी](hi/bzip2-groundtruth.md)

- **Author / attribution:** CassieFox23
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** bzip2 1.0.8 compiled with gcc -O2 and stripped, Linux x86-64

## The question

How can a function be found from an output string and its call relationships checked?

## What REA did

REA 6.4.0 and Ghidra locate a function from a string, list callers and callees, and return Evidence labeled observed/derived. The author separately checks an unstripped build from the same source with source code, nm and objdump.

## Author-reported results

The author reports finding uncompress with 1 caller and 24 callees matching the reference build. Build steps, trimmed MCP records and two classes of error responses are public.

## Limitations and unverified claims

One program, compilation setup and function, without a tool comparison. The 24 edges are provider-resolved direct calls, not a full runtime graph. The complete client script is not public; the archive has a recorded hash but no signature verification. This catalog did not rerun it.

## What to learn

Build ground truth from a matching symbolized build and separate observations, inferences and reference checks.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## Original sources

- [Public discussion / editable at review time](https://github.com/morluto/rea/discussions/2254)
- [Project / demo](https://github.com/morluto/rea/discussions/2254)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
