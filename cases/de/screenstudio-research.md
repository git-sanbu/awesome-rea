# Screen Studio: Trennung der statischen Inspektion von der Aufzeichnung und dem Export von Beweisen

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Royo-Qiao
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Screen Studio 3.7.3-4540, einschließlich einer lokal neu verpackten Kopie von Apple Silicon

## Die Frage

Wie können Electron- und Native-Helper-Ergebnisse vom Aufzeichnungs-, Export- und Kompatibilitätsnachweis getrennt gehalten werden?

## Was REA getan hat

REA-Sicherungs- und Mach-O-Inspektionen lieferten kuratierte statische Evidence-Auszüge mit IDs und Hashes. Bei einer begrenzten JavaScript-Anwendungsanalyse kam es zweimal zu einer Zeitüberschreitung. Es wird keine vollständige Dekompilierung von Diagrammen oder nativen Funktionen beansprucht.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht Inspektions-, aggregierte Projektstatistik- und Exportvalidierungstools. Eine historische native Aufnahme exportierte angeblich 3-, 337-Frames mit 1104 × 720 und 60 fps und wurde vollständig dekodiert; Eine spätere schreibgeschützte Toolprüfung untersuchte die gespeicherten Export- und aggregierten menschlichen Eingabeereignisse.

## Einschränkungen und unbestätigte Ansprüche

Private Aufzeichnungen und vollständige Bücher können nicht wiedergegeben werden. Der Mach-O-Hash identifiziert eine lokal neu verpackte Kopie. Die Netzwerkautorisierung schlug fehl, ein Trimmversuch war nicht wirksam, auf die endgültige Signatur folgte kein vollständiger erneuter Erfassungstest und es wurde nur ein Apple Silicon/macOS-Setup durchgeführt. Die Dekodierung einer Datei ist kein Beweis für die Herkunft oder visuelle Äquivalenz der Aufzeichnung; Dieser Katalog hat das Experiment nicht erneut ausgeführt.

## Was zu lernen ist

Bewahren Sie statische Metadaten, UI-Beobachtungen, Dateidekodierung und menschliches Feedback als separate Beweise auf und veröffentlichen Sie fehlgeschlagene Prüfungen zusammen mit Erfolgen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [Projekt / Demo](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [Zusätzliche Quelle 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [Zusätzliche Quelle 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [Zusätzliche Quelle 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [Zusätzliche Quelle 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
