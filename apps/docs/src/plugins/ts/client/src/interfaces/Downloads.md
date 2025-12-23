[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Downloads

# Interface: Downloads

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L7)

Represents functions related to managing downloads in Steam.

## Methods

### EnableAllDownloads()

> **EnableAllDownloads**(`enable`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L12)

Enables or disables all downloads in Steam.

#### Parameters

##### enable

`boolean`

True to enable downloads, false to disable.

#### Returns

`void`

***

### MoveAppUpdateDown()

> **MoveAppUpdateDown**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L18)

Moves the update for a specific app down the download queue.

#### Parameters

##### appId

`number`

The ID of the application to move.

#### Returns

`void`

***

### MoveAppUpdateUp()

> **MoveAppUpdateUp**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L24)

Moves the update for a specific app up the download queue.

#### Parameters

##### appId

`number`

The ID of the application to move.

#### Returns

`void`

***

### PauseAppUpdate()

> **PauseAppUpdate**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L26)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### QueueAppUpdate()

> **QueueAppUpdate**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L32)

Adds the update for a specific app to the download queue.

#### Parameters

##### appId

`number`

The ID of the application to queue.

#### Returns

`void`

***

### RegisterForDownloadItems()

> **RegisterForDownloadItems**(`callback`: (`isDownloading`: `boolean`, `downloadItems`: [`DownloadItem`](DownloadItem.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L39)

Registers a callback function to be called when download items change.

#### Parameters

##### callback

(`isDownloading`: `boolean`, `downloadItems`: [`DownloadItem`](DownloadItem.md)[]) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForDownloadOverview()

> **RegisterForDownloadOverview**(`callback`: (`overview`: [`DownloadOverview`](DownloadOverview.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L48)

Registers a callback function to be called when download overview changes.

#### Parameters

##### callback

(`overview`: [`DownloadOverview`](DownloadOverview.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RemoveFromDownloadList()

> **RemoveFromDownloadList**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:54](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L54)

Removes the update for a specific app from the download list and places it in the unscheduled list.

#### Parameters

##### appId

`number`

The ID of the application to remove.

#### Returns

`void`

***

### ResumeAppUpdate()

> **ResumeAppUpdate**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L60)

Resumes the update for a specific app in the queue.

#### Parameters

##### appId

`number`

The ID of the application to resume.

#### Returns

`void`

***

### SetLaunchOnUpdateComplete()

> **SetLaunchOnUpdateComplete**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L66)

Sets an app to launch when its download is complete.

#### Parameters

##### appId

`number`

The ID of the application to set.

#### Returns

`void`

***

### SetQueueIndex()

> **SetQueueIndex**(`appId`: `number`, `index`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:74](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L74)

Sets the queue index for an app in the download queue.

#### Parameters

##### appId

`number`

The ID of the application to set the index for.

##### index

`number`

The index to set.

#### Returns

`void`

#### Remarks

Index of 0 is the current download in progress.

***

### SuspendDownloadThrottling()

> **SuspendDownloadThrottling**(`suspend`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:80](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L80)

Suspends or resumes download throttling.

#### Parameters

##### suspend

`boolean`

Whether to suspend or resume download throttling.

#### Returns

`void`

***

### SuspendLanPeerContent()

> **SuspendLanPeerContent**(`suspend`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Downloads.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Downloads.ts#L86)

Suspends or resumes local transfers.

#### Parameters

##### suspend

`boolean`

Whether to suspend or resume local transfers.

#### Returns

`void`
