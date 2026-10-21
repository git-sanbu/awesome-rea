# rea-lab: Messung des Beitrags von REA zum Reverse Engineering von Windows

[← Zurück zu allen Fällen](../../README.de.md) · Analyse und Bewertung

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** pablodiazjorge
- **Datum der Quellenüberprüfung:** 2026-10-21
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Kleine Windows-Herausforderungen, größere Binärdateien mit Lockvögeln und echte Open-Source-Programme

## Die Frage

Wie wirkt sich das Hinzufügen von REA auf die Erfolgsquote, den Zeitaufwand und die Kosten eines Agenten aus?

## Was REA getan hat

Der Autor richtet Windows und Ghidra ein, führt vorab registrierte kontrollierte Studien durch, überprüft zitiertes Evidence und veröffentlicht Beschreibungen, Umgebungen und Upstream-Fixes.

## Vom Autor gemeldete Ergebnisse

Fünf vorab registrierte Studien sind öffentlich. Studieren Sie 1: 28/30 in beiden Gruppen. Studieren Sie 2: 11/24 ohne REA im Vergleich zu 4/24 mit REA. Studie 3: 71/72 versus 68/72. Studie 4 verwendet DeepSeek: 20/20 versus 19/20, wobei kein signifikanter Unterschied festgestellt wurde. In der Studie 5 kostet der überarbeitete Skill 14% mehr als der offizielle Skill (p=0.012), ohne dass sich die Genauigkeit wesentlich ändert. Die 2026-10-21 Evidence-Aufbewahrungsnotiz unterscheidet zwischen 482-Studienläufen, 336, die REA aufriefen, und 3-Neustart-unterbrochenen Wiederholungen: keiner dieser 339 REA-aufrufenden Läufe wurde proaktiv beibehalten; Evidence; Der Gutachter hat es anhand der Kundenunterlagen rekonstruiert.

## Einschränkungen und unbestätigte Ansprüche

Alle Studienpins REA 6.4.0, Claude Code 2.1.296 und ihre jeweiligen Modelle, Aufgaben und Berechtigungen; Die Ergebnisse können nicht auf aktuelle Versionen oder das gesamte Reverse Engineering übertragen werden. Die Unterschiede in den Erfolgsquoten der Studien 2 und 3 waren bei den Tests des Autors statistisch nicht signifikant. Die Zertifizierung der Studie 3 Evidence wurde nach einer Graderkorrektur von 142/144 auf 144/144 korrigiert. Die Lösungsanzahl blieb unverändert. Die Studie 4 enthält nur 20-Paare. Die Studie 5 vergleicht den in Eingabeaufforderungen eingefügten Fertigkeitstext und nicht das automatische Laden des Clients. In diesem Katalog wurden die Studien nicht erneut durchgeführt. Bei der 339-Zählung handelt es sich um REA-aufrufende Läufe, nicht um die gesamte Studienstichprobe, und bedeutet nicht, dass Evidence-Inhalte fehlen oder die Zertifizierung fehlgeschlagen ist.

## Was zu lernen ist

Bewerten Sie gemeinsam Kontrollen, Aufgabenverteilung, Kosten und Beweisqualität.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [Projekt / Demo](https://github.com/pablodiazjorge/rea-lab)
- [Zusätzliche Quelle 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [Zusätzliche Quelle 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [Zusätzliche Quelle 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [Zusätzliche Quelle 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
