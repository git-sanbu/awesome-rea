# Contributing

[简体中文](CONTRIBUTING.zh-CN.md)

Submit your own public REA work or a project you discovered. Contributions in any supported language are welcome; English is the editorial reference.

## Suggest a case

Open a [case submission](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml) with the project, original author, primary source, exact evidence of `morluto/rea` use, target, question, actual REA role, public results and limitations. A reliable original link is enough to suggest a candidate.

## Update the catalog

1. Add or update the English entry in `data/cases.json`. Keep the stable ID and category (`official`, `games`, `apps`, `hardware`, `analysis`, `learning` or `integrations`).
2. Keep original quotations, quotation language, source-review dates, full commit-SHA source links and project URLs. Initial status is `source-reviewed-not-reproduced`.
3. Maintain the corresponding editorial Chinese text in `data/locales/zh-CN.json`. Other locale files contain full translations, not UI-only translations. See [localization maintenance](LOCALIZATION.md) for refresh commands and source digests.
4. Run `node scripts/build-site.mjs`, `node scripts/build-site.mjs --check`, `python3 scripts/check-site.py` and `git diff --check`. Commit the generated READMEs, case notes and `docs/` pages with the data. Do not edit generated files directly.

## Inclusion criteria

Include concrete questions, actual REA use and public output. Partial successes, failed experiments and tool evaluations are welcome. Tool integrations require implemented REA calls and public functional output; installation recommendations alone do not qualify. Distinguish fake-REA tests, integration tests and real-target analysis.

Exclude generic introductions, mirrors, unimplemented proposals and AI rewrites without explicit REA attribution. Third-party catalogs are discovery leads; they do not replace primary evidence. Count each project once. Attribute only the stage REA actually handled, separating other tools and historical work. State the scope and source of test counts; one function does not prove whole-app compatibility.

Preserve authorship and write an original summary. Submit only public material you have the right to share. Do not upload secrets, target installers or unauthorized complete decompiler output. The catalog’s MIT license does not change linked projects’ licenses.

## Corrections

Use a [correction issue](https://github.com/git-sanbu/awesome-rea/issues/new?template=correction.yml) or PR with a new primary source, commit and date. If a newer tool version fixes an old issue, retain the historical context and add an update.
