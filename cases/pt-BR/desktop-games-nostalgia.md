# Desktop Games: portando um brinquedo de desktop para macOS e o navegador

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** ucodia
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Programa 2000 de jogos de mesa / redutores de estresse da Gemtree Windows

## A questão

Como o intérprete Peter, a árvore de programas, as interações e os ativos podem ser entendidos e portados?

## O que REA fez

O autor usa Claude Code, REA e Ghidra. REA investiga compactação de imagem, layout de recursos, tempo, movimento de sprite, som e coordenadas no intérprete; As ferramentas Python processam a árvore e os ativos do programa.

## Resultados relatados pelo autor

O repositório público inclui uma versão Swift macOS, versão do navegador, árvore de programa descompilada e scripts de processamento de ativos.

## Limitações e reivindicações não verificadas

O autor usa cores verdadeiras em vez da paleta original e altera a renderização das sombras. A inclusão não verifica a compatibilidade completa ou os direitos de redistribuição de ativos de terceiros.

## O que aprender

Para software com intérprete incorporado, distinga o intérprete, a árvore do programa e os ativos.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> The interpreter was decompiled with REA

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [Projeto / demonstração](https://github.com/ucodia/desktop-games-nostalgia)
- [Fonte adicional 1](https://ucodia.github.io/desktop-games-nostalgia/)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
