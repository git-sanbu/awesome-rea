# sparkDash: integración del análisis REA en un panel multidispositivo

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** MiaAI-Lab
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** REA CLI, archivos de entrada y vistas analysis/Evidence en dispositivos Linux remotos

## la pregunta

¿Cómo puede una interfaz web enviar trabajos REA remotos de larga duración y cargar resultados grandes a pedido?

## Lo que hizo REA

En realidad, el proyecto llama a REA ascendente a través de su CLI, fijando los reactivos 6.4.0 y su archivo de bloqueo. server/rea implementa trabajos separados, cargas, estados, resultados paginados y exportaciones. Los comandos controlan inspeccionar-análisis-ver y comparar; el panel no implementa un descompilador.

## Resultados informados por el autor

La página pública Herramientas → REA y la implementación del servidor admiten ejecución remota independiente, registros, resúmenes, limitations/unknowns, vistas bajo demanda, exportaciones JSON y comparación de Evidence. La fijación de versiones, la gestión de trabajos y las pruebas de carga son públicas. La inclusión se refiere a la integración implementada, no solo a las instrucciones de instalación.

## Limitaciones y afirmaciones no verificadas

Este es un caso de integración, no una reconstrucción de REA de sparkDash o una prueba de que cada ruta de análisis ascendente pasó la aceptación del hardware. Los dispositivos deben ejecutar Linux, la función está desactivada de forma predeterminada y los formatos de destino necesitan proveedores adicionales. Las pruebas de administrador revisadas utilizan REA falso y un shell local, que no reemplazan el Ghidra real ni las pruebas de dispositivos remotos. Este catálogo no lo instaló ni lo ejecutó.

## que aprender

Atribuya las capacidades ascendentes por separado de la programación y el trabajo de la interfaz de usuario, preservando evidencia, limitaciones y fallas en los resultados mostrados.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> sparkDash uses the CLI only

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [Proyecto / demostración](https://github.com/MiaAI-Lab/sparkDash)
- [Fuente adicional 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [Fuente adicional 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [Fuente adicional 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [Fuente adicional 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
