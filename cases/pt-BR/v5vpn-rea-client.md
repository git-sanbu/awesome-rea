# V5VPN: pesquisa de protocolo para um portal com escopo definido e cliente de túnel

[← Voltar para todos os casos](../../README.pt-BR.md) · Hardware e compatibilidade

[English](../v5vpn-rea-client.md) · [简体中文](../zh-CN/v5vpn-rea-client.md) · [繁體中文](../zh-TW/v5vpn-rea-client.md) · [日本語](../ja/v5vpn-rea-client.md) · [한국어](../ko/v5vpn-rea-client.md) · [Español](../es/v5vpn-rea-client.md) · [Français](../fr/v5vpn-rea-client.md) · [Deutsch](../de/v5vpn-rea-client.md) · [Português (Brasil)](../pt-BR/v5vpn-rea-client.md) · [Русский](../ru/v5vpn-rea-client.md) · [العربية](../ar/v5vpn-rea-client.md) · [हिन्दी](../hi/v5vpn-rea-client.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** hygkui
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Cliente LeadSec V5VPN 5.3.3.x e protocolo de gateway v2.0

## A questão

Como a autenticação, a descoberta de recursos e a pesquisa de conexão podem informar um cliente independente com escopo definido?

## O que REA fez

O autor cita explicitamente morluto/rea como uma referência de engenharia reversa e documenta símbolos, desmontagem e mapeamentos de memória em SecUI.exe, SecController.dll, SecLogin.dll, SecSSL.dll e VpnServ.exe. O README conecta autenticação, ramificações com expiração de senha, descoberta de recursos e HTTP CONNECT a uma implementação Go/MyGo independente; os registros completos de chamadas REA não são públicos.

## Resultados relatados pelo autor

Desktop Go/MyGo público e fonte CLI, notas de protocolo e testes são fornecidos. O autor relata conectividade ponta a ponta em uma máquina de desenvolvimento Windows e dois gateways de produção, cobrindo o portal SSL VPN, recursos autorizados e túneis HTTP CONNECT.

## Limitações e reivindicações não verificadas

O escopo relatado é 5.3.3.x e o protocolo v2.0. Linux/macOS foram compilados, mas não testados. Nenhum adaptador virtual de kernel, IPsec ou roteamento de toda a rede; Chave USB, login anônimo e pacotes criptográficos chineses não são suportados. Este catálogo não se conectou a gateways nem verificou a segurança e não trata o texto “totalmente crackeado” como uma conclusão estabelecida.

## O que aprender

Escopo de protocolo separado dos testes de plataforma. A usabilidade do cliente requer validação em gateways e cenários específicos.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> 基于 REA (Reverse Engineer Anything) 逆向分析技术与 MyGo 跨平台桌面技术架构，重新实现的现代化 V5VPN 客户端。

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md)
- [Projeto / demonstração](https://github.com/hygkui/v5vpn-rea-client)
- [Fonte adicional 1](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/auth_test.go)
- [Fonte adicional 2](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/tunnel_test.go)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
