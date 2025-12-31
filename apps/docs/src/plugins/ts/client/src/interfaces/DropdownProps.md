[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / DropdownProps

# Interface: DropdownProps

Defined in: [packages/client/src/components/Dropdown.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L28)

## Extended by

- [`DropdownItemProps`](DropdownItemProps.md)

## Properties

### contextMenuPositionOptions?

> `optional` **contextMenuPositionOptions**: [`DropdownMenuPositionOptions`](DropdownMenuPositionOptions.md)

Defined in: [packages/client/src/components/Dropdown.ts:35](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L35)

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [packages/client/src/components/Dropdown.ts:31](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L31)

***

### focusable?

> `optional` **focusable**: `boolean`

Defined in: [packages/client/src/components/Dropdown.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L39)

***

### menuLabel?

> `optional` **menuLabel**: `string`

Defined in: [packages/client/src/components/Dropdown.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L36)

***

### rgOptions

> **rgOptions**: [`DropdownOption`](../type-aliases/DropdownOption.md)[]

Defined in: [packages/client/src/components/Dropdown.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L29)

***

### selectedOption

> **selectedOption**: `any`

Defined in: [packages/client/src/components/Dropdown.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L30)

***

### strDefaultLabel?

> `optional` **strDefaultLabel**: `string`

Defined in: [packages/client/src/components/Dropdown.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L37)

## Methods

### onChange()?

> `optional` **onChange**(`data`: [`SingleDropdownOption`](SingleDropdownOption.md)): `void`

Defined in: [packages/client/src/components/Dropdown.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L34)

#### Parameters

##### data

[`SingleDropdownOption`](SingleDropdownOption.md)

#### Returns

`void`

***

### onMenuOpened()?

> `optional` **onMenuOpened**(): `void`

Defined in: [packages/client/src/components/Dropdown.ts:33](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L33)

#### Returns

`void`

***

### onMenuWillOpen()?

> `optional` **onMenuWillOpen**(`showMenu`: () => `void`): `void`

Defined in: [packages/client/src/components/Dropdown.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L32)

#### Parameters

##### showMenu

() => `void`

#### Returns

`void`

***

### renderButtonValue()?

> `optional` **renderButtonValue**(`element`: `ReactNode`): `ReactNode`

Defined in: [packages/client/src/components/Dropdown.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Dropdown.ts#L38)

#### Parameters

##### element

`ReactNode`

#### Returns

`ReactNode`
