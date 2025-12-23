[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / DownloadOverview

# Interface: DownloadOverview

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:122](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L122)

## Properties

### lan\_peer\_hostname

> **lan\_peer\_hostname**: `string`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:124](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L124)

Set if we are downloading from LAN peer content server

***

### paused

> **paused**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:126](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L126)

True if all downloads are paused

***

### throttling\_suspended

> **throttling\_suspended**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:128](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L128)

True if download throttling has been temporarily suspended for the current download

***

### update\_appid

> **update\_appid**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:130](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L130)

Appid of currently updating app

***

### update\_bytes\_downloaded

> **update\_bytes\_downloaded**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:132](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L132)

Bytes already downloaded

***

### update\_bytes\_processed

> **update\_bytes\_processed**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:134](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L134)

Bytes already processed in current phase - resets to zero when update stage changes

***

### update\_bytes\_staged

> **update\_bytes\_staged**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:136](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L136)

Bytes already staged

***

### update\_bytes\_to\_download

> **update\_bytes\_to\_download**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:138](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L138)

Total bytes to download

***

### update\_bytes\_to\_process

> **update\_bytes\_to\_process**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:140](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L140)

Total bytes to process in current phase - resets to zero when update stage changes

***

### update\_bytes\_to\_stage

> **update\_bytes\_to\_stage**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:142](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L142)

Total bytes to be staged

***

### update\_disc\_bytes\_per\_second

> **update\_disc\_bytes\_per\_second**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:144](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L144)

Current disk throughput estimate

***

### update\_is\_install

> **update\_is\_install**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:146](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L146)

True if the current update is an initial install

***

### update\_is\_prefetch\_estimate

> **update\_is\_prefetch\_estimate**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:148](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L148)

True if download and staging sizes are prefetch estimates

***

### update\_is\_shader

> **update\_is\_shader**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:150](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L150)

True if the current update is for shader update

***

### update\_is\_upload

> **update\_is\_upload**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:152](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L152)

True if the client is running in peer content server mode serving other peers

***

### update\_is\_workshop

> **update\_is\_workshop**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:154](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L154)

True if the current update is for workshop content

***

### update\_network\_bytes\_per\_second

> **update\_network\_bytes\_per\_second**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:156](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L156)

Current bandwidth estimate for download

***

### update\_peak\_network\_bytes\_per\_second

> **update\_peak\_network\_bytes\_per\_second**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:158](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L158)

Peak bandwidth estimate for download

***

### update\_seconds\_remaining

> **update\_seconds\_remaining**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:160](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L160)

Estimate of remaining time (in seconds) until download completes (not including staging)

***

### update\_start\_time

> **update\_start\_time**: `number`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:162](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L162)

Time current update started

***

### update\_state

> **update\_state**: `"None"` \| `"Starting"` \| `"Updating"` \| `"Stopping"`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:163](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L163)
