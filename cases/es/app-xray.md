# App X-Ray: convertir los hallazgos de REA en informes de aplicaciones que se pueden compartir

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Eliot5566
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Fuente de aplicación Electron de código abierto, con rutas adicionales de archivo APK, binario nativo y modelo

## la pregunta

¿Cómo puede la evidencia estática REA convertirse en un informe de componentes legible y una diferencia entre versiones?

## Lo que hizo REA

La integración invoca operaciones fijadas REA 6.7.0 CLI y analiza JSON Evidence. Los lotes de análisis JavaScript mantienen los archivos bajo la misma raíz para preservar la resolución de importación; La inspección de fusibles Electron es una operación independiente del REA.

## Resultados informados por el autor

El proyecto publica generación de informes, reglas, diferencias de CI y una galería. Su informe week-5 fechado dice que se escanearon las aplicaciones 20 Electron y se encontraron versiones para todos los 20, con escaneos de 18 en segundos de 60 en ese contenedor. REA-Bench proporciona preguntas 54 derivadas de informes de todo el corpus 20-app.

## Limitaciones y afirmaciones no verificadas

Estos son análisis fechados informados por el autor, no vulnerabilidades actuales ni hallazgos de la red en tiempo de ejecución. Las reglas pueden omitir ventanas creadas por el asistente, canales calculados y validación del remitente; Las direcciones estáticas no prueban el tráfico. REA-Bench mide la concordancia con los informes App X-Ray en lugar de la verdad sobre el terreno independiente y no demuestra en sí misma una ventaja del agente habilitado por herramientas. Este catálogo no volvió a ejecutar análisis.

## que aprender

Vincular las afirmaciones del informe sobre la fuente, conservar las confirmaciones y fechas del escaneo, y tratar las reglas estáticas y las respuestas de los puntos de referencia generados como falibles.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [Proyecto / demostración](https://github.com/Eliot5566/app-xray)
- [Fuente adicional 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [Fuente adicional 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [Fuente adicional 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [Fuente adicional 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
