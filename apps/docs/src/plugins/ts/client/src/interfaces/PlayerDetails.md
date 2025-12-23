[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / PlayerDetails

# Interface: PlayerDetails

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:340](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L340)

## Properties

### bRefreshComplete

> **bRefreshComplete**: `boolean`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:349](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L349)

`true` when the server refresh is done.

***

### bSuccess

> **bSuccess**: `boolean`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:344](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L344)

`true` is the server refresh is successful.

***

### playerName?

> `optional` **playerName**: `string`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:356](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L356)

Player name.

#### Note

Defined when [bRefreshComplete](#brefreshcomplete) is `true`.

***

### score?

> `optional` **score**: `number`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:363](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L363)

Player score.

#### Note

Defined when [bRefreshComplete](#brefreshcomplete) is `true`.

***

### timePlayed?

> `optional` **timePlayed**: `number`

Defined in: [packages/client/src/globals/steam-client/ServerBrowser.ts:370](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ServerBrowser.ts#L370)

Time played on the server in seconds

#### Note

Defined when [bRefreshComplete](#brefreshcomplete) is `true`.
