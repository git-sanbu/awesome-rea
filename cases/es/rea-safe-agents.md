# REA Safe Agent: intermediación de análisis estático entre dos procesos contenidos

[← Volver a todos los casos](../../README.es.md) · Herramientas e integraciones

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** dagoSte
- **Fecha de revisión de la fuente:** 2026-10-26
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Integración REA 6.7.0 con Ghidra 12.1.4 y JADX; Accesorios ELF benignos y un APK F-Droid

## la pregunta

¿Cómo puede un agente consultar REA mientras el acceso a las entradas, las herramientas del host y las solicitudes de modelo permanece limitado?

## Lo que hizo REA

La implementación ejecuta REA y su agente receptor en contenedores Docker separados y retransmite llamadas MCP permitidas a través de un controlador de host. Las instantáneas de entrada congeladas, las comprobaciones tool/path y los resultados acotados restringen lo que cruza el límite; REA proporciona el análisis estático real.

## Resultados informados por el autor

Los recibos de macOS ARM64 con fecha informan de 11 llamadas exitosas de REA con Claude y 9 con Codex en el mismo ELF benigno, verificando su hash, las constantes de FNV-1a y la cadena decodificada con una fuente conocida. El registro de validación informa por separado 39 llamadas exitosas de REA para un análisis en vivo de F-Droid 2.0.2.

## Limitaciones y afirmaciones no verificadas

Son registros publicados por el autor, no una certificación de seguridad independiente. El análisis estático no ejecuta el objetivo. El aislamiento depende de Docker y del controlador anfitrión; el texto analizado llega al servicio del modelo y la integración de Docker en Windows es experimental. Persisten hallazgos de vulnerabilidades en las imágenes completas, aunque la auditoría de npm por separado no detecte problemas.

## que aprender

Separe pruebas de políticas simuladas, llamadas a herramientas reales y ejecuciones de modelos en vivo; adjunte cada reclamo a un destino, host y recibo fechados.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> "rea_version": "6.7.0",

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [Proyecto / demostración](https://github.com/dagoSte/rea-safe-agents)
- [Fuente adicional 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [Fuente adicional 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [Fuente adicional 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [Fuente adicional 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
