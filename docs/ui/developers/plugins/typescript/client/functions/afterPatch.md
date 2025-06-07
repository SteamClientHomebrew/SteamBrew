[**@steambrew/client v4.2.1**](../README.md)

***

# Function: afterPatch()

```ts
function afterPatch(
   object: any, 
   property: string, 
   handler: (args: any[], ret: any) => any, 
   options: PatchOptions): Patch
```

Defined in: [src/utils/patcher.ts:43](https://github.com/SteamClientHomebrew/SDK/blob/main/typescript-packages/client/src/utils/patcher.ts#L43)

## Parameters

### object

`any`

### property

`string`

### handler

(`args`: `any`[], `ret`: `any`) => `any`

### options

[`PatchOptions`](../interfaces/PatchOptions.md) = `{}`

## Returns

[`Patch`](../interfaces/Patch.md)
