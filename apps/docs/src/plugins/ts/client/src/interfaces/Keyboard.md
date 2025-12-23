[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Keyboard

# Interface: Keyboard

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L60)

## Methods

### Hide()

> **Hide**(): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L61)

#### Returns

`any`

***

### RegisterForStatus()

> **RegisterForStatus**(`callback`: (`m_bIsKeyboardOpen`: `boolean`, `m_eKeyboardFlags`: `number`, `m_sInitialKeyboardText`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L66)

[EKeyboardFlags](../enumerations/EKeyboardFlags.md) could be useful here

#### Parameters

##### callback

(`m_bIsKeyboardOpen`: `boolean`, `m_eKeyboardFlags`: `number`, `m_sInitialKeyboardText`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### SendDone()

> **SendDone**(): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L68)

#### Returns

`any`

***

### SendText()

> **SendText**(`key`: `string`): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:70](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L70)

#### Parameters

##### key

`string`

#### Returns

`any`

***

### Show()

> **Show**(): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:71](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L71)

#### Returns

`any`
