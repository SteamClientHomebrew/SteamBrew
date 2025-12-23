[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Updates

# Interface: Updates

Defined in: [packages/client/src/globals/steam-client/Updates.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L3)

## Methods

### ApplyUpdates()

> **ApplyUpdates**(`base64`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Updates.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L7)

#### Parameters

##### base64

`string`

Serialized base64 message from `CMsgSystemUpdateApplyParams`.

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>

***

### CheckForUpdates()

> **CheckForUpdates**(): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Updates.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L9)

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>

***

### GetCurrentOSBranch()

> **GetCurrentOSBranch**(): `Promise`\<[`OSBranch`](OSBranch.md)\>

Defined in: [packages/client/src/globals/steam-client/Updates.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L11)

#### Returns

`Promise`\<[`OSBranch`](OSBranch.md)\>

***

### GetOSBranchList()

> **GetOSBranchList**(): `Promise`\<`any`[]\>

Defined in: [packages/client/src/globals/steam-client/Updates.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L13)

#### Returns

`Promise`\<`any`[]\>

***

### RegisterForUpdateStateChanges()

> **RegisterForUpdateStateChanges**(`callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Updates.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L19)

If `data` is deserialized, returns [MsgSystemUpdateState](MsgSystemUpdateState.md).

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

a ProtoBuf message.

***

### SelectOSBranch()

> **SelectOSBranch**(`base64`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Updates.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Updates.ts#L24)

#### Parameters

##### base64

`string`

Serialized base64 message from `CMsgSelectOSBranchParams`.

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>
