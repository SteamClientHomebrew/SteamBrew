[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / useParams

# Variable: useParams()

> `const` **useParams**: \<`T`\>() => `T`

Defined in: [packages/client/src/deck-hooks/useParams.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/deck-hooks/useParams.ts#L13)

Get the current params from ReactRouter

## Type Parameters

### T

`T`

## Returns

`T`

an object with the current ReactRouter params

## Example

```ts
import { useParams } from "decky-frontend-lib";

const { appid } = useParams<{ appid: string }>()
```
