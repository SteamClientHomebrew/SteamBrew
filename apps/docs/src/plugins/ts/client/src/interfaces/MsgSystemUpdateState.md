[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / MsgSystemUpdateState

# Interface: MsgSystemUpdateState

Defined in: [packages/client/src/globals/steam-client/Updates.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L48)

CMsgSystemUpdateState

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

### progress()

> **progress**(): [`UpdateProgress`](UpdateProgress.md) \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Updates.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L51)

#### Returns

[`UpdateProgress`](UpdateProgress.md) \| `undefined`

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

### state()

> **state**(): [`EUpdaterState`](../enumerations/EUpdaterState.md) \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Updates.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L49)

#### Returns

[`EUpdaterState`](../enumerations/EUpdaterState.md) \| `undefined`

***

### supports\_os\_updates()

> **supports\_os\_updates**(): `boolean` \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Updates.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L53)

#### Returns

`boolean` \| `undefined`

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

### update\_apply\_results()

> **update\_apply\_results**(): [`UpdateApplyResult`](UpdateApplyResult.md)[]

Defined in: [packages/client/src/globals/steam-client/Updates.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L55)

#### Returns

[`UpdateApplyResult`](UpdateApplyResult.md)[]

***

### update\_check\_results()

> **update\_check\_results**(): [`UpdateCheckResult`](UpdateCheckResult.md)[]

Defined in: [packages/client/src/globals/steam-client/Updates.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L57)

#### Returns

[`UpdateCheckResult`](UpdateCheckResult.md)[]
