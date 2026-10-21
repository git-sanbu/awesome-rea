# Co-op Anything: investigando puntos de entrada multijugador de campaña

[← Volver a todos los casos](../../README.es.md) · Juegos

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** cranebeaker and community contributors
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Construcciones Steam C&C3 Tiberium Wars / Kane’s Wrath y servidor World in Conflict client/dedicated

## la pregunta

¿Cómo puede una campaña conservar sus guiones y aspectos y al mismo tiempo permitir que se una un segundo jugador?

## Lo que hizo REA

Las notas C&C3 registran explícitamente las observaciones REA/Ghidra 12.1.4 del ejecutable TW 1.10, ubicando la función que elimina los lados de la campaña durante la preparación de multiplayer/skirmish. Las notas de World in Conflict documentan el análisis de selección de roles del servidor dedicado a través de REA/Ghidra, separando las restricciones de un solo jugador, el estado del servidor y las inferencias no verificadas. Otros scripts, depuradores y pruebas de tiempo de ejecución se encargan del trabajo posterior.

## Resultados informados por el autor

El proyecto publica MCP/habilidades, herramientas de prueba de sincronización e investigaciones específicas de juegos. Las notas C&C3 incluyen direcciones, formatos y experimentos. Para World in Conflict, el autor informa que un anfitrión de campaña LAN ejecuta misiones mientras un segundo cliente se une y ve unidades sincronizadas en vivo, pero no puede controlar sus propias unidades. Cada juego conserva su propio nivel de control de calidad.

## Limitaciones y afirmaciones no verificadas

La atribución de REA se limita a las investigaciones C&C3 y World in Conflict revisadas, no a todos los mods del directorio. El control del jugador dos, las zonas de despliegue, la visibilidad y el juego en Internet siguen sin terminar en World in Conflict; el informe verifica solo la LAN. C&C3 también tiene fallas de campaña y problemas de contexto sin resolver. Stars no demuestra una campaña completable. Este catálogo no ejecutó los juegos ni las pruebas.

## que aprender

Valide la conexión del cliente, la visibilidad sincronizada y el modo cooperativo realmente jugable como resultados separados.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [Proyecto / demostración](https://github.com/cranebeaker/coop-anything)
- [Fuente adicional 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [Fuente adicional 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
