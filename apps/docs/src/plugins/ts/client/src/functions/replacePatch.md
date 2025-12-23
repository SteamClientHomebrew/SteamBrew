[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / replacePatch

# Function: replacePatch()

> **replacePatch**\<`Object`, `Property`, `Target`\>(`object`: `Object`, `property`: `Property`, `handler`: (`args`: `Parameters`\<`Target`\>) => `ReturnType`\<`Target`\>, `options`: [`PatchOptions`](../interfaces/PatchOptions.md)): [`Patch`](../interfaces/Patch.md)\<`Object`, `Property`, `Target`\>

Defined in: [packages/client/src/utils/patcher.ts:76](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/utils/patcher.ts#L76)

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

(`args`: `Parameters`\<`Target`\>) => `ReturnType`\<`Target`\>

### options

[`PatchOptions`](../interfaces/PatchOptions.md) = `{}`

## Returns

[`Patch`](../interfaces/Patch.md)\<`Object`, `Property`, `Target`\>
