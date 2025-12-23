[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Parental

# Interface: Parental

Defined in: [packages/client/src/globals/steam-client/Parental.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L6)

Interface for managing parental control settings.

## Methods

### LockParentalLock()

> **LockParentalLock**(): `void`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L10)

Locks the parental control settings.

#### Returns

`void`

***

### RegisterForParentalPlaytimeWarnings()

> **RegisterForParentalPlaytimeWarnings**(`callback`: (`time`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Parental.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L12)

#### Parameters

##### callback

(`time`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForParentalSettingsChanges()

> **RegisterForParentalSettingsChanges**(`callback`: (`settings`: [`ParentalSettings`](ParentalSettings.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Parental.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L19)

Registers a callback function to be invoked when parental settings change.

#### Parameters

##### callback

(`settings`: [`ParentalSettings`](ParentalSettings.md)) => `void`

The callback function to be invoked when parental settings change.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### UnlockParentalLock()

> **UnlockParentalLock**(`pin`: `string`, `param1`: `boolean`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/Parental.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L26)

Unlocks the parental lock with the provided PIN.

#### Parameters

##### pin

`string`

The 4-digit PIN to unlock the parental lock.

##### param1

`boolean`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

a number representing the result of the unlock operation.
