[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / callable

# Variable: callable()

> `const` **callable**: \<`Params`, `Return`\>(`route`: `string`) => (...`params`: `Params`) => `Promise`\<`Return`\>

Defined in: [packages/client/src/millennium-api.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/millennium-api.ts#L45)

Make reusable IPC call declarations

frontend:
```typescript
const method = callable<[{ arg1: string }]>("methodName"); // declare the method
method({ arg1: 'value' }); // call the method
```

backend:
```python
def methodName(arg1: str):
   pass
```

## Type Parameters

### Params

`Params` *extends* \[`Record`\<`string`, `IPCType`\>\] \| \[\] = \[\]

### Return

`Return` *extends* `IPCType` = `IPCType`

## Parameters

### route

`string`

## Returns

> (...`params`: `Params`): `Promise`\<`Return`\>

### Parameters

#### params

...`Params`

### Returns

`Promise`\<`Return`\>
