[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Apps

# Interface: Apps

Defined in: [packages/client/src/globals/steam-client/App.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L8)

Represents various functions related to Steam applications.

## Properties

### RegisterForShowMarketingMessageDialog

> **RegisterForShowMarketingMessageDialog**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:447](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L447)

## Methods

### AddShortcut()

> **AddShortcut**(`appName`: `string`, `executablePath`: `string`, `directory`: `string`, `launchOptions`: `string`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L17)

Adds a non-Steam application shortcut to the local Steam library.

#### Parameters

##### appName

`string`

The name of the non-Steam application.

##### executablePath

`string`

The path to the executable file of the non-Steam application.

##### directory

`string`

The working directory for the non-Steam application.

##### launchOptions

`string`

Options to be passed when launching the non-Steam application.

#### Returns

`Promise`\<`number`\>

a unique AppID assigned to the added non-Steam application shortcut.

***

### BackupFilesForApp()

> **BackupFilesForApp**(`appId`: `number`, `backupPath`: `string`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L25)

Backups an app to the specified path.

#### Parameters

##### appId

`number`

The ID of the application to back up.

##### backupPath

`string`

The path to store the backup.

#### Returns

`Promise`\<`number`\>

a number. This value may be "20" for backup busy and "0" for success.

***

### BrowseScreenshotForApp()

> **BrowseScreenshotForApp**(`appId`: `string`, `handle`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L32)

Opens the screenshot folder for a specific app.

#### Parameters

##### appId

`string`

The ID of the app to browse screenshots for.

##### handle

`number`

The screenshot handle to use.

#### Returns

`void`

***

### BrowseScreenshotsForApp()

> **BrowseScreenshotsForApp**(`appId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L38)

Opens the screenshot folder for a specific app.

#### Parameters

##### appId

`string`

The ID of the app to browse screenshots for.

#### Returns

`void`

***

### CancelBackup()

> **CancelBackup**(): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:43](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L43)

Cancels the current backup process.

#### Returns

`void`

***

### CancelGameAction()

> **CancelGameAction**(`gameActionId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L49)

Cancels a specific game action.

#### Parameters

##### gameActionId

`number`

The ID of the game action to cancel.

#### Returns

`void`

***

### CancelLaunch()

> **CancelLaunch**(`appId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L55)

Cancels the launch of an application with the specified ID.

#### Parameters

##### appId

`string`

The ID of the application whose launch is to be canceled.

#### Returns

`void`

***

### ClearCustomArtworkForApp()

> **ClearCustomArtworkForApp**(`appId`: `number`, `assetType`: [`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:62](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L62)

Clears the custom artwork for a given application.

#### Parameters

##### appId

`number`

The ID of the application to clear custom artwork for.

##### assetType

