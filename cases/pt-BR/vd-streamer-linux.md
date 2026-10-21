# Virtual Desktop Streamer: uma porta Linux por meio de uma camada de plataforma de substituição

[← Voltar para todos os casos](../../README.pt-BR.md) · Hardware e compatibilidade

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** cudanexus
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pacotes de instalação oficiais Virtual Desktop macOS e Windows

## A questão

Como a captura, a codificação, o áudio e a entrada podem ser transferidos para Linux, mantendo a biblioteca de protocolos?

## O que REA fez

O autor afirma que Claude Code e REA analisam ambos os pacotes. Uma biblioteca de protocolo macOS fornecida pelo leitor é reutilizada, enquanto a camada da plataforma Linux é reescrita.

## Resultados relatados pelo autor

A porta pública Linux inclui origem, instruções de construção e testes simulados de headset usando PipeWire/X11, GStreamer e uinput.

## Limitações e reivindicações não verificadas

Nenhum teste real de fone de ouvido, Wi-Fi ou codificador de GPU foi realizado. Os recursos de jogo SteamVR/OpenXR do streamer Windows não são suportados. A dependência da biblioteca de protocolos do fornecedor significa que esta não é uma reescrita de protocolo totalmente independente.

## O que aprender

Concentre o trabalho de compatibilidade nos limites da plataforma e diferencie os testes de dispositivos simulados da aceitação de hardware real.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [Projeto / demonstração](https://github.com/cudanexus/vd-streamer-linux)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
