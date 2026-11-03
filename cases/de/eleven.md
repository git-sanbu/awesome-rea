# Eleven: Verbinden einer agentengesteuerten Desktop-Workbench mit REA

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Zfinix
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Native Binäranalyse über REA/Ghidra und eine ACP-Agent-Desktop-Workbench

## Die Frage

Wie kann ein Agent eine Binärdatei überprüfen, während Navigation und bearbeitbare Anmerkungen in einer gemeinsam genutzten Workbench sichtbar bleiben?

## Was REA getan hat

Die Engine startet REA MCP und ruft open_binary- und Prozeduransichten auf. Ein separater Proxy leitet Analysetools weiter, während er die Annotations- und Schreibtools REA zurückhält, und leitet diese Änderungen über Eleven-Projekttools mit sichtbarem Verlauf weiter.

## Vom Autor gemeldete Ergebnisse

Die öffentliche Ausgabe umfasst die Desktop-Anwendungsquelle, die Dokumentation des MCP-Tools, Projektanmerkungen und Patch-Vorschlagspfade sowie einen vom Autor bereitgestellten Live-Agent-Test, der einen Agenten auffordert, eine /bin/ls-Funktion in der Benutzeroberfläche zu öffnen. README und Upstream-Showcase beschreiben die funktionierende Workbench.

## Einschränkungen und unbestätigte Ansprüche

Der Katalog überprüfte Quell- und Testdefinitionen, keinen ausgeführten Testempfang oder eine installierte Version. Die Unterstützung der Desktop-Plattform, das Debugger-Verhalten, die Cache-Beschleunigung und die Vollständigkeit der Binäranalyse wurden nicht unabhängig überprüft. Rizin, jadx und andere Pfade sind separate Engines; Ihre Ergebnisse werden nicht REA zugeschrieben. Bei den Upstream-Showcase-Timings handelt es sich um Beobachtungen des Autors, nicht um Katalog-Benchmarks.

## Was zu lernen ist

Trennen Sie Analyse-Passthrough von Projektbearbeitungen, halten Sie die Autorenschaft und den Rückgängig-Verlauf sichtbar und unterscheiden Sie ausführbare Tests von beobachteten Testergebnissen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [Projekt / Demo](https://github.com/Zfinix/eleven)
- [Zusätzliche Quelle 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [Zusätzliche Quelle 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [Zusätzliche Quelle 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [Zusätzliche Quelle 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
