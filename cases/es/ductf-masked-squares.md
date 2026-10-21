# DownUnderCTF: recuperando ecuaciones de verificación de banderas

[← Volver a todos los casos](../../README.es.md) · Vitrinas oficiales

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Equipo de exhibición REA; autores originales del proyecto acreditados en las fuentes
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** DownUnderCTF 2023 Bandera de cuadros enmascarados, despojada Linux ELF

## la pregunta

¿Cómo se puede recuperar la validación de entrada sin símbolos ni código fuente?

## Lo que hizo REA

REA encuentra cadenas de mensajes y referencias cruzadas, analiza el verificador y lee máscaras y tablas de destino. Z3 resuelve las restricciones de 26; La captura del proceso verifica el binario de desafío original.

## Resultados informados por el autor

El registro oficial muestra ¡Correcto! /salga 0 para el candidato correcto e ¡Incorrecto! /salida 255 para un candidato incorrecto. Luego, la solución se compara con la fuente y los metadatos de los organizadores.

## Limitaciones y afirmaciones no verificadas

El solucionador asume un formato de bandera y un conjunto de caracteres comunes. Se agotó el tiempo de búsqueda de un segundo modelo, por lo que no se demostró la unicidad.

## que aprender

Después de que el razonamiento estático produzca un candidato, ejecute tanto las entradas correctas como las incorrectas a través del programa original.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [Proyecto / demostración](https://rea.tools/showcase/ctf/)
- [Fuente adicional 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
