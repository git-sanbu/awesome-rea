# ReaFuse: combining two libraries after investigating their behavior

[← Вернуться ко всем делам](../../README.ru.md) · Обучение и воспроизводство

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

Это издание является машинным переводом редакционной английской версии. Оригинальные цитаты остаются на исходном языке. Если формулировка неясна, обратитесь к английскому языку и связанным источникам.

- **Автор/атрибуция:** sickpyramid
- **Дата проверки источника:** 2026-10-19
- **Статус проверки:** Источники рассмотрены; авторские тесты самостоятельно не перепроводятся.
- **Цель:** Две пары библиотек JavaScript с открытым исходным кодом: ms + Pretty-bytes и dequal + klona.

## Вопрос

How can two projects become behavior specifications and then a new combined tool?

## Что сделал REA

REA 6.4.0 JavaScript static analysis reads the two inputs. README files and tests help produce behavior specifications; the model separately proposes combinations, writes acceptance contracts and new code, then runs the author’s tests and similarity scans.

## Результаты, сообщенные автором

The author publishes ratewise (transfer rate and ETA) and objdelta (structural diff/patch), reports and Evidence. Заявленные результаты контракта: 18/18 и 17/17, а также тесты 7/7 и 6/6 для новых инструментов. Оба примера считаются одним случаем проекта.

## Ограничения и непроверенные претензии

Only two public JavaScript examples were reviewed; проект — v0.1 альфа. Один и тот же рабочий процесс создает спецификации и реализации. The author’s clean-room label is not an independent legal conclusion. Similarity scans and passing tests do not establish general originality or complete equivalence. В этом каталоге они не повторялись.

## Чему научиться

Connect analysis to implementation through behavior specifications, mapping tests to either input behavior or the new combination.

## Доказательства использования REA в источнике

Форматирование выдержки упрощено. Прочтите первоисточник для полного контекста.

> Every donor goes through REA's static JavaScript analysis

## Первоисточники

- [Первоисточник/закрепленные доказательства](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Проект/демо](https://github.com/sickpyramid/ReaFuse)
- [Дополнительный источник 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Дополнительный источник 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Независимое редакционное резюме. Кредит принадлежит первоначальным авторам. Целевое программное обеспечение, установщики и полный вывод декомпилятора здесь не перераспределяются.

<!-- Создано на основе данных каталога; отредактируйте файлы данных, чтобы обновить это примечание. -->
