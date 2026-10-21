# Notion: rastreando a ponte da área de transferência de rich text Electron

[← Voltar para todos os casos](../../README.pt-BR.md) · Vitrines oficiais

[English](../notion-clipboard.md) · [简体中文](../zh-CN/notion-clipboard.md) · [繁體中文](../zh-TW/notion-clipboard.md) · [日本語](../ja/notion-clipboard.md) · [한국어](../ko/notion-clipboard.md) · [Español](../es/notion-clipboard.md) · [Français](../fr/notion-clipboard.md) · [Deutsch](../de/notion-clipboard.md) · [Português (Brasil)](../pt-BR/notion-clipboard.md) · [Русский](../ru/notion-clipboard.md) · [العربية](../ar/notion-clipboard.md) · [हिन्दी](../hi/notion-clipboard.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Equipe de vitrine REA; autores originais do projeto creditados em fontes
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Notion Desktop 7.6.1 app.asar e um módulo de editor da web armazenados em cache em um horário diferente

## A questão

Como um editor da web escreve rich text na área de transferência da área de trabalho?

## O que REA fez

REA analisa estaticamente o pré-carregamento da guia para localizar a ponte de contexto e a invocação de IPC. A leitura direta do código empacotado preenche a API da área de transferência, os canais e o receptor do processo principal.

## Resultados relatados pelo autor

A vitrine explica renderizador → pré-carregamento → IPC → principal no nível da fonte e demonstra marcadores de rich text e tabelas Markdown em uma análise de módulo independente.

## Limitações e reivindicações não verificadas

O gráfico REA não resolveu automaticamente a cadeia completa de canais da área de transferência. O editor web e o pacote desktop não correspondem aos exemplos de tempo de execução; o copy/paste real não foi capturado na mesma versão.

## O que aprender

Estruturas separadas retornadas por REA, conclusões da leitura manual de código e resultados de testes independentes.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> The published npm REA 4.1.0 package inspected the saved tab preload on 7 October 2026

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md)
- [Projeto / demonstração](https://rea.tools/showcase/notion/)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
