[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ServerBrowser

# Interface: ServerBrowser

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L6)

Represents functionality for the server browser.

## Methods

### AddFavoriteServer()

> **AddFavoriteServer**(`server`: [`GameServer`](GameServer.md)): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L12)

Adds a favorite server.

#### Parameters

##### server

[`GameServer`](GameServer.md)

The server to add.

#### Returns

`Promise`\<`string`\>

an empty string if successful, `Invalid/missing IPv4?` if failed.

***

### AddFavoriteServersByIP()

> **AddFavoriteServersByIP**(`ip`: `string`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L19)

Adds a favorite server by IP.

#### Parameters

##### ip

`string`

The IP to add to favorite servers.

#### Returns

`Promise`\<`string`\>

an empty string if successful, localization string if failed.

***

### CancelServerQuery()

> **CancelServerQuery**(`dialogId`: `number`, `queryServer`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L21)

#### Parameters

##### dialogId

`number`

##### queryServer

`number`

#### Returns

`void`

***

### ConnectToServer()

> **ConnectToServer**(`dialogId`: `number`, `password`: `string`): `Promise`\<[`EJoinServerError`](../enumerations/EJoinServerError.md)\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L29)

Connects to a server from a given dialog.

#### Parameters

##### dialogId

`number`

The dialog ID to use.

##### password

`string`

Server password, empty if none.

#### Returns

`Promise`\<[`EJoinServerError`](../enumerations/EJoinServerError.md)\>

a connection status.

***

### CreateFriendGameInfoDialog()

> **CreateFriendGameInfoDialog**(`pid`: `number`, `steamId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L36)

Creates a server info dialog for the server your friend is currently playing on.

#### Parameters

##### pid

`number`

0

##### steamId

`string`

A Steam64 ID of a friend.

#### Returns

`void`

***

### CreateServerGameInfoDialog()

> **CreateServerGameInfoDialog**(`ip`: `string`, `port`: `number`, `queryPort`: `number`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L45)

Creates a server info dialog.

#### Parameters

##### ip

`string`

The server IP.

##### port

`number`

The server port.

##### queryPort

`number`

#### Returns

`Promise`\<`number`\>

the created dialog ID.

***

### CreateServerListRequest()

> **CreateServerListRequest**(`appId`: `number`, `queryType`: [`ServerBrowserTab_t`](../type-aliases/ServerBrowserTab_t.md), `filters`: `string`[], `serverCallback`: (`server`: [`GameServer`](GameServer.md)) => `void`, `requestCompletedCallback`: (`response`: `number`) => `void`): `Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:98](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L98)

Retrieves the server list.

#### Parameters

##### appId

`number`

The game ID, 0 for every game.

##### queryType

[`ServerBrowserTab_t`](../type-aliases/ServerBrowserTab_t.md)

The tab to use.

##### filters

`string`[]

Server filters.

##### serverCallback

(`server`: [`GameServer`](GameServer.md)) => `void`

What to do with the found server?

##### requestCompletedCallback

(`response`: `number`) => `void`

The callback function to be called when the request is completed.

#### Returns

`Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

the current server list request ID.

#### Throws

Throws if the query type is unknown.

#### Throws

Throws if the filter list isn't key/value pairs, i.e. of an even length.

#### Remarks

Stops at 10000 if there are more servers to be found.

#### Example

Filter examples, may be combined:
```
[ 'gamedir', 'cstrike' ] // Doesn't work?
[ 'hasplayers', '1' ] // Only works with "1"?
[ 'notfull', '1' ] // Doesn't work?
[ 'map', 'cs_office' ] // Has to be an exact match!
```

***

### DestroyGameInfoDialog()

> **DestroyGameInfoDialog**(`dialogId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L111)

Destroys the game info dialog functions (but not the window).

#### Parameters

##### dialogId

`number`

The dialog ID to use.

#### Returns

`void`

#### Remarks

ServerBrowser.CancelServerQuery may throw if it tries to ping the server.

***

### DestroyServerListRequest()

