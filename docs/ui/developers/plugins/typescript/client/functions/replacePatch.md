[**@steambrew/client v4.2.1**](../README.md)

***

# Function: replacePatch()

```ts
function replacePatch(
   object: any, 
   property: string, 
   handler: (args: any[]) => any, 
   options: PatchOptions): Patch
```

Defined in: [src/utils/patcher.ts:62](https://github.com/SteamClientHomebrew/SDK/blob/main/typescript-packages/client/src/utils/patcher.ts#L62)

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
