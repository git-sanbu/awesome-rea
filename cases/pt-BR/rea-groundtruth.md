# rea-groundtruth: verificando pontos cegos da análise em relação a fontes conhecidas

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../rea-groundtruth.md) · [简体中文](../zh-CN/rea-groundtruth.md) · [繁體中文](../zh-TW/rea-groundtruth.md) · [日本語](../ja/rea-groundtruth.md) · [한국어](../ko/rea-groundtruth.md) · [Español](../es/rea-groundtruth.md) · [Français](../fr/rea-groundtruth.md) · [Deutsch](../de/rea-groundtruth.md) · [Português (Brasil)](../pt-BR/rea-groundtruth.md) · [Русский](../ru/rea-groundtruth.md) · [العربية](../ar/rea-groundtruth.md) · [हिन्दी](../hi/rea-groundtruth.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** UnknownHacker1
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** MongoDB Compass 1.43.4 e luminárias manuscritas Electron

## A questão

Um relatório de zero chamadas ou janelas IPC reflete o aplicativo ou uma lacuna de análise?

## O que REA fez

REA 6.4.0 analisa um aplicativo com origem conhecida. Exemplos mínimos com diferentes wrappers de webpack fornecem controles.

## Resultados relatados pelo autor

O autor publica uma reprodução de um comando de APIs Electron perdidas em um formulário webpack específico e registra como uma incompatibilidade de integridade ASAR pós-assinatura foi tratada.

## Limitações e reivindicações não verificadas

O relatório refere-se a compilações específicas em Windows 11 e REA 6.4.0. Versões posteriores podem corrigir o problema; este catálogo não afirma que o bug histórico persista na versão mais recente.

## O que aprender

Achados zero não estabelecem ausência. Luminárias com fonte conhecida podem testar a cobertura do analisador.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [Projeto / demonstração](https://github.com/UnknownHacker1/rea-groundtruth)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
