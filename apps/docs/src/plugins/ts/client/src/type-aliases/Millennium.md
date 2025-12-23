[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Millennium

# Type Alias: Millennium

> **Millennium** = \{ `AddWindowCreateHook?`: (`callback`: (`context`: `object`) => `void`) => `void`; `callServerMethod`: (`methodName`: `string`, `kwargs?`: `object`) => `Promise`\<`any`\>; `exposeObj?`: \<`T`\>(`obj`: `T`) => `any`; `findElement`: (`privateDocument`: `Document`, `querySelector`: `string`, `timeOut?`: `number`) => `Promise`\<`NodeListOf`\<`Element`\>\>; \}

Defined in: [packages/client/src/millennium-api.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/millennium-api.ts#L9)

## Properties

### AddWindowCreateHook()?

> `optional` **AddWindowCreateHook**: (`callback`: (`context`: `object`) => `void`) => `void`

Defined in: [packages/client/src/millennium-api.ts:27](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/millennium-api.ts#L27)

#### Parameters

##### callback

(`context`: `object`) => `void`

#### Returns

`void`

***

### ~~callServerMethod()~~

> **callServerMethod**: (`methodName`: `string`, `kwargs?`: `object`) => `Promise`\<`any`\>

Defined in: [packages/client/src/millennium-api.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/millennium-api.ts#L24)

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

### exposeObj()?

> `optional` **exposeObj**: \<`T`\>(`obj`: `T`) => `any`

Defined in: [packages/client/src/millennium-api.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/millennium-api.ts#L26)

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### obj

`T`

#### Returns

`any`

***

### findElement()

> **findElement**: (`privateDocument`: `Document`, `querySelector`: `string`, `timeOut?`: `number`) => `Promise`\<`NodeListOf`\<`Element`\>\>

Defined in: [packages/client/src/millennium-api.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/millennium-api.ts#L25)

#### Parameters

##### privateDocument

`Document`

##### querySelector

`string`

##### timeOut?

`number`

#### Returns

`Promise`\<`NodeListOf`\<`Element`\>\>
