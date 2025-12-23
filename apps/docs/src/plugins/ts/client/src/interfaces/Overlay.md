[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Overlay

# Interface: Overlay

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L3)

## Methods

### DestroyGamePadUIDesktopConfiguratorWindow()

> **DestroyGamePadUIDesktopConfiguratorWindow**(): `void`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L7)

Destroys the gamepad UI desktop configurator window if open.

#### Returns

`void`

***

### GetOverlayBrowserInfo()

> **GetOverlayBrowserInfo**(): `Promise`\<[`OverlayBrowserInfo`](OverlayBrowserInfo.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L9)

#### Returns

`Promise`\<[`OverlayBrowserInfo`](OverlayBrowserInfo.md)[]\>

***

### HandleGameWebCallback()

> **HandleGameWebCallback**(`url`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L12)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### HandleProtocolForOverlayBrowser()

> **HandleProtocolForOverlayBrowser**(`appId`: `number`, `protocol`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L17)

#### Parameters

##### appId

`number`

##### protocol

`string`

Something like [OverlayBrowserProtocols.strScheme](OverlayBrowserProtocols.md#strscheme)

#### Returns

`void`

***

### RegisterForActivateOverlayRequests()

> **RegisterForActivateOverlayRequests**(`callback`: (`request`: [`ActivateOverlayRequest`](ActivateOverlayRequest.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L24)

Registers a callback function to be called when an overlay is activated from an app.

#### Parameters

##### callback

(`request`: [`ActivateOverlayRequest`](ActivateOverlayRequest.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForMicroTxnAuth()

> **RegisterForMicroTxnAuth**(`callback`: (`appId`: `number`, `microTxnId`: `string`, `realm`: [`ESteamRealm`](../enumerations/ESteamRealm.md), `microTxnUrl`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:31](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L31)

Registers a callback function to be called when a microtransaction authorization is requested.

#### Parameters

##### callback

(`appId`: `number`, `microTxnId`: `string`, `realm`: [`ESteamRealm`](../enumerations/ESteamRealm.md), `microTxnUrl`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForMicroTxnAuthDismiss()

> **RegisterForMicroTxnAuthDismiss**(`callback`: (`appId`: `number`, `microTxnId`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L40)

Registers a callback function to be called when a microtransaction authorization is dismissed by the user in Steam's authorization page.

#### Parameters

##### callback

(`appId`: `number`, `microTxnId`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForNotificationPositionChanged()

> **RegisterForNotificationPositionChanged**(`callback`: (`appId`: `number`, `position`: [`ENotificationPosition`](../enumerations/ENotificationPosition.md), `horizontalInset`: `number`, `verticalInset`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L42)

#### Parameters

##### callback

(`appId`: `number`, `position`: [`ENotificationPosition`](../enumerations/ENotificationPosition.md), `horizontalInset`: `number`, `verticalInset`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForOverlayActivated()

> **RegisterForOverlayActivated**(`callback`: (`overlayProcessPid`: `number`, `appId`: `number`, `active`: `boolean`, `param3`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L51)

Registers a callback function to be called when an overlay is activated or closed.

#### Parameters

##### callback

(`overlayProcessPid`: `number`, `appId`: `number`, `active`: `boolean`, `param3`: `boolean`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForOverlayBrowserProtocols()

> **RegisterForOverlayBrowserProtocols**(`callback`: (`browseProtocols`: [`OverlayBrowserProtocols`](OverlayBrowserProtocols.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L60)

Registers a callback function to be called when the overlay browser protocols change.

#### Parameters

##### callback

(`browseProtocols`: [`OverlayBrowserProtocols`](OverlayBrowserProtocols.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterOverlayBrowserInfoChanged()

> **RegisterOverlayBrowserInfoChanged**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:70](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L70)

Registers **the** callback function to be called when the overlay browser information changes.

#### Parameters

##### callback

() => `void`

The callback function to be called when the overlay browser information changes.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

#### Remarks

Do Not Use, this will break the overlay unless you know what you are doing.

***

### SetOverlayState()

> **SetOverlayState**(`appId`: `string`, `state`: [`EUIComposition`](../enumerations/EUIComposition.md)): `void`

Defined in: [packages/client/src/globals/steam-client/Overlay.ts:72](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Overlay.ts#L72)

#### Parameters

##### appId

`string`

##### state

[`EUIComposition`](../enumerations/EUIComposition.md)

#### Returns

`void`
