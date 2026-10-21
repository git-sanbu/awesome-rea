# Hyper3D: from captured web bundles to an independent 3D prototype

[← Back to all cases](../README.md) · Applications

[English](hyper3d-clone.md) · [简体中文](zh-CN/hyper3d-clone.md) · [繁體中文](zh-TW/hyper3d-clone.md) · [日本語](ja/hyper3d-clone.md) · [한국어](ko/hyper3d-clone.md) · [Español](es/hyper3d-clone.md) · [Français](fr/hyper3d-clone.md) · [Deutsch](de/hyper3d-clone.md) · [Português (Brasil)](pt-BR/hyper3d-clone.md) · [Русский](ru/hyper3d-clone.md) · [العربية](ar/hyper3d-clone.md) · [हिन्दी](hi/hyper3d-clone.md)

- **Author / attribution:** payswapdotorg
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Captured Hyper3D Rodin JavaScript bundles and workspace behavior

## The question

How can interface and API observations inform a prototype that exports 3D models?

## What REA did

The author uses rea-agents 6.5.0 to statically analyze 21 captured JavaScript files for initial visual-prototype clues. Later functionality is designed separately from authenticated-workspace network observations and an API blueprint. REA did not recover the original 3D-model weights or generation backend.

## Author-reported results

The project publishes a Next.js 16 prototype, API blueprint and differences. The author reports 67 tests covering image/text-to-scene specifications, three.js geometry and GLB, GLTF, OBJ, STL and USDZ export.

## Limitations and unverified claims

The default generator uses an independent scene-planning and deterministic-geometry pipeline, not equivalent Rodin model quality or backend behavior. External generation services require separate credentials. 3D Editing and WorldGen are not implemented. REA’s contribution is limited to initial web analysis; tests are author-reported.

## What to learn

Distinguish frontend observations, API contracts and independent functionality. Export-format tests do not establish generation-quality equivalence.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> rea-agents@6.5.0 analyze-javascript-application

## Original sources

- [Primary source / pinned evidence](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md)
- [Project / demo](https://github.com/payswapdotorg/hyper3d-clone)
- [Additional source 1](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/recon/API-BLUEPRINT.md)
- [Additional source 2](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/DECISIONS.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
