[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / CAuthentication\_DeviceDetails

# Interface: CAuthentication\_DeviceDetails

Defined in: [packages/client/src/globals/steam-client/Auth.ts:62](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L62)

`deserializeBinary` argument:
```
[
    await SteamClient.System.GetOSType(),
    await SteamClient.Auth.GetLocalHostname(),
    await SteamClient.Auth.GetMachineID(),
];
```

## Extends

- [`JsPbMessage`](JsPbMessage.md)

## Methods

### client\_count()

> **client\_count**(): `number` \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:63](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L63)

#### Returns

`number` \| `undefined`

***

### device\_friendly\_name()

> **device\_friendly\_name**(): `string` \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L65)

#### Returns

`string` \| `undefined`

***

### gaming\_device\_type()

> **gaming\_device\_type**(): [`EGamingDeviceType`](../enumerations/EGamingDeviceType.md) \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:67](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L67)

#### Returns

[`EGamingDeviceType`](../enumerations/EGamingDeviceType.md) \| `undefined`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`getClassName`](JsPbMessage.md#getclassname)

***

### machine\_id()

> **machine\_id**(): `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/client/src/globals/steam-client/Auth.ts:69](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L69)

#### Returns

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### os\_type()

> **os\_type**(): [`EOSType`](../enumerations/EOSType.md) \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:71](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L71)

#### Returns

[`EOSType`](../enumerations/EOSType.md) \| `undefined`

***

### platform\_type()

> **platform\_type**(): [`EAuthTokenPlatformType`](../enumerations/EAuthTokenPlatformType.md) \| `undefined`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L73)

#### Returns

[`EAuthTokenPlatformType`](../enumerations/EAuthTokenPlatformType.md) \| `undefined`

***

### serializeBase64String()

> **serializeBase64String**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:254](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L254)

#### Returns

`string`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBase64String`](JsPbMessage.md#serializebase64string)

***

### serializeBinary()

> **serializeBinary**(): `Uint8Array`

Defined in: [packages/client/src/globals/steam-client/shared.ts:256](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L256)

#### Returns

`Uint8Array`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`serializeBinary`](JsPbMessage.md#serializebinary)

***

### set\_client\_count()

> **set\_client\_count**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L75)

#### Returns

`any`

***

### set\_device\_friendly\_name()

> **set\_device\_friendly\_name**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L77)

#### Returns

`any`

***

### set\_gaming\_device\_type()

> **set\_gaming\_device\_type**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L79)

#### Returns

`any`

***

### set\_machine\_id()

> **set\_machine\_id**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L81)

#### Returns

`any`

***

### set\_os\_type()

> **set\_os\_type**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L83)

#### Returns

`any`

***

### set\_platform\_type()

> **set\_platform\_type**(): `any`

Defined in: [packages/client/src/globals/steam-client/Auth.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Auth.ts#L85)

#### Returns

`any`

***

### toObject()

> **toObject**(`includeJsPbInstance`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/shared.ts:261](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L261)

Converts the message to an object.

#### Parameters

##### includeJsPbInstance

`boolean`

#### Returns

`any`

#### Inherited from

[`JsPbMessage`](JsPbMessage.md).[`toObject`](JsPbMessage.md#toobject)
