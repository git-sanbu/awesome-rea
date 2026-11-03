# Eleven: conectando um ambiente de trabalho de desktop controlado por agente ao REA

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Zfinix
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Análise binária nativa por meio de REA/Ghidra e um ambiente de trabalho de desktop do agente ACP

## A questão

Como um agente pode inspecionar um binário enquanto a navegação e as anotações editáveis permanecem visíveis em um ambiente de trabalho compartilhado?

## O que REA fez

O mecanismo inicia REA MCP e chama open_binary e visualizações de procedimento. Um proxy separado encaminha ferramentas de análise enquanto retém ferramentas de gravação de anotações REA, direcionando essas alterações por meio de ferramentas de projeto Eleven com histórico visível.

## Resultados relatados pelo autor

A saída pública inclui a fonte do aplicativo de desktop, a documentação da ferramenta MCP, a anotação do projeto e os caminhos de sugestão de patch, além de um teste de agente ativo fornecido pelo autor que solicita que um agente abra uma função /bin/ls na interface do usuário. README e o mostruário upstream descrevem o ambiente de trabalho em funcionamento.

## Limitações e reivindicações não verificadas

O catálogo inspecionou as definições de origem e de teste, não um recibo de teste executado ou uma versão instalada. O suporte à plataforma desktop, o comportamento do depurador, a aceleração do cache e a integridade da análise binária não foram verificados de forma independente. Rizin, jadx e outros caminhos são mecanismos separados; seus resultados não são atribuídos a REA. Os tempos de demonstração upstream são observações do autor, não benchmarks de catálogo.

## O que aprender

Separe a passagem de análise das edições do projeto, mantenha a autoria e o histórico de desfazer visíveis e distinga os testes executáveis dos resultados dos testes observados.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [Projeto / demonstração](https://github.com/Zfinix/eleven)
- [Fonte adicional 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [Fonte adicional 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [Fonte adicional 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [Fonte adicional 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
