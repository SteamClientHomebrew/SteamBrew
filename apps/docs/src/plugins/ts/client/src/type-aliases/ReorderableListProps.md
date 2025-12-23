[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ReorderableListProps

# Type Alias: ReorderableListProps\<T\>

> **ReorderableListProps**\<`T`\> = \{ `animate?`: `boolean`; `entries`: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]; `fieldProps?`: [`FieldProps`](../interfaces/FieldProps.md); `interactables?`: `JSXElementConstructor`\<\{ `entry`: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>; \}\>; `onSave`: (`entries`: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]) => `void`; \}

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:22](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L22)

Properties for a ReorderableList component of type <T>.

## Param

If the list should animate.

## Default

```ts
true
```

## Type Parameters

### T

`T`

## Properties

### animate?

> `optional` **animate**: `boolean`

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:27](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L27)

***

### entries

> **entries**: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L23)

***

### fieldProps?

> `optional` **fieldProps**: [`FieldProps`](../interfaces/FieldProps.md)

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L26)

***

### interactables?

> `optional` **interactables**: `JSXElementConstructor`\<\{ `entry`: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>; \}\>

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:25](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L25)

***

### onSave()

> **onSave**: (`entries`: [`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]) => `void`

Defined in: [packages/client/src/custom-components/ReorderableList.tsx:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/custom-components/ReorderableList.tsx#L24)

#### Parameters

##### entries

[`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]

#### Returns

`void`
