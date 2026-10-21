# DX-Ball: reconstrucción del panorama del sonido estéreo

[← Volver a todos los casos](../../README.es.md) · Vitrinas oficiales

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Equipo de exhibición REA; autores originales del proyecto acreditados en las fuentes
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** DX-Ball 1.07 Windows i386 ejecutable

## la pregunta

¿Cómo se convierte una posición en pantalla en un valor panorámico?

## Lo que hizo REA

REA y Ghidra inspeccionan la función de destino, los llamadores, las instrucciones y las constantes. La reconstrucción del mantenedor explica una expresión x87 omitida por el pseudocódigo descompilado.

## Resultados informados por el autor

La fuente registra casos diferenciales de 3, 205 con la función x86 original y una coincidencia completa de 63-byte después de la recompilación con el compilador histórico.

## Limitaciones y afirmaciones no verificadas

La validación cubre una función y un punto de control específico. El escaparate actualizado reutiliza registros de ejecución y compilación anteriores; no establece una reconstrucción completa del juego.

## que aprender

Cuando el pseudocódigo está incompleto, siga las llamadas, el ensamblado y las constantes. Registre las pruebas semánticas por separado de la coincidencia de bytes.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [Proyecto / demostración](https://rea.tools/showcase/dx-ball/)
- [Fuente adicional 1](https://github.com/N0zoM1z0/dx-ball)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
