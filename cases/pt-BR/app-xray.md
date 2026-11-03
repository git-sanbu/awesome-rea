# App X-Ray: transformando as descobertas do REA em relatórios de aplicativos compartilháveis

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Eliot5566
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Fonte de aplicativo Electron de código aberto, com APK adicional, caminhos binários nativos e de arquivo de modelo

## A questão

Como a evidência estática do REA pode se tornar um relatório de componente legível e uma comparação de versão para versão?

## O que REA fez

A integração invoca operações REA 6.7.0 CLI fixadas e analisa JSON Evidence. Os lotes de análise JavaScript mantêm os arquivos na mesma raiz para preservar a resolução de importação; A inspeção do fusível Electron é uma operação separada do REA.

## Resultados relatados pelo autor

O projeto publica geração de relatórios, regras, diferenças de CI e uma galeria. Seu relatório week-5 datado diz que os aplicativos 20 Electron foram verificados e versões encontradas para todos os 20, com varreduras 18 em segundos 60 naquele contêiner. REA-Bench fornece perguntas 54 derivadas de relatórios do corpus 20-app.

## Limitações e reivindicações não verificadas

Estas são verificações datadas relatadas pelo autor, e não vulnerabilidades atuais ou descobertas de rede em tempo de execução. As regras podem perder janelas criadas por auxiliares, canais computados e validação de remetente; endereços estáticos não comprovam tráfego. REA-Bench mede a concordância com os relatórios App X-Ray em vez da verdade independente e não demonstra, por si só, uma vantagem de agente habilitado por ferramenta. Este catálogo não executou verificações novamente.

## O que aprender

Vincule declarações de relatório à origem, retenha confirmações e datas de verificação e trate regras estáticas e respostas de benchmark geradas como falíveis.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [Projeto / demonstração](https://github.com/Eliot5566/app-xray)
- [Fonte adicional 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [Fonte adicional 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [Fonte adicional 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [Fonte adicional 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
