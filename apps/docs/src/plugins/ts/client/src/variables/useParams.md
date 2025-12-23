[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / useParams

# Variable: useParams()

> `const` **useParams**: \<`T`\>() => `T`

Defined in: [packages/client/src/deck-hooks/useParams.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/deck-hooks/useParams.ts#L13)

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
