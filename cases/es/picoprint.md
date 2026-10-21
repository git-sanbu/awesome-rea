# PicoPrint: conectar una impresora térmica móvil a la impresión Windows

[← Volver a todos los casos](../../README.es.md) · Hardware y compatibilidad

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** bigtower17
- **Fecha de revisión de la fuente:** 2026-10-19
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Impresora térmica Bluetooth LX-D02 y aplicación Funny Print React Native Android

## la pregunta

Cuando un controlador se conecta pero no imprime, ¿cómo se pueden encontrar las diferencias en el protocolo de enlace?

## Lo que hizo REA

En la discusión sobre REA #4152, el autor dice que REA 6.5.0 proporcionó verificaciones del médico, del dispositivo ADB y el punto de entrada de la investigación Android. La descompilación real del código de bytes Hermes utilizó hermes-dec; La inferencia de protocolos y la comparación de tráfico no fueron trabajos exclusivos de REA.

## Resultados informados por el autor

El autor publica un servicio de impresión Go basado en termoimpresión y notas de protocolo, que informa la impresión Ctrl+P de texto, imágenes y documentos en Windows 11 con un LX-D02 real y una corrección de protocolo de enlace ascendente.

## Limitaciones y afirmaciones no verificadas

Proyecto inicial sin instalador con un solo clic, estado de bandeja o reconexión automática. La discusión señala explícitamente que REA no cubrió el paso de análisis Hermes de este objetivo en ese momento. Un dispositivo y un sistema operativo no establecen compatibilidad con todas las versiones de firmware o Windows.

## que aprender

Distinga la conexión de la impresión y registre el paso exacto realizado por cada herramienta.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> used to analyse the Android app.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [Proyecto / demostración](https://github.com/bigtower17/picoprint)
- [Fuente adicional 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [Fuente adicional 2](https://github.com/morluto/rea/discussions/4152)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
