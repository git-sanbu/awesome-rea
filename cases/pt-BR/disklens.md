# DiskLens: verificando algoritmos de varredura de disco e mapa de árvore em um binário lançado

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** KarlssonChristoffer
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** WinDirStat 2.5.0 Windows executável e fonte pública

## A questão

Como a verificação de disco, mapas de árvore e detecção de duplicatas podem ser verificadas antes de construir uma nova interface?

## O que REA fez

Claude Code usa REA e Ghidra no WinDirStat.exe instalado para confirmar a enumeração de diretório, o leitor NTFS MFT, padrões de mapa de árvore e desduplicação SHA-512. O autor afirma que os detalhes do algoritmo vieram principalmente da fonte de leitura; REA verificou o binário lançado e orientou a investigação.

## Resultados relatados pelo autor

O projeto publica um mecanismo Rust, interface Tauri/Svelte e IDs REA Evidence. O autor relata testes de mecanismo 24 e uma verificação scan/treemap de aproximadamente 1.3 milhões de arquivos em uma máquina.

## Limitações e reivindicações não verificadas

O autor explicitamente não revisou o código gerado. Várias operações de arquivos e integrações de sistemas não possuem verificações de UI reais. A varredura MFT rápida está ausente e os links físicos são contados duas vezes. Alguns algoritmos portam diretamente a fonte GPL, portanto, esta não é uma reconstrução simples de software de código fechado. O tempo de uma única máquina não é uma comparação controlada de desempenho.

## O que aprender

Atribuir observações binárias e leitura de fonte separadamente e indicar quais operações de arquivo foram realmente testadas.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [Projeto / demonstração](https://github.com/KarlssonChristoffer/DiskLens)
- [Fonte adicional 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
