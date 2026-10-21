# Open-source REA Lab: fijación de un artefacto npm y análisis de su segmento de entrada

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** martinlofranodeoliveira
- **Fecha de revisión de la fuente:** 2026-10-19
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Reactivos oficiales de npm 6.4.0 package.json y scripts/rea.mjs

## la pregunta

¿Cómo se puede identificar un artefacto de liberación antes de responder una pregunta de un archivo de entrada acotado?

## Lo que hizo REA

Un auditor independiente de Python verifica primero la estructura del archivo y los hashes. REA analiza estáticamente dos archivos sin cambios extraídos del paquete verificado. La semántica de rama de entrada también utiliza comprobaciones de sintaxis manuales; Las conclusiones del auditor y del manual no son salida REA.

## Resultados informados por el autor

El autor publica resúmenes fijados, JSON de auditoría, resúmenes Evidence desinfectados y scripts de reproducción. El segmento informa el archivo 1 analizado JavaScript, los nodos AST 469, los hallazgos de 14 y cero fallas de análisis, al tiempo que señala que el análisis del paquete completo se interrumpió durante la expansión semántica.

## Limitaciones y afirmaciones no verificadas

Los hallazgos de 14 no son un recuento de vulnerabilidades. El segmento conserva incógnitas semánticas 110 y carece de implementaciones dist, por lo que no puede establecer la seguridad del paquete completo ni la corrección del tiempo de ejecución. Un resumen desinfectado no se puede reproducir canónico Evidence; La cobertura del paquete completo es parcial. Este catálogo no lo volvió a ejecutar.

## que aprender

Limite la pregunta y el aporte conservando las interrupciones y las incógnitas. Las comprobaciones estructurales, la identidad de los bytes y la seguridad del tiempo de ejecución son conclusiones diferentes.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Can REA statically parse the actual shipped dispatcher?

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [Proyecto / demostración](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [Fuente adicional 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [Fuente adicional 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
