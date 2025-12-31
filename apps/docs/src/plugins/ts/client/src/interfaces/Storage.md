[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Storage

# Interface: Storage

Defined in: [packages/client/src/globals/steam-client/Storage.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L8)

SteamClient.MachineStorage affects the "STEAMPATH/config/config.vdf" file.
SteamClient.RoamingStorage affects the "STEAMPATH/userdata/STEAMID3/7/remote/sharedconfig.vdf" file.
SteamClient.Storage affects the "STEAMPATH/userdata/STEAMID3/config/localconfig.vdf" file.

## Methods

### DeleteKey()

> **DeleteKey**(`key`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>

Defined in: [packages/client/src/globals/steam-client/Storage.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L9)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>

***

### GetJSON()

> **GetJSON**(`key`: `string`): `Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Storage.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L14)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

#### Remarks

Use [SetObject](#setobject) to set.

***

### GetString()

> **GetString**(`key`: `string`): `Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Storage.ts:16](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L16)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`string` \| [`OperationResponse`](OperationResponse.md)\>

***

### SetObject()

> **SetObject**(`key`: `string`, `value`: `object`): `Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>

Defined in: [packages/client/src/globals/steam-client/Storage.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L21)

#### Parameters

##### key

`string`

##### value

`object`

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>

#### Remarks

Use [SetObject](#setobject) to get.

***

### SetString()

> **SetString**(`key`: `string`, `value`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>

Defined in: [packages/client/src/globals/steam-client/Storage.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Storage.ts#L23)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md) \| `undefined`\>
