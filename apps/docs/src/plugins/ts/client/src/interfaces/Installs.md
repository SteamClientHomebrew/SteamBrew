[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Installs

# Interface: Installs

Defined in: [packages/client/src/globals/steam-client/Installs.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L7)

Represents functions related to managing installs and installation wizards in Steam.

## Properties

### RegisterForShowConfirmUninstall

> **RegisterForShowConfirmUninstall**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Installs.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L42)

***

### RegisterForShowRegisterCDKey

> **RegisterForShowRegisterCDKey**: `any`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:58](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L58)

## Methods

### CancelInstall()

> **CancelInstall**(): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L11)

Cancels the installation wizard if it is open.

#### Returns

`void`

***

### ContinueInstall()

> **ContinueInstall**(): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L16)

Continues and starts the installation if the wizard is still open.

#### Returns

`void`

***

### GetInstallManagerInfo()

> **GetInstallManagerInfo**(): `Promise`\<[`InstallMgrInfo`](InstallMgrInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/Installs.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L21)

Retrieves information from the last opened or currently opened installation wizard.

#### Returns

`Promise`\<[`InstallMgrInfo`](InstallMgrInfo.md)\>

***

### OpenInstallBackup()

> **OpenInstallBackup**(`appBackupPath`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:27](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L27)

Opens the restore from backup installer wizard for a specific app.

#### Parameters

##### appBackupPath

`string`

The backup path of the app.

#### Returns

`void`

***

### OpenInstallWizard()

> **OpenInstallWizard**(`appIds`: `number`[]): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:33](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L33)

Opens the installation wizard for specified app IDs.

#### Parameters

##### appIds

`number`[]

An array of app IDs to install.

#### Returns

`void`

***

### OpenUninstallWizard()

> **OpenUninstallWizard**(`appIds`: `number`[], `dontPrompt`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L40)

Opens the uninstall wizard for specified app IDs.

#### Parameters

##### appIds

`number`[]

An array of app IDs to uninstall.

##### dontPrompt

`boolean`

Whether to *not* prompt the user to uninstall.

#### Returns

`void`

***

### RegisterForShowFailedUninstall()

> **RegisterForShowFailedUninstall**(`callback`: (`appId`: `number`, `reason`: [`EAppUpdateError`](../enumerations/EAppUpdateError.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Installs.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L49)

Registers a callback function to be called when the "Failed Uninstall" dialog is shown.

#### Parameters

##### callback

(`appId`: `number`, `reason`: [`EAppUpdateError`](../enumerations/EAppUpdateError.md)) => `void`

The callback function to be called when the dialog is shown.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForShowInstallWizard()

> **RegisterForShowInstallWizard**(`callback`: (`data`: [`InstallMgrInfo`](InstallMgrInfo.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Installs.ts:56](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L56)

Registers a callback function to be called when the installation wizard is shown.

#### Parameters

##### callback

(`data`: [`InstallMgrInfo`](InstallMgrInfo.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### SetAppList()

> **SetAppList**(`appIds`: `number`[]): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L65)

Sets a list of app identifiers for downloads in the installation wizard.

#### Parameters

##### appIds

`number`[]

An array of app IDs to set.

#### Returns

`void`

#### Remarks

The wizard will not reflect this change immediately, but changing another option will.

***

### SetCreateShortcuts()

> **SetCreateShortcuts**(`bDesktopShortcut`: `boolean`, `bSystemMenuShortcut`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L73)

Sets the options for creating shortcuts in the installation wizard.

#### Parameters

##### bDesktopShortcut

`boolean`

Whether to create a desktop shortcut.

##### bSystemMenuShortcut

`boolean`

Whether to create a system menu shortcut.

#### Returns

`void`

#### Remarks

The wizard will not reflect this change immediately, but changing another option will.

***

### SetInstallFolder()

> **SetInstallFolder**(`folderIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Installs.ts:80](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Installs.ts#L80)

Sets the install folder for the installation wizard using an install folder index.

#### Parameters

##### folderIndex

`number`

The index of the install folder.

#### Returns

`void`

#### Remarks

The wizard will not reflect this change immediately, but changing another option will.
