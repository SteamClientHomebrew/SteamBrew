[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Friends

# Interface: Friends

Defined in: [packages/client/src/globals/steam-client/Friends.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L6)

Represents functions related to managing friends in Steam.

## Methods

### AddFriend()

> **AddFriend**(`steamId`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L12)

Adds a user to the friend list.

#### Parameters

##### steamId

`string`

The Steam ID of the user to add as a friend.

#### Returns

`Promise`\<`boolean`\>

`true` if the friend was added successfully.

***

### GetCoplayData()

> **GetCoplayData**(): `Promise`\<[`CoplayData`](CoplayData.md)\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L17)

#### Returns

`Promise`\<[`CoplayData`](CoplayData.md)\>

a list of players you recently played with.

***

### InviteUserToCurrentGame()

> **InviteUserToCurrentGame**(`steam64Id`: `string`, `steamIdTarget`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L19)

#### Parameters

##### steam64Id

`string`

##### steamIdTarget

`string`

#### Returns

`Promise`\<`boolean`\>

***

### InviteUserToGame()

> **InviteUserToGame**(`steamId`: `string`, `appId`: `number`, `connectString`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L28)

Invites a user to a specific game.

#### Parameters

##### steamId

`string`

The Steam ID of the user to invite.

##### appId

`number`

The ID of the game to invite the user to.

##### connectString

`string`

Additional parameters for the invitation.

#### Returns

`Promise`\<`boolean`\>

`true` if the user was invited successfully.

***

### InviteUserToLobby()

> **InviteUserToLobby**(`steam64Id`: `string`, `steamIdTarget`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L34)

Invites a user to a specific lobby.

#### Parameters

##### steam64Id

`string`

##### steamIdTarget

`string`

#### Returns

`Promise`\<`boolean`\>

`true` if the user was invited successfully.

***

### InviteUserToRemotePlayTogetherCurrentGame()

> **InviteUserToRemotePlayTogetherCurrentGame**(`steam64Id`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L36)

#### Parameters

##### steam64Id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### RegisterForMultiplayerSessionShareURLChanged()

> **RegisterForMultiplayerSessionShareURLChanged**(`appId`: `number`, `callback`: (`param0`: `string`, `param1`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Friends.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L38)

#### Parameters

##### appId

`number`

##### callback

(`param0`: `string`, `param1`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForVoiceChatStatus()

> **RegisterForVoiceChatStatus**(`callback`: (`status`: [`VoiceChatStatus`](VoiceChatStatus.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Friends.ts:43](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L43)

#### Parameters

##### callback

(`status`: [`VoiceChatStatus`](VoiceChatStatus.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RemoveFriend()

> **RemoveFriend**(`steamId`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Friends.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L50)

Removes a user from the friend list.

#### Parameters

##### steamId

`string`

The Steam ID of the user to remove from the friend list.

#### Returns

`Promise`\<`boolean`\>

`true` if the friend was removed successfully.

***

### ShowRemotePlayTogetherUI()

> **ShowRemotePlayTogetherUI**(): `void`

Defined in: [packages/client/src/globals/steam-client/Friends.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Friends.ts#L52)

#### Returns

`void`
