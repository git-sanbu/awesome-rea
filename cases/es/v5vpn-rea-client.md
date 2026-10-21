# V5VPN: investigación de protocolos para un portal con alcance y un cliente de túnel

[← Volver a todos los casos](../../README.es.md) · Hardware y compatibilidad

[English](../v5vpn-rea-client.md) · [简体中文](../zh-CN/v5vpn-rea-client.md) · [繁體中文](../zh-TW/v5vpn-rea-client.md) · [日本語](../ja/v5vpn-rea-client.md) · [한국어](../ko/v5vpn-rea-client.md) · [Español](../es/v5vpn-rea-client.md) · [Français](../fr/v5vpn-rea-client.md) · [Deutsch](../de/v5vpn-rea-client.md) · [Português (Brasil)](../pt-BR/v5vpn-rea-client.md) · [Русский](../ru/v5vpn-rea-client.md) · [العربية](../ar/v5vpn-rea-client.md) · [हिन्दी](../hi/v5vpn-rea-client.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

- **Autor / atribución:** hygkui
- **Fecha de revisión de la fuente:** 2026-10-21
- **Estado de revisión:** Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.
- **Objetivo:** Cliente LeadSec V5VPN 5.3.3.x y protocolo de puerta de enlace v2.0

## la pregunta

¿Cómo pueden la autenticación, el descubrimiento de recursos y la investigación de conexiones informar a un cliente independiente de alcance?

## Lo que hizo REA

El autor cita explícitamente morluto/rea como una referencia de ingeniería inversa y documenta símbolos, desmontaje y asignaciones de memoria en SecUI.exe, SecController.dll, SecLogin.dll, SecSSL.dll y VpnServ.exe. El README conecta autenticación, ramas de caducidad de contraseña, descubrimiento de recursos y HTTP CONNECT a una implementación Go/MyGo independiente; Los registros completos de llamadas REA no son públicos.

## Resultados informados por el autor

Se proporcionan pruebas, notas de protocolo y fuentes de escritorio públicas Go/MyGo y CLI. El autor informa sobre la conectividad de un extremo a otro en una máquina de desarrollo Windows y dos puertas de enlace de producción, que cubren el portal VPN SSL, los recursos autorizados y los túneles HTTP CONNECT.

## Limitaciones y afirmaciones no verificadas

El alcance informado es 5.3.3.x y el protocolo v2.0. Linux/macOS se compiló pero no se probó. Sin adaptador virtual de kernel, IPsec o enrutamiento de red completa; No se admiten llaves USB, inicios de sesión anónimos ni suites criptográficas chinas. Este catálogo no se conecta a puertas de enlace ni verifica la seguridad y no trata la redacción "completamente descifrada" como una conclusión establecida.

## que aprender

Separe el alcance del protocolo de las pruebas de la plataforma. La usabilidad del cliente requiere validación frente a puertas de enlace y escenarios específicos.

## Evidencia de uso de REA en la fuente

El formato de los extractos está simplificado. Lea la fuente original para conocer el contexto completo.

> 基于 REA (Reverse Engineer Anything) 逆向分析技术与 MyGo 跨平台桌面技术架构，重新实现的现代化 V5VPN 客户端。

## Fuentes originales

- [Fuente primaria/evidencia fijada](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md)
- [Proyecto / demostración](https://github.com/hygkui/v5vpn-rea-client)
- [Fuente adicional 1](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/auth_test.go)
- [Fuente adicional 2](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/tunnel_test.go)

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí.

<!-- Generado a partir de datos del catálogo; edite los archivos de datos para actualizar esta nota. -->
