# GunZRs: identificar un límite de empaquetado antes de reconstruir a partir de datos del juego

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** OpenRsG
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** GunZ: La instalación de Duel Steam, Gunz.exe y archivos .mrs

## la pregunta

¿Cómo puede continuar la reconstrucción cuando un ejecutable empaquetado impide la recuperación estática de la lógica del juego?

## Lo que hizo REA

REA y Ghidra investigan archivos nativos. El autor registra las secciones Themida, la entrada RVA y los resguardos de desempaquetado en Gunz.exe, con rutas locales REA Evidence. Luego, los formatos de juego se recuperan principalmente de la estructura de archivos de datos. Los scripts públicos también cubren consultas REA, accesorios ELF/PE generados, análisis, almacenamiento en caché y propagación de fallas.

## Resultados informados por el autor

El proyecto publica una reconstrucción Rust + Bevy, notas de formato, scripts de consulta y pruebas. El autor informa sobre la jugabilidad de Linux con una instalación propia, mapas, acciones, bots, una compilación de navegador y LAN. El análisis de la función ELF/PE generado y las comprobaciones de reproducción de instantáneas se registran por separado de la compatibilidad del juego.

## Limitaciones y afirmaciones no verificadas

El código del juego empaquetado no se recuperó estáticamente y se infiere cierto comportamiento y sincronización. El Evidence original sigue siendo local del autor; El material público incluye descripciones y guiones. Se informan las compilaciones de CI Windows/macOS, pero el autor no las reprodujo. Los recuentos de mapas tienen diferentes alcances de notas y no demuestran una compatibilidad total. Este catálogo no lo volvió a ejecutar.

## que aprender

Un fallo en el análisis aún puede establecer un límite útil: etiquetar los hechos binarios, las observaciones de archivos de datos y las inferencias por separado.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [Proyecto / demostración](https://github.com/OpenRsG/GunZRs)
- [Fuente adicional 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [Fuente adicional 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [Fuente adicional 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
