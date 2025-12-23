[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / SteamInstallFolder

# Interface: SteamInstallFolder

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:100](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L100)

Represents information about an installation folder.

## Extends

- [`PotentialInstallFolder`](PotentialInstallFolder.md)

## Properties

### bIsDefaultFolder

> **bIsDefaultFolder**: `boolean`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:112](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L112)

Indicates if the folder is set as the default installation folder.

***

### bIsFixed

> **bIsFixed**: `boolean`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:131](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L131)

Indicates if the folder is on a fixed drive.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`bIsFixed`](PotentialInstallFolder.md#bisfixed)

***

### bIsMounted

> **bIsMounted**: `boolean`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:114](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L114)

Indicates if the folder is currently mounted.

***

### nFolderIndex

> **nFolderIndex**: `number`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L102)

Index of the folder.

***

### strCapacity

> **strCapacity**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:127](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L127)

Total capacity of the folder.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`strCapacity`](PotentialInstallFolder.md#strcapacity)

***

### strDLCSize

> **strDLCSize**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:106](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L106)

Size of DLC storage used in the folder.

***

### strDriveName

> **strDriveName**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:125](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L125)

Name of the drive where the folder is located.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`strDriveName`](PotentialInstallFolder.md#strdrivename)

***

### strFolderPath

> **strFolderPath**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:121](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L121)

Path of the folder.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`strFolderPath`](PotentialInstallFolder.md#strfolderpath)

***

### strFreeSpace

> **strFreeSpace**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L129)

Available free space in the folder.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`strFreeSpace`](PotentialInstallFolder.md#strfreespace)

***

### strStagedSize

> **strStagedSize**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:110](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L110)

Size of staged storage used in the folder.

***

### strUsedSize

> **strUsedSize**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:104](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L104)

Used space in the folder.

***

### strUserLabel

> **strUserLabel**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L123)

User label for the folder.

#### Inherited from

[`PotentialInstallFolder`](PotentialInstallFolder.md).[`strUserLabel`](PotentialInstallFolder.md#struserlabel)

***

### strWorkshopSize

> **strWorkshopSize**: `string`

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:108](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L108)

Size of workshop storage used in the folder.

***

### vecApps

> **vecApps**: [`AppInfo`](AppInfo.md)[]

Defined in: [packages/client/src/globals/steam-client/InstallFolder.ts:116](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/InstallFolder.ts#L116)

List of applications installed in the folder.
