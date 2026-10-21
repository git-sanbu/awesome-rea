# OpenBSD netcat: análisis estático de un ELF enviado

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** NullLabTests
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Ubuntu netcat-openbsd 1.234-1 binario

## la pregunta

¿Qué implementaciones de red, proxy y relacionadas con la seguridad se encuentran en el binario netcat enviado?

## Lo que hizo REA

Las verificaciones de diseño de pwntools de REA y la ruta de Ghidra analizan la misma imagen, con readelf, objdump, nm y cadenas utilizadas para verificaciones cruzadas.

## Resultados informados por el autor

El autor publica investigaciones de funciones, cadenas y rutas de llamadas, resultados.txt y resultados JSON sin formato en files/..

## Limitaciones y afirmaciones no verificadas

Este es un análisis estático de una compilación específica. Las importaciones y el pseudocódigo por sí solos no establecen todos los comportamientos en tiempo de ejecución ni constituyen una certificación de seguridad.

## que aprender

Mantenga la salida REA sin procesar junto con verificaciones de herramientas independientes para que se puedan revisar las conclusiones.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [Proyecto / demostración](https://github.com/NullLabTests/OpenBSD_netcat_REA)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
