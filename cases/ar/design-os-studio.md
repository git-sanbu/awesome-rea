# DESIGN:OS Studio: استوديو سطح مكتب مستقل يقرأ ملفات Figma ذات الامتداد .fig ويكتبها

[← العودة إلى جميع الحالات](../../README.ar.md) · التطبيقات

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

تمت ترجمة هذه الطبعة آليًا من النسخة الإنجليزية التحريرية. تبقى الاقتباسات الأصلية في لغتها المصدر. عندما تكون الصياغة غير واضحة، راجع اللغة الإنجليزية والمصادر المرتبطة.

- **المؤلف / الإسناد:** jangtrinh
- **تاريخ مراجعة المصدر:** 2026-11-10
- **حالة المراجعة:** تمت مراجعة المصادر؛ لا يتم إعادة تشغيل اختبارات المؤلف بشكل مستقل.
- **الهدف:** تطبيق Figma Desktop وتنسيق حاوية Figma .fig (fig-kiwi، ويكتب الإصدار 106)

## السؤال

كيف يمكن قراءة حاويات Figma .fig وكتابتها، وإعادة تنفيذ سلوك المحرر، في استوديو سطح مكتب مستقل؟

## ما فعله REA

تسمّي المواصفات العلنية للمشروع morluto/rea 6.7.0 (`npx -y rea-agents`) أداةً لهندسة حقول Figma عكسياً، وتسجل أنه شغّل analyze-javascript-application على جافاسكربت المحرر المستخرجة. وتذكر الملاحظات نفسها أن مسارات wasm لم تكن متاحة (لم يُثبَّت WABT وGhidra)، لذلك فُكّ مخطط kiwi بقارئ محلي. وتحتوي التقارير المحفوظة في المستودع أيضاً على مخرجات واجهة أوامر rea، بما في ذلك تشغيلات مكتملة لـ inspect-macho وanalyze-javascript-application وبعض الاستدعاءات الفاشلة. ولا يذكر ملف README الخاص بالمنتج أداة REA.

## النتائج التي أبلغ عنها المؤلف

DESIGN:OS Studio استوديو سطح مكتب منشور (النسخة المراجعة v0.7.11) يقرأ حاويات Figma .fig ويكتب إصدار الحاوية 106، ويعيد تنفيذ سلوك المحرر محلياً، ويوفر خادم MCP عبر stdio يضم 39 أداة بالإضافة إلى توليد شيفرة بعدة لغات. ويذكر README أكثر من 6,000 اختبار CI على macOS واختبارات ذهاب وإياب في designos-fig. ويؤكد المسؤول عن المشروع أن REA استُخدمت في هذا العمل المتعلق بـ Figma. راجع هذا الدليل المواصفات العلنية ومخرجات rea المحفوظة وREADME؛ ولم يثبّت الاستوديو ولم يُعد تشغيل rea.

## القيود والمطالبات التي لم يتم التحقق منها

لا ينسب ملف README الخاص بالمنتج العمل إلى REA. وفشل بعض تشغيلات rea المسجلة (أمر غير معروف أو موفر تحليل أصلي غير مُعدّ). ومسودات الجلسات الكاملة المشار إليها في ملاحظات أخرى محفوظة خارج المستودع. وما زالت المشكلة المعروفة #834 مفتوحة: حفظ ملف .fig يُسقط تنسيق القوائم المرقمة ويكتب الدهانات الموروثة أو المرتبطة بمتغيرات على النسخ كقيم ثابتة. والرخصة هي PolyForm Shield 1.0.0 (المصدر متاح، وليست رخصة مصدر مفتوح). ولم يُعد هذا الدليل إنتاج توافق .fig بشكل مستقل ولم يُعد تشغيل مجموعة الاختبارات.

## ماذا نتعلم

يمكن أن يظهر استخدام REA الموثَّق في مواصفات المشروع وفي أدلة واجهة الأوامر المحفوظة حتى عندما يصمت README المنتج، وقد يظل المسار المختلط بحاجة إلى بديل محلي عندما تكون مسارات wasm في REA غير متاحة.

## دليل استخدام REA في المصدر

تم تبسيط تنسيق المقتطفات. اقرأ المصدر الأصلي للحصول على السياق الكامل.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## المصادر الأصلية

- [المصدر الأساسي / الأدلة المثبتة](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [المشروع / التجريبي](https://github.com/jangtrinh/design-os-studio)
- [مصدر إضافي 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [مصدر إضافي 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [مصدر إضافي 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

ملخص التحرير المستقل. الائتمان ينتمي إلى المؤلفين الأصليين. لا يتم إعادة توزيع البرامج المستهدفة والمثبتات ومخرجات برنامج فك التحويل البرمجي الكاملة هنا.

<!-- تم إنشاؤها من بيانات الكتالوج. قم بتحرير ملفات البيانات لتحديث هذه المذكرة. -->
