# rea-lab: medición de la contribución del REA a la ingeniería inversa del Windows

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** pablodiazjorge
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Pequeños desafíos Windows, binarios más grandes con señuelos y programas reales de código abierto

## la pregunta

¿Cómo afecta la adición de REA a la tasa de éxito, el tiempo y el costo de un agente?

## Lo que hizo REA

El autor configura Windows y Ghidra, ejecuta estudios controlados prerregistrados, verifica el Evidence citado y publica reseñas, entornos y correcciones ascendentes.

## Resultados informados por el autor

Cinco estudios preinscritos son públicos. Estudie 1: 28/30 en ambos grupos. Estudio 2: 11/24 sin REA versus 4/24 con REA. Estudio 3: 71/72 versus 68/72. El estudio 4 utiliza DeepSeek: 20/20 versus 19/20, sin que se detecte ninguna diferencia significativa. En el estudio 5, la habilidad revisada cuesta 14% más que la habilidad oficial (p=0.012), sin un cambio significativo en la precisión. La nota de retención de 2026-10-21 Evidence distingue las ejecuciones de estudio de 482, 336 que llamó a REA y reejecuciones de reinicio interrumpido de 3: ninguna de estas ejecuciones de llamada de 339 REA retuvo proactivamente Evidence; el calificador lo reconstruyó a partir de los registros del cliente.

## Limitaciones y afirmaciones no verificadas

Todos los estudios pin REA 6.4.0, Claude Code 2.1.296 y sus respectivos modelos, tareas y permisos; Los resultados no se pueden generalizar a las versiones actuales ni a toda la ingeniería inversa. Las diferencias en las tasas de éxito de los estudios 2 y 3 no fueron estadísticamente significativas según las pruebas del autor. La certificación del estudio 3 Evidence se corrigió de 142/144 a 144/144 después de una corrección en la niveladora; Los recuentos de resolución se mantuvieron sin cambios. El estudio 4 tiene solo pares 20. El estudio 5 compara el texto de habilidades inyectado en las indicaciones, no la carga automática del cliente. Este catálogo no volvió a ejecutar los estudios. El recuento de 339 son ejecuciones de llamadas de REA, no la muestra total del estudio, y no implica falta de contenido de Evidence ni certificación fallida.

## que aprender

Evalúe juntos los controles, la distribución de tareas, el costo y la calidad de la evidencia.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [Proyecto / demostración](https://github.com/pablodiazjorge/rea-lab)
- [Fuente adicional 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [Fuente adicional 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [Fuente adicional 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [Fuente adicional 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
