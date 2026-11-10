# DESIGN:OS Studio: un estudio de escritorio independiente que lee y escribe archivos Figma .fig

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** jangtrinh
- **Fecha de revisión de la fuente:** 2026-11-10
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Figma Desktop y el formato de contenedor Figma .fig (fig-kiwi, escribe la versión 106)

## la pregunta

¿Cómo se pueden leer y escribir contenedores Figma .fig, y reimplementar el comportamiento del editor, en un estudio de escritorio independiente?

## Lo que hizo REA

Las especificaciones públicas del proyecto nombran morluto/rea 6.7.0 (`npx -y rea-agents`) como la herramienta para ingeniería inversa de los campos de Figma, y registran que ejecutó analyze-javascript-application sobre JavaScript extraído del editor. Las mismas notas indican que las rutas wasm no estaban disponibles (WABT y Ghidra no estaban instalados), por lo que el esquema kiwi se decodificó con un lector local. Los informes incluidos en el repositorio también contienen salida de la CLI de rea, incluidas ejecuciones completadas de inspect-macho y analyze-javascript-application, y algunas invocaciones fallidas. El README del producto no menciona REA.

## Resultados informados por el autor

DESIGN:OS Studio es un estudio de escritorio publicado (v0.7.11 revisada) que lee contenedores Figma .fig y escribe la versión 106, reimplementa el comportamiento del editor en local y ofrece un servidor MCP stdio de 39 herramientas más generación de código en varios lenguajes. El README informa más de 6.000 pruebas de CI en macOS y pruebas de ida y vuelta en designos-fig. El mantenedor afirma que se usó REA para este trabajo sobre Figma. Este catálogo revisó las especificaciones públicas, la salida de rea incluida y el README; no instaló el estudio ni volvió a ejecutar rea.

## Limitaciones y afirmaciones no verificadas

El README del producto no acredita REA. Algunas ejecuciones registradas de rea fallaron (comando desconocido o un proveedor de análisis nativo sin configurar). Los borradores de sesión completos citados en otras notas se guardan fuera del repositorio. El problema conocido #834 sigue abierto: al guardar un .fig se pierde el formato de listas numeradas y las pinturas heredadas o ligadas a variables en instancias se escriben como valores fijos. La licencia es PolyForm Shield 1.0.0 (código fuente disponible, no una licencia de código abierto). Este catálogo no reprodujo de forma independiente la compatibilidad .fig ni volvió a ejecutar la suite de pruebas.

## que aprender

El uso documentado de REA puede estar en las especificaciones del proyecto y en evidencia de CLI incluida aunque el README del producto no lo mencione, y un flujo mixto puede seguir necesitando un respaldo local cuando las rutas wasm de REA no están disponibles.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [Proyecto / demostración](https://github.com/jangtrinh/design-os-studio)
- [Fuente adicional 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [Fuente adicional 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [Fuente adicional 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
