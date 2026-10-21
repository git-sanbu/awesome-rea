# Aegis: encontrar el algoritmo Android TOTP

[← Volver a todos los casos](../../README.es.md) · Vitrinas oficiales

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Equipo de exhibición REA; autores originales del proyecto acreditados en las fuentes
- **Fecha de revisión de la fuente:** 2026-10-16
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Autenticador Aegis 3.4.3 Android APK

## la pregunta

¿Cómo se calcula un código de inicio de sesión de seis dígitos cada 30 segundos?

## Lo que hizo REA

El análisis REA Android localiza los métodos de generación, visualización y copia. El autor lee el cálculo HOTP/TOTP y crea una demostración de navegador con un reloj ajustable.

## Resultados informados por el autor

La página oficial reporta casos de 133 comparando el método extraído con una implementación independiente, más los seis vectores de referencia SHA-1 del RFC 6238..

## Limitaciones y afirmaciones no verificadas

El alcance es la generación de código, no la reconstrucción de la bóveda, el almacenamiento cifrado o la aplicación completa. Este catálogo no volvió a ejecutar los casos.

## que aprender

Elija una característica pequeña que pueda verificarse de forma independiente y limite su implementación con vectores de prueba estándar públicos.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Inspected with REA 6.1.0 on 9 October 2026.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [Proyecto / demostración](https://rea.tools/showcase/aegis/)
- [Fuente adicional 1](https://github.com/beemdevelopment/Aegis)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
