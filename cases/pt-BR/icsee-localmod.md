# iCSee localmod: rastreando comandos de câmera enquanto preserva drivers de estoque

[← Voltar para todos os casos](../../README.pt-BR.md) · Hardware e compatibilidade

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Vittuu
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Uma câmera XM530V200 / IPG-X2-WQ-BL e seu aplicativo Sofia padrão

## A questão

Como a pesquisa de comandos nativos pode permitir controles de câmera locais e, ao mesmo tempo, preservar drivers funcionais e gravação SD?

## O que REA fez

REA 6.8.0 e Ghidra rastrearam sequências de comandos Sofia e referências cruzadas para iluminação e manipuladores PTZ. O fluxo de trabalho publicado registra âncoras específicas do binário; as respostas do protocolo e o comportamento físico foram validados separadamente.

## Resultados relatados pelo autor

O autor publica exemplos locais C panel/API, fonte e Home Assistant. O proprietário relata verificações físicas de PTZ e LED branco, audio/video decodificado, persistência de inicialização e gravação nativa WFS contínua após reinicializações independentes. Um registro de back-end simulado público separado lista 22 aprovado nos testes e diz explicitamente hardware_tested=false.

## Limitações e reivindicações não verificadas

O firmware completo, descompilação e pacotes Evidence privados não são publicados. Os resultados de hardware são relatórios do proprietário de uma unidade; testes simulados não validam a instalação do firmware ou o comportamento físico. Esta é uma extensão do firmware padrão, sem imagem universal, intercomunicação completa ou melhoria de latência medida. O guarda de remoção de rotas não é um firewall; este catálogo não testou nenhum dispositivo.

## O que aprender

Rastreie um comando limitado, verifique as respostas autenticadas e, em seguida, verifique a ação física e a persistência como etapas separadas.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [Projeto / demonstração](https://github.com/Vittuu/icsee-localmod)
- [Fonte adicional 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [Fonte adicional 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [Fonte adicional 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
