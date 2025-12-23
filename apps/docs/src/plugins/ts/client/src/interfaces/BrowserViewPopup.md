[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / BrowserViewPopup

# Interface: BrowserViewPopup

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L4)

## Methods

### AddGlass()

> **AddGlass**(`enabled`: `boolean`, `useBackgroundColor`: `boolean`, `blur`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L11)

Blur the popup contents.

#### Parameters

##### enabled

`boolean`

Is the blur enabled?

##### useBackgroundColor

`boolean`

##### blur

`boolean`

#### Returns

`void`

***

### CanGoBackward()

> **CanGoBackward**(): `boolean`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L16)

#### Returns

`boolean`

`true` if you can go backward in history.

***

### CanGoForward()

> **CanGoForward**(): `boolean`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L21)

#### Returns

`boolean`

`true` if you can go forward in history.

***

### DialogResponse()

> **DialogResponse**(`param0`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L24)

#### Parameters

##### param0

`boolean`

#### Returns

`void`

***

### EnableSteamInput()

> **EnableSteamInput**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L26)

#### Returns

`void`

***

### FindInPage()

> **FindInPage**(`input`: `string`, `param1`: `boolean`, `previous`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L34)

Find a string in the page.

#### Parameters

##### input

`string`

The string to find.

##### param1

`boolean`

##### previous

`boolean`

`true` for previous match, `false` for next match.

#### Returns

`void`

***

### GetBounds()

> **GetBounds**(): [`BrowserViewBounds`](BrowserViewBounds.md)

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L40)

Get the current popup position. Only updates when using [SetBounds](#setbounds)!

#### Returns

[`BrowserViewBounds`](BrowserViewBounds.md)

the window position.

***

### GoBack()

> **GoBack**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L45)

Go back in history.

#### Returns

`void`

***

### GoForward()

> **GoForward**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L50)

Go forward in history.

#### Returns

`void`

***

### HandleContextMenuCommand()

> **HandleContextMenuCommand**(`command`: `number`, `param2`: [`BrowserViewContextMenu`](BrowserViewContextMenu.md)): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L55)

#### Parameters

##### command

`number`

See [BrowserViewContextMenu.custom\_commands](BrowserViewContextMenu.md#custom_commands).

##### param2

[`BrowserViewContextMenu`](BrowserViewContextMenu.md)

#### Returns

`void`

***

### LoadURL()

> **LoadURL**(`url`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L61)

Load the specified URL.

#### Parameters

##### url

`string`

The URL to go to.

#### Returns

`void`

***

### NotifyUserActivation()

> **NotifyUserActivation**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:63](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L63)

#### Returns

`void`

***

### off()

> **off**\<`K`\>(`event`: `K`, `callback`: `BrowserViewEventMap`\[`K`\]): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:143](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L143)

Stop listening for an event.

#### Type Parameters

##### K

`K` *extends* keyof `BrowserViewEventMap`

#### Parameters

##### event

`K`

The event to stop listening to.

##### callback

`BrowserViewEventMap`\[`K`\]

The callback function to be called.

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`event`: `K`, `callback`: `BrowserViewEventMap`\[`K`\]): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:150](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L150)

Start listening for an event.

#### Type Parameters

##### K

`K` *extends* keyof `BrowserViewEventMap`

#### Parameters

##### event

`K`

The event to start listening to.

##### callback

`BrowserViewEventMap`\[`K`\]

The callback function to be called.

#### Returns

`void`

***

### Paste()

> **Paste**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L68)

Paste the current clipboard selection.

#### Returns

`void`

***

### PostMessage()

> **PostMessage**(`message`: `string`, `args`: `string`): `boolean`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L75)

#### Parameters

##### message

`string`

##### args

`string`

#### Returns

`boolean`

a boolean indicating whether the operation was successful. Will
always be `false` if there are no listeners created by
[BrowserView.RegisterForMessageFromParent](BrowserView.md#registerformessagefromparent).

***

### Reload()

> **Reload**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:80](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L80)

Reload the page.

#### Returns

`void`

***

### ReplaceURL()

> **ReplaceURL**(`url`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L86)

Load the specified URL, but don't save history.

#### Parameters

##### url

`string`

The URL to go to.

#### Returns

`void`

***

### SetBlockedProtocols()

> **SetBlockedProtocols**(`protocols`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L92)

Define blocked protocols, like https, etc.

#### Parameters

##### protocols

`string`

The protocols to block, separated by a semicolon.

#### Returns

`void`

***

### SetBounds()

> **SetBounds**(`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:101](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L101)

Sets the browser window position.

#### Parameters

##### x

`number`

Browser window X position.

##### y

`number`

Browser window Y position.

##### width

`number`

Browser window width.

##### height

`number`

Browser window height.

#### Returns

`void`

***

### SetFocus()

> **SetFocus**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:107](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L107)

Sets the browser window focus state.

#### Parameters

##### value

`boolean`

Is the window focused?

#### Returns

`void`

***

### SetName()

> **SetName**(`browserName`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:109](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L109)

#### Parameters

##### browserName

`string`

#### Returns

`void`

***

### SetShowContextMenuCallback()

> **SetShowContextMenuCallback**(`callback`: (`data`: [`BrowserViewContextMenu`](BrowserViewContextMenu.md)) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:115](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L115)

Registers a callback to be called when a context menu is shown.

#### Parameters

##### callback

(`data`: [`BrowserViewContextMenu`](BrowserViewContextMenu.md)) => `void`

The callback function to be called.

#### Returns

`void`

***

### SetSteamURLCallback()

> **SetSteamURLCallback**(`callback`: (`url`: `string`) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:120](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L120)

Registers a callback to be called when a steam:// URL is loaded.

#### Parameters

##### callback

(`url`: `string`) => `void`

#### Returns

`void`

***

### SetTouchGesturesToCancel()

> **SetTouchGesturesToCancel**(`gestures`: [`ETouchGesture`](../enumerations/ETouchGesture.md)[]): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:125](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L125)

#### Parameters

##### gestures

[`ETouchGesture`](../enumerations/ETouchGesture.md)[]

#### Returns

`void`

#### Todo

unconfirmed

***

### SetVisible()

> **SetVisible**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L129)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetVRKeyboardVisibility()

> **SetVRKeyboardVisibility**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:127](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L127)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetWindowStackingOrder()

> **SetWindowStackingOrder**(`value`: [`EWindowStackingOrder`](../enumerations/EWindowStackingOrder.md)): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:131](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L131)

#### Parameters

##### value

[`EWindowStackingOrder`](../enumerations/EWindowStackingOrder.md)

#### Returns

`void`

***

### StopFindInPage()

> **StopFindInPage**(): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:136](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L136)

Stop the 'find in page' function.

#### Returns

`void`
