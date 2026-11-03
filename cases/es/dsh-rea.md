# dsh-rea: preservando contratos MCP mientras revela herramientas bajo demanda

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** JeremyWangCY
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** REA 6.8.0 MCP herramientas, indicaciones y habilidades dentro de DeepSeek Harness

## la pregunta

¿Cómo puede un adaptador preservar los contratos de herramientas ascendentes y al mismo tiempo mantener los esquemas no utilizados fuera de cada solicitud de agente?

## Lo que hizo REA

El adaptador lanza el ejecutable MCP ascendente fijado a través de un puente DSH, comparte su conexión para indicaciones y finalizaciones, y utiliza máscaras de herramientas por agente. El comando /rea revela el catálogo y la habilidad; /rea off los esconde de nuevo.

## Resultados informados por el autor

El autor publica código de adaptador, mediciones de esquema y un informe diferencial acotado que enumera las herramientas 229 y comparaciones de llamadas deterministas en modos nativo y PTC. El catálogo de entrada de modelo medido es 273, 264 bytes; Esta es una medición de la carga útil del esquema, no un token LLM ni un punto de referencia de costos.

## Limitaciones y afirmaciones no verificadas

El repositorio contiene un informe de comparación aprobado y documentación separada de un error Windows integrity_mismatch en el comando de verificación. Los mantenedores del catálogo no han confirmado una verificación exitosa en Windows. Hacer coincidir las definiciones de herramientas no significa que se ejecutaron todas las herramientas. La comparación informada no cubre los motores nativos, la captura en vivo ni todos los proveedores, y no establece respuestas de modelos de lenguaje equivalentes. Los mantenedores del catálogo no ejecutaron estas pruebas.

## que aprender

Compare esquemas y complete sobres de resultados deterministas, conserve registros de pases históricos y divulgue las fallas actuales por separado.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> REA is an exact npm dependency, not a reimplementation.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [Proyecto / demostración](https://github.com/JeremyWangCY/dsh-rea)
- [Fuente adicional 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [Fuente adicional 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [Fuente adicional 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [Fuente adicional 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [Fuente adicional 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
