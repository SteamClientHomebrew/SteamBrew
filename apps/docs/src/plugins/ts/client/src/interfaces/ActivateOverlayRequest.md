[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ActivateOverlayRequest

# Interface: ActivateOverlayRequest

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:106](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L106)

## Properties

### appid

> **appid**: `number`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:110](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L110)

The app ID that just had an overlay request.

***

### bWebPage

> **bWebPage**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:115](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L115)

`true` if webpage, and so [strDialog](#strdialog) will start with `https://`.

***

### eFlag

> **eFlag**: [`EOverlayToStoreFlag`](../enumerations/EOverlayToStoreFlag.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:117](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L117)

***

### eWebPageMode

> **eWebPageMode**: [`EActivateGameOverlayToWebPageMode`](../enumerations/EActivateGameOverlayToWebPageMode.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:119](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L119)

***

### steamidTarget

> **steamidTarget**: `string`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:124](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L124)

Steam64 ID.

***

### strConnectString

> **strConnectString**: `string`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L129)

Game invites string for `Friends.InviteUserToGame`.

***

### strDialog

> **strDialog**: `OverlayRequestDialog_t`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:134](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L134)

Web page URL if starts with `https://`, so cast the type to `string` if it is.

***

### unRequestingAppID

> **unRequestingAppID**: `number`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:139](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L139)

App ID of the requesting game.
