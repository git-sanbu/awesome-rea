# Open Claude UI: documentar las interacciones del escritorio y publicar componentes de UI reutilizables

[← Volver a todos los casos](../../README.es.md) · Aplicaciones

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** Caho1
- **Fecha de revisión de la fuente:** 2026-10-26
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Paquete Claude Desktop macOS; reportado por el autor @ant/desktop 2.37337.1 interfaz de usuario web incluida y de referencia

## la pregunta

¿Cómo pueden las reglas de composición de entrada, desplazamiento e interacción del escritorio informar a los componentes de interfaz reutilizables?

## Lo que hizo REA

El autor atribuye la investigación de ASAR, JavaScript AST y CSS a REA 6.5.0.. El capítulo de interacción vincula extractos de código incluido con protecciones de entrada y reglas de desplazamiento; ejemplos separados de TypeScript implementan esos comportamientos.

## Resultados informados por el autor

El repositorio publica notas de diseño versionadas, un libro de historia de componentes, tokens CSS y ejemplos de implementación, incluidas comprobaciones de estado de composición y una protección Enter posterior a la composición en RichComposerWithMentions.tsx.

## Limitaciones y afirmaciones no verificadas

Esta es una biblioteca de interfaz de usuario y un desmontaje informado por el autor, no un cliente Claude completo ni un servicio modelo. No se encontraron registros de sesión REA sin procesar ni pruebas independientes de equivalencia visual o de comportamiento en los archivos revisados. Las afirmaciones de versión y fidelidad siguen siendo propiedad del autor.

## que aprender

Conecte una regla de interacción con la ubicación e implementación del paquete citado; distinguir la documentación de diseño de la equivalencia medida.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [Proyecto / demostración](https://github.com/Caho1/open-claude-ui)
- [Fuente adicional 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [Fuente adicional 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [Fuente adicional 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
