[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Patch

# Interface: Patch\<Object, Property, Target\>

Defined in: [packages/client/src/utils/patcher.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L12)

## Type Parameters

### Object

`Object` *extends* `Record`\<`PropertyKey`, `any`\> = `Record`\<`PropertyKey`, `any`\>

### Property

`Property` *extends* keyof `Object` = keyof `Object`

### Target

`Target` *extends* `Object`\[`Property`\] = `Object`\[`Property`\]

## Properties

### handler

> **handler**: (`args`: `Parameters`\<`Target`\>, `ret`: `ReturnType`\<`Target`\>) => `any` \| (`args`: `Parameters`\<`Target`\>) => `any`

Defined in: [packages/client/src/utils/patcher.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L23)

***

### hasUnpatched

> **hasUnpatched**: `boolean`

Defined in: [packages/client/src/utils/patcher.ts:22](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L22)

***

### object

> **object**: `Object`

Defined in: [packages/client/src/utils/patcher.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L17)

***

### original

> **original**: `Target`

Defined in: [packages/client/src/utils/patcher.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L19)

***

### patchedFunction

> **patchedFunction**: `Target`

Defined in: [packages/client/src/utils/patcher.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L21)

***

### property

> **property**: `Property`

Defined in: [packages/client/src/utils/patcher.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L18)

## Methods

### unpatch()

> **unpatch**(): `void`

Defined in: [packages/client/src/utils/patcher.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L25)

#### Returns

`void`
