[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Auth

# Interface: Auth

Defined in: [packages/client/src/globals/steam-client/Auth.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L4)

## Methods

### ClearCachedSignInPin()

> **ClearCachedSignInPin**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L8)

#### Returns

`Promise`\<`boolean`\>

a boolean indicating if the operation succeeded.

***

### CurrentUserHasCachedSignInPin()

> **CurrentUserHasCachedSignInPin**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L10)

#### Returns

`Promise`\<`boolean`\>

***

### GetLocalHostname()

> **GetLocalHostname**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L12)

#### Returns

`Promise`\<`string`\>

***

### GetMachineID()

> **GetMachineID**(): `Promise`\<`ArrayBuffer`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L17)

#### Returns

`Promise`\<`ArrayBuffer`\>

a ProtoBuf message. If deserialized, returns [CAuthentication\_DeviceDetails](CAuthentication_DeviceDetails.md).

***

### GetRefreshInfo()

> **GetRefreshInfo**(): `Promise`\<[`AuthRefreshInfo`](AuthRefreshInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L19)

#### Returns

`Promise`\<[`AuthRefreshInfo`](AuthRefreshInfo.md)\>

***

### GetSteamGuardData()

> **GetSteamGuardData**(`param0`: `string`): `Promise`\<[`SteamGuardData`](SteamGuardData.md)\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L21)

#### Parameters

##### param0

`string`

#### Returns

`Promise`\<[`SteamGuardData`](SteamGuardData.md)\>

***

### IsSecureComputer()

> **IsSecureComputer**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L26)

"Secured" refers to unshared.

#### Returns

`Promise`\<`boolean`\>

***

### SetCachedSignInPin()

> **SetCachedSignInPin**(`pin`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L28)

#### Parameters

##### pin

`string`

#### Returns

`Promise`\<`boolean`\>

***

### SetLoginToken()

> **SetLoginToken**(`refreshToken`: `string`, `accountName`: `string`): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L30)

#### Parameters

##### refreshToken

`string`

##### accountName

`string`

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>

***

### SetSteamGuardData()

> **SetSteamGuardData**(`accountName`: `string`, `newGuardData`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L32)

#### Parameters

##### accountName

`string`

##### newGuardData

`string`

#### Returns

`void`

***

### StartSignInFromCache()

> **StartSignInFromCache**(`accountName`: `string`, `offlineMode`: `boolean`): `Promise`\<`void` \| [`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L34)

#### Parameters

##### accountName

`string`

##### offlineMode

`boolean`

#### Returns

`Promise`\<`void` \| [`OperationResponse`](OperationResponse.md)\>

***

### UserHasCachedSignInPin()

> **UserHasCachedSignInPin**(`accountName`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L36)

#### Parameters

##### accountName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### ValidateCachedSignInPin()

> **ValidateCachedSignInPin**(`accountName`: `string`, `pin`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L38)

#### Parameters

##### accountName

`string`

##### pin

`string`

#### Returns

`Promise`\<`boolean`\>
