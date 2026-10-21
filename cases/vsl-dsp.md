# VSL-DSP: applying vendor-library findings to audio DSP tools

[← Back to all cases](../README.md) · Hardware and compatibility

[English](vsl-dsp.md) · [简体中文](zh-CN/vsl-dsp.md) · [繁體中文](zh-TW/vsl-dsp.md) · [日本語](ja/vsl-dsp.md) · [한국어](ko/vsl-dsp.md) · [Español](es/vsl-dsp.md) · [Français](fr/vsl-dsp.md) · [Deutsch](de/vsl-dsp.md) · [Português (Brasil)](pt-BR/vsl-dsp.md) · [Русский](ru/vsl-dsp.md) · [العربية](ar/vsl-dsp.md) · [हिन्दी](hi/vsl-dsp.md)

- **Author / attribution:** grisuno
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** PreSonus Universal Control libucnet.so and libfatchannelplugins.so

## The question

How does the vendor controller discover devices, register parameters and represent gain?

## What REA did

LazyOwn’s rea extension drives REA and Ghidra against the vendor libraries, preserving the Evidence envelope and producing protocol and parameter specifications.

## Author-reported results

The author applies findings to dB commands, parameter names and linear/dB conversion, and provides CMocka tests.

## Limitations and unverified claims

REA’s role is limited to specific vendor-library findings and subsequent improvements, not the whole driver. The mute wire code was not recovered.

## What to learn

Protocol research can fill a concrete gap in an existing project. Unknown control codes should remain unknown.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> lazyaddon, which drives REA (Reverse Engineer Anything) with Ghidra 12.1.4

## Original sources

- [Primary source / pinned evidence](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md)
- [Project / demo](https://github.com/grisuno/VSL-DSP)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
