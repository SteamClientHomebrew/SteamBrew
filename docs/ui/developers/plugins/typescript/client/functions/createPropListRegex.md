[**@steambrew/client v4.2.1**](../README.md)

***

# Function: createPropListRegex()

```ts
function createPropListRegex(propList: string[], fromStart: boolean): RegExp
```

Defined in: [src/utils/react.ts:18](https://github.com/SteamClientHomebrew/SDK/blob/main/typescript-packages/client/src/utils/react.ts#L18)

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

## Export