[`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)

The type of artwork to clear.

#### Returns

`Promise`\<`void`\>

***

### ClearCustomLogoPositionForApp()

> **ClearCustomLogoPositionForApp**(`appId`: `number`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:69](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L69)

Clears the custom logo position for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`Promise`\<`void`\>

A Promise that resolves once the custom logo position is cleared.

***

### ClearProton()

> **ClearProton**(`appId`: `number`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:71](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L71)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<`void`\>

***

### ContinueGameAction()

> **ContinueGameAction**(`gameActionId`: `number`, `actionType`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L79)

Continues a specific game action.

#### Parameters

##### gameActionId

`number`

The ID of the game action to continue.

##### actionType

`string`

The type of action to perform during continuation.

#### Returns

`void`

#### Remarks

actionType - "SkipShaders", "skip", "ShowDurationControl" todo:

***

### CreateDesktopShortcutForApp()

> **CreateDesktopShortcutForApp**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L85)

Creates a Steam application shortcut on the desktop.

#### Parameters

##### appId

`number`

The ID of the application for which to create a desktop shortcut.

#### Returns

`void`

***

### DownloadWorkshopItem()

> **DownloadWorkshopItem**(`appId`: `number`, `itemId`: `string`, `param1`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L92)

Download a workshop item.

#### Parameters

##### appId

`number`

The ID of the application.

##### itemId

`string`

The ID of the workshop item.

##### param1

`boolean`

#### Returns

`void`

***

### GetAchievementsInTimeRange()

> **GetAchievementsInTimeRange**(`appId`: `number`, `start`: `number`, `end`: `number`): `Promise`\<[`AppAchievement`](AppAchievement.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L102)

Retrieves achievements within a specified time range for a given app.

#### Parameters

##### appId

`number`

The ID of the application.

##### start

`number`

The start of the time range as a Unix timestamp.

##### end

`number`

The end of the time range as a Unix timestamp.

#### Returns

`Promise`\<[`AppAchievement`](AppAchievement.md)[]\>

an array of AppAchievement objects.

#### Throws

OperationResponse

***

### GetActiveGameActions()

> **GetActiveGameActions**(): `Promise`\<[`GameAction`](GameAction.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:108](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L108)

Retrieves a list of active game actions, such as launching an application.

#### Returns

`Promise`\<[`GameAction`](GameAction.md)[]\>

an array of active game actions.

***

### GetAvailableCompatTools()

> **GetAvailableCompatTools**(`appId`: `number`): `Promise`\<[`CompatibilityTool`](CompatibilityTool.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:115](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L115)

Retrieves a list of available compatibility tools for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to retrieve compatibility tools for.

#### Returns

`Promise`\<[`CompatibilityTool`](CompatibilityTool.md)[]\>

an array of CompatibilityToolInfo objects.

***

### GetBackupsInFolder()

> **GetBackupsInFolder**(`appBackupPath`: `string`): `Promise`\<`string` \| `undefined`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L123)

Represents a function to retrieve the name of the application in a backup folder.

#### Parameters

##### appBackupPath

`string`

The path to the application's backup folder.

#### Returns

`Promise`\<`string` \| `undefined`\>

the name of the application in the backup folder, or undefined if the path is invalid.

#### Remarks

This function checks for the "sku.sis" file in that path.

***

### GetCachedAppDetails()

> **GetCachedAppDetails**(`appId`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:130](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L130)

Retrieves cached details for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`Promise`\<`string`\>

a stringified object. Returns [CachedAppDetails](../type-aliases/CachedAppDetails.md) when parsed.

***

### GetCloudPendingRemoteOperations()

> **GetCloudPendingRemoteOperations**(`appId`: `number`): `Promise`\<\{ `PendingOperations`: `ArrayBuffer`; \}\>

Defined in: [packages/client/src/globals/steam-client/App.ts:135](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L135)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<\{ `PendingOperations`: `ArrayBuffer`; \}\>

a ProtoBuf message. If deserialized, returns [CMsgCloudPendingRemoteOperations](CMsgCloudPendingRemoteOperations.md).

***

### GetCompatExperiment()

> **GetCompatExperiment**(`param0`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:139](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L139)

#### Parameters

##### param0

`number`

#### Returns

`Promise`\<`string`\>

***

### GetConflictingFileTimestamps()

> **GetConflictingFileTimestamps**(`appId`: `number`): `Promise`\<[`ConflictingFileTimestamp`](ConflictingFileTimestamp.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:141](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L141)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<[`ConflictingFileTimestamp`](ConflictingFileTimestamp.md)\>

***

### GetDetailsForScreenshotUpload()

> **GetDetailsForScreenshotUpload**(`appId`: `string`, `hHandle`: `number`): `Promise`\<[`ScreenshotUploadDetails`](ScreenshotUploadDetails.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:149](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L149)

Retrieves details for a specific screenshot upload.

#### Parameters

##### appId

`string`

The ID of the application.

##### hHandle

`number`

The handle of the screenshot upload.

#### Returns

`Promise`\<[`ScreenshotUploadDetails`](ScreenshotUploadDetails.md)\>

details about the screenshot upload.

***

### GetDetailsForScreenshotUploads()

> **GetDetailsForScreenshotUploads**(`appId`: `string`, `hHandles`: `number`[]): `Promise`\<[`ScreenshotUploadsDetails`](ScreenshotUploadsDetails.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:157](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L157)

Retrieves details for multiple screenshot uploads.

#### Parameters

##### appId

`string`

The ID of the application.

##### hHandles

`number`[]

An array of handles of the screenshot uploads.

#### Returns

`Promise`\<[`ScreenshotUploadsDetails`](ScreenshotUploadsDetails.md)\>

details about the screenshot uploads.

***

### GetDownloadedWorkshopItems()

> **GetDownloadedWorkshopItems**(`appId`: `number`): `Promise`\<[`WorkshopItem`](WorkshopItem.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:164](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L164)

Retrieves a list of downloaded workshop items for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to retrieve downloaded workshop items for.

#### Returns

`Promise`\<[`WorkshopItem`](WorkshopItem.md)[]\>

an array of downloaded workshop items for the specified application.

***

### GetDurationControlInfo()

> **GetDurationControlInfo**(`appId`: `number`): `Promise`\<\{ `bApplicable`: `boolean`; \}\>

Defined in: [packages/client/src/globals/steam-client/App.ts:166](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L166)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<\{ `bApplicable`: `boolean`; \}\>

***

### GetFriendAchievementsForApp()

> **GetFriendAchievementsForApp**(`appId`: `string`, `friendSteam64Id`: `string`): `Promise`\<[`AppAchievementResponse`](AppAchievementResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:174](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L174)

Retrieves achievement information for a specific application for a given friend.

#### Parameters

##### appId

`string`

The ID of the application to retrieve achievement information for.

##### friendSteam64Id

`string`

The Steam64 ID of the friend for whom to retrieve achievement information.

#### Returns

`Promise`\<[`AppAchievementResponse`](AppAchievementResponse.md)\>

an object containing achievement information for the specified friend and application.

***

### GetFriendsWhoPlay()

> **GetFriendsWhoPlay**(`appId`: `number`): `Promise`\<`string`[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:181](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L181)

Retrieves a list of friends who play the specified application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`Promise`\<`string`[]\>

an array of Steam64 IDs representing friends who play the application.

***

### GetGameActionDetails()

> **GetGameActionDetails**(`appId`: `number`, `callback`: (`gameAction`: [`GameAction`](GameAction.md)) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:190](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L190)

Retrieves details of a game action.

#### Parameters

##### appId

`number`

The ID of the application.

##### callback

(`gameAction`: [`GameAction`](GameAction.md)) => `void`

The callback function to handle the retrieved game action details and state.

#### Returns

`void`

***

### GetGameActionForApp()

> **GetGameActionForApp**(`appId`: `string`, `callback`: (`gameActionId`: `number`, `appId`: `string` \| `0`, `taskName`: [`AppAction_t`](../type-aliases/AppAction_t.md)) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:192](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L192)

#### Parameters

##### appId

`string`

##### callback

(`gameActionId`: `number`, `appId`: `string` \| `0`, `taskName`: [`AppAction_t`](../type-aliases/AppAction_t.md)) => `void`

#### Returns

`void`

***

### GetLaunchOptionsForApp()

> **GetLaunchOptionsForApp**(`appId`: `number`): `Promise`\<[`LaunchOption`](LaunchOption.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:208](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L208)

Retrieves launch options for a specified application.
These options may include different configurations or settings for launching the application, such as DirectX, Vulkan, OpenGL, 32-bit, 64-bit, etc.
This function does not retrieve launch/argument options inputted by the user.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`Promise`\<[`LaunchOption`](LaunchOption.md)[]\>

an array of launch options for the specified application.

***

### GetLibraryBootstrapData()

> **GetLibraryBootstrapData**(): `Promise`\<`ArrayBuffer`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:213](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L213)

#### Returns

`Promise`\<`ArrayBuffer`\>

a ProtoBuf message. If deserialized, returns [CLibraryBootstrapData](CLibraryBootstrapData.md).

***

### GetMyAchievementsForApp()

> **GetMyAchievementsForApp**(`appId`: `string`): `Promise`\<[`AppAchievementResponse`](AppAchievementResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:220](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L220)

Retrieves achievement information for the authenticated user in a specific Steam application.

#### Parameters

##### appId

`string`

The ID of the application to retrieve achievement information for.

#### Returns

`Promise`\<[`AppAchievementResponse`](AppAchievementResponse.md)\>

an AppAchievementResponse object containing the achievement information for the authenticated user in the specified application.

***

### GetPlaytime()

> **GetPlaytime**(`appId`: `number`): `Promise`\<[`Playtime`](Playtime.md) \| `undefined`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:227](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L227)

Retrieves the playtime information for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to get playtime information for.

#### Returns

`Promise`\<[`Playtime`](Playtime.md) \| `undefined`\>

playtime information or undefined if not available.

***

### GetPrePurchasedApps()

> **GetPrePurchasedApps**(`appIds`: `number`[]): `Promise`\<[`PrePurchaseInfo`](PrePurchaseInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:229](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L229)

#### Parameters

##### appIds

`number`[]

#### Returns

`Promise`\<[`PrePurchaseInfo`](PrePurchaseInfo.md)\>

***

### GetResolutionOverrideForApp()

> **GetResolutionOverrideForApp**(`appId`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:236](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L236)

Retrieves the resolution override for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to retrieve the resolution override for.

#### Returns

`Promise`\<`string`\>

a string of the resolution override.

***

### GetScreenshotInfo()

> **GetScreenshotInfo**(`appId`: `string`, `hHandle`: `number`): `Promise`\<[`Screenshot`](Screenshot.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:244](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L244)

Represents a function to retrieve detailed information about a specific screenshot.

#### Parameters

##### appId

`string`

The ID of the application the screenshot belongs to.

##### hHandle

`number`

The handle of the screenshot.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)\>

detailed information about the specified screenshot.

***

### GetScreenshotsInTimeRange()

> **GetScreenshotsInTimeRange**(`appId`: `number`, `start`: `number`, `end`: `number`): `Promise`\<[`Screenshot`](Screenshot.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:253](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L253)

Represents a function to retrieve screenshots within a specified time range.

#### Parameters

##### appId

`number`

The ID of the application.

##### start

`number`

The start of the time range as a Unix timestamp.

##### end

`number`

The end of the time range as a Unix timestamp.

#### Returns

`Promise`\<[`Screenshot`](Screenshot.md)[]\>

an array of screenshots taken within the specified time range.

***

### GetShortcutDataForPath()

> **GetShortcutDataForPath**(`pathToShortcut`: `string`): `Promise`\<[`Shortcut`](Shortcut.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:260](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L260)

Retrieves shortcut data for a given shortcut file path.

#### Parameters

##### pathToShortcut

`string`

The path to the shortcut file.

#### Returns

`Promise`\<[`Shortcut`](Shortcut.md)\>

the shortcut data.

***

### GetSoundtrackDetails()

> **GetSoundtrackDetails**(`appId`: `number`): `Promise`\<[`SoundtrackDetails`](SoundtrackDetails.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:268](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L268)

Represents a function to retrieve details about a soundtrack associated with a soundtrack application.
The soundtrack has to be installed.

#### Parameters

##### appId

`number`

The ID of the soundtrack application.

#### Returns

`Promise`\<[`SoundtrackDetails`](SoundtrackDetails.md)\>

the details of the soundtrack associated with the specified soundtrack application.

***

### GetStoreTagLocalization()

> **GetStoreTagLocalization**(`tags`: `number`[]): `Promise`\<[`StoreTagLocalization`](StoreTagLocalization.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:271](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L271)

#### Parameters

##### tags

`number`[]

#### Returns

`Promise`\<[`StoreTagLocalization`](StoreTagLocalization.md)[]\>

***

### GetSubscribedWorkshopItemDetails()

> **GetSubscribedWorkshopItemDetails**(`appId`: `number`, `itemIds`: `string`[]): `Promise`\<[`OperationResponse`](OperationResponse.md) \| [`WorkshopItem`](WorkshopItem.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:280](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L280)

Retrieves a list of subscribed workshop item details for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to retrieve subscribed workshop item details for.

##### itemIds

`string`[]

Workshop item IDs to retrieve details for.

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md) \| [`WorkshopItem`](WorkshopItem.md)[]\>

an array of subscribed workshop item details for the specified application.

#### Throws

Throws if the query failed.

***

### GetSubscribedWorkshopItems()

> **GetSubscribedWorkshopItems**(`appId`: `number`): `Promise`\<[`WorkshopItem`](WorkshopItem.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:287](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L287)

Retrieves a list of subscribed workshop items for a specific application.

#### Parameters

##### appId

`number`

The ID of the application to retrieve subscribed workshop items for.

#### Returns

`Promise`\<[`WorkshopItem`](WorkshopItem.md)[]\>

an array of subscribed workshop items for the specified application.

***

### InstallFlatpakAppAndCreateShortcut()

> **InstallFlatpakAppAndCreateShortcut**(`appName`: `string`, `appCommandLineOptions`: `string`): `Promise`\<\{ `appid`: `number`; `strInstallOutput`: `string`; \}\>

Defined in: [packages/client/src/globals/steam-client/App.ts:289](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L289)

#### Parameters

##### appName

`string`

##### appCommandLineOptions

`string`

#### Returns

`Promise`\<\{ `appid`: `number`; `strInstallOutput`: `string`; \}\>

***

### JoinAppContentBeta()

> **JoinAppContentBeta**(`appId`: `number`, `name`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:300](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L300)

Join an app beta.

#### Parameters

##### appId

`number`

App ID of the beta to join.

##### name

`string`

Beta name. Empty to opt out of betas.

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

#### Throws

EResult if no beta found.

***

### JoinAppContentBetaByPassword()

> **JoinAppContentBetaByPassword**(`appId`: `number`, `accessCode`: `string`): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:306](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L306)

Join an app beta by password.

#### Parameters

##### appId

`number`

##### accessCode

`string`

#### Returns

`Promise`\<`any`\>

#### Throws

EResult if no beta found.

***

### ListFlatpakApps()

> **ListFlatpakApps**(): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:308](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L308)

#### Returns

`Promise`\<`any`\>

***

### LoadEula()

> **LoadEula**(`appId`: `number`): `Promise`\<[`EndUserLicenseAgreement`](EndUserLicenseAgreement.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:313](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L313)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<[`EndUserLicenseAgreement`](EndUserLicenseAgreement.md)[]\>

#### Throws

if the user does not own the app or no EULA.

***

### MarkEulaAccepted()

> **MarkEulaAccepted**(`appId`: `number`, `id`: `string`, `version`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:314](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L314)

#### Parameters

##### appId

`number`

##### id

`string`

##### version

`number`

#### Returns

`void`

***

### MarkEulaRejected()

> **MarkEulaRejected**(`appId`: `number`, `id`: `string`, `version`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:316](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L316)

#### Parameters

##### appId

`number`

##### id

`string`

##### version

`number`

#### Returns

`void`

***

### MoveWorkshopItemLoadOrder()

> **MoveWorkshopItemLoadOrder**(`appId`: `number`, `oldOrder`: `number`, `newOrder`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:325](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L325)

Move specified workshop item load order.

#### Parameters

##### appId

`number`

The ID of the application.

##### oldOrder

`number`

The item to move, referenced by its position number.

##### newOrder

`number`

The position number to move the item to.

#### Returns

`void`

#### Remarks

Orders are zero-indexed.

***

### OpenAppSettingsDialog()

> **OpenAppSettingsDialog**(`appId`: `number`, `section`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:332](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L332)

Opens the settings dialog for a specific application.

#### Parameters

##### appId

`number`

The ID of the application for which to open the settings dialog.

##### section

`string`

The section (tab) to switch to.

#### Returns

`void`

***

### RaiseWindowForGame()

> **RaiseWindowForGame**(`appId`: `number`): `Promise`\<[`ERaiseGameWindowResult`](../enumerations/ERaiseGameWindowResult.md)\>

Defined in: [packages/client/src/globals/steam-client/App.ts:338](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L338)

Raises the window for a given application.

#### Parameters

##### appId

`number`

The ID of the application to raise the window of.

#### Returns

`Promise`\<[`ERaiseGameWindowResult`](../enumerations/ERaiseGameWindowResult.md)\>

***

### RegisterForAchievementChanges()

> **RegisterForAchievementChanges**(`callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:358](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L358)

