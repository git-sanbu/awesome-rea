# Sketch (formerly paper-rs): un lienzo infinito Rust inspirado en Paper

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** michaelshimeles
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Comportamiento de la aplicación de diseño de escritorio Paper

## la pregunta

¿Cómo pueden las interacciones entre el lienzo, el diseño y el editor informar a una herramienta de diseño independiente?

## Lo que hizo REA

El autor afirma que REA y Claude Code se utilizaron para investigar el comportamiento del escritorio de Paper antes de implementar una aplicación Rust separada con wgpu, winit y egui.

## Resultados informados por el autor

El proyecto publica un lienzo infinito, páginas, diseños, edición de vectores, pizarras e interfaces MCP, con pruebas y diferencias de funciones. Revisado en 2026-10-21:, ahora se llama Sketch, con el ejecutable sketch-rs, migración de primer inicio del antiguo directorio del proyecto y compatibilidad con archivos antiguos y variables de entorno. Sigue siendo un caso.

## Limitaciones y afirmaciones no verificadas

El autor explícitamente no lo había iniciado en hardware macOS real. Algunas características son aproximadas o faltan. La inclusión se basa en la atribución pública del autor, no en una equivalencia verificada con Paper.

## que aprender

Aprenda los contratos de comportamiento e interacción mientras establece los límites de la implementación independiente.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> by studying the behavior of the Paper desktop app with REA and Claude Code

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [Proyecto / demostración](https://github.com/michaelshimeles/paper-rs)
- [Fuente adicional 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
