# bzip2: verificando descobertas binárias despojadas em relação a uma construção simbolizada

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** CassieFox23
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** bzip2 1.0.8 compilado com gcc -O2 e despojado, Linux x86-64

## A questão

Como uma função pode ser encontrada a partir de uma string de saída e seus relacionamentos de chamada verificados?

## O que REA fez

REA 6.4.0 e Ghidra localizam uma função de uma string, listam chamadores e destinatários e retornam Evidence rotulados como observed/derived. O autor verifica separadamente uma compilação não removida da mesma fonte com código-fonte, nm e objdump.

## Resultados relatados pelo autor

O autor relata ter descoberto a descompactação com o chamador 1 e os chamados 24 correspondentes à construção de referência. Etapas de construção, registros MCP cortados e duas classes de respostas de erro são públicas.

## Limitações e reivindicações não verificadas

Um programa, configuração de compilação e função, sem comparação de ferramentas. As bordas 24 são chamadas diretas resolvidas pelo provedor, não um gráfico de tempo de execução completo. O script completo do cliente não é público; o arquivo possui um hash gravado, mas nenhuma verificação de assinatura. Este catálogo não foi executado novamente.

## O que aprender

Construa a verdade básica a partir de uma construção simbolizada correspondente e separe observações, inferências e verificações de referência.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## Fontes originais

- [Discussão pública/editável no momento da revisão](https://github.com/morluto/rea/discussions/2254)
- [Projeto / demonstração](https://github.com/morluto/rea/discussions/2254)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
