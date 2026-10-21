# DownUnderCTF: Wiederherstellen von Flag-Checking-Gleichungen

[← Zurück zu allen Fällen](../../README.de.md) · Offizielle Vitrinen

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** REA-Vorzeigeteam; Quellenangabe der ursprünglichen Projektautoren
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** DownUnderCTF 2023 Flaggenkaro mit maskierten Quadraten, gestreift Linux ELF

## Die Frage

Wie kann die Eingabevalidierung ohne Symbole oder Quellcode wiederhergestellt werden?

## Was REA getan hat

REA findet Eingabeaufforderungszeichenfolgen und Querverweise, analysiert den Checker und liest Masken und Zieltabellen. Z3 löst 26-Einschränkungen; Die Prozesserfassung überprüft die ursprüngliche Challenge-Binärdatei.

## Vom Autor gemeldete Ergebnisse

Die offizielle Aufzeichnung zeigt: Richtig! / Exit 0 für den richtigen Kandidaten und Falsch! / Exit 255 für einen falschen Kandidaten. Anschließend wird die Lösung mit der Quelle und den Metadaten des Veranstalters abgeglichen.

## Einschränkungen und unbestätigte Ansprüche

Der Solver geht von einem gemeinsamen Flag-Format und Zeichensatz aus. Bei der Suche nach einem zweiten Modell kam es zu einer Zeitüberschreitung, sodass die Eindeutigkeit nicht nachgewiesen werden konnte.

## Was zu lernen ist

Nachdem die statische Argumentation einen Kandidaten hervorgebracht hat, führen Sie sowohl korrekte als auch falsche Eingaben durch das ursprüngliche Programm aus.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [Projekt / Demo](https://rea.tools/showcase/ctf/)
- [Zusätzliche Quelle 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