> **DestroyServerListRequest**(`activeServerListRequestId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:117](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L117)

Stops retrieving the server list.

#### Parameters

##### activeServerListRequestId

`number`

The active server request ID to use.

#### Returns

`void`

***

### GetMultiplayerGames()

> **GetMultiplayerGames**(): `Promise`\<[`ServerBrowserGame`](ServerBrowserGame.md)[]\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L123)

Gets a list of games that support the server browser feature.

#### Returns

`Promise`\<[`ServerBrowserGame`](ServerBrowserGame.md)[]\>

a list of games.

***

### GetServerListPreferences()

> **GetServerListPreferences**(): `Promise`\<[`ServerBrowserPreferences`](ServerBrowserPreferences.md)\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L129)

Gets the server browser preferences.

#### Returns

`Promise`\<[`ServerBrowserPreferences`](ServerBrowserPreferences.md)\>

server browser preferences.

***

### PingServer()

> **PingServer**(`dialogId`: `number`): `Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:135](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L135)

Pings the server of a specified dialog ID.

#### Parameters

##### dialogId

`number`

The dialog ID to use.

#### Returns

`Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

***

### RegisterForFavorites()

> **RegisterForFavorites**(`callback`: (`list`: [`ServerBrowserFavoritesAndHistory`](ServerBrowserFavoritesAndHistory.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:142](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L142)

Registers a callback function to be called when a server gets added to favorite servers.

#### Parameters

##### callback

(`list`: [`ServerBrowserFavoritesAndHistory`](ServerBrowserFavoritesAndHistory.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForFriendGamePlayed()

> **RegisterForFriendGamePlayed**(`dialogId`: `number`, `callback`: (`server`: [`ServerBrowserFriendServer`](ServerBrowserFriendServer.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:150](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L150)

Registers a callback function to be called when idk

#### Parameters

##### dialogId

`number`

The dialog ID to use.

##### callback

(`server`: [`ServerBrowserFriendServer`](ServerBrowserFriendServer.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForGameInfoDialogs()

> **RegisterForGameInfoDialogs**(`callback`: (`dialogs`: [`ServerBrowserDialog`](ServerBrowserDialog.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:160](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L160)

Registers a callback function to be called when a server info dialog opens.

#### Parameters

##### callback

(`dialogs`: [`ServerBrowserDialog`](ServerBrowserDialog.md)[]) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForPlayerDetails()

> **RegisterForPlayerDetails**(`dialogId`: `number`, `callback`: (`player`: [`PlayerDetails`](PlayerDetails.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:168](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L168)

Registers a callback function to be called when player details get requested.

#### Parameters

##### dialogId

`number`

The dialog ID to use.

##### callback

(`player`: [`PlayerDetails`](PlayerDetails.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForServerInfo()

> **RegisterForServerInfo**(`dialogId`: `number`, `callback`: (`server`: [`GameServer`](GameServer.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:179](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L179)

Registers a callback function to be called when a server gets pinged.

#### Parameters

##### dialogId

`number`

The dialog ID to use.

##### callback

(`server`: [`GameServer`](GameServer.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RemoveFavoriteServer()

> **RemoveFavoriteServer**(`server`: [`GameServer`](GameServer.md)): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:185](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L185)

Removes a server from favorite servers.

#### Parameters

##### server

[`GameServer`](GameServer.md)

The server to remove.

#### Returns

`void`

***

### RemoveHistoryServer()

> **RemoveHistoryServer**(`server`: [`GameServer`](GameServer.md)): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:191](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L191)

Removes a server from history of played servers.

#### Parameters

##### server

[`GameServer`](GameServer.md)

The server to remove.

#### Returns

`void`

***

### RequestPlayerDetails()

> **RequestPlayerDetails**(`dialogId`: `number`): `Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:197](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L197)

Requests player details for a specific dialog.

#### Parameters

##### dialogId

`number`

The dialog ID to use.

#### Returns

`Promise`\<`number` \| [`OperationResponse`](OperationResponse.md)\>

***

### SetServerListPreferences()

> **SetServerListPreferences**(`prefs`: [`ServerBrowserPreferences`](ServerBrowserPreferences.md)): `void`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:203](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L203)

Sets the server browser preferences.

#### Parameters

##### prefs

[`ServerBrowserPreferences`](ServerBrowserPreferences.md)

Server list preferences.

#### Returns

`void`
