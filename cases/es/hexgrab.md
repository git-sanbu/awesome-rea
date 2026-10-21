# hexgrab: investigando el selector de color PowerToys

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** iammukeshm
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Binarios del selector de color distribuidos con Microsoft PowerToys

## la pregunta

¿Cómo funcionan juntos las teclas de acceso rápido globales, el muestreo de píxeles y el portapapeles?

## Lo que hizo REA

El autor analiza los archivos binarios publicados con REA, compara cada hallazgo con una fuente pública y crea un selector de color independiente más pequeño con .NET 10/WPF.

## Resultados informados por el autor

Se proporcionan fuente pública y docs/rea-findings.md. El autor informa que los hallazgos de 8 de 9 fueron completamente correctos.

## Limitaciones y afirmaciones no verificadas

Probado solo en un monitor con escala 125%; El comportamiento de varios monitores con DPI mixto no se probó en hardware real. El resultado de 8/9 es la verificación del autor de esta investigación, no una tasa de precisión general de REA.

## que aprender

Practique con software de fuente pública para poder verificar los resultados de la herramienta.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [Proyecto / demostración](https://github.com/iammukeshm/hexgrab)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
