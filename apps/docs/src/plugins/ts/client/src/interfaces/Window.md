[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Window

# Interface: Window

Defined in: [packages/client/src/globals/steam-client/Window.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L13)

Represents functionality for managing Steam's windows.

"Restore details" here refers to a string that is similiar to
`1&x=604&y=257&w=1010&h=600`, which is usable with certain
`window.open()` parameters and methods from here.

Note that methods here have to be called from the
window you want to use (not SharedJSContext).

## Methods

### BringToFront()

> **BringToFront**(`forceOS?`: [`EWindowBringToFront`](../enumerations/EWindowBringToFront.md)): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L14)

#### Parameters

##### forceOS?

[`EWindowBringToFront`](../enumerations/EWindowBringToFront.md)

#### Returns

`void`

***

### Close()

> **Close**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L19)

Closes the window.

#### Returns

`void`

***

### DefaultMonitorHasFullscreenWindow()

> **DefaultMonitorHasFullscreenWindow**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L24)

#### Returns

`Promise`\<`boolean`\>

the window's fullscreen state.

***

### FlashWindow()

> **FlashWindow**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L29)

Flashes the window in the taskbar.

#### Returns

`void`

***

### GetDefaultMonitorDimensions()

> **GetDefaultMonitorDimensions**(): `Promise`\<[`MonitorDimensions`](MonitorDimensions.md)\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:31](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L31)

#### Returns

`Promise`\<[`MonitorDimensions`](MonitorDimensions.md)\>

***

### GetMousePositionDetails()

> **GetMousePositionDetails**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L36)

#### Returns

`Promise`\<`string`\>

the mouse position's restore details.

***

### GetWindowDetails()

> **GetWindowDetails**(): `Promise`\<[`WindowDetails`](WindowDetails.md)\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L41)

#### Returns

`Promise`\<[`WindowDetails`](WindowDetails.md)\>

the window's details.

***

### GetWindowDimensions()

> **GetWindowDimensions**(): `Promise`\<[`WindowDimensions`](WindowDimensions.md)\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L46)

#### Returns

`Promise`\<[`WindowDimensions`](WindowDimensions.md)\>

the window's dimensions.

***

### GetWindowRestoreDetails()

> **GetWindowRestoreDetails**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L51)

#### Returns

`Promise`\<`string`\>

the window's restore details.

***

### HideWindow()

> **HideWindow**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:56](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L56)

Hides the window.

#### Returns

`void`

***

### IsWindowMaximized()

> **IsWindowMaximized**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L61)

#### Returns

`Promise`\<`boolean`\>

the window's maximized state.

***

### IsWindowMinimized()

> **IsWindowMinimized**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L66)

#### Returns

`Promise`\<`boolean`\>

the window's minimized state.

***

### MarkLastFocused()

> **MarkLastFocused**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L68)

#### Returns

`void`

***

### Minimize()

> **Minimize**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L73)

Minimizes the window.

#### Returns

`void`

***

### MoveTo()

> **MoveTo**(`x`: `number`, `y`: `number`, `dpi?`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L81)

Moves the window to given coordinates.

#### Parameters

##### x

`number`

Window X position.

##### y

`number`

Window Y position.

##### dpi?

`number`

Screen DPI.

#### Returns

`void`

***

### MoveToLocation()

> **MoveToLocation**(`location`: [`WindowLocation_t`](../type-aliases/WindowLocation_t.md), `offset?`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L88)

Moves the window to a given location.

#### Parameters

##### location

[`WindowLocation_t`](../type-aliases/WindowLocation_t.md)

Window location.

##### offset?

`number`

X/Y offset.

#### Returns

`void`

***

### PositionWindowRelative()

