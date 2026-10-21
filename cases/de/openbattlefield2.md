# OpenBattlefield2: -Funktionsebene Evidence für einen Battlefield 2-Client

[← Zurück zu allen Fällen](../../README.de.md) · Spiele

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Moxnatiy
- **Datum der Quellenüberprüfung:** 2026-10-21
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Battlefield 2 1.5 Refractor 2 Client, der DLLs und Originalspieldaten rendert

## Die Frage

Wie können Fadenkreuz-, HUD- und binäre Verhaltensforschung in eine nachvollziehbare Engine-Implementierung einfließen?

## Was REA getan hat

REA 4.1.0 und Ghidra 12.1.4 lesen 32-bit PE-Dateien und sammeln voll funktionsfähige Evidence-Dossiers. Direkte Ghidra-Abfragen, Spieldaten und Serversymbole ergänzen dies. Zu den Fadenkreuznotizen gehören GuiIndex, Positions- und Offset-Akkumulationsadressen sowie REA Evidence-IDs. REA übernimmt nur die Analysephase.

## Vom Autor gemeldete Ergebnisse

Das Projekt veröffentlicht eine C++20-Engine, Funktionshinweise, Tests und Screenshots. Der Autor berichtet, dass er eine eigene BF2 1.5-Installation lädt, eine Verbindung zu einem ursprünglichen dedizierten Server herstellt und Soldaten und HUD anzeigt. Im verbundenen Modus wird das Fadenkreuz gerendert, erweitert sich während der Bewegung und zieht sich zusammen, wenn es angehalten wird, mit Prüfungen wie test_weapon_hud.

## Einschränkungen und unbestätigte Ansprüche

Dem Forschungsprojekt mangelt es noch an Feuerung, Fahrzeugführung und Ton. Aktualisierungen für Fadenkreuz-Waffenwechsel, Zoom und Feuer sind noch nicht abgeschlossen; Im gehosteten Modus gibt es kein Fadenkreuz. Die Hauptplattform ist macOS arm64, und der Build Windows wurde nicht ausgeführt. Die Ergebnisse betreffen mehrere Werkzeuge und können nicht alle REA zugeschrieben werden. Dieser Katalog hat es nicht erneut ausgeführt.

## Was zu lernen ist

Verbinden Sie Adressen, Evidence, Implementierungs- und Akzeptanzbefehle für ein beobachtbares Feature.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Projekt / Demo](https://github.com/Moxnatiy/OpenBattlefield2)
- [Zusätzliche Quelle 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Zusätzliche Quelle 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Zusätzliche Quelle 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
