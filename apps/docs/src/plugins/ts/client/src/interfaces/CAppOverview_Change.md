[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / CAppOverview\_Change

# Interface: CAppOverview\_Change

Defined in: [packages/client/src/globals/steam-client/App.ts:1560](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1560)

Deserialized ProtoBuf message.

## Extends

- [`JsPbMessage`](JsPbMessage.md)

## Methods

### add\_app\_overview()

> **add\_app\_overview**(`param0`: `any`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1569](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1569)

#### Parameters

##### param0

`any`

##### param1

`any`

#### Returns

`any`

***

### add\_removed\_appid()

> **add\_removed\_appid**(`param0`: `any`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1571](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1571)

#### Parameters

##### param0

`any`

##### param1

`any`

#### Returns

`any`

***

### app\_overview()

> **app\_overview**(): [`SteamAppOverview`](SteamAppOverview.md)[]

Defined in: [packages/client/src/globals/steam-client/App.ts:1561](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1561)

#### Returns

[`SteamAppOverview`](SteamAppOverview.md)[]

***

### full\_update()

> **full\_update**(): `boolean`

Defined in: [packages/client/src/globals/steam-client/App.ts:1563](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1563)

#### Returns

`boolean`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`getClassName`](JsPbMessage.md#getclassname)

***

### removed\_appid()

> **removed\_appid**(): `number`[]

Defined in: [packages/client/src/globals/steam-client/App.ts:1565](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1565)

#### Returns

`number`[]

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

### set\_app\_overview()

> **set\_app\_overview**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1573](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1573)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### set\_full\_update()

> **set\_full\_update**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1575](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1575)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### set\_removed\_appid()

> **set\_removed\_appid**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1577](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1577)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### set\_update\_complete()

> **set\_update\_complete**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/App.ts:1579](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1579)

#### Parameters

##### param0

`any`

#### Returns

`any`

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

***

### update\_complete()

> **update\_complete**(): `boolean`

Defined in: [packages/client/src/globals/steam-client/App.ts:1567](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L1567)

#### Returns

`boolean`
