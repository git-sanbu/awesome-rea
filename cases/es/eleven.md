# Eleven: conectar un banco de trabajo de escritorio controlado por agente a REA

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Zfinix
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Análisis binario nativo a través de REA/Ghidra y un banco de trabajo de escritorio con agente ACP

## la pregunta

¿Cómo puede un agente inspeccionar un binario mientras la navegación y las anotaciones editables permanecen visibles en un banco de trabajo compartido?

## Lo que hizo REA

El motor inicia REA MCP y llama a las vistas open_binary y de procedimiento. Un proxy separado reenvía herramientas de análisis mientras retiene las herramientas de escritura de anotaciones REA, dirigiendo esos cambios a través de herramientas de proyecto Eleven con historial visible.

## Resultados informados por el autor

La salida pública incluye el origen de la aplicación de escritorio, la documentación de la herramienta MCP, anotaciones del proyecto y rutas de sugerencia de parches, además de una prueba de agente en vivo proporcionada por el autor que le pide a un agente que abra una función /bin/ls en la interfaz de usuario. README y el escaparate anterior describen el banco de trabajo en funcionamiento.

## Limitaciones y afirmaciones no verificadas

El catálogo inspeccionó las definiciones de fuente y prueba, no un recibo de prueba ejecutado o una versión instalada. La compatibilidad con la plataforma de escritorio, el comportamiento del depurador, la aceleración de la caché y la integridad del análisis binario no se verificaron de forma independiente. Rizin, jadx y otras rutas son motores separados; sus resultados no se atribuyen a REA. Los tiempos de exhibición ascendentes son observaciones del autor, no puntos de referencia del catálogo.

## que aprender

Separe el paso de análisis de las ediciones del proyecto, mantenga visible la autoría y el historial de deshacer, y distinga las pruebas ejecutables de los resultados de las pruebas observadas.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [Proyecto / demostración](https://github.com/Zfinix/eleven)
- [Fuente adicional 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [Fuente adicional 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [Fuente adicional 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [Fuente adicional 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
