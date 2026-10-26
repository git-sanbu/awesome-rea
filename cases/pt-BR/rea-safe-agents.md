# REA Safe Agent: intermediando análise estática entre dois processos contidos

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** dagoSte
- **Data de revisão da fonte:** 2026-10-26
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Integração REA 6.7.0 com Ghidra 12.1.4 e JADX; luminárias ELF benignas e um APK F-Droid

## A questão

Como um agente pode consultar REA enquanto o acesso a entradas, ferramentas de host e solicitações de modelo permanece limitado?

## O que REA fez

A implementação executa REA e seu agente de recebimento em contêineres Docker separados e retransmite chamadas MCP permitidas na lista de permissões por meio de um controlador de host. Instantâneos de entrada congelados, verificações tool/path e resultados limitados restringem o que atravessa o limite; REA fornece a análise estática real.

## Resultados relatados pelo autor

Recibos macOS ARM64 datados relatam chamadas REA bem-sucedidas de 11 com Claude e 9 com Codex no mesmo ELF benigno, verificando seu hash, constantes FNV-1a e string decodificada em relação à fonte conhecida. O registro de validação relata separadamente 39 chamadas REA bem-sucedidas para uma análise F-Droid 2.0.2 ao vivo.

## Limitações e reivindicações não verificadas

Estes são registros publicados pelo autor, não uma certificação de segurança independente. A análise estática não executa o alvo. O isolamento depende do Docker e do controlador no host; o texto analisado é enviado ao serviço do modelo, e a integração do Docker no Windows é experimental. Persistem vulnerabilidades nas imagens completas, apesar da auditoria separada do npm sem problemas apontados.

## O que aprender

Testes de políticas simuladas separados, chamadas de ferramentas reais e execuções de modelos em tempo real; anexe cada reivindicação a um destino datado, host e recibo.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> "rea_version": "6.7.0",

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [Projeto / demonstração](https://github.com/dagoSte/rea-safe-agents)
- [Fonte adicional 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [Fonte adicional 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [Fonte adicional 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [Fonte adicional 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
