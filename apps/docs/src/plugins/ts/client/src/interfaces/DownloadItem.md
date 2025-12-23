[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / DownloadItem

# Interface: DownloadItem

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L89)

## Properties

### active

> **active**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:91](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L91)

True if this app is currently downloading

***

### appid

> **appid**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:93](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L93)

Appid of app

***

### buildid

> **buildid**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:95](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L95)

Current build ID for the installed app, zero if the app isn't installed yet

***

### completed

> **completed**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:97](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L97)

True if this update has been completed

***

### completed\_time

> **completed\_time**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:99](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L99)

For completed downloads, time of completion, 0 if not completed

***

### deferred\_time

> **deferred\_time**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:100](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L100)

***

### downloaded\_bytes

> **downloaded\_bytes**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L102)

Bytes already downloaded, sum across all content types

***

### launch\_on\_completion

> **launch\_on\_completion**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:104](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L104)

If true, game will launch when its download completes successfully

***

### paused

> **paused**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:106](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L106)

True if this app has been paused by the user or the system

***

### queue\_index

> **queue\_index**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:108](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L108)

Queue index, -1 if the item is unqueued

***

### target\_buildid

> **target\_buildid**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:110](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L110)

Build ID that this download is moving towards. This can be the same as buildid.

***

### total\_bytes

> **total\_bytes**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:112](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L112)

Total bytes to download, sum across all content types

***

### update\_error

> **update\_error**: `string`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:117](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L117)

Update error description, when paused and there has been an error.
Unlocalized and shouldn't be displayed to the user.

***

### update\_result

> **update\_result**: [`EAppUpdateError`](../enumerations/EAppUpdateError.md)

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:118](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L118)

***

### update\_type\_info

> **update\_type\_info**: [`UpdateTypeInfo`](UpdateTypeInfo.md)[]

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:119](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L119)
