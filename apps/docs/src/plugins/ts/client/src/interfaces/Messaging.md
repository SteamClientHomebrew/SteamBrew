[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Messaging

# Interface: Messaging

Defined in: [packages/client/src/globals/steam-client/Messaging.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Messaging.ts#L3)

## Methods

### PostMessage()

> **PostMessage**(`message`: `string`, `section`: `string`, `args`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Messaging.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Messaging.ts#L19)

#### Parameters

##### message

`string`

##### section

`string`

##### args

`string`

#### Returns

`void`

***

### RegisterForMessages()

> **RegisterForMessages**\<`T`\>(`message`: `T`, `callback`: (`message`: `T`, `section`: `string`, `args`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Messaging.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Messaging.ts#L6)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### message

`T`

##### callback

(`message`: `T`, `section`: `string`, `args`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)
