# Sketch (formerly paper-rs): uma tela infinita Rust inspirada em Paper

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** michaelshimeles
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Comportamento do aplicativo de design de desktop Paper

## A questão

Como as interações entre tela, layout e editor podem informar uma ferramenta de design independente?

## O que REA fez

O autor afirma que REA e Claude Code foram usados para investigar o comportamento do desktop Paper antes de implementar um aplicativo Rust separado com wgpu, winit e egui.

## Resultados relatados pelo autor

O projeto publica telas infinitas, páginas, layouts, edição vetorial, quadro branco e interfaces MCP, com testes e diferenças de recursos. Revisado em 2026-10-21: agora é denominado Sketch, com o executável sketch-rs, migração de primeira inicialização do antigo diretório do projeto e compatibilidade com arquivos antigos e variáveis ​​de ambiente. Resta um caso.

## Limitações e reivindicações não verificadas

O autor explicitamente não o lançou em hardware macOS real. Alguns recursos são aproximados ou ausentes. A inclusão depende de atribuição pública do autor, não sendo verificada equivalência a Paper.

## O que aprender

Aprenda contratos de comportamento e interação enquanto estabelece os limites da implementação independente.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> by studying the behavior of the Paper desktop app with REA and Claude Code

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [Projeto / demonstração](https://github.com/michaelshimeles/paper-rs)
- [Fonte adicional 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
