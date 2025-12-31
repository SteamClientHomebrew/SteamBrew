[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / beforePatch

# Function: beforePatch()

> **beforePatch**\<`Object`, `Property`, `Target`\>(`object`: `Object`, `property`: `Property`, `handler`: (`args`: `Parameters`\<`Target`\>) => `void`, `options`: [`PatchOptions`](../interfaces/PatchOptions.md)): [`Patch`](../interfaces/Patch.md)\<`Object`, `Property`, `Target`\>

Defined in: [packages/client/src/utils/patcher.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/patcher.ts#L30)

## Type Parameters

### Object

`Object` *extends* `Record`\<`PropertyKey`, `any`\>

### Property

`Property` *extends* `string` \| `number` \| `symbol`

### Target

`Target` *extends* `any`

## Parameters

### object

`Object`

### property

`Property`

### handler

(`args`: `Parameters`\<`Target`\>) => `void`

### options

[`PatchOptions`](../interfaces/PatchOptions.md) = `{}`

## Returns

[`Patch`](../interfaces/Patch.md)\<`Object`, `Property`, `Target`\>
