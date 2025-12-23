[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Browser

# Interface: Browser

Defined in: [packages/client/src/globals/steam-client/Browser.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L3)

## Properties

### RegisterForOpenNewTab

> **RegisterForOpenNewTab**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Browser.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L46)

#### Note

Not available on a created BrowserView.

## Methods

### AddWordToDictionary()

> **AddWordToDictionary**(`word`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L4)

#### Parameters

##### word

`string`

#### Returns

`void`

***

### ClearAllBrowsingData()

> **ClearAllBrowsingData**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L6)

#### Returns

`void`

***

### ClearHistory()

> **ClearHistory**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L8)

#### Returns

`void`

***

### CloseDevTools()

> **CloseDevTools**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L10)

#### Returns

`void`

***

### GetBrowserID()

> **GetBrowserID**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Browser.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L12)

#### Returns

`Promise`\<`number`\>

***

### GetSpellingSuggestions()

> **GetSpellingSuggestions**(`word`: `string`): `string`[]

Defined in: [packages/client/src/globals/steam-client/Browser.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L14)

#### Parameters

##### word

`string`

#### Returns

`string`[]

***

### GetSteamBrowserID()

> **GetSteamBrowserID**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Browser.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L16)

#### Returns

`Promise`\<`number`\>

***

### HideCursorUntilMouseEvent()

> **HideCursorUntilMouseEvent**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L21)

Hides the mouse cursor until input.

#### Returns

`void`

***

### InspectElement()

> **InspectElement**(`clientY`: `number`, `clientX`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L26)

yup that's right, clientY and clientX are reversed

#### Parameters

##### clientY

`number`

##### clientX

`number`

#### Returns

`void`

***

### NotifyUserActivation()

> **NotifyUserActivation**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L28)

#### Returns

`void`

***

### OpenDevTools()

> **OpenDevTools**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L30)

#### Returns

`void`

***

### Paste()

> **Paste**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:35](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L35)

Pastes the clipboard contents.

#### Returns

`void`

***

### RegisterForGestureEvents()

> **RegisterForGestureEvents**(`callback`: (`gesture`: [`TouchGesture`](TouchGesture.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Browser.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L41)

#### Parameters

##### callback

(`gesture`: [`TouchGesture`](TouchGesture.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Note

Not available on a created BrowserView.

#### Todo

unconfirmed

***

### ReplaceMisspelling()

> **ReplaceMisspelling**(`param0`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L48)

#### Parameters

##### param0

`string`

#### Returns

`void`

***

### RestartJSContext()

> **RestartJSContext**(): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L53)

Restarts the Steam JS context.

#### Returns

`void`

***

### SetBackgroundThrottlingDisabled()

> **SetBackgroundThrottlingDisabled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L55)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetPendingFilePath()

> **SetPendingFilePath**(`path`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Browser.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L57)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### SetShouldExitSteamOnBrowserClosed()

> **SetShouldExitSteamOnBrowserClosed**(`value`: `boolean`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/Browser.ts:59](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L59)

#### Parameters

##### value

`boolean`

#### Returns

`Promise`\<`void`\>

***

### SetTouchGesturesToCancel()

> **SetTouchGesturesToCancel**(`gestures`: [`ETouchGesture`](../enumerations/ETouchGesture.md)[]): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L61)

#### Parameters

##### gestures

[`ETouchGesture`](../enumerations/ETouchGesture.md)[]

#### Returns

`void`

***

### StartDownload()

> **StartDownload**(`url`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Browser.ts:67](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Browser.ts#L67)

Prompts and downloads a file.

#### Parameters

##### url

`string`

The URL of the file to download.

#### Returns

`void`
