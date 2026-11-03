# dsh-rea: preservando contratos MCP enquanto revela ferramentas sob demanda

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** JeremyWangCY
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** REA 6.8.0 MCP ferramentas, instruções e habilidades dentro de DeepSeek Harness

## A questão

Como um adaptador pode preservar os contratos de ferramentas upstream e, ao mesmo tempo, manter os esquemas não utilizados fora de cada solicitação do agente?

## O que REA fez

O adaptador inicia o executável upstream MCP fixado por meio de uma ponte DSH, compartilha sua conexão para prompts e conclusões e usa máscaras de ferramentas por agente. O comando /rea revela o catálogo e a habilidade; /rea off os oculta novamente.

## Resultados relatados pelo autor

O autor publica código do adaptador, medidas de esquema e um relatório diferencial limitado listando ferramentas 229 e comparações de chamadas determinísticas nos modos nativo e PTC. O catálogo de entrada do modelo medido é 273,264 bytes; esta é uma medida de carga útil do esquema, não um token LLM ou referência de custo.

## Limitações e reivindicações não verificadas

O repositório contém um relatório de comparação de passagem e documentação separada de um erro Windows integrity_mismatch no comando de verificação. Os mantenedores do catálogo não confirmaram uma verificação bem-sucedida em Windows. A correspondência das definições de ferramentas não significa que todas as ferramentas foram executadas. A comparação relatada não abrange mecanismos nativos, captura ao vivo ou todos os provedores, e não estabelece respostas de modelo de linguagem equivalentes. Os mantenedores do catálogo não executaram esses testes.

## O que aprender

Compare esquemas e preencha envelopes de resultados determinísticos, retenha registros históricos de aprovação e divulgue as falhas atuais separadamente.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA is an exact npm dependency, not a reimplementation.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [Projeto / demonstração](https://github.com/JeremyWangCY/dsh-rea)
- [Fonte adicional 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [Fonte adicional 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [Fonte adicional 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [Fonte adicional 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [Fonte adicional 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
