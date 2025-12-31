[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / FileDialog

# Interface: FileDialog

Defined in: [packages/client/src/globals/steam-client/system/index.ts:183](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L183)

## Properties

### bChooseDirectory?

> `optional` **bChooseDirectory**: `boolean`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:185](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L185)

Whether to choose a directory instead.

***

### rgFilters?

> `optional` **rgFilters**: [`FileDialogFilter`](FileDialogFilter.md)[]

Defined in: [packages/client/src/globals/steam-client/system/index.ts:204](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L204)

Array of file filters.

#### Example

Example from the "Add a Non-Steam Game" dialog:
```
[
    {
        strFileTypeName: LocalizationManager.LocalizeString("#AddNonSteam_Filter_Exe_Linux"),
        rFilePatterns: [ "*.application", "*.exe", "*.sh", "*.AppImage" ],
        bUseAsDefault: true,
    },
    {
        strFileTypeName: LocalizationManager.LocalizeString("#AddNonSteam_Filter_All"),
        rFilePatterns: [ "*" ],
    }
]
```

***

### strInitialFile?

> `optional` **strInitialFile**: `string`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:206](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L206)

Initially selected file.

***

### strTitle?

> `optional` **strTitle**: `string`

Defined in: [packages/client/src/globals/steam-client/system/index.ts:208](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/system/index.ts#L208)

Window title.
