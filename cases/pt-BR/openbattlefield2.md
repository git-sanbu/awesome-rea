# OpenBattlefield2: Evidence de nível de função para um cliente Battlefield 2

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Moxnatiy
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Battlefield 2 1.5 Refractor 2 cliente, renderizando DLLs e dados originais do jogo

## A questão

Como a pesquisa de mira, HUD e comportamento binário pode informar uma implementação de mecanismo rastreável?

## O que REA fez

REA 4.1.0 e Ghidra 12.1.4 leem arquivos 32-bit PE e coletam dossiês Evidence de função completa. Consultas diretas Ghidra, dados de jogos e símbolos de servidor complementam isso. As notas de mira incluem GuiIndex, endereços de acumulação de posição e deslocamento e IDs REA Evidence; REA trata apenas da fase de análise.

## Resultados relatados pelo autor

O projeto publica um mecanismo C++20, notas de função, testes e capturas de tela. O autor relata o carregamento de uma instalação BF2 1.5 própria, conectando-se a um servidor dedicado original e exibindo soldados e HUD. No modo conectado, a mira é renderizada, expande durante o movimento e contrai quando parada, com verificações como test_weapon_hud.

## Limitações e reivindicações não verificadas

O projeto de pesquisa ainda carece de disparo, condução de veículos e som. As atualizações de troca de armas, zoom e disparo da mira permanecem inacabadas; o modo hospedado não tem mira. A plataforma principal é macOS arm64 e a compilação Windows não foi executada. Os resultados envolvem múltiplas ferramentas e não podem ser todos atribuídos a REA. Este catálogo não foi executado novamente.

## O que aprender

Conecte endereços, Evidence, comandos de implementação e aceitação para um recurso observável.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Projeto / demonstração](https://github.com/Moxnatiy/OpenBattlefield2)
- [Fonte adicional 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Fonte adicional 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Fonte adicional 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
