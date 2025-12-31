[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ClientNotificationFamilySharingStopPlaying

# Interface: ClientNotificationFamilySharingStopPlaying

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:213](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L213)

Deserialized ProtoBuf message.

## Extends

- [`JsPbMessage`](JsPbMessage.md)

## Methods

### accountid\_owner()

> **accountid\_owner**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:214](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L214)

#### Returns

`number`

***

### appid()

> **appid**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:216](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L216)

#### Returns

`number`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`getClassName`](JsPbMessage.md#getclassname)

***

### seconds\_remaining()

> **seconds\_remaining**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:215](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L215)

#### Returns

`number`

***

### serializeBase64String()

> **serializeBase64String**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:254](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L254)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBase64String`](JsPbMessage.md#serializebase64string)

***

### serializeBinary()

> **serializeBinary**(): `Uint8Array`

Defined in: [packages/client/src/globals/steam-client/shared.ts:256](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L256)

#### Returns

`Uint8Array`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBinary`](JsPbMessage.md#serializebinary)

***

### toObject()

> **toObject**(`includeJsPbInstance`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/shared.ts:261](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L261)

Converts the message to an object.

#### Parameters

##### includeJsPbInstance

`boolean`

#### Returns

`any`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`toObject`](JsPbMessage.md#toobject)
