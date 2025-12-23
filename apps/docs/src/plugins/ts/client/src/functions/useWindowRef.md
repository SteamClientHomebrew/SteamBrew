[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / useWindowRef

# Function: useWindowRef()

> **useWindowRef**\<`RefElementType`, `WindowType`\>(): \[`Ref`\<`RefElementType`\>, `WindowType` \| `null` \| `undefined`\]

Defined in: [packages/client/src/utils/react/react.ts:176](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/utils/react/react.ts#L176)

React hook to find the host window of a component
Pass the returned ref into a React element and window will be its host window.

## Type Parameters

### RefElementType

`RefElementType` *extends* `HTMLElement`

### WindowType

`WindowType` = `Window`

## Returns

\[`Ref`\<`RefElementType`\>, `WindowType` \| `null` \| `undefined`\]

[ref, window]
