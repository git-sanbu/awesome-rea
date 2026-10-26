# Open Scrantic: reconstruyendo el motor del salvapantallas Johnny Castaway en Rust

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** glauberlima
- **Fecha de revisión de la fuente:** 2026-10-26
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Travesuras de pantalla: Johnny Castaway (1992), Windows 3.1 SCRANTIC.SCR y archivos de recursos coincidentes

## la pregunta

¿Cómo se pueden ejecutar el intérprete de guiones, el cronograma de la historia y el comportamiento aleatorio de un salvapantallas 16-bit en sistemas modernos?

## Lo que hizo REA

El desarrollador acredita explícitamente a Claude Code con REA por desensamblar y descompilar SCRANTIC.SCR, recuperar formatos de recursos y semántica de scripts y producir la implementación y documentación de Rust.

## Resultados informados por el autor

El motor público Rust implementa la carga de recursos, la ejecución del script TTM/ADS, la progresión de la historia, el tiempo y el generador de números aleatorios original. ENGINE.md registra reglas recuperadas y diferencias deliberadas; el autor proporciona las rutas de lanzamiento Windows, macOS y Linux.

## Limitaciones y afirmaciones no verificadas

El motor requiere los archivos originales coincidentes del usuario y rechaza otras compilaciones ejecutables. Redibujado de fotograma completo, procesamiento y configuración opcionales image/audio difieren del original. El comportamiento y la equivalencia entre plataformas no se probaron aquí de forma independiente; No se encontraron sesiones REA sin procesar en los archivos revisados.

## que aprender

Mantenga la propiedad de los activos originales separada del código del motor, preserve las reglas aritméticas y de programación y documente las diferencias de compatibilidad deliberadas.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [Proyecto / demostración](https://github.com/glauberlima/open-scrantic)
- [Fuente adicional 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [Fuente adicional 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [Fuente adicional 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
