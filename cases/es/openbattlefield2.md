# OpenBattlefield2: nivel de función Evidence para un cliente Battlefield 2

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Moxnatiy
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Battlefield 2 1.5 Refractor Cliente 2, que renderiza archivos DLL y datos originales del juego

## la pregunta

¿Cómo puede la investigación del comportamiento binario, HUD y punto de mira informar la implementación de un motor rastreable?

## Lo que hizo REA

REA 4.1.0 y Ghidra 12.1.4 leen archivos PE 32-bit y recopilan expedientes Evidence con todas las funciones. Esto se complementa con consultas directas Ghidra, datos del juego y símbolos del servidor. Las notas en forma de cruz incluyen GuiIndex, direcciones de acumulación de posición y compensación e ID REA Evidence; REA maneja solo la etapa de análisis.

## Resultados informados por el autor

El proyecto publica un motor C++20, notas de funciones, pruebas y capturas de pantalla. El autor informa haber cargado una instalación propia de BF2 1.5, conectarse a un servidor dedicado original y mostrar soldados y HUD. En el modo conectado, la mira se renderiza, se expande durante el movimiento y se contrae cuando se detiene, con comprobaciones como test_weapon_hud.

## Limitaciones y afirmaciones no verificadas

Al proyecto de investigación todavía le faltan disparos, conducción de vehículos y sonido. Las actualizaciones de cambio de arma, zoom y disparo en forma de cruz siguen sin terminar; El modo alojado no tiene punto de mira. La plataforma principal es macOS arm64 y la compilación Windows no se ejecutó. Los resultados involucran múltiples herramientas y no todas pueden atribuirse a REA. Este catálogo no lo volvió a ejecutar.

## que aprender

Direcciones de conexión, Evidence, comandos de implementación y aceptación para una característica observable.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Proyecto / demostración](https://github.com/Moxnatiy/OpenBattlefield2)
- [Fuente adicional 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Fuente adicional 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Fuente adicional 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
