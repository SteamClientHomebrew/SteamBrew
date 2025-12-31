[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / SharedConnection

# Interface: SharedConnection

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L6)

`hSharedConnection` is the number from [AllocateSharedConnection](#allocatesharedconnection).

## Properties

### SendMsg

> **SendMsg**: `any`

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L19)

***

### SendMsgAndAwaitBinaryResponse

> **SendMsgAndAwaitBinaryResponse**: `any`

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L20)

## Methods

### AllocateSharedConnection()

> **AllocateSharedConnection**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L7)

#### Returns

`Promise`\<`number`\>

***

### Close()

> **Close**(`hSharedConnection`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L11)

#### Parameters

##### hSharedConnection

`number`

#### Returns

`void`

***

### RegisterOnBinaryMessageReceived()

> **RegisterOnBinaryMessageReceived**(`hSharedConnection`: `number`, `callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L13)

#### Parameters

##### hSharedConnection

`number`

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterOnLogonInfoChanged()

> **RegisterOnLogonInfoChanged**(`hSharedConnection`: `number`, `callback`: (`info`: [`LogonInfo`](LogonInfo.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L15)

#### Parameters

##### hSharedConnection

`number`

##### callback

(`info`: [`LogonInfo`](LogonInfo.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterOnMessageReceived()

> **RegisterOnMessageReceived**(`hSharedConnection`: `number`, `callback`: (`param0`: `any`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L17)

#### Parameters

##### hSharedConnection

`number`

##### callback

(`param0`: `any`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### SendMsgAndAwaitResponse()

> **SendMsgAndAwaitResponse**(`hSharedConnection`: `number`, `msg`: `string`): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:22](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L22)

#### Parameters

##### hSharedConnection

`number`

##### msg

`string`

#### Returns

`Promise`\<`any`\>

***

### SubscribeToClientServiceMethod()

> **SubscribeToClientServiceMethod**(`hSharedConnection`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L24)

#### Parameters

##### hSharedConnection

`number`

##### param1

`any`

#### Returns

`any`

***

### SubscribeToEMsg()

> **SubscribeToEMsg**(`hSharedConnection`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/SharedConnection.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/SharedConnection.ts#L26)

#### Parameters

##### hSharedConnection

`number`

##### param1

`any`

#### Returns

`any`
