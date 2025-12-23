[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / CGameRecording\_AudioSessionsChanged\_Notification

# Interface: CGameRecording\_AudioSessionsChanged\_Notification

Defined in: [packages/client/src/globals/steam-client/GameRecording.ts:27](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameRecording.ts#L27)

## Note

Taken from https://github.com/SteamDatabase/SteamTracking/blob/master/Protobufs/steammessages_gamerecording_objects.proto

## Extends

- [`JsPbMessage`](JsPbMessage.md)

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`getClassName`](JsPbMessage.md#getclassname)

***

### serializeBase64String()

> **serializeBase64String**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:254](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L254)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBase64String`](JsPbMessage.md#serializebase64string)

***

### serializeBinary()

> **serializeBinary**(): `Uint8Array`

Defined in: [packages/client/src/globals/steam-client/shared.ts:256](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L256)

#### Returns

`Uint8Array`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBinary`](JsPbMessage.md#serializebinary)

***

### sessions()

> **sessions**(): [`AudioSession`](AudioSession.md)[]

Defined in: [packages/client/src/globals/steam-client/GameRecording.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameRecording.ts#L28)

#### Returns

[`AudioSession`](AudioSession.md)[]

***

### toObject()

> **toObject**(`includeJsPbInstance`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/shared.ts:261](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L261)

Converts the message to an object.

#### Parameters

##### includeJsPbInstance

`boolean`

#### Returns

`any`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`toObject`](JsPbMessage.md#toobject)
