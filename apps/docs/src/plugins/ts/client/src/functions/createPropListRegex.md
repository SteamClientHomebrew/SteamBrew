[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / createPropListRegex

# Function: createPropListRegex()

> **createPropListRegex**(`propList`: `string`[], `fromStart`: `boolean`): `RegExp`

Defined in: [packages/client/src/utils/react/react.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/utils/react/react.ts#L20)

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
