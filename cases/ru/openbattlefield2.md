# OpenBattlefield2: function-level Evidence for a Battlefield 2 client

[← Вернуться ко всем делам](../../README.ru.md) · Игры

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

Это издание является машинным переводом редакционной английской версии. Оригинальные цитаты остаются на исходном языке. Если формулировка неясна, обратитесь к английскому языку и связанным источникам.

- **Автор/атрибуция:** Moxnatiy
- **Дата проверки источника:** 2026-10-21
- **Статус проверки:** Источники рассмотрены; авторские тесты самостоятельно не перепроводятся.
- **Цель:** Battlefield 2 1.5 Refractor 2 клиент, рендеринг DLL и исходных игровых данных

## Вопрос

How can crosshair, HUD and binary-behavior research inform a traceable engine implementation?

## Что сделал REA

REA 4.1.0 and Ghidra 12.1.4 read 32-bit PE files and collect full function Evidence dossiers. Direct Ghidra queries, game data and server symbols supplement this. Crosshair notes include GuiIndex, position and offset-accumulation addresses and REA Evidence IDs; REA обрабатывает только этап анализа.

## Результаты, сообщенные автором

The project publishes a C++20 engine, function notes, tests and screenshots. Автор сообщает о загрузке собственной установки BF2 1.5, подключении к исходному выделенному серверу и отображении солдат и HUD. В подключенном режиме перекрестие визуализируется, расширяется во время движения и сжимается при остановке с помощью таких проверок, как test_weapon_hud.

## Ограничения и непроверенные претензии

В исследовательском проекте по-прежнему отсутствуют стрельба, вождение автомобиля и звук. Обновления переключателя оружия, масштабирования и стрельбы при прицеле остаются незавершенными; в размещенном режиме нет перекрестия. The main platform is macOS arm64, and the Windows build was not run. Результаты связаны с использованием нескольких инструментов, и не все они могут быть отнесены к REA. Этот каталог не перезапускался.

## Чему научиться

Адреса подключения, Evidence, команды реализации и принятия для одной наблюдаемой функции.

## Доказательства использования REA в источнике

Форматирование выдержки упрощено. Прочтите первоисточник для полного контекста.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Первоисточники

- [Первоисточник/закрепленные доказательства](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Проект/демо](https://github.com/Moxnatiy/OpenBattlefield2)
- [Дополнительный источник 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Дополнительный источник 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Дополнительный источник 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Независимое редакционное резюме. Кредит принадлежит первоначальным авторам. Целевое программное обеспечение, установщики и полный вывод декомпилятора здесь не перераспределяются.

<!-- Создано на основе данных каталога; отредактируйте файлы данных, чтобы обновить это примечание. -->
