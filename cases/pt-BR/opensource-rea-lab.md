# Open-source REA Lab: fixando um artefato npm e analisando sua fatia de entrada

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** martinlofranodeoliveira
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Reagentes npm oficiais 6.4.0 package.json e scripts/rea.mjs

## A questão

Como um artefato de liberação pode ser identificado antes de responder a uma pergunta do arquivo de entrada limitado?

## O que REA fez

Um auditor Python independente verifica primeiro a estrutura do arquivo e os hashes. REA analisa estaticamente dois arquivos inalterados extraídos do pacote verificado. A semântica de ramo de entrada também usa verificações manuais de sintaxe; as conclusões do auditor e do manual não são saídas REA.

## Resultados relatados pelo autor

O autor publica resumos fixados, auditoria JSON, resumos Evidence higienizados e scripts de reprodução. A fatia relata o arquivo JavaScript analisado 1, nós AST 469, descobertas 14 e zero falhas de análise, enquanto observa que a análise do pacote completo foi interrompida durante a expansão semântica.

## Limitações e reivindicações não verificadas

As descobertas do 14 não são uma contagem de vulnerabilidades. A fatia retém incógnitas semânticas 110 e não possui implementações dist, portanto, não pode estabelecer segurança de pacote completo ou correção de tempo de execução. Um resumo limpo não é Evidence canônico reproduzível; a cobertura do pacote completo é parcial. Este catálogo não foi executado novamente.

## O que aprender

Limite a pergunta e a opinião, mantendo interrupções e incógnitas. Verificações estruturais, identidade de bytes e segurança em tempo de execução são conclusões diferentes.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Can REA statically parse the actual shipped dispatcher?

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [Projeto / demonstração](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [Fonte adicional 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [Fonte adicional 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
