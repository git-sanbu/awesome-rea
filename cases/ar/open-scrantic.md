# Open Scrantic: إعادة بناء محرك شاشة التوقف Johnny Castaway في Rust

[← العودة إلى جميع الحالات](../../README.ar.md) · العاب

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

تمت ترجمة هذه الطبعة آليًا من النسخة الإنجليزية التحريرية. تبقى الاقتباسات الأصلية في لغتها المصدر. عندما تكون الصياغة غير واضحة، راجع اللغة الإنجليزية والمصادر المرتبطة.

- **المؤلف / الإسناد:** glauberlima
- **تاريخ مراجعة المصدر:** 2026-10-26
- **حالة المراجعة:** تمت مراجعة المصادر؛ لا يتم إعادة تشغيل اختبارات المؤلف بشكل مستقل.
- **الهدف:** تصرفات الشاشة الغريبة: Johnny Castaway (1992)، Windows 3.1 SCRANTIC.SCR وملفات الموارد المطابقة

## السؤال

كيف يمكن تشغيل مترجم نص شاشة التوقف 16-bit وجدول القصة والسلوك العشوائي على الأنظمة الحديثة؟

## ما فعله REA

ينسب المطور بشكل صريح Claude Code إلى REA لتفكيك وإلغاء ترجمة SCRANTIC.SCR، واستعادة تنسيقات الموارد ودلالات البرنامج النصي، وإنتاج تنفيذ Rust وتوثيقه.

## النتائج التي أبلغ عنها المؤلف

ينفذ محرك Rust العام تحميل الموارد وتنفيذ البرنامج النصي TTM/ADS وتطور القصة والتوقيت ومولد الأرقام العشوائية الأصلي. يسجل ENGINE.md القواعد المستردة والاختلافات المتعمدة؛ يوفر المؤلف مسارات الإصدار Windows وmacOS وLinux.

## القيود والمطالبات التي لم يتم التحقق منها

يتطلب المحرك الملفات الأصلية المطابقة للمستخدم ويرفض الإصدارات الأخرى القابلة للتنفيذ. إعادة رسم الإطار الكامل ومعالجة وإعدادات image/audio الاختيارية تختلف عن الأصل. لم يتم اختبار السلوك والتكافؤ عبر الأنظمة الأساسية بشكل مستقل هنا؛ لم يتم العثور على جلسات REA الأولية في الملفات التي تمت مراجعتها.

## ماذا نتعلم

احتفظ بملكية الأصول الأصلية منفصلة عن رمز المحرك، واحتفظ بالقواعد الحسابية والجدولة، وقم بتوثيق اختلافات التوافق المتعمدة.

## دليل استخدام REA في المصدر

تم تبسيط تنسيق المقتطفات. اقرأ المصدر الأصلي للحصول على السياق الكامل.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## المصادر الأصلية

- [المصدر الأساسي / الأدلة المثبتة](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [المشروع / التجريبي](https://github.com/glauberlima/open-scrantic)
- [مصدر إضافي 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [مصدر إضافي 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [مصدر إضافي 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

ملخص التحرير المستقل. الائتمان ينتمي إلى المؤلفين الأصليين. لا يتم إعادة توزيع البرامج المستهدفة والمثبتات ومخرجات برنامج فك التحويل البرمجي الكاملة هنا.

<!-- تم إنشاؤها من بيانات الكتالوج. قم بتحرير ملفات البيانات لتحديث هذه المذكرة. -->
