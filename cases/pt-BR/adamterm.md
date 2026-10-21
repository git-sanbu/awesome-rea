# AdamTerm: investigando o shell do Ghostty e construindo um terminal

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** AdamLinCodes
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pacote de aplicativos Ghostty 1.3.1 macOS

## A questão

Como são divididos o núcleo do terminal, janelas nativas, menus e serviços?

## O que REA fez

REA inspeciona Mach-O, plists, assinaturas, metadados Objective-C, Interface Builder e resolução de biblioteca dinâmica. Este caminho não usou Hopper ou Ghidra.

## Resultados relatados pelo autor

O autor constrói um terminal macOS menor com AppKit, SwiftTerm e guias nativas e fornece comandos de autoverificação.

## Limitações e reivindicações não verificadas

Ele usa SwiftTerm em vez de reconstruir o núcleo Zig do Ghostty. Painéis divididos, barra de pesquisa, arquivos de configuração e terminal rápido não são implementados.

## O que aprender

Os metadados do pacote e os recursos da interface podem responder a algumas questões de arquitetura antes da descompilação profunda.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [Projeto / demonstração](https://github.com/AdamLinCodes/AdamTerm)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
