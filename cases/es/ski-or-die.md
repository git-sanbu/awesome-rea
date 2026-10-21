# Ski or Die: reconstruyendo Snowball War en Rust

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** tuunanet
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Minijuego Snowball War de la edición DOS de Ski or Die

## la pregunta

¿Cómo se pueden recuperar las reglas de lanzamiento, colisión, generación y puntuación de un juego de DOS?

## Lo que hizo REA

REA CLI y el adaptador Ghidra 16-bit inspeccionan una imagen de carga MZ desempaquetada. Las semillas de código declaradas por la persona que llama y las consultas trace/function/search investigan los módulos.

## Resultados informados por el autor

El autor publica una reconstrucción jugable de Rust + SDL2, especificaciones de comportamiento, notas de ingeniería inversa y herramientas de extracción de activos.

## Limitaciones y afirmaciones no verificadas

Sólo se reconstruye Snowball War. No hay reproducción de audio ni comparación lado a lado con el original de DOS en ejecución; La velocidad de fotogramas y el comportamiento de PRNG son aproximados. Los activos deben provenir de la copia del juego del propio lector.

## que aprender

Escriba especificaciones de comportamiento respaldadas por direcciones antes de reescribir y etiquete cada aproximación.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Every analysis call therefore ran through the REA CLI

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [Proyecto / demostración](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
