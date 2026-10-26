# Localization

English is the editorial reference and the default at `/`, `README.md` and `cases/<id>.md`. All 38 cases have complete editions in 12 languages: English, Simplified Chinese, Traditional Chinese (Taiwan), Japanese, Korean, Spanish, French, German, Brazilian Portuguese, Russian, Arabic and Hindi.

Each non-English edition uses `/<locale>/` and `/<locale>/cases/<id>/`, `README.<locale>.md` and `cases/<locale>/<id>.md`. Existing case URLs remain available in English. `README.en.md` remains an English compatibility entry.

Language switches link to the same case. Homepage switches preserve search terms and the stable category identifier. Explicit URLs determine language; there is no automatic browser-language redirect. Arabic pages use `dir="rtl"`.

## Sources and translations

- `data/cases.json`: English editorial text, stable case/category IDs, original quotations and their languages, source URLs, versions and review dates.
- `data/locales/en.json`: English interface text.
- `data/locales/zh-CN.json`: original Chinese editorial text and interface copy.
- `data/locales/zh-TW.json`: OpenCC `s2twp` conversion of the Chinese edition.
- Other `data/locales/*.json`: Google machine translations of the English interface and all case fields. They are explicitly labeled on each page and are not certified or professionally reviewed translations. English and linked primary sources resolve wording ambiguity.
- `data/languages.json`: native labels, URL prefixes, Open Graph locales and text direction.
- `data/popularity.json`: dated Stars snapshot shared across languages; translation does not refresh attention metrics.

Original quotations, URLs, dates, Evidence IDs and metrics are not newly researched during translation. Quoted text is preserved verbatim in its source language. This catalog reviews sources; it does not independently rerun third-party tests.

## Update workflow

1. Edit English case data and interface strings. Update the original Chinese counterpart. Adding a case requires the same ID in every supported locale.
2. Refresh Chinese conversion in a Python environment with `opencc-python-reimplemented` installed:

   ```sh
   python3 scripts/convert-chinese.py
   ```

3. Refresh the other machine translations, or select specific locales:

   ```sh
   python3 scripts/translate-locales.py
   python3 scripts/translate-locales.py --languages ja ko
   ```

   This optional maintenance script sends only the public catalog copy to Google’s unofficial public translation endpoint. It requires network access and may be rate-limited or unavailable. Local responses are cached under ignored `.translation-cache/`. Batch boundaries, protected identifiers and numeric preservation checks prevent damaged responses from being published. If a request fails, keep the prior translations and review the failure; never publish missing-language fallbacks.

4. Review names, negation, uncertainty, test scope and numeric associations in the generated data. Each non-English locale records a digest of the English source. Builds fail on stale or missing translations. A manually reviewed translation can be maintained directly; record its updated digest only after checking every changed source field.
5. Generate and check:

   ```sh
   node scripts/build-site.mjs
   node scripts/build-site.mjs --check
   python3 scripts/check-site.py
   git diff --check
   ```

6. Browser-check search, filters, empty states, language switching on both an index and a case, and mobile/desktop layouts including Arabic. Deploy only after the checks pass, then verify production URLs.

The generator creates localized Markdown and static HTML without runtime translation requests. Each page has a self-canonical URL, reciprocal HTML hreflang links for all locales and English `x-default`, localized metadata and JSON-LD. The sitemap contains every canonical page; it does not duplicate hreflang markup. No analytics, indexing or ranking outcome is implied by these technical checks.

The previous general REA questions remain in [ABOUT.md](ABOUT.md).
