# Screen Studio: separating static inspection from recording and export evidence

[← Back to all cases](../README.md) · Applications

[English](screenstudio-research.md) · [简体中文](zh-CN/screenstudio-research.md) · [繁體中文](zh-TW/screenstudio-research.md) · [日本語](ja/screenstudio-research.md) · [한국어](ko/screenstudio-research.md) · [Español](es/screenstudio-research.md) · [Français](fr/screenstudio-research.md) · [Deutsch](de/screenstudio-research.md) · [Português (Brasil)](pt-BR/screenstudio-research.md) · [Русский](ru/screenstudio-research.md) · [العربية](ar/screenstudio-research.md) · [हिन्दी](hi/screenstudio-research.md)

- **Author / attribution:** Royo-Qiao
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Screen Studio 3.7.3-4540, including a locally repackaged Apple Silicon copy

## The question

How can Electron and native-helper findings be kept separate from proof of recording, export and compatibility?

## What REA did

REA fuse and Mach-O inspections supplied curated static Evidence excerpts with IDs and hashes. A bounded JavaScript application analysis timed out twice; no complete graph or native function decompilation is claimed.

## Author-reported results

The author publishes inspection, aggregate project-statistics and export-validation tools. A historical native recording reportedly exported 3,337 frames at 1104 × 720 and 60 fps and fully decoded; a later read-only tool check examined the saved export and aggregate human-input events.

## Limitations and unverified claims

Private recordings and full ledgers are unavailable for replay. The Mach-O hash identifies a locally repackaged copy. Networked authorization failed, a trim attempt did not take effect, final signing was not followed by a full capture retest, and only one Apple Silicon/macOS setup was exercised. File decoding does not prove recording provenance or visual equivalence; this catalog did not rerun the experiment.

## What to learn

Keep static metadata, UI observations, file decoding and human feedback as separate evidence, and publish failed checks alongside successes.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## Original sources

- [Primary source / pinned evidence](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [Project / demo](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [Additional source 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [Additional source 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [Additional source 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [Additional source 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
