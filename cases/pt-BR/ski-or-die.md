# Ski or Die: reconstruindo Snowball War em Rust

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** tuunanet
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Minijogo Snowball War da edição DOS de Ski or Die

## A questão

Como as regras de lançamento, colisão, desova e pontuação podem ser recuperadas de um jogo DOS?

## O que REA fez

REA CLI e o adaptador Ghidra 16-bit inspecionam uma imagem de carregamento MZ descompactada. As sementes de código declaradas pelo chamador e as consultas trace/function/search investigam os módulos.

## Resultados relatados pelo autor

O autor publica uma reconstrução Rust + SDL2 jogável, especificações de comportamento, notas de engenharia reversa e ferramentas de extração de ativos.

## Limitações e reivindicações não verificadas

Apenas Snowball War é reconstruído. Não há reprodução de áudio ou comparação lado a lado com o original do DOS em execução; a taxa de quadros e o comportamento de PRNG são aproximados. Os ativos devem vir da cópia do jogo do próprio leitor.

## O que aprender

Escreva especificações de comportamento baseadas em endereço antes de reescrever e rotule cada aproximação.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Every analysis call therefore ran through the REA CLI

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [Projeto / demonstração](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
