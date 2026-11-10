# DESIGN:OS Studio: um estúdio para desktop independente que lê e escreve arquivos Figma .fig

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** jangtrinh
- **Data de revisão da fonte:** 2026-11-10
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Figma Desktop e o formato de contêiner Figma .fig (fig-kiwi, grava a versão 106)

## A questão

Como ler e gravar contêineres Figma .fig, e reimplementar o comportamento do editor, em um estúdio para desktop independente?

## O que REA fez

As especificações públicas do projeto nomeiam morluto/rea 6.7.0 (`npx -y rea-agents`) como a ferramenta para engenharia reversa dos campos do Figma e registram que ela executou analyze-javascript-application no JavaScript extraído do editor. As mesmas notas dizem que as rotas wasm estavam indisponíveis (WABT e Ghidra não estavam instalados), então o esquema kiwi foi decodificado com um leitor local. Relatórios versionados também contêm saída da CLI do rea, incluindo execuções concluídas de inspect-macho e analyze-javascript-application, e algumas invocações com falha. O README do produto não menciona REA.

## Resultados relatados pelo autor

DESIGN:OS Studio é um estúdio para desktop publicado (v0.7.11 revisada) que lê contêineres Figma .fig e grava a versão 106, reimplementa o comportamento do editor localmente e inclui um servidor MCP stdio com 39 ferramentas e geração de código em vários idiomas. O README relata mais de 6.000 testes de CI no macOS e testes de ida e volta do designos-fig. O mantenedor afirma que a REA foi usada neste trabalho sobre o Figma. Este catálogo revisou as especificações públicas, a saída do rea versionada e o README; não instalou o estúdio nem reexecutou o rea.

## Limitações e reivindicações não verificadas

O README do produto não credita a REA. Algumas execuções registradas do rea falharam (comando desconhecido ou um provedor de análise nativa não configurado). Rascunhos completos de sessão citados em outras notas ficam fora do repositório. O problema conhecido #834 permanece aberto: salvar um .fig perde a formatação de listas numeradas e grava como valores fixos pinturas herdadas ou ligadas a variáveis em instâncias. A licença é PolyForm Shield 1.0.0 (código-fonte disponível, não uma licença de código aberto). Este catálogo não reproduziu de forma independente a compatibilidade .fig nem reexecutou a suíte de testes.

## O que aprender

O uso documentado da REA pode estar nas especificações do projeto e em evidências de CLI versionadas mesmo quando o README do produto omite isso, e um fluxo misto ainda pode precisar de um recuo local quando as rotas wasm da REA estão indisponíveis.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [Projeto / demonstração](https://github.com/jangtrinh/design-os-studio)
- [Fonte adicional 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [Fonte adicional 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [Fonte adicional 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
