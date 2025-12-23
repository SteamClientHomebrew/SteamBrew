[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / InstallFolder

# Interface: InstallFolder

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L7)

Represents functions related to Steam Install Folders.

## Methods

### AddInstallFolder()

> **AddInstallFolder**(`path`: `string`): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L13)

Adds a Steam Library folder to the Steam client.

#### Parameters

##### path

`string`

The path of the Steam Library folder to be added.

#### Returns

`Promise`\<`number`\>

the index of the added folder.

***

### BrowseFilesInFolder()

> **BrowseFilesInFolder**(`folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L19)

Opens the file explorer to browse files in a specific Steam Library folder.

#### Parameters

##### folderIndex

`number`

The index of the folder to be opened.

#### Returns

`void`

***

### CancelMove()

> **CancelMove**(): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L24)

Cancels the current move operation for moving game content.

#### Returns

`void`

***

### GetInstallFolders()

> **GetInstallFolders**(): `Promise`\<[`SteamInstallFolder`](SteamInstallFolder.md)[]\>

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L30)

Retrieves a list of installed Steam Library folders.

#### Returns

`Promise`\<[`SteamInstallFolder`](SteamInstallFolder.md)[]\>

an array of SteamInstallFolder objects.

***

### GetPotentialFolders()

> **GetPotentialFolders**(): `Promise`\<[`PotentialInstallFolder`](PotentialInstallFolder.md)[]\>

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L36)

Retrieves a list of potential Steam Library folders that can be added.

#### Returns

`Promise`\<[`PotentialInstallFolder`](PotentialInstallFolder.md)[]\>

an array of PotentialInstallFolder objects.

***

### MoveInstallFolderForApp()

> **MoveInstallFolderForApp**(`appId`: `number`, `folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:43](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L43)

Moves the installation folder for a specific app to another Steam Library folder.

#### Parameters

##### appId

`number`

The ID of the application to be moved.

##### folderIndex

`number`

The index of the target Steam Library folder.

#### Returns

`void`

***

### RefreshFolders()

> **RefreshFolders**(): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L48)

Refreshes the list of installed Steam Library folders.

#### Returns

`void`

***

### RegisterForInstallFolderChanges()

> **RegisterForInstallFolderChanges**(`callback`: (`change`: [`FolderChange`](FolderChange.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L55)

Registers a callback function to be called when changes occur in Steam Install Folders.

#### Parameters

##### callback

(`change`: [`FolderChange`](FolderChange.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForMoveContentProgress()

> **RegisterForMoveContentProgress**(`callback`: (`progress`: [`MoveContentProgress`](MoveContentProgress.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:62](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L62)

Registers a callback function to be called when moving game content progresses.

#### Parameters

##### callback

(`progress`: [`MoveContentProgress`](MoveContentProgress.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForRepairFolderFinished()

> **RegisterForRepairFolderFinished**(`callback`: (`change`: [`FolderChange`](FolderChange.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:69](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L69)

Registers a callback function to be called when repairing an install folder is finished.

#### Parameters

##### callback

(`change`: [`FolderChange`](FolderChange.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RemoveInstallFolder()

> **RemoveInstallFolder**(`folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L75)

Removes a Steam Library folder from the Steam client.

#### Parameters

##### folderIndex

`number`

The index of the folder to be removed.

#### Returns

`void`

***

### RepairInstallFolder()

> **RepairInstallFolder**(`folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L81)

Repairs an installed Steam Library folder.

#### Parameters

##### folderIndex

`number`

The index of the folder to be repaired.

#### Returns

`void`

***

### SetDefaultInstallFolder()

> **SetDefaultInstallFolder**(`folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:87](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L87)

Sets a specific Steam Library folder as the default install folder.

#### Parameters

##### folderIndex

`number`

The index of the folder to be set as default.

#### Returns

`void`

***

### SetFolderLabel()

> **SetFolderLabel**(`folderIndex`: `number`, `label`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:94](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L94)

Sets a user-defined label for a specific Steam Library folder.

#### Parameters

##### folderIndex

`number`

The index of the folder to be labeled.

##### label

`string`

The label to be assigned to the folder.

#### Returns

`void`
