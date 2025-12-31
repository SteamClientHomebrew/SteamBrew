[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Settings

# Interface: Settings

Defined in: [packages/client/src/globals/steam-client/Settings.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L4)

## Properties

### RegisterForMicVolumeUpdates

> **RegisterForMicVolumeUpdates**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Settings.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L51)

## Methods

### AddClientBeta()

> **AddClientBeta**(`name`: `string`, `password`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L5)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`void`

***

### ClearAllHTTPCaches()

> **ClearAllHTTPCaches**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L10)

Clears HTTP cache located in `<STEAMPATH>/appcache/httpcache`.

#### Returns

`void`

***

### ClearDownloadCache()

> **ClearDownloadCache**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L15)

Clears download cache and logs you out.

#### Returns

`void`

***

### GetAccountSettings()

> **GetAccountSettings**(): `Promise`\<[`AccountSettings`](AccountSettings.md)\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L17)

#### Returns

`Promise`\<[`AccountSettings`](AccountSettings.md)\>

***

### GetAppUsesP2PVoice()

> **GetAppUsesP2PVoice**(`appId`: `number`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L19)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<`boolean`\>

***

### GetAvailableLanguages()

> **GetAvailableLanguages**(): `Promise`\<[`Language`](Language.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L21)

#### Returns

`Promise`\<[`Language`](Language.md)[]\>

***

### GetAvailableTimeZones()

> **GetAvailableTimeZones**(): `Promise`\<[`TimeZone`](TimeZone.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L23)

#### Returns

`Promise`\<[`TimeZone`](TimeZone.md)[]\>

***

### GetCurrentLanguage()

> **GetCurrentLanguage**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L26)

#### Returns

`Promise`\<`string`\>

***

### GetGlobalCompatTools()

> **GetGlobalCompatTools**(): `Promise`\<[`CompatibilityTool`](CompatibilityTool.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L28)

#### Returns

`Promise`\<[`CompatibilityTool`](CompatibilityTool.md)[]\>

***

### GetMonitorInfo()

> **GetMonitorInfo**(): `Promise`\<`ArrayBuffer`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:33](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L33)

#### Returns

`Promise`\<`ArrayBuffer`\>

a ProtoBuf message. If deserialized, returns [MsgMonitorInfo](MsgMonitorInfo.md).

***

### GetOOBETestMode()

> **GetOOBETestMode**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:35](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L35)

#### Returns

`Promise`\<`boolean`\>

***

### GetRegisteredSteamDeck()

> **GetRegisteredSteamDeck**(): `Promise`\<[`RegisteredSteamDeck`](RegisteredSteamDeck.md)\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L37)

#### Returns

`Promise`\<[`RegisteredSteamDeck`](RegisteredSteamDeck.md)\>

***

### GetTimeZone()

> **GetTimeZone**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L40)

#### Returns

`Promise`\<`string`\>

***

### GetWindowed()

> **GetWindowed**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L42)

#### Returns

`Promise`\<`boolean`\>

***

### IgnoreSteamDeckRewards()

> **IgnoreSteamDeckRewards**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:44](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L44)

#### Returns

`void`

***

### OpenWindowsMicSettings()

> **OpenWindowsMicSettings**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L49)

Opens the Windows microphones dialog.

#### Returns

`void`

***

### RegisterForSettingsArrayChanges()

> **RegisterForSettingsArrayChanges**(`callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Settings.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L57)

If `data` is deserialized, returns [MsgClientSettings](MsgClientSettings.md).

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForSettingsChanges()

> **RegisterForSettingsChanges**(`callback`: (`settings`: `SteamSettings`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Settings.ts:59](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L59)

#### Parameters

##### callback

(`settings`: `SteamSettings`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForTimeZoneChange()

> **RegisterForTimeZoneChange**(`callback`: (`timezoneId`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Settings.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L61)

#### Parameters

##### callback

(`timezoneId`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### ReinitMicSettings()

> **ReinitMicSettings**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:62](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L62)

#### Returns

`void`

***

### RenderHotkey()

> **RenderHotkey**(`event`: [`KeyCaptureEvent`](KeyCaptureEvent.md)): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L64)

#### Parameters

##### event

[`KeyCaptureEvent`](KeyCaptureEvent.md)

#### Returns

`Promise`\<`string`\>

***

### RequestDeviceAuthInfo()

> **RequestDeviceAuthInfo**(): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L66)

#### Returns

`void`

***

### SelectClientBeta()

> **SelectClientBeta**(`nBetaID`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L68)

#### Parameters

##### nBetaID

`number`

#### Returns

`void`

***

### SetCurrentLanguage()

> **SetCurrentLanguage**(`strShortName`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:71](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L71)

#### Parameters

##### strShortName

`string`

#### Returns

`void`

***

### SetEnableSoftProcessKill()

> **SetEnableSoftProcessKill**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L73)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetHostname()

> **SetHostname**(`hostname`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L75)

#### Parameters

##### hostname

`string`

#### Returns

`void`

***

### SetMicTestMode()

> **SetMicTestMode**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L77)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetOOBETestMode()

> **SetOOBETestMode**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L79)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetPreferredMonitor()

> **SetPreferredMonitor**(`monitor`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L81)

#### Parameters

##### monitor

`string`

#### Returns

`void`

***

### SetRegisteredSteamDeck()

> **SetRegisteredSteamDeck**(`steam64Id`: `string`, `serialNumber`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L83)

#### Parameters

##### steam64Id

`string`

##### serialNumber

`string`

#### Returns

`void`

***

### SetSaveAccountCredentials()

> **SetSaveAccountCredentials**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L89)

Sets the "Don't save account credentials on this computer" option.

#### Parameters

##### value

`boolean`

Whether to save account credentials.

#### Returns

`void`

***

### SetSetting()

> **SetSetting**(`base64`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:95](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L95)

#### Parameters

##### base64

`string`

Serialized base64 message from `CMsgClientSettings`.

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the operation was successful.

***

### SetTimeZone()

> **SetTimeZone**(`timezoneId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:100](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L100)

You can get valid timezoneIds from [GetAvailableTimeZones](#getavailabletimezones).

#### Parameters

##### timezoneId

`string`

#### Returns

`void`

***

### SetUseNintendoButtonLayout()

> **SetUseNintendoButtonLayout**(`controllerIndex`: `number`, `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L102)

#### Parameters

##### controllerIndex

`number`

##### value

`boolean`

#### Returns

`void`

***

### SetUseUniversalFaceButtonGlyphs()

> **SetUseUniversalFaceButtonGlyphs**(`nControllerIndex`: `number`, `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:104](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L104)

#### Parameters

##### nControllerIndex

`number`

##### value

`boolean`

#### Returns

`void`

***

### SetWindowed()

> **SetWindowed**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:106](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L106)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SpecifyGlobalCompatTool()

> **SpecifyGlobalCompatTool**(`strToolName`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Settings.ts:108](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L108)

#### Parameters

##### strToolName

`string`

#### Returns

`void`

***

### ToggleSteamInstall()

> **ToggleSteamInstall**(): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Settings.ts:110](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Settings.ts#L110)

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>
