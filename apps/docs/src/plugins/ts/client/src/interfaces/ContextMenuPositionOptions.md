[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ContextMenuPositionOptions

# Interface: ContextMenuPositionOptions

Defined in: [packages/client/src/components/Menu.ts:33](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L33)

## Extends

- `PopupCreationOptions`.`Partial`\<`MonitorOptions`\>

## Properties

### bAlwaysOnTop?

> `optional` **bAlwaysOnTop**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L37)

When [bForcePopup](#bforcepopup) is true, makes the window appear above everything else.

***

### bCreateHidden?

> `optional` **bCreateHidden**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L10)

Initially hidden, make it appear with [ContextMenuInstance.Show](ContextMenuInstance.md#show).

#### Inherited from

`PopupCreationOptions.bCreateHidden`

***

### bDisableMouseOverlay?

> `optional` **bDisableMouseOverlay**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:43](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L43)

Disables the mouse overlay, granting the ability to click anywhere while
the menu's active.

***

### bDisablePopTop?

> `optional` **bDisablePopTop**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L48)

Disables the [bPreferPopTop](#bpreferpoptop) behavior.

***

### bFitToWindow?

> `optional` **bFitToWindow**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L50)

***

### bForcePopup?

> `optional` **bForcePopup**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L55)

Forces the menu to open in a separate window instead of inside the parent.

***

### bGrowToElementWidth?

> `optional` **bGrowToElementWidth**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L60)

Like [bMatchWidth](#bmatchwidth), but don't shrink below the menu's minimum width.

***

### bMatchHeight?

> `optional` **bMatchHeight**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L65)

Match the parent's exact height.

***

### bMatchWidth?

> `optional` **bMatchWidth**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:70](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L70)

Match the parent's exact width.

***

### bModal?

> `optional` **bModal**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L12)

#### Inherited from

`PopupCreationOptions.bModal`

***

### bNoFocusWhenShown?

> `optional` **bNoFocusWhenShown**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:72](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L72)

***

### bOverlapHorizontal?

> `optional` **bOverlapHorizontal**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:84](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L84)

Set to `true` to not account for the parent's width.

***

### bOverlapVertical?

> `optional` **bOverlapVertical**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L89)

Set to `true` to not account for the parent's height.

***

### bPreferPopLeft?

> `optional` **bPreferPopLeft**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:95](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L95)

Set to `true` to make the entire menu try to appear on the left side from
the parent.

***

### bPreferPopTop?

> `optional` **bPreferPopTop**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:100](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L100)

Set to `true` to make the entire menu try to appear above the parent.

***

### bRetainOnHide?

> `optional` **bRetainOnHide**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L77)

Makes the menu **invisible**, instead of getting removed from the DOM.

***

### bScreenCoordinates?

> `optional` **bScreenCoordinates**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L79)

***

### bShiftToFitWindow?

> `optional` **bShiftToFitWindow**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L102)

***

### bStandalone?

> `optional` **bStandalone**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:105](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L105)

***

### flGamepadScale?

> `optional` **flGamepadScale**: `number`

Defined in: [packages/client/src/components/Menu.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L30)

#### Inherited from

`Partial.flGamepadScale`

***

### strClassName?

> `optional` **strClassName**: `string`

Defined in: [packages/client/src/components/Menu.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L111)

Class name **replacement** for the container element, i.e. it replaces the
default class.

***

### targetMonitor?

> `optional` **targetMonitor**: \{ `flMonitorScale`: `number`; `nScreenHeight`: `number`; `nScreenLeft`: `number`; `nScreenTop`: `number`; `nScreenWidth`: `number`; \}

Defined in: [packages/client/src/components/Menu.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L23)

#### flMonitorScale

> **flMonitorScale**: `number`

#### nScreenHeight

> **nScreenHeight**: `number`

#### nScreenLeft

> **nScreenLeft**: `number`

#### nScreenTop

> **nScreenTop**: `number`

#### nScreenWidth

> **nScreenWidth**: `number`

#### Inherited from

`Partial.targetMonitor`

***

### title?

> `optional` **title**: `string`

Defined in: [packages/client/src/components/Menu.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/components/Menu.ts#L17)

Document title.

#### Inherited from

`PopupCreationOptions.title`
