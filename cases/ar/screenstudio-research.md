# Screen Studio: فصل الفحص الثابت عن أدلة التسجيل والتصدير

[← العودة إلى جميع الحالات](../../README.ar.md) · التطبيقات

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

تمت ترجمة هذه الطبعة آليًا من النسخة الإنجليزية التحريرية. تبقى الاقتباسات الأصلية في لغتها المصدر. عندما تكون الصياغة غير واضحة، راجع اللغة الإنجليزية والمصادر المرتبطة.

- **المؤلف / الإسناد:** Royo-Qiao
- **تاريخ مراجعة المصدر:** 2026-11-03
- **حالة المراجعة:** تمت مراجعة المصادر؛ لا يتم إعادة تشغيل اختبارات المؤلف بشكل مستقل.
- **الهدف:** Screen Studio 3.7.3-4540، بما في ذلك نسخة Apple Silicon المُعاد تجميعها محليًا

## السؤال

كيف يمكن فصل نتائج Electron والمساعد الأصلي عن إثبات التسجيل والتصدير والتوافق؟

## ما فعله REA

قدمت عمليات فحص الصمامات REA وMach-O مقتطفات ثابتة منسقة من Evidence مع المعرفات والتجزئة. انتهت مهلة تحليل تطبيق JavaScript المحدود مرتين؛ لا تتم المطالبة بأي رسم بياني كامل أو إلغاء ترجمة الوظيفة الأصلية.

## النتائج التي أبلغ عنها المؤلف

ينشر المؤلف التفتيش وإحصائيات المشروع الإجمالية وأدوات التحقق من صحة الصادرات. يُقال إن التسجيل الأصلي التاريخي قد تم تصدير إطارات 3 و337 بمعدل 1104 × 720 و60 إطارًا في الثانية وتم فك تشفيره بالكامل؛ قام فحص لاحق لأداة للقراءة فقط بفحص عمليات التصدير المحفوظة وأحداث المدخلات البشرية المجمعة.

## القيود والمطالبات التي لم يتم التحقق منها

التسجيلات الخاصة والدفاتر الكاملة غير متاحة لإعادة التشغيل. يحدد تجزئة Mach-O النسخة المعاد تجميعها محليًا. فشل التفويض عبر الشبكة، ولم تدخل محاولة القطع حيز التنفيذ، ولم يتبع التوقيع النهائي إعادة اختبار التقاط كامل، وتم ممارسة إعداد Apple Silicon/macOS واحد فقط. لا يثبت فك تشفير الملف مصدر التسجيل أو التكافؤ البصري؛ لم يقم هذا الكتالوج بإعادة تشغيل التجربة.

## ماذا نتعلم

احتفظ بالبيانات التعريفية الثابتة وملاحظات واجهة المستخدم وفك تشفير الملفات والتعليقات البشرية كدليل منفصل، وانشر عمليات التحقق الفاشلة جنبًا إلى جنب مع النجاحات.

## دليل استخدام REA في المصدر

تم تبسيط تنسيق المقتطفات. اقرأ المصدر الأصلي للحصول على السياق الكامل.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## المصادر الأصلية

- [المصدر الأساسي / الأدلة المثبتة](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [المشروع / التجريبي](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [مصدر إضافي 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [مصدر إضافي 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [مصدر إضافي 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [مصدر إضافي 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

ملخص التحرير المستقل. الائتمان ينتمي إلى المؤلفين الأصليين. لا يتم إعادة توزيع البرامج المستهدفة والمثبتات ومخرجات برنامج فك التحويل البرمجي الكاملة هنا.

<!-- تم إنشاؤها من بيانات الكتالوج. قم بتحرير ملفات البيانات لتحديث هذه المذكرة. -->
