# bzip2: comparación de resultados de binarios eliminados con una compilación simbolizada

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** CassieFox23
- **Fecha de revisión de la fuente:** 2026-10-19
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** bzip2 1.0.8 compilado con gcc -O2 y despojado, Linux x86-64

## la pregunta

¿Cómo se puede encontrar una función a partir de una cadena de salida y comprobar sus relaciones de llamada?

## Lo que hizo REA

REA 6.4.0 y Ghidra ubican una función de una cadena, enumeran las personas que llaman y las personas que llaman, y devuelven Evidence con la etiqueta observed/derived.. El autor verifica por separado una compilación no eliminada de la misma fuente con el código fuente, nm y objdump.

## Resultados informados por el autor

El autor informa haber encontrado descomprimir con la persona que llama 1 y las personas que llaman 24 que coinciden con la compilación de referencia. Los pasos de compilación, los registros MCP recortados y dos clases de respuestas de error son públicos.

## Limitaciones y afirmaciones no verificadas

Un programa, configuración y función de compilación, sin comparación de herramientas. Los bordes 24 son llamadas directas resueltas por el proveedor, no un gráfico de tiempo de ejecución completo. El script del cliente completo no es público; el archivo tiene un hash registrado pero no tiene verificación de firma. Este catálogo no lo volvió a ejecutar.

## que aprender

Construya la verdad básica a partir de una construcción simbolizada coincidente y separe observaciones, inferencias y verificaciones de referencias.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## Fuentes originales

- [Discusión pública / editable en el momento de la revisión](https://github.com/morluto/rea/discussions/2254)
- [Proyecto / demostración](https://github.com/morluto/rea/discussions/2254)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
