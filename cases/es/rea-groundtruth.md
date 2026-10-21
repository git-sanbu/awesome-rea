# rea-groundtruth: comprobar los puntos ciegos del análisis con una fuente conocida

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../rea-groundtruth.md) · [简体中文](../zh-CN/rea-groundtruth.md) · [繁體中文](../zh-TW/rea-groundtruth.md) · [日本語](../ja/rea-groundtruth.md) · [한국어](../ko/rea-groundtruth.md) · [Español](../es/rea-groundtruth.md) · [Français](../fr/rea-groundtruth.md) · [Deutsch](../de/rea-groundtruth.md) · [Português (Brasil)](../pt-BR/rea-groundtruth.md) · [Русский](../ru/rea-groundtruth.md) · [العربية](../ar/rea-groundtruth.md) · [हिन्दी](../hi/rea-groundtruth.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** UnknownHacker1
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** MongoDB Compass 1.43.4 y accesorios Electron escritos a mano

## la pregunta

¿Un informe de cero llamadas o ventanas de IPC refleja la aplicación o una brecha en el análisis?

## Lo que hizo REA

REA 6.4.0 analiza una aplicación con fuente conocida. Ejemplos mínimos con diferentes envoltorios de paquetes web proporcionan controles.

## Resultados informados por el autor

El autor publica una reproducción de un comando de las API Electron perdidas en un formulario de paquete web particular y registra cómo se manejó una discrepancia de integridad ASAR posterior a la firma.

## Limitaciones y afirmaciones no verificadas

El informe se refiere a compilaciones específicas en Windows 11 y REA 6.4.0.. Las versiones posteriores pueden solucionar el problema; Este catálogo no afirma que el error histórico persista en la última versión.

## que aprender

Los resultados cero no establecen ausencia. Los dispositivos con fuente conocida pueden probar la cobertura del analizador.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [Proyecto / demostración](https://github.com/UnknownHacker1/rea-groundtruth)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
