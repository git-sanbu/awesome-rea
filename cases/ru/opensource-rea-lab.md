# Open-source REA Lab: закрепление артефакта npm и анализ его входного фрагмента

[← Вернуться ко всем делам](../../README.ru.md) · Анализ и оценка

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

Это издание является машинным переводом редакционной английской версии. Оригинальные цитаты остаются на исходном языке. Если формулировка неясна, обратитесь к английскому языку и связанным источникам.

- **Автор/атрибуция:** martinlofranodeoliveira
- **Дата проверки источника:** 2026-10-19
- **Статус проверки:** Источники рассмотрены; авторские тесты самостоятельно не перепроводятся.
- **Цель:** Официальные реагенты npm 6.4.0 package.json и scripts/rea.mjs

## Вопрос

Как можно идентифицировать артефакт выпуска, прежде чем ответить на вопрос об ограниченном входном файле?

## Что сделал REA

An independent Python auditor checks archive structure and hashes first. REA статически анализирует два неизмененных файла, извлеченных из проверенного пакета. Entry-branch semantics also use manual syntax checks; аудиторские и ручные выводы не являются выходом REA.

## Результаты, сообщенные автором

The author publishes pinned digests, audit JSON, sanitized Evidence summaries and reproduction scripts. В срезе сообщается о проанализированном файле JavaScript 1, узлах AST 469, результатах 14 и нулевых ошибках анализа, при этом отмечается, что полный анализ пакета был прерван во время семантического расширения.

## Ограничения и непроверенные претензии

The 14 findings are not a vulnerability count. Срез сохраняет семантические неизвестные 110 и не имеет реализации dist, поэтому он не может обеспечить полную безопасность пакета или корректность во время выполнения. A sanitized summary is not replayable canonical Evidence; full-package coverage is partial. Этот каталог не перезапускался.

## Чему научиться

Bound the question and input while retaining interruptions and unknowns. Структурные проверки, идентичность байтов и безопасность во время выполнения — это разные выводы.

## Доказательства использования REA в источнике

Форматирование выдержки упрощено. Прочтите первоисточник для полного контекста.

> Can REA statically parse the actual shipped dispatcher?

## Первоисточники

- [Первоисточник/закрепленные доказательства](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [Проект/демо](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [Дополнительный источник 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [Дополнительный источник 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

Независимое редакционное резюме. Кредит принадлежит первоначальным авторам. Целевое программное обеспечение, установщики и полный вывод декомпилятора здесь не перераспределяются.

<!-- Создано на основе данных каталога; отредактируйте файлы данных, чтобы обновить это примечание. -->
