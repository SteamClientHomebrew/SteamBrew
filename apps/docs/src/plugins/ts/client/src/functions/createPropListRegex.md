[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / createPropListRegex

# Function: createPropListRegex()

> **createPropListRegex**(`propList`: `string`[], `fromStart`: `boolean`): `RegExp`

Defined in: [packages/client/src/utils/react/react.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/react/react.ts#L20)

Create a Regular Expression to search for a React component that uses certain props in order.

## Parameters

### propList

`string`[]

Ordererd list of properties to search for

### fromStart

`boolean` = `true`

## Returns

`RegExp`

RegEx to call .test(component.toString()) on
