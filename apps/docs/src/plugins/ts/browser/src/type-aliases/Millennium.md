[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [browser/src](../README.md) / Millennium

# Type Alias: Millennium

> **Millennium** = \{ `callServerMethod`: (`methodName`: `string`, `kwargs?`: `object`) => `Promise`\<`any`\>; `findElement`: (`privateDocument`: `Document`, `querySelector`: `string`, `timeOut?`: `number`) => `Promise`\<`NodeListOf`\<`Element`\>\>; \}

Defined in: [packages/browser/src/index.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/browser/src/index.ts#L14)

## Properties

### ~~callServerMethod()~~

> **callServerMethod**: (`methodName`: `string`, `kwargs?`: `object`) => `Promise`\<`any`\>

Defined in: [packages/browser/src/index.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/browser/src/index.ts#L29)

Call a method on the backend

#### Parameters

##### methodName

`string`

##### kwargs?

`object`

#### Returns

`Promise`\<`any`\>

#### Deprecated

Use `callable` instead.
Example usage:
```typescript
// before
const result = await Millennium.callServerMethod('methodName', { arg1: 'value' });
// after
const method = callable<[{ arg1: string }]>("methodName");

const result1 = await method({ arg1: 'value1' });
const result2 = await method({ arg1: 'value2' });
```

***

### findElement()

> **findElement**: (`privateDocument`: `Document`, `querySelector`: `string`, `timeOut?`: `number`) => `Promise`\<`NodeListOf`\<`Element`\>\>

Defined in: [packages/browser/src/index.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/browser/src/index.ts#L30)

#### Parameters

##### privateDocument

`Document`

##### querySelector

`string`

##### timeOut?

`number`

#### Returns

`Promise`\<`NodeListOf`\<`Element`\>\>
