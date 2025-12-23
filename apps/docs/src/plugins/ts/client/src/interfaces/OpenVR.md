[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / OpenVR

# Interface: OpenVR

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L4)

## Properties

### Device

> **Device**: [`VRDevice`](VRDevice.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L5)

***

### DeviceProperties

> **DeviceProperties**: [`DeviceProperties`](DeviceProperties.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L6)

***

### Keyboard

> **Keyboard**: [`Keyboard`](Keyboard.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L17)

***

### PathProperties

> **PathProperties**: [`PathProperties`](PathProperties.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L18)

***

### RegisterForButtonPress

> **RegisterForButtonPress**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:22](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L22)

***

### RegisterForInstallDialog

> **RegisterForInstallDialog**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:26](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L26)

***

### SetOverlayInteractionAffordance

> **SetOverlayInteractionAffordance**: `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L36)

***

### StartVR

> **StartVR**: `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L38)

***

### TriggerOverlayHapticEffect

> **TriggerOverlayHapticEffect**: `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L39)

***

### VRNotifications

> **VRNotifications**: [`VRNotifications`](VRNotifications.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L40)

***

### VROverlay

> **VROverlay**: [`VROverlay`](VROverlay.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L41)

## Methods

### GetMutualCapabilities()

> **GetMutualCapabilities**(): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L11)

#### Returns

`Promise`\<`any`\>

#### Throws

OperationResponse if mutual capabilities haven't been loaded.

***

### GetWebSecret()

> **GetWebSecret**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L13)

#### Returns

`Promise`\<`string`\>

***

### InstallVR()

> **InstallVR**(): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L15)

#### Returns

`any`

***

### QuitAllVR()

> **QuitAllVR**(): `any`

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L20)

#### Returns

`any`

***

### RegisterForHMDActivityLevelChanged()

> **RegisterForHMDActivityLevelChanged**(`callback`: (`m_eHMDActivityLevel`: [`EHMDActivityLevel`](../enumerations/EHMDActivityLevel.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L24)

#### Parameters

##### callback

(`m_eHMDActivityLevel`: [`EHMDActivityLevel`](../enumerations/EHMDActivityLevel.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForStartupErrors()

> **RegisterForStartupErrors**(`callback`: (`clientError`: `any`, `initError`: `any`, `initErrorString`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L28)

#### Parameters

##### callback

(`clientError`: `any`, `initError`: `any`, `initErrorString`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForVRHardwareDetected()

> **RegisterForVRHardwareDetected**(`callback`: (`m_bHMDPresent`: `any`, `m_bHMDHardwareDetected`: `any`, `m_strHMDName`: `any`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L30)

#### Parameters

##### callback

(`m_bHMDPresent`: `any`, `m_bHMDHardwareDetected`: `any`, `m_strHMDName`: `any`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForVRModeChange()

> **RegisterForVRModeChange**(`callback`: (`m_bIsVRRunning`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L32)

#### Parameters

##### callback

(`m_bIsVRRunning`: `boolean`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForVRSceneAppChange()

> **RegisterForVRSceneAppChange**(`callback`: (`param0`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/OpenVR.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/OpenVR.ts#L34)

#### Parameters

##### callback

(`param0`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)
