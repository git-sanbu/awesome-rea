# terminal-rs: una terminal de mercado informada por interacciones TradingView

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** michaelshimeles
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Comportamiento de las páginas de gráficos TradingView públicas y desconectadas

## la pregunta

¿Cómo puede la investigación de interacción de gráficos informar a una interfaz de mercado Rust independiente?

## Lo que hizo REA

El autor utiliza el modo de sitio web REA para la captura pasiva de páginas públicas. Los hallazgos, las identificaciones de Evidence y las implicaciones de diseño se registran en docs/analysis..

## Resultados informados por el autor

El proyecto publica gráficos de GPU Rust, comandos de teclado, diseños de paneles e integración de datos con una interfaz estilo Bloomberg. Revisado en 2026-10-21: 151, se agregaron indicadores integrados, pruebas de entrada de parámetros y límites, y un script de lanzamiento universal macOS. Estos son cambios de implementación posteriores, no una nueva investigación REA.

## Limitaciones y afirmaciones no verificadas

Sólo se estudió el comportamiento visible en la web; Esto no es una recuperación del código fuente TradingView o Bloomberg. Las fuentes de datos, los límites de tasas y los términos de uso de datos imponen restricciones separadas.

## que aprender

Las observaciones web públicas pueden proporcionar información de diseño rastreable sin describirse como descompilación binaria.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> tradingview.com with REA in website mode

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [Proyecto / demostración](https://github.com/michaelshimeles/terminal-rs)
- [Fuente adicional 1](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
