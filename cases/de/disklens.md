# DiskLens: Überprüfung von Festplatten-Scan- und Treemap-Algorithmen in einer veröffentlichten Binärdatei

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** KarlssonChristoffer
- **Datum der Quellenüberprüfung:** 2026-10-19
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** WinDirStat 2.5.0 Windows ausführbare Datei und öffentliche Quelle

## Die Frage

Wie können Festplattenscans, Treemaps und Duplikaterkennung überprüft werden, bevor eine neue Schnittstelle erstellt wird?

## Was REA getan hat

Claude Code verwendet REA und Ghidra auf der installierten WinDirStat.exe, um die Verzeichnisaufzählung, den NTFS-MFT-Reader, Treemap-Standardeinstellungen und die SHA-512-Deduplizierung zu bestätigen. Der Autor gibt an, dass die Algorithmusdetails größtenteils aus Lesequellen stammen; REA überprüfte die freigegebene Binärdatei und leitete die Untersuchung.

## Vom Autor gemeldete Ergebnisse

Das Projekt veröffentlicht eine Rust-Engine, eine Tauri/Svelte-Schnittstelle und REA Evidence-IDs. Der Autor berichtet über 24-Engine-Tests und eine scan/treemap-Prüfung von etwa 1.3 Millionen Dateien auf einem Rechner.

## Einschränkungen und unbestätigte Ansprüche

Der Autor hat den generierten Code ausdrücklich nicht überprüft. Bei mehreren Dateivorgängen und Systemintegrationen fehlen echte UI-Prüfungen. Schnelles MFT-Scannen fehlt und Hardlinks werden doppelt gezählt. Einige Algorithmen portieren die GPL-Quelle direkt, daher handelt es sich hierbei nicht um eine Reinraumrekonstruktion von Closed-Source-Software. Das Timing einer einzelnen Maschine ist kein kontrollierter Leistungsvergleich.

## Was zu lernen ist

Ordnen Sie binäre Beobachtungen und Quellenlesungen separat zu und geben Sie an, welche Dateioperationen tatsächlich getestet wurden.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [Projekt / Demo](https://github.com/KarlssonChristoffer/DiskLens)
- [Zusätzliche Quelle 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
