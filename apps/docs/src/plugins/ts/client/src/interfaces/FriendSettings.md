[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / FriendSettings

# Interface: FriendSettings

Defined in: [packages/client/src/globals/steam-client/FriendSettings.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/FriendSettings.ts#L6)

Represents friend settings and configuration.

## Methods

### GetEnabledFeatures()

> **GetEnabledFeatures**(): `Promise`\<[`FriendSettingsFeatureObject`](FriendSettingsFeatureObject.md)[]\>

Defined in: [packages/client/src/globals/steam-client/FriendSettings.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/FriendSettings.ts#L11)

Retrieves a list of enabled friend settings features.

#### Returns

`Promise`\<[`FriendSettingsFeatureObject`](FriendSettingsFeatureObject.md)[]\>

an array of enabled friend settings features.

***

### RegisterForSettingsChanges()

> **RegisterForSettingsChanges**(`callback`: (`settings`: `string`) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/FriendSettings.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/FriendSettings.ts#L18)

Registers a callback function to be notified of friend settings changes.

#### Parameters

##### callback

(`settings`: `string`) => `void`

The callback function to be called when friend settings change.

#### Returns

`void`

#### Remarks

The callback receives a JSON object string which may be parsed into [FriendSettingsChange](FriendSettingsChange.md).

***

### SetFriendSettings()

> **SetFriendSettings**(`details`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/FriendSettings.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/FriendSettings.ts#L23)

#### Parameters

##### details

`string`

Stringified [FriendSettingsChange](FriendSettingsChange.md).

#### Returns

`void`
