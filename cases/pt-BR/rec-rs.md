# rec-rs: um gravador macOS nativo inspirado em OBS

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../rec-rs.md) · [简体中文](../zh-CN/rec-rs.md) · [繁體中文](../zh-TW/rec-rs.md) · [日本語](../ja/rec-rs.md) · [한국어](../ko/rec-rs.md) · [Español](../es/rec-rs.md) · [Français](../fr/rec-rs.md) · [Deutsch](../de/rec-rs.md) · [Português (Brasil)](../pt-BR/rec-rs.md) · [Русский](../ru/rec-rs.md) · [العربية](../ar/rec-rs.md) · [हिन्दी](../hi/rec-rs.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** michaelshimeles
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Arquitetura e comportamento do OBS Studio

## A questão

Como construir uma tela focada, uma câmera e um gravador de áudio?

## O que REA fez

O autor afirma que REA e Claude Code foram usados para investigar OBS antes de construir uma ferramenta independente com Rust e estruturas Apple.

## Resultados relatados pelo autor

O projeto publica gravação screen/camera, mixagem de áudio, buffer de repetição e recursos de streaming. O autor relata desenvolvimento e testes em um Apple Silicon Mac. O 2026-10-21 README adiciona lançamentos universais Apple Silicon + Intel, atualizações signing/notarization e Sparkle.

## Limitações e reivindicações não verificadas

Requer macOS 15+. O hardware relatado continua sendo um Apple Silicon M4 Pro; as instruções de download e construção da Intel não verificam a gravação em um Mac Intel real. Esta é uma implementação com escopo definido, não uma substituição completa do OBS ou reconstrução de plataforma cruzada. Este catálogo não foi executado novamente.

## O que aprender

Extraia a arquitetura necessária para um caso de uso específico e construa um produto menor em torno dela.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> by studying its architecture and behavior with REA and Claude Code

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [Projeto / demonstração](https://github.com/michaelshimeles/rec-rs)
- [Fonte adicional 1](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
