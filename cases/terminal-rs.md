# Terminal (formerly terminal-rs): a market terminal informed by TradingView interactions

[← Back to all cases](../README.md) · Applications

[English](terminal-rs.md) · [简体中文](zh-CN/terminal-rs.md) · [繁體中文](zh-TW/terminal-rs.md) · [日本語](ja/terminal-rs.md) · [한국어](ko/terminal-rs.md) · [Español](es/terminal-rs.md) · [Français](fr/terminal-rs.md) · [Deutsch](de/terminal-rs.md) · [Português (Brasil)](pt-BR/terminal-rs.md) · [Русский](ru/terminal-rs.md) · [العربية](ar/terminal-rs.md) · [हिन्दी](hi/terminal-rs.md)

- **Author / attribution:** michaelshimeles
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Behavior of public, logged-out TradingView chart pages

## The question

How can chart-interaction research inform an independent Rust market interface?

## What REA did

The author uses REA website mode for passive capture of public pages. Findings, Evidence IDs and design implications are recorded in docs/analysis.

## Author-reported results

The project publishes Rust GPU charts, keyboard commands, panel layouts and data integration with a Bloomberg-style interface. Reviewed on 2026-10-21: 151 built-in indicators, parameter and boundary-input tests, and a macOS universal release script were added. These are later implementation changes, not a new REA investigation. Reviewed on 2026-11-03: the repository is now Terminal, with the same stable catalog ID. Its README documents disclosure feeds, SnapTrade account views and opt-in trading; those implementation features are separate from the REA chart-behavior research.

## Limitations and unverified claims

Only web-visible behavior was studied; this is not recovery of TradingView or Bloomberg source code. Data sources, rate limits and data-use terms impose separate constraints. The author distinguishes mocked brokerage/order tests and simulated data from live services. This catalog did not connect a brokerage, place orders or verify current data accuracy. The older README commit is retained as historical provenance but returned HTTP 404 during this review.

## What to learn

Public web observations can provide traceable design input without being described as binary decompilation.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> tradingview.com with [REA](https://github.com/morluto/rea) in website mode

## Original sources

- [Primary source / pinned evidence](https://github.com/michaelshimeles/terminal/blob/0690de8c6c86e1939d9226a482ebe7476cc79156/README.md)
- [Project / demo](https://github.com/michaelshimeles/terminal)
- [Additional source 1](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [Additional source 2](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
