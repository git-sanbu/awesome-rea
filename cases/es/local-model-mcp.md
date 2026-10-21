# Un modelo 27B local: una lista de herramientas MCP más pequeña permite el análisis de funciones

[← Volver a todos los casos](../../README.es.md) · Análisis y evaluación

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** CassieFox23
- **Fecha de revisión de la fuente:** 2026-10-19
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Comprobador de tokens C de construcción propia; Qwen3.8-27B, llama.cpp, OpenCode y REA MCP

## la pregunta

¿Cómo pueden encajar las descripciones y el análisis de las herramientas REA en el contexto 32K de un modelo local?

## Lo que hizo REA

El autor utiliza las familias de herramientas PR #3026 commit d993ffeb1 y Ghidra 12.1.4. y una lista de permitidos OpenCode exponen solo herramientas 10 REA; el modelo abre el objetivo, localiza y descompila la función y luego cierra la sesión.

## Resultados informados por el autor

El autor informa que todas las descripciones de herramientas 206 excedieron el contexto. Una configuración 62-tool realizó un reinicio de la GPU después de leer el mensaje. El mensaje 10-tool utilizó tokens 4, 407; tres ejecuciones encontraron la cadena objetivo y explicaron el verificador, cada una de las cuales tomó aproximadamente 80 segundos.

## Limitaciones y afirmaciones no verificadas

Las tres ejecuciones repiten un pequeño programa y un mensaje, no tres tareas independientes. No se comparó ningún otro modelo o cliente. Los resultados utilizan un compromiso de relaciones públicas histórico; Los recuentos de herramientas, los interruptores y los tiempos no son garantías para la versión actual.

## que aprender

Mida el costo del contexto del esquema antes de probar un conjunto mínimo de herramientas. La repetición de una tarea no establece la capacidad general.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> With the full tool list, nothing fits.

## Fuentes originales

- [Discusión pública / editable en el momento de la revisión](https://github.com/morluto/rea/discussions/3098)
- [Proyecto / demostración](https://github.com/morluto/rea/discussions/3098)
- [Fuente adicional 1](https://github.com/morluto/rea/pull/3026)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
