# bzip2: Überprüfung entfernter Binärergebnisse anhand eines symbolisierten Builds

[← Zurück zu allen Fällen](../../README.de.md) · Analyse und Bewertung

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** CassieFox23
- **Datum der Quellenüberprüfung:** 2026-10-19
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** bzip2 1.0.8 mit gcc -O2 kompiliert und entfernt, Linux x86-64

## Die Frage

Wie kann eine Funktion aus einem Ausgabestring gefunden und ihre Aufrufbeziehungen überprüft werden?

## Was REA getan hat

REA 6.4.0 und Ghidra suchen eine Funktion aus einer Zeichenfolge, listen Aufrufer und Aufgerufene auf und geben Evidence mit der Bezeichnung observed/derived. zurück. Der Autor prüft separat einen nicht entfernten Build aus derselben Quelle mit Quellcode, nm und objdump.

## Vom Autor gemeldete Ergebnisse

Der Autor berichtet, dass er eine Dekomprimierung mit 1-Aufrufern und 24-Aufrufern gefunden hat, die dem Referenz-Build entsprechen. Build-Schritte, gekürzte MCP-Datensätze und zwei Klassen von Fehlerantworten sind öffentlich.

## Einschränkungen und unbestätigte Ansprüche

Ein Programm, Kompilierungsaufbau und Funktion, ohne Werkzeugvergleich. Bei den 24-Kanten handelt es sich um vom Anbieter aufgelöste Direktaufrufe und nicht um ein vollständiges Laufzeitdiagramm. Das vollständige Client-Skript ist nicht öffentlich; Das Archiv verfügt über einen aufgezeichneten Hash, aber keine Signaturüberprüfung. Dieser Katalog hat es nicht erneut ausgeführt.

## Was zu lernen ist

Erstellen Sie die Grundwahrheit aus einem passenden symbolisierten Aufbau und trennen Sie Beobachtungen, Schlussfolgerungen und Referenzprüfungen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## Originalquellen

- [Öffentliche Diskussion/bearbeitbar zum Zeitpunkt der Überprüfung](https://github.com/morluto/rea/discussions/2254)
- [Projekt / Demo](https://github.com/morluto/rea/discussions/2254)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
