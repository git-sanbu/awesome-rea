# GunZRs: Identifizieren einer Packgrenze vor dem Neuaufbau aus Spieldaten

[← Zurück zu allen Fällen](../../README.de.md) · Spiele

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** OpenRsG
- **Datum der Quellenüberprüfung:** 2026-10-21
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** GunZ: Die Duel Steam-Installation, Gunz.exe und .mrs-Archive

## Die Frage

Wie kann die Rekonstruktion fortgesetzt werden, wenn eine gepackte ausführbare Datei die statische Wiederherstellung der Spiellogik verhindert?

## Was REA getan hat

REA und Ghidra untersuchen native Dateien. Der Autor zeichnet Themida-Abschnitte, Eintrags-RVA und Entpack-Stubs in Gunz.exe mit lokalen REA Evidence-Pfaden auf. Spielformate werden dann hauptsächlich aus der Datendateistruktur wiederhergestellt. Öffentliche Skripte decken auch REA-Abfragen, generierte ELF/PE-Vorrichtungen, Analyse, Caching und Fehlerweitergabe ab.

## Vom Autor gemeldete Ergebnisse

Das Projekt veröffentlicht eine Rust + Bevy-Rekonstruktion, Formathinweise, Abfrageskripte und Tests. Der Autor berichtet über die Spielbarkeit von Linux mit einer eigenen Installation, Karten, Aktionen, Bots, einem Browser-Build und LAN. Die generierten ELF/PE-Funktionsanalysen und Snapshot-Replay-Prüfungen werden getrennt von der Spielkompatibilität aufgezeichnet.

## Einschränkungen und unbestätigte Ansprüche

Der gepackte Spielcode wurde nicht statisch wiederhergestellt, und es werden einige Verhaltens- und Zeitvorgaben abgeleitet. Das Original Evidence bleibt lokal beim Autor; Öffentliches Material umfasst Beschreibungen und Skripte. Windows/macOS CI-Builds werden gemeldet, aber vom Autor nicht abgespielt. Kartenanzahlen haben unterschiedliche Notizbereiche und beweisen nicht die vollständige Kompatibilität. Dieser Katalog hat es nicht erneut ausgeführt.

## Was zu lernen ist

Ein Analysefehler kann dennoch eine nützliche Grenze festlegen: Binäre Fakten, Datendateibeobachtungen und Schlussfolgerungen separat kennzeichnen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [Projekt / Demo](https://github.com/OpenRsG/GunZRs)
- [Zusätzliche Quelle 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [Zusätzliche Quelle 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [Zusätzliche Quelle 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
