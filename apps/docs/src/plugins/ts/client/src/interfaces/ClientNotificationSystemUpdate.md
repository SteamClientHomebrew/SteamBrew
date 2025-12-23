[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ClientNotificationSystemUpdate

# Interface: ClientNotificationSystemUpdate

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:182](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L182)

Deserialized ProtoBuf message.

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

***

### type()

> **type**(): [`ESystemUpdateNotificationType`](../enumerations/ESystemUpdateNotificationType.md)

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:183](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L183)

#### Returns

[`ESystemUpdateNotificationType`](../enumerations/ESystemUpdateNotificationType.md)
