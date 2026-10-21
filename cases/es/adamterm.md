# AdamTerm: investigando el caparazón de Ghostty y construyendo una terminal

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** AdamLinCodes
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Paquete de aplicaciones Ghostty 1.3.1 macOS

## la pregunta

¿Cómo se dividen el núcleo del terminal, las ventanas nativas, los menús y los servicios?

## Lo que hizo REA

REA inspecciona Mach-O, plists, firmas, metadatos de Objective-C, Interface Builder y resolución de biblioteca dinámica. Esta ruta no utilizó Hopper ni Ghidra.

## Resultados informados por el autor

El autor construye un terminal macOS más pequeño con AppKit, SwiftTerm y pestañas nativas, y proporciona comandos de autoverificación.

## Limitaciones y afirmaciones no verificadas

Utiliza SwiftTerm en lugar de reconstruir el núcleo Zig de Ghostty. No se implementan paneles divididos, una barra de búsqueda, archivos de configuración y un terminal rápido.

## que aprender

Los metadatos del paquete y los recursos de la interfaz pueden responder algunas preguntas de arquitectura antes de una descompilación profunda.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [Proyecto / demostración](https://github.com/AdamLinCodes/AdamTerm)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
