[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / GameNotes

# Interface: GameNotes

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L3)

## Properties

### GetQuota

> **GetQuota**: `Promise`\<`NotesQuota`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L18)

## Methods

### DeleteImage()

> **DeleteImage**(`param0`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L7)

#### Parameters

##### param0

`string`

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the operation was successful.

***

### DeleteNotes()

> **DeleteNotes**(`param0`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L12)

#### Parameters

##### param0

`string`

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the operation was successful.

***

### GetNotes()

> **GetNotes**(`filenameForNotes`: `string`, `directoryForNoteImages`: `string`): `Promise`\<`Notes`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L14)

#### Parameters

##### filenameForNotes

`string`

##### directoryForNoteImages

`string`

#### Returns

`Promise`\<`Notes`\>

***

### GetNotesMetadata()

> **GetNotesMetadata**(`note`: `string`): `Promise`\<`NoteMetadata`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L16)

#### Parameters

##### note

`string`

#### Returns

`Promise`\<`NoteMetadata`\>

***

### GetNumNotes()

> **GetNumNotes**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L17)

#### Returns

`Promise`\<`number`\>

***

### IterateNotes()

> **IterateNotes**(`appId`: `number`, `length`: `number`): `Promise`\<`NoteMetadata`[]\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L20)

#### Parameters

##### appId

`number`

##### length

`number`

#### Returns

`Promise`\<`NoteMetadata`[]\>

***

### ResolveSyncConflicts()

> **ResolveSyncConflicts**(`param0`: `boolean`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L21)

#### Parameters

##### param0

`boolean`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### SaveNotes()

> **SaveNotes**(`filenameForNotes`: `string`, `notes`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L26)

#### Parameters

##### filenameForNotes

`string`

##### notes

`string`

Escaped JSON array of [Note](Note.md).

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### SyncToClient()

> **SyncToClient**(): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:27](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L27)

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### SyncToServer()

> **SyncToServer**(): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L29)

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### UploadImage()

> **UploadImage**(`imageFileNamePrefix`: `string`, `mimeType`: `string`, `base64`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md) \| [`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/GameNotes.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/GameNotes.ts#L37)

#### Parameters

##### imageFileNamePrefix

`string`

##### mimeType

`string`

Image MIME type.

##### base64

`string`

Image contents in base64.

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md) \| [`EResult`](../enumerations/EResult.md)\>

an image file name with its extension that's meant to be used as a part of some URL. (todo)

#### Throws

OperationResponse if invalid MIME type or unable to parse base64 BUT NOT if it failed.
