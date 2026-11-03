# REA Studio: presentación de herramientas MCP y Evidence grabado en una interfaz de usuario web local

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** theyishaik-lab
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** REA MCP descubrimiento de herramientas, formularios generados por esquemas y pequeños ejemplos de C, JavaScript y Python

## la pregunta

¿Cómo puede una interfaz local exponer las herramientas REA instaladas y hacer legibles sus pruebas y limitaciones?

## Lo que hizo REA

El backend lanza REA sobre stdio MCP, pagina tools/list y reenvía tools/call con señales de progreso y cancelación. Un script de grabación llama a REA en pequeños artefactos de muestra y guarda los resultados para una compilación de demostración estática separada.

## Resultados informados por el autor

La fuente pública incluye una interfaz web local, entradas basadas en esquemas, historial y una vista Evidence. Los artefactos de demostración registrados identifican REA 6.8.0 y proporcionan un catálogo de 229-tool más ejecuciones de muestra registradas de 9 (8 completado, error de 1); Las acciones de demostración no admitidas devuelven un error explícito no registrado.

## Limitaciones y afirmaciones no verificadas

La demostración alojada reproduce las respuestas guardadas y el progreso simulado; las cargas permanecen en el navegador y no se analizan. Las grabaciones son publicadas por el autor, no reposiciones independientes. El uso local puede invocar herramientas en archivos host y depende de los proveedores configurados; el catálogo no instaló ni probó el backend ni estableció una auditoría de seguridad.

## que aprender

Genere formularios a partir del esquema de la herramienta en vivo, mantenga las limitaciones en la vista de resultados y distinga claramente las demostraciones grabadas de los análisis en vivo.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [Proyecto / demostración](https://github.com/theyishaik-lab/rea-studio)
- [Fuente adicional 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [Fuente adicional 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [Fuente adicional 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [Fuente adicional 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
