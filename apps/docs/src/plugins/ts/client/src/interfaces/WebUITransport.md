[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / WebUITransport

# Interface: WebUITransport

Defined in: [packages/client/src/globals/steam-client/WebUITransport.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebUITransport.ts#L3)

## Methods

### GetTransportInfo()

> **GetTransportInfo**(): `Promise`\<[`TransportInfo`](TransportInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/WebUITransport.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebUITransport.ts#L4)

#### Returns

`Promise`\<[`TransportInfo`](TransportInfo.md)\>

***

### NotifyTransportFailure()

> **NotifyTransportFailure**(`base64`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/WebUITransport.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebUITransport.ts#L13)

Tells Steam the websocket failed and opens a troubleshooting dialog.

The responsible message for this is `CMsgWebUITransportFailure`.

#### Parameters

##### base64

`string`

Serialized ProtoBuf message.

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>
