# REA in Spanish: reconstruyendo un validador de claves de autor

[← Volver a todos los casos](../../README.es.md) · Aprendizaje y reproducción

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** harkiventures
- **Fecha de revisión de la fuente:** 2026-10-26
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Licencia educativa de propiedad del autor. binario eliminado y su compilación de referencia simbolizada

## la pregunta

¿Cómo se puede reconstruir y comparar la regla de aceptación de un programa pequeño con el original?

## Lo que hizo REA

El autor informa que utilizó el pseudocódigo REA y Ghidra más bytes leídos en 0x102040 para recuperar la conversión de caracteres, la acumulación ponderada, la rotación y las comprobaciones de aceptación, y luego escribió un verificador de Python independiente.

## Resultados informados por el autor

La muestra gratuita en español incluye configuración de laboratorio y un caso trabajado, binarios de práctica simplificados y simbolizados, fuente C de referencia y un verificador Python reconstruido. El verificador enumera los ejemplos esperados 4; el autor informa comparar la reconstrucción con el binario real.

## Limitaciones y afirmaciones no verificadas

El ejercicio es el pequeño programa desprotegido del autor, no una elusión de una licencia comercial ni un resultado general para el software protegido. Los ejemplos de 4 son comprobaciones limitadas, no equivalencias exhaustivas. Este catálogo no ejecutó los archivos binarios ni volvió a ejecutar la comparación; el curso completo propuesto aún no se ha entregado.

## que aprender

Utilice un dispositivo propio con una fuente de referencia oculta, recupere una regla limitada y pruebe las entradas aceptadas y rechazadas antes de compararlas con la fuente.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [Proyecto / demostración](https://github.com/harkiventures/rea-muestra-gratuita)
- [Fuente adicional 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [Fuente adicional 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [Fuente adicional 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
