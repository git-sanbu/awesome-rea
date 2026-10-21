# ReaFuse: combinando dos bibliotecas después de investigar su comportamiento

[← Volver a todos los casos](../../README.es.md) · Aprendizaje y reproducción

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** sickpyramid
- **Fecha de revisión de la fuente:** 2026-10-19
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Dos pares de bibliotecas JavaScript de código abierto: ms + Pretty-bytes y dequal + klona

## la pregunta

¿Cómo pueden dos proyectos convertirse en especificaciones de comportamiento y luego en una nueva herramienta combinada?

## Lo que hizo REA

El análisis estático REA 6.4.0 JavaScript lee las dos entradas. Los archivos y pruebas README ayudan a producir especificaciones de comportamiento; el modelo propone combinaciones por separado, escribe contratos de aceptación y código nuevo, luego ejecuta las pruebas del autor y los escaneos de similitud.

## Resultados informados por el autor

El autor publica ratewise (tasa de transferencia y ETA) y objdelta (estructural diff/patch), informes y Evidence. Los resultados del contrato informados son 18/18 y 17/17, además de las pruebas 7/7 y 6/6 para las nuevas herramientas. Ambos ejemplos cuentan como un caso de proyecto.

## Limitaciones y afirmaciones no verificadas

Sólo se revisaron dos ejemplos públicos de JavaScript; el proyecto es v0.1 alfa. El mismo flujo de trabajo produce especificaciones e implementaciones. La etiqueta de sala limpia del autor no es una conclusión jurídica independiente. Los escaneos de similitud y las pruebas de aprobación no establecen originalidad general ni equivalencia completa. Este catálogo no los volvió a ejecutar.

## que aprender

Conecte el análisis con la implementación a través de especificaciones de comportamiento, asignando pruebas al comportamiento de entrada o a la nueva combinación.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Every donor goes through REA's static JavaScript analysis

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Proyecto / demostración](https://github.com/sickpyramid/ReaFuse)
- [Fuente adicional 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Fuente adicional 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