> **PositionWindowRelative**(`details`: `string`, `x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:106](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L106)

Moves the window relatively to given details.

#### Parameters

##### details

`string`

Window restore details string from [GetWindowRestoreDetails](#getwindowrestoredetails).

##### x

`number`

Window X position.

##### y

`number`

Window Y position.

##### width

`number`

Window width.

##### height

`number`

Window height.

#### Returns

`void`

#### Example

Move the window to bottom right by 50 pixels:
```
SteamClient.Window.GetWindowRestoreDetails((e) => {
    SteamClient.Window.PositionWindowRelative(e, 50, 50, 0, 0);
});
```

***

### ProcessShuttingDown()

> **ProcessShuttingDown**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Window.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L111)

#### Returns

`Promise`\<`boolean`\>

`true` if yje naun [tpcess od about to shut down.]

***

### ResizeTo()

> **ResizeTo**(`width`: `number`, `height`: `number`, `applyBrowserScaleOrDPIValue`: `number` \| `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:120](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L120)

Resizes the window to given dimension.
The window has to be created with the resizable flag.

#### Parameters

##### width

`number`

Window width.

##### height

`number`

Window height.

##### applyBrowserScaleOrDPIValue

`number` | `boolean`

#### Returns

`void`

***

### RestoreWindowSizeAndPosition()

> **RestoreWindowSizeAndPosition**(`details`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:126](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L126)

Moves the window to given details.

#### Parameters

##### details

`string`

Window details string from `Window.GetWindowRestoreDetails`.

#### Returns

`void`

***

### SetAutoDisplayScale()

> **SetAutoDisplayScale**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:128](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L128)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetComposition()

> **SetComposition**(`mode`: [`EUIComposition`](../enumerations/EUIComposition.md), `appIdCompositionQueue`: `number`[], `windowId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:130](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L130)

#### Parameters

##### mode

[`EUIComposition`](../enumerations/EUIComposition.md)

##### appIdCompositionQueue

`number`[]

##### windowId

`number`

#### Returns

`void`

***

### SetHideOnClose()

> **SetHideOnClose**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:136](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L136)

Makes the window hide, but not close on pressing the close button.

#### Parameters

##### value

`boolean`

Hide on close?

#### Returns

`void`

***

### SetKeyFocus()

> **SetKeyFocus**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:138](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L138)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetManualDisplayScaleFactor()

> **SetManualDisplayScaleFactor**(`displayScaleFactor`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:140](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L140)

#### Parameters

##### displayScaleFactor

`number`

#### Returns

`void`

***

### SetMaxSize()

> **SetMaxSize**(`width`: `number`, `height`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:147](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L147)

Sets the window's max size.

#### Parameters

##### width

`number`

Window's max width.

##### height

`number`

Window's max height.

#### Returns

`void`

***

### SetMinSize()

> **SetMinSize**(`width`: `number`, `height`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:154](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L154)

Sets the window's min size.

#### Parameters

##### width

`number`

Window's max width.

##### height

`number`

Window's max height.

#### Returns

`void`

***

### SetModal()

> **SetModal**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:156](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L156)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetResizeGrip()

> **SetResizeGrip**(`width`: `number`, `height`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:164](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L164)

Sets the window's resize grip size.
The window has to be created with the resizable flag for this to take any effect.

#### Parameters

##### width

`number`

Resize grip width.

##### height

`number`

Resize grip height.

#### Returns

`void`

***

### SetWindowIcon()

> **SetWindowIcon**(`icon`: [`WindowIcon_t`](../type-aliases/WindowIcon_t.md)): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:170](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L170)

Set the window's icon.

#### Parameters

##### icon

[`WindowIcon_t`](../type-aliases/WindowIcon_t.md)

The window icon to be used.

#### Returns

`void`

***

### ShowWindow()

> **ShowWindow**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:175](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L175)

Shows the window.

#### Returns

`void`

***

### StopFlashWindow()

> **StopFlashWindow**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:180](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L180)

Stops the window's taskbar flashing.

#### Returns

`void`

***

### ToggleFullscreen()

> **ToggleFullscreen**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:185](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L185)

Toggles the window's fullscreen state.

#### Returns

`void`

***

### ToggleMaximize()

> **ToggleMaximize**(): `void`

Defined in: [packages/client/src/globals/steam-client/Window.ts:190](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Window.ts#L190)

Toggles the window's maximized state.

#### Returns

`void`
