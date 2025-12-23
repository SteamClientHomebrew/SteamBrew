[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Cloud

# Interface: Cloud

Defined in: [packages/client/src/globals/steam-client/Cloud.ts:1](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Cloud.ts#L1)

## Methods

### ResolveAppSyncConflict()

> **ResolveAppSyncConflict**(`appId`: `number`, `keepLocal`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Cloud.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Cloud.ts#L7)

Resolves a synchronization conflict for an app in the cloud.

#### Parameters

##### appId

`number`

The ID of the app with the sync conflict.

##### keepLocal

`boolean`

Whether to keep the local version during conflict resolution.

#### Returns

`void`

***

### RetryAppSync()

> **RetryAppSync**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Cloud.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Cloud.ts#L13)

Retries syncing an app with the cloud.

#### Parameters

##### appId

`number`

The ID of the app to retry syncing.

#### Returns

`void`
