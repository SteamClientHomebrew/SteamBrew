[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Screenshots

# Interface: Screenshots

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L4)

Interface for managing screenshots.

## Methods

### DeleteLocalScreenshot()

> **DeleteLocalScreenshot**(`appId`: `string`, `screenshotIndex`: `number`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L11)

Deletes a local screenshot.

#### Parameters

##### appId

`string`

The ID of the application.

##### screenshotIndex

`number`

The index of the local screenshot.

#### Returns

`Promise`\<`boolean`\>

a boolean value indicating whether the deletion was successful.

***

### DeleteLocalScreenshots()

> **DeleteLocalScreenshots**(`screenshots`: [`ScreenshotToDelete`](ScreenshotToDelete.md)[]): `Promise`\<[`ScreenshotDeletionResponse`](ScreenshotDeletionResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L13)

#### Parameters

##### screenshots

[`ScreenshotToDelete`](ScreenshotToDelete.md)[]

#### Returns

`Promise`\<[`ScreenshotDeletionResponse`](ScreenshotDeletionResponse.md)\>

***

### GetAllAppsLocalScreenshots()

> **GetAllAppsLocalScreenshots**(): `Promise`\<[`Screenshot`](Screenshot.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L19)

Retrieves all local screenshots for all applications.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)[]\>

an array of Screenshot objects.

***

### GetAllAppsLocalScreenshotsCount()

> **GetAllAppsLocalScreenshotsCount**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L25)

Retrieves the count of all local screenshots for all applications.

#### Returns

`Promise`\<`number`\>

the count of local screenshots.

***

### GetAllAppsLocalScreenshotsRange()

> **GetAllAppsLocalScreenshotsRange**(`start`: `number`, `end`: `number`): `Promise`\<[`Screenshot`](Screenshot.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:33](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L33)

Retrieves a range of local screenshots for all applications.

#### Parameters

##### start

`number`

The starting index of the screenshot range.

##### end

`number`

The ending index of the screenshot range.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)[]\>

an array of Screenshot objects within the specified range.

***

### GetAllLocalScreenshots()

> **GetAllLocalScreenshots**(): `Promise`\<[`Screenshot`](Screenshot.md)[]\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L39)

Retrieves all local screenshots.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)[]\>

an array of Screenshot objects.

***

### GetGameWithLocalScreenshots()

> **GetGameWithLocalScreenshots**(`screenshotIndex`: `number`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L46)

Retrieves the game associated with a specific local screenshot index.

#### Parameters

##### screenshotIndex

`number`

The index of the local screenshot.

#### Returns

`Promise`\<`number`\>

the ID of the game associated with the screenshot.

***

### GetLastScreenshotTaken()

> **GetLastScreenshotTaken**(): `Promise`\<[`Screenshot`](Screenshot.md)\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L52)

Retrieves the last taken local screenshot.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)\>

the last taken local screenshot.

***

### GetLocalScreenshotByHandle()

> **GetLocalScreenshotByHandle**(`appId`: `string`, `screenshotIndex`: `number`): `Promise`\<[`Screenshot`](Screenshot.md)\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L60)

Retrieves a specific local screenshot for an application.

#### Parameters

##### appId

`string`

The ID of the application.

##### screenshotIndex

`number`

The index of the local screenshot.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)\>

the requested local screenshot.

***

### GetLocalScreenshotCount()

> **GetLocalScreenshotCount**(`appId`: `number`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:67](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L67)

Retrieves the count of local screenshots for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`Promise`\<`number`\>

the count of local screenshots for the application.

***

### GetLocalScreenshotPath()

> **GetLocalScreenshotPath**(`appId`: `number`, `hHandle`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L75)

Retrieves the path of a screenshot.

#### Parameters

##### appId

`number`

The ID of the application.

##### hHandle

`number`

The handle of the screenshot.

#### Returns

`Promise`\<`string`\>

the screenshot path or the screenshot directory if no such handle.

***

### GetNumGamesWithLocalScreenshots()

> **GetNumGamesWithLocalScreenshots**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L81)

Retrieves the number of games with local screenshots.

#### Returns

`Promise`\<`number`\>

the number of games with local screenshots.

***

### GetTotalDiskSpaceUsage()

> **GetTotalDiskSpaceUsage**(`path`: `string`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L88)

Gets total screenshot usage in the specified library folder.

#### Parameters

##### path

`string`

Library folder path.

#### Returns

`Promise`\<`number`\>

the number of taken space in bytes.

***

### ShowScreenshotInSystemViewer()

> **ShowScreenshotInSystemViewer**(`appId`: `string`, `screenshotIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:96](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L96)

Opens a local screenshot in the system image viewer.
If the screenshot index is invalid, this function opens the screenshots directory for the specified application ID.

#### Parameters

##### appId

`string`

The ID of the application.

##### screenshotIndex

`number`

The index of the local screenshot.

#### Returns

`void`

***

### ShowScreenshotsOnDisk()

> **ShowScreenshotsOnDisk**(`appId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L102)

Opens the folder containing local screenshots for a specific application.

#### Parameters

##### appId

`string`

The ID of the application.

#### Returns

`void`

***

### UploadLocalScreenshot()

> **UploadLocalScreenshot**(`appId`: `string`, `localScreenshot_hHandle`: `number`, `filePrivacyState`: [`EUCMFilePrivacyState`](../enumerations/EUCMFilePrivacyState.md)): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Screenshots.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Screenshots.ts#L111)

Uploads a local screenshot.

#### Parameters

##### appId

`string`

The ID of the application.

##### localScreenshot\_hHandle

`number`

The handle of the local screenshot.

##### filePrivacyState

[`EUCMFilePrivacyState`](../enumerations/EUCMFilePrivacyState.md)

The privacy state of the screenshot file.

#### Returns

`Promise`\<`boolean`\>

a boolean value indicating whether the upload was successful.
