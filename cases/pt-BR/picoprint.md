# PicoPrint: conectando uma impressora térmica móvel à impressão Windows

[← Voltar para todos os casos](../../README.pt-BR.md) · Hardware e compatibilidade

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** bigtower17
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Impressora térmica Bluetooth LX-D02 e aplicativo Funny Print React Native Android

## A questão

Quando um driver se conecta, mas não imprime, como podem ser encontradas diferenças de handshake?

## O que REA fez

Na discussão REA #4152, o autor diz que REA 6.5.0 forneceu ao médico, verificações de dispositivos ADB e o ponto de entrada da investigação Android. A descompilação real do bytecode Hermes usou hermes-dec; a inferência de protocolo e a comparação de tráfego não eram trabalhos exclusivos do REA.

## Resultados relatados pelo autor

O autor publica um serviço de impressão Go baseado em termoimpressão e notas de protocolo, relatando a impressão Ctrl + P de texto, imagens e documentos em Windows 11 com um LX-D02 real e uma correção de handshake upstream.

## Limitações e reivindicações não verificadas

Projeto inicial sem instalador com um clique, status da bandeja ou reconexão automática. A discussão observa explicitamente que REA não cobriu a etapa de análise Hermes deste alvo no momento. Um dispositivo e sistema operacional não estabelecem compatibilidade com todas as versões de firmware ou Windows.

## O que aprender

Distinga a conexão da impressão e registre a etapa exata realizada por cada ferramenta.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> used to analyse the Android app.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [Projeto / demonstração](https://github.com/bigtower17/picoprint)
- [Fonte adicional 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [Fonte adicional 2](https://github.com/morluto/rea/discussions/4152)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
