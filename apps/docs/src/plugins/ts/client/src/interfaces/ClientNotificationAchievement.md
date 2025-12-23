[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ClientNotificationAchievement

# Interface: ClientNotificationAchievement

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:164](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L164)

Deserialized ProtoBuf message.

## Extends

- [`JsPbMessage`](JsPbMessage.md)

## Methods

### achieved()

> **achieved**(): `boolean`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:170](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L170)

#### Returns

`boolean`

***

### achievement\_id()

> **achievement\_id**(): `string`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:165](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L165)

#### Returns

`string`

***

### appid()

> **appid**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:166](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L166)

#### Returns

`number`

***

### current\_progress()

> **current\_progress**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:173](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L173)

#### Returns

`number`

***

### description()

> **description**(): `string`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:168](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L168)

#### Returns

`string`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`getClassName`](JsPbMessage.md#getclassname)

***

### global\_achieved\_pct()

> **global\_achieved\_pct**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:175](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L175)

#### Returns

`number`

***

### image\_url()

> **image\_url**(): `string`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:169](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L169)

#### Returns

`string`

***

### max\_progress()

> **max\_progress**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:174](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L174)

#### Returns

`number`

***

### min\_progress()

> **min\_progress**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:172](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L172)

#### Returns

`number`

***

### name()

> **name**(): `string`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:167](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L167)

#### Returns

`string`

***

### rtime\_unlocked()

> **rtime\_unlocked**(): `number`

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:171](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L171)

#### Returns

`number`

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