Registers a callback function to be called when achievement changes occur.

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForAppBackupStatus()

> **RegisterForAppBackupStatus**(`callback`: (`status`: [`AppBackupStatus`](AppBackupStatus.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:360](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L360)

#### Parameters

##### callback

(`status`: [`AppBackupStatus`](AppBackupStatus.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForAppDetails()

> **RegisterForAppDetails**(`appId`: `number`, `callback`: (`data`: [`AppDetails`](AppDetails.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:368](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L368)

Registers a callback function to be called when app details change.

#### Parameters

##### appId

`number`

The ID of the application to monitor.

##### callback

(`data`: [`AppDetails`](AppDetails.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForAppOverviewChanges()

> **RegisterForAppOverviewChanges**(`callback`: (`data`: `ArrayBuffer`) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:374](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L374)

If `data` is deserialized, returns [CAppOverview\_Change](CAppOverview_Change.md).

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

`void`

#### Remarks

This is not a mistake, it doesn't return anything.

***

### RegisterForDRMFailureResponse()

> **RegisterForDRMFailureResponse**(`callback`: (`appid`: `number`, `eResult`: [`EResult`](../enumerations/EResult.md), `errorCode`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:376](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L376)

#### Parameters

##### callback

(`appid`: `number`, `eResult`: [`EResult`](../enumerations/EResult.md), `errorCode`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForGameActionEnd()

> **RegisterForGameActionEnd**(`callback`: (`gameActionId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:385](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L385)

Registers a callback function to be called when a game action ends.

#### Parameters

##### callback

(`gameActionId`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForGameActionShowError()

> **RegisterForGameActionShowError**(`callback`: (`gameActionId`: `number`, `appId`: `string`, `actionName`: `string`, `error`: `string`, `param4`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:387](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L387)

#### Parameters

##### callback

(`gameActionId`: `number`, `appId`: `string`, `actionName`: `string`, `error`: `string`, `param4`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForGameActionShowUI()

> **RegisterForGameActionShowUI**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:405](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L405)

Registers a callback function to be called when a game action UI is shown.

#### Parameters

##### callback

() => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForGameActionStart()

> **RegisterForGameActionStart**(`callback`: (`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `param3`: [`ELaunchSource`](../enumerations/ELaunchSource.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:412](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L412)

Registers a callback function to be called when a game action starts.

#### Parameters

##### callback

(`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `param3`: [`ELaunchSource`](../enumerations/ELaunchSource.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForGameActionTaskChange()

> **RegisterForGameActionTaskChange**(`callback`: (`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `requestedAction`: `string`, `param4`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:421](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L421)

Registers a callback function to be called when a game action task changes.

#### Parameters

##### callback

(`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `requestedAction`: `string`, `param4`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForGameActionUserRequest()

> **RegisterForGameActionUserRequest**(`callback`: (`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `requestedAction`: `string`, `appId2`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:436](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L436)

Registers a callback function to be called when a user requests a game action.

#### Parameters

##### callback

(`gameActionId`: `number`, `appId`: `string`, `action`: `string`, `requestedAction`: `string`, `appId2`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForPrePurchasedAppChanges()

> **RegisterForPrePurchasedAppChanges**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:446](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L446)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForWorkshopChanges()

> **RegisterForWorkshopChanges**(`callback`: (`appId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:454](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L454)

Registers a callback function to be notified when workshop items are added or removed from a Steam application.

#### Parameters

##### callback

(`appId`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForWorkshopItemDownloads()

> **RegisterForWorkshopItemDownloads**(`appId`: `number`, `callback`: (`appId`: `number`, `publishedFileId`: `string`, `param2`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:456](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L456)

#### Parameters

##### appId

`number`

##### callback

(`appId`: `number`, `publishedFileId`: `string`, `param2`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForWorkshopItemInstalled()

> **RegisterForWorkshopItemInstalled**(`callback`: (`item`: `InstalledWorkshopItem`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/App.ts:461](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L461)

#### Parameters

##### callback

(`item`: `InstalledWorkshopItem`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RemoveShortcut()

> **RemoveShortcut**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:467](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L467)

Removes a non-Steam application shortcut from the Steam library.

#### Parameters

##### appId

`number`

The ID of the application for which to remove the shortcut.

#### Returns

`void`

***

### ReportLibraryAssetCacheMiss()

> **ReportLibraryAssetCacheMiss**(`appId`: `number`, `assetType`: [`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:469](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L469)

#### Parameters

##### appId

`number`

##### assetType

[`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)

#### Returns

`void`

***

### ReportMarketingMessageDialogShown()

> **ReportMarketingMessageDialogShown**(): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:471](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L471)

#### Returns

`void`

***

### RequestIconDataForApp()

> **RequestIconDataForApp**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:473](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L473)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### RequestLegacyCDKeysForApp()

> **RequestLegacyCDKeysForApp**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:475](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L475)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### RunGame()

> **RunGame**(`appId`: `string`, `launchOptions`: `string`, `param2`: `number`, `launchSource`: [`ELaunchSource`](../enumerations/ELaunchSource.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:485](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L485)

Runs a game with specified parameters. Focuses the game if already launched.

#### Parameters

##### appId

`string`

The ID of the application to run.

##### launchOptions

`string`

Additional launch options for the application.

##### param2

`number`

Additional parameter (exact usage may vary).

##### launchSource

[`ELaunchSource`](../enumerations/ELaunchSource.md)

#### Returns

`void`

#### Remarks

`launchOptions` is appended before the ones specified in the application's settings.

***

### SaveAchievementProgressCache()

> **SaveAchievementProgressCache**(`progress`: `string`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:495](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L495)

#### Parameters

##### progress

`string`

#### Returns

`Promise`\<`void`\>

***

### ScanForInstalledNonSteamApps()

> **ScanForInstalledNonSteamApps**(): `Promise`\<[`NonSteamApp`](NonSteamApp.md)[]\>

Defined in: [packages/client/src/globals/steam-client/App.ts:504](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L504)

Scans the system for installed non-Steam applications.

#### Returns

`Promise`\<[`NonSteamApp`](NonSteamApp.md)[]\>

an array of NonSteamApp objects representing installed non-Steam applications.

#### Remarks

This function scans the user's system for installed applications that are not part of the Steam library. It does not scan for shortcuts added to the Steam library.

On Linux, it scans inside /usr/share/applications and $XDG_DATA_HOME/applications.

***

### SetAppAutoUpdateBehavior()

> **SetAppAutoUpdateBehavior**(`appId`: `number`, `mode`: [`EAppAutoUpdateBehavior`](../enumerations/EAppAutoUpdateBehavior.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:512](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L512)

Sets the automatic update behavior for a Steam application.

#### Parameters

##### appId

`number`

The ID of the application to set the update behavior for.

##### mode

[`EAppAutoUpdateBehavior`](../enumerations/EAppAutoUpdateBehavior.md)

The update behavior mode to set.

#### Returns

`void`

#### Remarks

This function only works with installed Steam applications.

***

### SetAppBackgroundDownloadsBehavior()

> **SetAppBackgroundDownloadsBehavior**(`appId`: `number`, `mode`: [`EAppAllowDownloadsWhileRunningBehavior`](../enumerations/EAppAllowDownloadsWhileRunningBehavior.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:520](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L520)

Sets the background downloads behavior for a specific Steam application.

#### Parameters

##### appId

`number`

The ID of the application to set the background downloads behavior for.

##### mode

[`EAppAllowDownloadsWhileRunningBehavior`](../enumerations/EAppAllowDownloadsWhileRunningBehavior.md)

The background downloads mode to set.

#### Returns

`void`

#### Remarks

This function only works with installed Steam applications.

***

### SetAppCurrentLanguage()

> **SetAppCurrentLanguage**(`appId`: `number`, `language`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:527](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L527)

Sets the current language for a specific Steam application.

#### Parameters

##### appId

`number`

The ID of the application to set the current language for.

##### language

`string`

The language to set, represented as a language (e.g., "english", "spanish", "tchinese", "schinese").

#### Returns

`void`

***

### SetAppFamilyBlockedState()

> **SetAppFamilyBlockedState**(`appIds`: `number`[], `state`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:534](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L534)

Sets the blocked state for apps.

#### Parameters

##### appIds

`number`[]

An array of app IDs to set the blocked state for.

##### state

`boolean`

The state to set (true for blocked, false for unblocked).

#### Returns

`void`

***

### SetAppLaunchOptions()

> **SetAppLaunchOptions**(`appId`: `number`, `launchOptions`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:541](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L541)

Sets launch options for a Steam application.

#### Parameters

##### appId

`number`

The ID of the application to set launch options for.

##### launchOptions

`string`

The launch options to be set for the application.

#### Returns

`void`

***

### SetAppResolutionOverride()

> **SetAppResolutionOverride**(`appId`: `number`, `resolution`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:548](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L548)

Sets a resolution override for a Steam application.

#### Parameters

##### appId

`number`

The ID of the application to set the resolution override for.

##### resolution

`string`

The resolution to be set for the application. It can be "Default", "Native", or other compatible resolutions for the user's monitor.

#### Returns

`void`

***

### SetCachedAppDetails()

> **SetCachedAppDetails**(`appId`: `number`, `details`: `string`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:556](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L556)

Sets cached details for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

##### details

`string`

The details to be cached, a stringified object.

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the details are successfully cached.

***

### SetControllerRumblePreference()

> **SetControllerRumblePreference**(`appId`: `number`, `value`: [`EControllerRumbleSetting`](../enumerations/EControllerRumbleSetting.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:558](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L558)

#### Parameters

##### appId

`number`

##### value

[`EControllerRumbleSetting`](../enumerations/EControllerRumbleSetting.md)

#### Returns

`void`

***

### SetCustomArtworkForApp()

> **SetCustomArtworkForApp**(`appId`: `number`, `base64`: `string`, `imageType`: `"jpg"` \| `"png"`, `assetType`: [`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:567](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L567)

Sets the custom artwork for a given application.

#### Parameters

##### appId

`number`

The ID of the application to set custom artwork for.

##### base64

`string`

Base64 encoded image.

##### imageType

`"jpg"` | `"png"`

##### assetType

[`ELibraryAssetType`](../enumerations/ELibraryAssetType.md)

The type of artwork to set.

#### Returns

`Promise`\<`void`\>

A Promise that resolves after the custom artwork is set.

***

### SetCustomLogoPositionForApp()

> **SetCustomLogoPositionForApp**(`appId`: `number`, `details`: `string`): `Promise`\<`void`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:575](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L575)

Sets a custom logo position for a specific app.

#### Parameters

##### appId

`number`

The ID of the application.

##### details

`string`

The details of the custom logo position, expected to be a stringified [LogoPositionForApp](LogoPositionForApp.md) object.

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the custom logo position is successfully set.

***

### SetDLCEnabled()

> **SetDLCEnabled**(`appId`: `number`, `appDLCId`: `number`, `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:583](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L583)

Sets the enabled state for downloadable content (DLC) of a specific app.

#### Parameters

##### appId

`number`

The ID of the parent application.

##### appDLCId

`number`

The ID of the DLC to set the state for.

##### value

`boolean`

The value to set (true for enabled, false for disabled).

#### Returns

`void`

***

### SetLocalScreenshotCaption()

> **SetLocalScreenshotCaption**(`appId`: `string`, `hHandle`: `number`, `caption`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:591](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L591)

Set a local screenshot's caption.

#### Parameters

##### appId

`string`

The application ID the screenshot belongs to.

##### hHandle

`number`

The handle of the screenshot.

##### caption

`string`

#### Returns

`void`

***

### SetLocalScreenshotPrivacy()

> **SetLocalScreenshotPrivacy**(`appId`: `string`, `hHandle`: `number`, `privacy`: [`EUCMFilePrivacyState`](../enumerations/EUCMFilePrivacyState.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:599](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L599)

Set a local screenshot's privacy state.

#### Parameters

##### appId

`string`

The application ID the screenshot belongs to.

##### hHandle

`number`

The handle of the screenshot.

##### privacy

[`EUCMFilePrivacyState`](../enumerations/EUCMFilePrivacyState.md)

Screenshot privacy state.

#### Returns

`void`

***

### SetLocalScreenshotSpoiler()

> **SetLocalScreenshotSpoiler**(`appId`: `string`, `hHandle`: `number`, `spoilered`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:607](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L607)

Set a local screenshot's spoiler state.

#### Parameters

##### appId

`string`

The application ID the screenshot belongs to.

##### hHandle

`number`

The handle of the screenshot.

##### spoilered

`boolean`

Is the screenshot spoilered?

#### Returns

`void`

***

### SetShortcutExe()

> **SetShortcutExe**(`appId`: `number`, `path`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:614](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L614)

Sets the executable path for a non-Steam application shortcut.

#### Parameters

##### appId

`number`

The ID of the application to set the shortcut executable for.

##### path

`string`

The path to the executable.

#### Returns

`void`

***

### SetShortcutIcon()

> **SetShortcutIcon**(`appId`: `number`, `path`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:621](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L621)

Sets the icon for a non-Steam application shortcut.

#### Parameters

##### appId

`number`

The ID of the application to set the shortcut icon for.

##### path

`string`

The path to the icon image (can be png or tga format).

#### Returns

`void`

***

### SetShortcutIsVR()

> **SetShortcutIsVR**(`appId`: `number`, `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:628](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L628)

Sets whether a non-Steam application shortcut should be included in the VR library.

#### Parameters

##### appId

`number`

The ID of the application to set the VR status for.

##### value

`boolean`

A boolean indicating whether the application should be included in the VR library.

#### Returns

`void`

***

### SetShortcutLaunchOptions()

> **SetShortcutLaunchOptions**(`appId`: `number`, `options`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:635](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L635)

Sets launch options for a non-Steam application shortcut.

#### Parameters

##### appId

`number`

The ID of the application to set the launch options for.

##### options

`string`

The launch options to be used when starting the application.

#### Returns

`void`

***

### SetShortcutName()

> **SetShortcutName**(`appId`: `number`, `name`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:642](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L642)

Sets the name for a non-Steam application shortcut.

#### Parameters

##### appId

`number`

The ID of the application to set the shortcut name for.

##### name

`string`

The name to be displayed for the application shortcut.

#### Returns

`void`

***

### SetShortcutStartDir()

> **SetShortcutStartDir**(`appId`: `number`, `directory`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:649](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L649)

Sets the starting directory for a non-Steam application shortcut.

#### Parameters

##### appId

`number`

The ID of the application to set the starting directory for.

##### directory

`string`

The directory from which the application should be launched.

#### Returns

`void`

***

### SetStreamingClientForApp()

> **SetStreamingClientForApp**(`appId`: `number`, `clientId`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:656](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L656)

Sets the client ID for streaming for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

##### clientId

`string`

The client ID for streaming.

#### Returns

`void`

***

### SetThirdPartyControllerConfiguration()

> **SetThirdPartyControllerConfiguration**(`appId`: `number`, `value`: [`EThirdPartyControllerConfiguration`](../enumerations/EThirdPartyControllerConfiguration.md)): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:658](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L658)

#### Parameters

##### appId

`number`

##### value

[`EThirdPartyControllerConfiguration`](../enumerations/EThirdPartyControllerConfiguration.md)

#### Returns

`void`

***

### SetWorkshopItemsDisabledLocally()

> **SetWorkshopItemsDisabledLocally**(`appId`: `number`, `itemIds`: `string`[], `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:666](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L666)

Sets the workshop items disabled state.

#### Parameters

##### appId

`number`

The ID of the application.

##### itemIds

`string`[]

Workshop item IDs to change the state for.

##### value

`boolean`

`true` to disable, `false` otherwise.

#### Returns

`void`

***

### SetWorkshopItemsLoadOrder()

> **SetWorkshopItemsLoadOrder**(`appId`: `number`, `itemIds`: `string`[]): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:673](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L673)

Sets the workshop items load order for a specified application.

#### Parameters

##### appId

`number`

The ID of the application.

##### itemIds

`string`[]

Workshop item IDs. Has to be the full list of subscribed items, otherwise the specified items get moved to the last position.

#### Returns

`void`

***

### ShowControllerConfigurator()

> **ShowControllerConfigurator**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:679](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L679)

Opens the controller configurator for a specific application.

#### Parameters

##### appId

`number`

The ID of the application for which to open the controller configurator.

#### Returns

`void`

***

### ShowStore()

> **ShowStore**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:685](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L685)

Opens the Steam store page for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`void`

***

### SpecifyCompatExperiment()

> **SpecifyCompatExperiment**(`appId`: `number`, `param1`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:687](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L687)

#### Parameters

##### appId

`number`

##### param1

`string`

#### Returns

`void`

***

### SpecifyCompatTool()

> **SpecifyCompatTool**(`appId`: `number`, `strToolName`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:694](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L694)

Specifies a compatibility tool by its name for a given application. If strToolName is an empty string, the specified application will no longer use a compatibility tool.

#### Parameters

##### appId

`number`

The ID of the application to specify compatibility tool for.

##### strToolName

`string`

The name of the compatibility tool to specify.

#### Returns

`void`

***

### StreamGame()

> **StreamGame**(`appId`: `number`, `clientId`: `string`, `param2`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:696](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L696)

#### Parameters

##### appId

`number`

##### clientId

`string`

##### param2

`number`

#### Returns

`void`

***

### SubscribeWorkshopItem()

> **SubscribeWorkshopItem**(`appId`: `number`, `workshopId`: `string`, `subscribed`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:704](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L704)

Subscribes or unsubscribes from a workshop item for a specific app.

#### Parameters

##### appId

`number`

The ID of the application.

##### workshopId

`string`

The ID of the workshop item.

##### subscribed

`boolean`

True to subscribe, false to unsubscribe.

#### Returns

`void`

***

### TerminateApp()

> **TerminateApp**(`appId`: `string`, `param1`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:711](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L711)

Terminates a running application.

#### Parameters

##### appId

`string`

The ID of the application to terminate.

##### param1

`boolean`

Additional parameter. Exact usage may vary.

#### Returns

`void`

***

### ToggleAllowDesktopConfiguration()

> **ToggleAllowDesktopConfiguration**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:714](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L714)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### ToggleAppSteamCloudEnabled()

> **ToggleAppSteamCloudEnabled**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:721](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L721)

Toggles the Steam Cloud synchronization for game saves for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`void`

#### Remarks

This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.

***

### ToggleAppSteamCloudSyncOnSuspendEnabled()

> **ToggleAppSteamCloudSyncOnSuspendEnabled**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:724](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L724)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### ToggleEnableSteamOverlayForApp()

> **ToggleEnableSteamOverlayForApp**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:730](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L730)

Toggles the Steam Overlay setting for a specific application.

#### Parameters

##### appId

`number`

The ID of the application.

#### Returns

`void`

***

### ToggleOverrideResolutionForInternalDisplay()

> **ToggleOverrideResolutionForInternalDisplay**(`appId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/App.ts:733](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L733)

#### Parameters

##### appId

`number`

#### Returns

`void`

***

### UninstallFlatpakApp()

> **UninstallFlatpakApp**(`app`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/App.ts:735](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L735)

#### Parameters

##### app

`string`

#### Returns

`Promise`\<`boolean`\>

***

### VerifyApp()

> **VerifyApp**(`appId`: `number`): `Promise`\<\{ `nGameActionID`: `number`; \}\>

Defined in: [packages/client/src/globals/steam-client/App.ts:741](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/App.ts#L741)

Verifies the integrity of an app's files.

#### Parameters

##### appId

`number`

The ID of the app to verify.

#### Returns

`Promise`\<\{ `nGameActionID`: `number`; \}\>
