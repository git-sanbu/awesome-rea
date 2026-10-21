# terminal-rs: um terminal de mercado informado pelas interações TradingView

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** michaelshimeles
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Comportamento de páginas do gráfico TradingView públicas e desconectadas

## A questão

Como a pesquisa de interação gráfica pode informar uma interface de mercado Rust independente?

## O que REA fez

O autor usa o modo site REA para captura passiva de páginas públicas. Descobertas, IDs Evidence e implicações de design são registradas em docs/analysis.

## Resultados relatados pelo autor

O projeto publica gráficos de GPU Rust, comandos de teclado, layouts de painel e integração de dados com uma interface estilo Bloomberg. Revisado em 2026-10-21: Indicadores integrados 151, testes de parâmetro e entrada de limite e um script de liberação universal macOS foram adicionados. Estas são alterações de implementação posteriores, não uma nova investigação REA.

## Limitações e reivindicações não verificadas

Apenas o comportamento visível na web foi estudado; esta não é uma recuperação do código-fonte TradingView ou Bloomberg. As fontes de dados, os limites de taxas e os termos de utilização dos dados impõem restrições distintas.

## O que aprender

As observações públicas da web podem fornecer informações de design rastreáveis sem serem descritas como descompilação binária.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> tradingview.com with REA in website mode

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [Projeto / demonstração](https://github.com/michaelshimeles/terminal-rs)
- [Fonte adicional 1](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
