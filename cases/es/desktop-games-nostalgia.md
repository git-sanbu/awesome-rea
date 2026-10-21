# Desktop Games: portando un juguete de escritorio a macOS y al navegador

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** ucodia
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Programa Windows para juegos de escritorio / reductores de estrés 2000 de Gemtree

## la pregunta

¿Cómo se pueden entender y portar el intérprete, el árbol de programas, las interacciones y los activos de Peter?

## Lo que hizo REA

El autor utiliza Claude Code, REA y Ghidra. REA investiga la compresión de imágenes, el diseño de recursos, la sincronización, el movimiento de los sprites, el sonido y las coordenadas en el intérprete; Las herramientas de Python procesan el árbol del programa y los activos.

## Resultados informados por el autor

El repositorio público incluye una versión Swift macOS, una versión de navegador, un árbol de programas descompilado y scripts de procesamiento de activos.

## Limitaciones y afirmaciones no verificadas

El autor utiliza colores verdaderos en lugar de la paleta original y cambia la representación de las sombras. La inclusión no verifica la compatibilidad completa o los derechos de redistribución de activos de terceros.

## que aprender

Para software con un intérprete integrado, distinga el intérprete, el árbol de programas y los activos.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> The interpreter was decompiled with REA

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [Proyecto / demostración](https://github.com/ucodia/desktop-games-nostalgia)
- [Fuente adicional 1](https://ucodia.github.io/desktop-games-nostalgia/)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
