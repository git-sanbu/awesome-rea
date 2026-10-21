# sparkDash: integração da análise REA em um painel para vários dispositivos

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** MiaAI-Lab
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** REA CLI, arquivos de entrada e visualizações analysis/Evidence em dispositivos Linux remotos

## A questão

Como uma interface da web pode enviar trabalhos REA remotos de longa duração e carregar grandes resultados sob demanda?

## O que REA fez

Na verdade, o projeto chama o upstream REA por meio de seu CLI, fixando os reagentes 6.4.0 e seu arquivo de bloqueio. server/rea implementa trabalhos desanexados, uploads, status, resultados paginados e exportações. Os comandos conduzem inspecionar-análise-visualizar e comparar; o painel não implementa um descompilador.

## Resultados relatados pelo autor

A página Ferramentas → REA pública e a implementação do servidor suportam execução remota separada, logs, resumos, limitations/unknowns, visualizações sob demanda, exportações JSON e comparação Evidence. A fixação de versões, o gerenciamento de tarefas e os testes de upload são públicos. A inclusão diz respeito à integração implementada e não apenas às instruções de instalação.

## Limitações e reivindicações não verificadas

Este é um caso de integração, não uma reconstrução REA de sparkDash ou prova de que cada caminho de análise upstream passou na aceitação de hardware. Os dispositivos devem executar Linux, o recurso está desativado por padrão e os formatos de destino precisam de provedores adicionais. Os testes de gerenciador revisados ​​usam REA falso e um shell local, que não substituem Ghidra reais ou testes de dispositivos remotos. Este catálogo não o instalou nem o executou.

## O que aprender

Atribuir capacidades upstream separadamente do agendamento e do trabalho de UI, preservando evidências, limitações e falhas nos resultados exibidos.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> sparkDash uses the CLI only

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [Projeto / demonstração](https://github.com/MiaAI-Lab/sparkDash)
- [Fonte adicional 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [Fonte adicional 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [Fonte adicional 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [Fonte adicional 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
