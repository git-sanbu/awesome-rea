# iCSee localmod: seguimiento de comandos de cámara conservando los controladores originales

[← Volver a todos los casos](../../README.es.md) · Hardware y compatibilidad

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Vittuu
- **Fecha de revisión de la fuente:** 2026-11-03
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Una cámara XM530V200 / IPG-X2-WQ-BL y su aplicación original Sofia

## la pregunta

¿Cómo puede la investigación de comandos nativos habilitar controles de cámara locales y al mismo tiempo preservar los controladores en funcionamiento y la grabación SD?

## Lo que hizo REA

REA 6.8.0 y Ghidra rastrearon cadenas de comandos Sofia y referencias cruzadas a controladores de iluminación y PTZ. El flujo de trabajo publicado registra anclajes específicos de binarios; las respuestas del protocolo y el comportamiento físico se validaron por separado.

## Resultados informados por el autor

El autor publica un C panel/API local, fuente y ejemplos de Home Assistant. El propietario informa comprobaciones físicas de PTZ y LED blanco, audio/video decodificado, persistencia de arranque y grabación nativa continua de WFS después de reinicios independientes. Un registro público separado de backend simulado enumera las pruebas aprobadas de 22 y dice explícitamente hardware_tested=false.

## Limitaciones y afirmaciones no verificadas

El firmware completo, la descompilación y los paquetes privados Evidence no se publican. Los resultados del hardware son informes del propietario de una unidad; Las pruebas simuladas no validan la instalación del firmware ni el comportamiento físico. Se trata de una extensión del firmware original, sin imagen universal, intercomunicador completo ni mejora de la latencia medida. El protector de eliminación de rutas no es un firewall; este catálogo no probó un dispositivo.

## que aprender

Rastree un comando limitado, verifique las respuestas autenticadas y luego verifique la acción física y la persistencia como pasos separados.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [Proyecto / demostración](https://github.com/Vittuu/icsee-localmod)
- [Fuente adicional 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [Fuente adicional 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [Fuente adicional 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
