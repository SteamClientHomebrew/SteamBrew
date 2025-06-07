[**@steambrew/client v4.2.1**](../README.md)

***

# Function: beforePatch()

```ts
function beforePatch(
   object: any, 
   property: string, 
   handler: (args: any[]) => any, 
   options: PatchOptions): Patch
```

Defined in: [src/utils/patcher.ts:24](https://github.com/SteamClientHomebrew/SDK/blob/main/typescript-packages/client/src/utils/patcher.ts#L24)

## Parameters

### object

`any`

### property

`string`

### handler

(`args`: `any`[]) => `any`

### options

[`PatchOptions`](../interfaces/PatchOptions.md) = `{}`

## Returns

[`Patch`](../interfaces/Patch.md)
