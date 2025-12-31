[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Navigation

# Interface: Navigation

Defined in: [packages/client/src/modules/Router.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L77)

## Methods

### CloseSideMenus()

> **CloseSideMenus**(): `void`

Defined in: [packages/client/src/modules/Router.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L92)

if calling this to perform navigation, call it after Navigate to prevent a race condition in desktop Big Picture mode that hides the overlay unintentionally

#### Returns

`void`

***

### Navigate()

> **Navigate**(`path`: `string`): `void`

Defined in: [packages/client/src/modules/Router.ts:78](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L78)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### NavigateBack()

> **NavigateBack**(): `void`

Defined in: [packages/client/src/modules/Router.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L79)

#### Returns

`void`

***

### NavigateToAppProperties()

> **NavigateToAppProperties**(): `void`

Defined in: [packages/client/src/modules/Router.ts:80](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L80)

#### Returns

`void`

***

### NavigateToChat()

> **NavigateToChat**(): `void`

Defined in: [packages/client/src/modules/Router.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L83)

#### Returns

`void`

***

### NavigateToExternalWeb()

> **NavigateToExternalWeb**(`url`: `string`): `void`

Defined in: [packages/client/src/modules/Router.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L81)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### NavigateToInvites()

> **NavigateToInvites**(): `void`

Defined in: [packages/client/src/modules/Router.ts:82](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L82)

#### Returns

`void`

***

### NavigateToLayoutPreview()

> **NavigateToLayoutPreview**(`e`: `unknown`): `void`

Defined in: [packages/client/src/modules/Router.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L85)

#### Parameters

##### e

`unknown`

#### Returns

`void`

***

### NavigateToLibraryTab()

> **NavigateToLibraryTab**(): `void`

Defined in: [packages/client/src/modules/Router.ts:84](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L84)

#### Returns

`void`

***

### NavigateToSteamWeb()

> **NavigateToSteamWeb**(`url`: `string`): `void`

Defined in: [packages/client/src/modules/Router.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L86)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### OpenMainMenu()

> **OpenMainMenu**(): `void`

Defined in: [packages/client/src/modules/Router.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L89)

#### Returns

`void`

***

### OpenPowerMenu()

> **OpenPowerMenu**(`unknown?`: `any`): `void`

Defined in: [packages/client/src/modules/Router.ts:90](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L90)

#### Parameters

##### unknown?

`any`

#### Returns

`void`

***

### OpenQuickAccessMenu()

> **OpenQuickAccessMenu**(`quickAccessTab?`: [`QuickAccessTab`](../enumerations/QuickAccessTab.md)): `void`

Defined in: [packages/client/src/modules/Router.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L88)

#### Parameters

##### quickAccessTab?

[`QuickAccessTab`](../enumerations/QuickAccessTab.md)

#### Returns

`void`

***

### OpenSideMenu()

> **OpenSideMenu**(`sideMenu`: [`SideMenu`](../enumerations/SideMenu.md)): `void`

Defined in: [packages/client/src/modules/Router.ts:87](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/modules/Router.ts#L87)

#### Parameters

##### sideMenu

[`SideMenu`](../enumerations/SideMenu.md)

#### Returns

`void`
