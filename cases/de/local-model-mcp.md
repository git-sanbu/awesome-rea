# Ein lokales 27B-Modell: Eine kleinere MCP-Werkzeugliste ermöglicht die Funktionsanalyse

[← Zurück zu allen Fällen](../../README.de.md) · Analyse und Bewertung

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** CassieFox23
- **Datum der Quellenüberprüfung:** 2026-10-19
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Selbstgebauter C-Token-Prüfer; Qwen3.8-27B, llama.cpp, OpenCode und REA MCP

## Die Frage

Wie können REA-Werkzeugbeschreibungen und -Analysen in den 32K-Kontext eines lokalen Modells passen?

## Was REA getan hat

Der Autor verwendet PR #3026 Commit d993ffeb1 und Ghidra 12.1.4. Tool-Familien und eine OpenCode-Zulassungsliste, die nur 10 REA-Tools offenlegt; Das Modell öffnet das Ziel, sucht und dekompiliert die Funktion und schließt dann die Sitzung.

## Vom Autor gemeldete Ergebnisse

Der Autor berichtet, dass alle 206-Toolbeschreibungen den Kontext sprengten. Bei einem 62-tool-Setup kam es nach dem Lesen der Eingabeaufforderung zu einem GPU-Reset. Die 10-tool-Eingabeaufforderung verwendete 4- und 407-Token. In drei Durchläufen wurde die Zielzeichenfolge gefunden und der Prüfer erklärt, wobei jeder Durchlauf etwa 80 Sekunden dauerte.

## Einschränkungen und unbestätigte Ansprüche

Die drei Läufe wiederholen ein kleines Programm und eine Eingabeaufforderung, nicht drei unabhängige Aufgaben. Es wurde kein anderes Modell oder kein anderer Kunde verglichen. Für die Ergebnisse wird ein historischer PR-Commit verwendet. Werkzeuganzahlen, Schalter und Timings sind keine Garantien für die aktuelle Version.

## Was zu lernen ist

Messen Sie die Kosten für den Schemakontext, bevor Sie einen minimalen Toolset testen. Die Wiederholung einer Aufgabe begründet keine allgemeine Leistungsfähigkeit.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> With the full tool list, nothing fits.

## Originalquellen

- [Öffentliche Diskussion/bearbeitbar zum Zeitpunkt der Überprüfung](https://github.com/morluto/rea/discussions/3098)
- [Projekt / Demo](https://github.com/morluto/rea/discussions/3098)
- [Zusätzliche Quelle 1](https://github.com/morluto/rea/pull/3026)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
