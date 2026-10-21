# ReaFuse: combinando duas bibliotecas após investigar seu comportamento

[← Voltar para todos os casos](../../README.pt-BR.md) · Aprendizagem e reprodução

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** sickpyramid
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Dois pares de bibliotecas JavaScript de código aberto: ms + pretty-bytes e dequal + klona

## A questão

Como podem dois projetos tornar-se especificações de comportamento e depois uma nova ferramenta combinada?

## O que REA fez

REA 6.4.0 JavaScript a análise estática lê as duas entradas. Arquivos e testes README ajudam a produzir especificações de comportamento; o modelo propõe combinações separadamente, escreve contratos de aceitação e novo código e, em seguida, executa os testes do autor e verificações de similaridade.

## Resultados relatados pelo autor

O autor publica ratewise (taxa de transferência e ETA) e objdelta (diff/patch estrutural), relatórios e Evidence. Os resultados do contrato relatados são 18/18 e 17/17, além de testes 7/7 e 6/6 para as novas ferramentas. Ambos os exemplos contam como um caso de projeto.

## Limitações e reivindicações não verificadas

Apenas dois exemplos públicos de JavaScript foram revisados; o projeto é v0.1 alfa. O mesmo fluxo de trabalho produz especificações e implementações. O rótulo de sala limpa do autor não é uma conclusão jurídica independente. Varreduras de similaridade e testes de aprovação não estabelecem originalidade geral ou equivalência completa. Este catálogo não os reexecutou.

## O que aprender

Conecte a análise à implementação por meio de especificações de comportamento, mapeando testes para o comportamento de entrada ou para a nova combinação.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Every donor goes through REA's static JavaScript analysis

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Projeto / demonstração](https://github.com/sickpyramid/ReaFuse)
- [Fonte adicional 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Fonte adicional 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
