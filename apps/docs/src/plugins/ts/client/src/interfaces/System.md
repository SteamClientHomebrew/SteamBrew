[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / System

# Interface: System

Defined in: [packages/client/src/globals/steam-client/system/index.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L14)

## Properties

### Audio

> **Audio**: `Audio`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L15)

***

### AudioDevice

> **AudioDevice**: `AudioDevice`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L16)

***

### Bluetooth

> **Bluetooth**: `Bluetooth`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L17)

***

### Devkit

> **Devkit**: `Devkit`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L39)

***

### Display

> **Display**: `Display`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L40)

***

### DisplayManager

> **DisplayManager**: `DisplayManager`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L41)

***

### Dock

> **Dock**: `Dock`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L42)

***

### Network

> **Network**: `Network`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L66)

***

### Perf

> **Perf**: `Perf`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:84](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L84)

***

### Report

> **Report**: `Report`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:105](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L105)

***

### UI

> **UI**: `UI`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:128](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L128)

***

### UpdateSettings

> **UpdateSettings**: `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L129)

## Methods

### CopyFile()

> **CopyFile**(`target`: `string`, `destination`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:22](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L22)

#### Parameters

##### target

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the operation succeeded.

***

### CopyFilesToClipboard()

> **CopyFilesToClipboard**(`paths`: `string`[]): `void`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L29)

Copies specified files to clipboard.
Does not throw if not found.

#### Parameters

##### paths

`string`[]

File paths to copy.

#### Returns

`void`

***

### CreateTempPath()

> **CreateTempPath**(`path`: `string`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L37)

Creates a temporary folder.

#### Parameters

##### path

`string`

The folder to create.

#### Returns

`Promise`\<`string`\>

the created path.

#### Todo

Does this support relative paths ? this has some weird behavior

***

### ExitFakeCaptivePortal()

> **ExitFakeCaptivePortal**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:44](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L44)

#### Returns

`any`

***

### FactoryReset()

> **FactoryReset**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L46)

#### Returns

`any`

***

### FormatStorage()

> **FormatStorage**(`force`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L48)

#### Parameters

##### force

`boolean`

#### Returns

`any`

***

### GetOSType()

> **GetOSType**(): `Promise`\<[`EOSType`](../enumerations/EOSType.md)\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L50)

#### Returns

`Promise`\<[`EOSType`](../enumerations/EOSType.md)\>

***

### GetSystemInfo()

> **GetSystemInfo**(): `Promise`\<[`SystemInfo`](SystemInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L52)

#### Returns

`Promise`\<[`SystemInfo`](SystemInfo.md)\>

***

### IsDeckFactoryImage()

> **IsDeckFactoryImage**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:54](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L54)

#### Returns

`Promise`\<`boolean`\>

***

### IsSteamInTournamentMode()

> **IsSteamInTournamentMode**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:56](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L56)

#### Returns

`Promise`\<`boolean`\>

***

### MoveFile()

> **MoveFile**(`target`: `string`, `destination`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L64)

Moves a file.

#### Parameters

##### target

`string`

Target file/folder.

##### destination

`string`

Destination path.

#### Returns

`void`

#### Remarks

Does not throw on error.

***

### NotifyGameOverlayStateChanged()

> **NotifyGameOverlayStateChanged**(`latestAppOverlayStateActive`: `boolean`, `appId`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L68)

#### Parameters

##### latestAppOverlayStateActive

`boolean`

##### appId

`number`

#### Returns

`any`

***

### OpenFileDialog()

> **OpenFileDialog**(`prefs`: [`FileDialog`](FileDialog.md)): `Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:76](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L76)

Open a dialog for choosing a file.

#### Parameters

##### prefs

[`FileDialog`](FileDialog.md)

Dialog preferences.

#### Returns

`Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

the selected file name.

#### Throws

OperationResponse if no file was selected.

***

### OpenInSystemBrowser()

> **OpenInSystemBrowser**(`url`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L81)

Open a URL in the default web browser.

#### Parameters

##### url

`string`

#### Returns

`void`

***

### OpenLocalDirectoryInSystemExplorer()

> **OpenLocalDirectoryInSystemExplorer**(`directory`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L83)

#### Parameters

##### directory

`string`

#### Returns

`void`

***

### RebootToAlternateSystemPartition()

> **RebootToAlternateSystemPartition**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L86)

#### Returns

`any`

***

### RebootToFactoryTestImage()

> **RebootToFactoryTestImage**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L88)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### RegisterForAirplaneModeChanges()

> **RegisterForAirplaneModeChanges**(`callback`: (`state`: [`AirplaneModeState`](AirplaneModeState.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:90](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L90)

#### Parameters

##### callback

(`state`: [`AirplaneModeState`](AirplaneModeState.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForBatteryStateChanges()

> **RegisterForBatteryStateChanges**(`callback`: (`state`: [`BatteryState`](BatteryState.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L92)

#### Parameters

##### callback

(`state`: [`BatteryState`](BatteryState.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForFormatStorageProgress()

> **RegisterForFormatStorageProgress**(`callback`: (`progress`: [`FormatStorageProgress`](FormatStorageProgress.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:94](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L94)

#### Parameters

##### callback

(`progress`: [`FormatStorageProgress`](FormatStorageProgress.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForOnResumeFromSuspend()

> **RegisterForOnResumeFromSuspend**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:96](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L96)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForOnSuspendRequest()

> **RegisterForOnSuspendRequest**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:98](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L98)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForSettingsChanges()

> **RegisterForSettingsChanges**(`callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/system/index.ts:103](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L103)

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

a ProtoBuf message. If deserialized, returns [CMsgSystemManagerSettings](CMsgSystemManagerSettings.md).

***

### RestartPC()

> **RestartPC**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:110](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L110)

Restarts the system.

#### Returns

`any`

***

### SetAirplaneMode()

> **SetAirplaneMode**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:112](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L112)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### ShutdownPC()

> **ShutdownPC**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:114](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L114)

#### Returns

`any`

***

### SteamRuntimeSystemInfo()

> **SteamRuntimeSystemInfo**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/system/index.ts:116](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L116)

#### Returns

`Promise`\<`string`\>

***

### SuspendPC()

> **SuspendPC**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:121](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L121)

Suspends the system.

#### Returns

`any`

***

### SwitchToDesktop()

> **SwitchToDesktop**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:126](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L126)

Switches to desktop mode.

#### Returns

`any`

***

### VideoRecordingDriverCheck()

> **VideoRecordingDriverCheck**(): `any`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:131](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L131)

#### Returns

`any`
