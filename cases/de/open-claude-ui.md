# Open Claude UI: Desktop-Interaktionen dokumentieren und wiederverwendbare UI-Komponenten veröffentlichen

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Caho1
- **Datum der Quellenüberprüfung:** 2026-10-26
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Claude Desktop macOS-Paket; Vom Autor gemeldete @ant/desktop 2.37337.1-Basislinie und gebündelte Web-Benutzeroberfläche

## Die Frage

Wie können Eingabezusammensetzungs-, Scroll- und Desktop-Interaktionsregeln wiederverwendbare Schnittstellenkomponenten beeinflussen?

## Was REA getan hat

Der Autor schreibt die ASAR-, JavaScript AST- und CSS-Untersuchung REA 6.5.0. zu. Das Interaktionskapitel verknüpft Auszüge aus gebündeltem Code mit Eingabeschutz und Bildlaufregeln. Separate TypeScript-Beispiele implementieren diese Verhaltensweisen.

## Vom Autor gemeldete Ergebnisse

Das Repository veröffentlicht versionierte Designnotizen, ein Komponenten-Storybook, CSS-Tokens und Implementierungsbeispiele, einschließlich Überprüfungen des Kompositionsstatus und eines Eingabeschutzes nach der Komposition in RichComposerWithMentions.tsx.

## Einschränkungen und unbestätigte Ansprüche

Hierbei handelt es sich um eine UI-Bibliothek und einen vom Autor gemeldeten Teardown, nicht um einen vollständigen Claude-Client oder -Modelldienst. Rohe REA-Sitzungsaufzeichnungen und unabhängige Verhaltens- oder visuelle Äquivalenztests wurden in den überprüften Dateien nicht gefunden. Versions- und Wiedergabetreueansprüche verbleiben beim Autor.

## Was zu lernen ist

Verbinden Sie eine Interaktionsregel mit dem angegebenen Bundle-Speicherort und der angegebenen Implementierung. Unterscheidung zwischen Entwurfsdokumentation und gemessener Äquivalenz.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [Projekt / Demo](https://github.com/Caho1/open-claude-ui)
- [Zusätzliche Quelle 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [Zusätzliche Quelle 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [Zusätzliche Quelle 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
