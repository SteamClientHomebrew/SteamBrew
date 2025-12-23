[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / UI

# Interface: UI

Defined in: [packages/client/src/globals/steam-client/UI.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L4)

## Methods

### EnsureMainWindowCreated()

> **EnsureMainWindowCreated**(): `void`

Defined in: [packages/client/src/globals/steam-client/UI.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L5)

#### Returns

`void`

***

### ExitBigPictureMode()

> **ExitBigPictureMode**(): `void`

Defined in: [packages/client/src/globals/steam-client/UI.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L7)

#### Returns

`void`

***

### GetDesiredSteamUIWindows()

> **GetDesiredSteamUIWindows**(): `Promise`\<[`SteamWindow`](SteamWindow.md)[]\>

Defined in: [packages/client/src/globals/steam-client/UI.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L9)

#### Returns

`Promise`\<[`SteamWindow`](SteamWindow.md)[]\>

***

### GetOSEndOfLifeInfo()

> **GetOSEndOfLifeInfo**(): `Promise`\<[`OSEndOfLifeInfo`](OSEndOfLifeInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/UI.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L14)

Gets information about whether your OS will be unsupported in the future or not.

#### Returns

`Promise`\<[`OSEndOfLifeInfo`](OSEndOfLifeInfo.md)\>

***

### GetUIMode()

> **GetUIMode**(): `Promise`\<[`EUIMode`](../enumerations/EUIMode.md)\>

Defined in: [packages/client/src/globals/steam-client/UI.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L20)

Retrieves the current UI mode.

#### Returns

`Promise`\<[`EUIMode`](../enumerations/EUIMode.md)\>

the current UI mode.

***

### NotifyAppInitialized()

> **NotifyAppInitialized**(): `void`

Defined in: [packages/client/src/globals/steam-client/UI.ts:22](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L22)

#### Returns

`void`

***

### RegisterDesiredSteamUIWindowsChanged()

> **RegisterDesiredSteamUIWindowsChanged**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L24)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForClientConVar()

> **RegisterForClientConVar**(`convar`: `string`, `callback`: (`value`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L34)

Registers a callback function to be called when a convar's value gets changed.

Hard crashes if such a convar does not exist or if you can't set it.

#### Parameters

##### convar

`string`

The ConVar to watch.

##### callback

(`value`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForErrorCondition()

> **RegisterForErrorCondition**(`callback`: (`param0`: `number`, `param1`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L39)

#### Parameters

##### callback

(`param0`: `number`, `param1`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Todo

param{0,1} are enums

***

### RegisterForKioskModeResetSignal()

> **RegisterForKioskModeResetSignal**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L41)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForStartupFinished()

> **RegisterForStartupFinished**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L46)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Todo

This fires multiple times.

***

### RegisterForUIModeChanged()

> **RegisterForUIModeChanged**(`callback`: (`mode`: [`EUIMode`](../enumerations/EUIMode.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/UI.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L48)

#### Parameters

##### callback

(`mode`: [`EUIMode`](../enumerations/EUIMode.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### ResetErrorCondition()

> **ResetErrorCondition**(): `void`

Defined in: [packages/client/src/globals/steam-client/UI.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L50)

#### Returns

`void`

***

### SetUIMode()

> **SetUIMode**(`mode`: [`EUIMode`](../enumerations/EUIMode.md)): `void`

Defined in: [packages/client/src/globals/steam-client/UI.ts:56](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/UI.ts#L56)

Sets the UI mode to the specified value.

#### Parameters

##### mode

[`EUIMode`](../enumerations/EUIMode.md)

The UI mode to set.

#### Returns

`void`
