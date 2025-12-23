[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / BrowserView

# Interface: BrowserView

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L5)

## Methods

### Create()

> **Create**(`options?`: [`BrowserViewCreateOptions`](BrowserViewCreateOptions.md)): [`BrowserViewPopup`](BrowserViewPopup.md)

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L9)

#### Parameters

##### options?

[`BrowserViewCreateOptions`](BrowserViewCreateOptions.md)

#### Returns

[`BrowserViewPopup`](BrowserViewPopup.md)

#### Note

Not available on a created BrowserView.

***

### CreatePopup()

> **CreatePopup**(`options?`: [`BrowserViewCreateOptions`](BrowserViewCreateOptions.md)): \{ `browserView`: [`BrowserViewPopup`](BrowserViewPopup.md); `strCreateURL`: `string`; \}

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L20)

Like [Create](#create), but:

- Lets you create a BrowserView with
`window.open()` instead, while still letting you control the BrowserView
the same way.

#### Parameters

##### options?

[`BrowserViewCreateOptions`](BrowserViewCreateOptions.md)

#### Returns

##### browserView

> **browserView**: [`BrowserViewPopup`](BrowserViewPopup.md)

##### strCreateURL

> **strCreateURL**: `string`

URL to use with `window.open()`.

#### Note

Not available on a created BrowserView.

***

### Destroy()

> **Destroy**(`browserView`: [`BrowserViewPopup`](BrowserViewPopup.md)): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:31](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L31)

#### Parameters

##### browserView

[`BrowserViewPopup`](BrowserViewPopup.md)

#### Returns

`void`

#### Note

Not available on a created BrowserView.

***

### PostMessageToParent()

> **PostMessageToParent**(`message`: `string`, `args`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L36)

#### Parameters

##### message

`string`

##### args

`string`

#### Returns

`void`

#### Note

Only works on a created BrowserView.

***

### RegisterForMessageFromParent()

> **RegisterForMessageFromParent**(`callback`: (`message`: `string`, `args`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/browser-view/index.ts:44](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/index.ts#L44)

Register a callback to be called when a message gets sent with
[BrowserViewPopup.PostMessage](BrowserViewPopup.md#postmessage).

#### Parameters

##### callback

(`message`: `string`, `args`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Note

Only available on a created BrowserView.
