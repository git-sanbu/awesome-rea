# Screen Studio: separación de la inspección estática del registro y exportación de evidencia

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Royo-Qiao
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Screen Studio 3.7.3-4540, incluida una copia de Apple Silicon reempaquetada localmente

## la pregunta

¿Cómo se pueden mantener los hallazgos de Electron y del asistente nativo separados de la prueba de grabación, exportación y compatibilidad?

## Lo que hizo REA

Las inspecciones de fusibles REA y Mach-O proporcionaron extractos estáticos seleccionados de Evidence con ID y hashes. Se agotó el tiempo de espera de un análisis de aplicación JavaScript limitado dos veces; no se afirma ningún gráfico completo o descompilación de funciones nativas.

## Resultados informados por el autor

El autor publica herramientas de inspección, estadísticas agregadas de proyectos y validación de exportaciones. Según se informa, una grabación nativa histórica exportó cuadros 3, 337 a 1104 × 720 y 60 fps y fue completamente decodificada; una verificación posterior de la herramienta de solo lectura examinó la exportación guardada y agregó eventos de entrada humana.

## Limitaciones y afirmaciones no verificadas

Las grabaciones privadas y los libros de contabilidad completos no están disponibles para su reproducción. El hash Mach-O identifica una copia reempaquetada localmente. La autorización de red falló, un intento de recorte no tuvo efecto, la firma final no fue seguida por una nueva prueba de captura completa y solo se ejecutó una configuración Apple Silicon/macOS. La decodificación de archivos no prueba la procedencia de la grabación ni la equivalencia visual; este catálogo no volvió a ejecutar el experimento.

## que aprender

Mantenga los metadatos estáticos, las observaciones de la interfaz de usuario, la decodificación de archivos y los comentarios humanos como evidencia separada y publique las comprobaciones fallidas junto con las exitosas.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [Proyecto / demostración](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [Fuente adicional 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [Fuente adicional 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [Fuente adicional 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [Fuente adicional 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
