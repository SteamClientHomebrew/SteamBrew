[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Broadcast

# Interface: Broadcast

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L3)

## Methods

### ApproveViewerRequest()

> **ApproveViewerRequest**(`steamId64`: `string`, `param1`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L8)

Approves a viewer request for the broadcast.

#### Parameters

##### steamId64

`string`

The SteamID64 of the user whose request is to be approved.

##### param1

`number`

#### Returns

`void`

***

### InviteToWatch()

> **InviteToWatch**(`steamId64`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L14)

Invites a user identified by their SteamID64 to watch the broadcast.

#### Parameters

##### steamId64

`string`

The SteamID64 of the user to invite.

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### RegisterForBroadcastStatus()

> **RegisterForBroadcastStatus**(`callback`: (`status`: [`BroadcastStatus`](BroadcastStatus.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L21)

Registers a callback to be called when the broadcast status changes.

#### Parameters

##### callback

(`status`: [`BroadcastStatus`](BroadcastStatus.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForViewerRequests()

> **RegisterForViewerRequests**(`callback`: (`viewerFriendCode`: `number`, `param1`: `number`, `param2`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L28)

Registers a callback to be called when viewer requests are received.

#### Parameters

##### callback

(`viewerFriendCode`: `number`, `param1`: `number`, `param2`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RejectViewerRequest()

> **RejectViewerRequest**(`steamId64`: `string`, `param1`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L36)

Rejects a viewer request for the broadcast.

#### Parameters

##### steamId64

`string`

The SteamID64 of the user whose request is to be rejected.

##### param1

`number`

#### Returns

`void`

***

### StopBroadcasting()

> **StopBroadcasting**(): `void`

Defined in: [packages/client/src/globals/steam-client/Broadcast.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Broadcast.ts#L41)

Stops the broadcast.

#### Returns

`void`
