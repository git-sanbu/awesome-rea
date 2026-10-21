# DX-Ball: reconstruindo o panorama do som estéreo

[← Voltar para todos os casos](../../README.pt-BR.md) · Vitrines oficiais

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Equipe de vitrine REA; autores originais do projeto creditados em fontes
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** DX-Ball 1.07 Windows i386 executável

## A questão

Como uma posição na tela se torna um valor de panorâmica sonora?

## O que REA fez

REA e Ghidra inspecionam a função de destino, chamadores, instruções e constantes. A reconstrução do mantenedor explica uma expressão x87 omitida pelo pseudocódigo descompilado.

## Resultados relatados pelo autor

A fonte registra casos diferenciais 3, 205 em relação à função x86 original e uma correspondência 63-byte completa após a recompilação com o compilador histórico.

## Limitações e reivindicações não verificadas

A validação cobre uma função e um ponto de verificação específico. A vitrine atualizada reutiliza registros anteriores de execução e compilação; não estabelece uma reconstrução completa do jogo.

## O que aprender

Quando o pseudocódigo estiver incompleto, siga os chamadores, assembly e constantes. Grave testes semânticos separadamente da correspondência de bytes.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [Projeto / demonstração](https://rea.tools/showcase/dx-ball/)
- [Fonte adicional 1](https://github.com/N0zoM1z0/dx-ball)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
