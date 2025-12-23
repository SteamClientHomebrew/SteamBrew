[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / RemotePlay

# Interface: RemotePlay

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L5)

## Properties

### RegisterForBitrateOverride

> **RegisterForBitrateOverride**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:58](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L58)

#### Todo

no mentions of it in Steam code

## Methods

### BCanAcceptInviteForGame()

> **BCanAcceptInviteForGame**(`gameId`: `string`, `param1`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L9)

#### Parameters

##### gameId

`string`

##### param1

`string`

TODO: Something about restrictions countries ? maybe it's games

#### Returns

`Promise`\<`boolean`\>

***

### BCanCreateInviteForGame()

> **BCanCreateInviteForGame**(`gameId`: `string`, `param1`: `boolean`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L10)

#### Parameters

##### gameId

`string`

##### param1

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### BRemotePlayTogetherGuestOnPhoneOrTablet()

> **BRemotePlayTogetherGuestOnPhoneOrTablet**(`steam64Id`: `string`, `guestId`: `number`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L12)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

#### Returns

`Promise`\<`boolean`\>

***

### BRemotePlayTogetherGuestSupported()

> **BRemotePlayTogetherGuestSupported**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L14)

#### Returns

`Promise`\<`boolean`\>

***

### CancelInviteAndSession()

> **CancelInviteAndSession**(`steam64Id`: `string`, `param1`: `number`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L17)

#### Parameters

##### steam64Id

`string`

##### param1

`number`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### CancelInviteAndSessionWithGuestID()

> **CancelInviteAndSessionWithGuestID**(`steam64Id`: `string`, `guestId`: `number`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L19)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### CancelRemoteClientPairing()

> **CancelRemoteClientPairing**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L21)

#### Returns

`void`

***

### CloseGroup()

> **CloseGroup**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L23)

#### Returns

`Promise`\<`number`\>

***

### CreateGroup()

> **CreateGroup**(`param0`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L25)

#### Parameters

##### param0

`string`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### CreateInviteAndSession()

> **CreateInviteAndSession**(`steam64Id`: `string`, `param1`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:27](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L27)

#### Parameters

##### steam64Id

`string`

##### param1

`string`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### CreateInviteAndSessionWithGuestID()

> **CreateInviteAndSessionWithGuestID**(`steam64Id`: `string`, `guestId`: `number`, `param2`: `string`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L29)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

##### param2

`string`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>

***

### GetClientID()

> **GetClientID**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:31](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L31)

#### Returns

`Promise`\<`string`\>

***

### GetClientStreamingBitrate()

> **GetClientStreamingBitrate**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L34)

#### Returns

`Promise`\<`number`\>

***

### GetClientStreamingQuality()

> **GetClientStreamingQuality**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:35](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L35)

#### Returns

`Promise`\<`number`\>

***

### GetControllerType()

> **GetControllerType**(`controllerIndex`: `number`): `Promise`\<[`EControllerType`](../enumerations/EControllerType.md)\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L36)

#### Parameters

##### controllerIndex

`number`

#### Returns

`Promise`\<[`EControllerType`](../enumerations/EControllerType.md)\>

***

### GetGameSystemVolume()

> **GetGameSystemVolume**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L41)

#### Returns

`Promise`\<`number`\>

an integer from 0 to 100.

***

### GetPerUserInputSettings()

> **GetPerUserInputSettings**(`steam64Id`: `string`): `Promise`\<`RemotePlayInputSettings`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:43](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L43)

#### Parameters

##### steam64Id

`string`

#### Returns

`Promise`\<`RemotePlayInputSettings`\>

***

### GetPerUserInputSettingsWithGuestID()

> **GetPerUserInputSettingsWithGuestID**(`steam64Id`: `string`, `guestId`: `number`): `Promise`\<`RemotePlayInputSettings`\>

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L45)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

#### Returns

`Promise`\<`RemotePlayInputSettings`\>

***

### IdentifyController()

> **IdentifyController**(`nControllerIndex`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:47](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L47)

#### Parameters

##### nControllerIndex

`number`

#### Returns

`void`

***

### InstallAudioDriver()

> **InstallAudioDriver**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L49)

#### Returns

`void`

***

### InstallInputDriver()

> **InstallInputDriver**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L50)

#### Returns

`void`

***

### MoveControllerToSlot()

> **MoveControllerToSlot**(`controllerIndex`: `number`, `slot`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L51)

#### Parameters

##### controllerIndex

`number`

##### slot

`number`

#### Returns

`void`

***

### RegisterForAdditionalParentalBlocks()

> **RegisterForAdditionalParentalBlocks**(`callback`: (`blocks`: [`EParentalFeature`](../enumerations/EParentalFeature.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L52)

#### Parameters

##### callback

(`blocks`: [`EParentalFeature`](../enumerations/EParentalFeature.md)[]) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForAudioDriverPrompt()

> **RegisterForAudioDriverPrompt**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L53)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForClearControllers()

> **RegisterForClearControllers**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:59](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L59)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerIndexSet()

> **RegisterForControllerIndexSet**(`callback`: (`steamid`: `string`, `slot`: `number`, `guestid`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L60)

#### Parameters

##### callback

(`steamid`: `string`, `slot`: `number`, `guestid`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForDevicesChanges()

> **RegisterForDevicesChanges**(`callback`: (`devices`: [`RemotePlayDevice`](RemotePlayDevice.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L64)

#### Parameters

##### callback

(`devices`: [`RemotePlayDevice`](RemotePlayDevice.md)[]) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForGroupCreated()

> **RegisterForGroupCreated**(`callback`: (`steamId`: `string`, `appId`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L66)

#### Parameters

##### callback

(`steamId`: `string`, `appId`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForGroupDisbanded()

> **RegisterForGroupDisbanded**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:67](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L67)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForInputDriverPrompt()

> **RegisterForInputDriverPrompt**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L68)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForInputDriverRestartNotice()

> **RegisterForInputDriverRestartNotice**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:69](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L69)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForInputUsed()

> **RegisterForInputUsed**(`callback`: (`steam64Id`: `string`, `type`: [`EClientUsedInputType`](../enumerations/EClientUsedInputType.md), `guestId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:71](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L71)

#### Parameters

##### callback

(`steam64Id`: `string`, `type`: [`EClientUsedInputType`](../enumerations/EClientUsedInputType.md), `guestId`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForInviteResult()

> **RegisterForInviteResult**(`callback`: (`steamId`: `string`, `param1`: `any`, `result`: [`ERemoteClientLaunch`](../enumerations/ERemoteClientLaunch.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L75)

#### Parameters

##### callback

(`steamId`: `string`, `param1`: `any`, `result`: [`ERemoteClientLaunch`](../enumerations/ERemoteClientLaunch.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForNetworkUtilizationUpdate()

> **RegisterForNetworkUtilizationUpdate**(`callback`: (`steam64Id`: `string`, `guestId`: `number`, `networkUtilization`: `number`, `networkDuration`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L83)

#### Parameters

##### callback

(`steam64Id`: `string`, `guestId`: `number`, `networkUtilization`: `number`, `networkDuration`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForPlaceholderStateChanged()

> **RegisterForPlaceholderStateChanged**(`callback`: (`isShowingPlaceholder`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:87](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L87)

#### Parameters

##### callback

(`isShowingPlaceholder`: `boolean`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForPlayerInputSettingsChanged()

> **RegisterForPlayerInputSettingsChanged**(`callback`: (`steamId`: `string`, `settings`: `RemotePlayInputSettings`, `guestId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L89)

#### Parameters

##### callback

(`steamId`: `string`, `settings`: `RemotePlayInputSettings`, `guestId`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForQualityOverride()

> **RegisterForQualityOverride**(`callback`: (`hostStreamingQualityOverride`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:93](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L93)

#### Parameters

##### callback

(`hostStreamingQualityOverride`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteClientLaunchFailed()

> **RegisterForRemoteClientLaunchFailed**(`callback`: (`state`: [`ERemoteClientLaunch`](../enumerations/ERemoteClientLaunch.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:95](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L95)

#### Parameters

##### callback

(`state`: [`ERemoteClientLaunch`](../enumerations/ERemoteClientLaunch.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteClientStarted()

> **RegisterForRemoteClientStarted**(`callback`: (`steam64Id`: `string`, `appId`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:97](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L97)

#### Parameters

##### callback

(`steam64Id`: `string`, `appId`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteClientStopped()

> **RegisterForRemoteClientStopped**(`callback`: (`steam64Id`: `string`, `appId`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:99](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L99)

#### Parameters

##### callback

(`steam64Id`: `string`, `appId`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteDeviceAuthorizationCancelled()

> **RegisterForRemoteDeviceAuthorizationCancelled**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:101](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L101)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteDeviceAuthorizationRequested()

> **RegisterForRemoteDeviceAuthorizationRequested**(`callback`: (`device`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:103](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L103)

#### Parameters

##### callback

(`device`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRemoteDevicePairingPINChanged()

> **RegisterForRemoteDevicePairingPINChanged**(`callback`: (`device`: `string`, `pin`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:105](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L105)

#### Parameters

##### callback

(`device`: `string`, `pin`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForRestrictedSessionChanges()

> **RegisterForRestrictedSessionChanges**(`callback`: (`restrictedSession`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:107](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L107)

#### Parameters

##### callback

(`restrictedSession`: `boolean`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForSessionStarted()

> **RegisterForSessionStarted**(`callback`: (`steam64Id`: `string`, `gameId`: `string`, `guestId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L111)

#### Parameters

##### callback

(`steam64Id`: `string`, `gameId`: `string`, `guestId`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForSessionStopped()

#### Call Signature

> **RegisterForSessionStopped**(`callback`: (`steam64Id`: `string`, `guestId`: `number`, `avatarHash`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:109](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L109)

##### Parameters

###### callback

(`steam64Id`: `string`, `guestId`: `number`, `avatarHash`: `string`) => `void`

##### Returns

[`Unregisterable`](Unregisterable.md)

#### Call Signature

> **RegisterForSessionStopped**(`callback`: (`steam64Id`: `string`, `guestId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:113](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L113)

##### Parameters

###### callback

(`steam64Id`: `string`, `guestId`: `number`) => `void`

##### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForSettingsChanges()

> **RegisterForSettingsChanges**(`callback`: (`remotePlaySettings`: [`RemotePlaySettings`](RemotePlaySettings.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:115](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L115)

#### Parameters

##### callback

(`remotePlaySettings`: [`RemotePlaySettings`](RemotePlaySettings.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### SetClientStreamingBitrate()

> **SetClientStreamingBitrate**(`bitrate`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:117](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L117)

#### Parameters

##### bitrate

`number`

#### Returns

`void`

***

### SetClientStreamingQuality()

> **SetClientStreamingQuality**(`quality`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:119](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L119)

#### Parameters

##### quality

`number`

#### Returns

`void`

***

### SetGameSystemVolume()

> **SetGameSystemVolume**(`volume`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:121](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L121)

#### Parameters

##### volume

`number`

#### Returns

`void`

***

### SetPerUserControllerInputEnabled()

> **SetPerUserControllerInputEnabled**(`steam64Id`: `string`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L123)

#### Parameters

##### steam64Id

`string`

##### enabled

`boolean`

#### Returns

`void`

***

### SetPerUserControllerInputEnabledWithGuestID()

> **SetPerUserControllerInputEnabledWithGuestID**(`steam64Id`: `string`, `guestId`: `number`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:125](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L125)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

##### enabled

`boolean`

#### Returns

`void`

***

### SetPerUserKeyboardInputEnabled()

> **SetPerUserKeyboardInputEnabled**(`steam64Id`: `string`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:127](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L127)

#### Parameters

##### steam64Id

`string`

##### enabled

`boolean`

#### Returns

`void`

***

### SetPerUserKeyboardInputEnabledWithGuestID()

> **SetPerUserKeyboardInputEnabledWithGuestID**(`steam64Id`: `string`, `guestId`: `number`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:129](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L129)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

##### enabled

`boolean`

#### Returns

`void`

***

### SetPerUserMouseInputEnabled()

> **SetPerUserMouseInputEnabled**(`steam64Id`: `string`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:131](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L131)

#### Parameters

##### steam64Id

`string`

##### enabled

`boolean`

#### Returns

`void`

***

### SetPerUserMouseInputEnabledWithGuestID()

> **SetPerUserMouseInputEnabledWithGuestID**(`steam64Id`: `string`, `guestId`: `number`, `enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:133](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L133)

#### Parameters

##### steam64Id

`string`

##### guestId

`number`

##### enabled

`boolean`

#### Returns

`void`

***

### SetRemoteDeviceAuthorized()

> **SetRemoteDeviceAuthorized**(`param0`: `boolean`, `param1`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:135](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L135)

#### Parameters

##### param0

`boolean`

##### param1

`string`

#### Returns

`void`

***

### SetRemoteDevicePIN()

> **SetRemoteDevicePIN**(`pin`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:137](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L137)

#### Parameters

##### pin

`string`

#### Returns

`void`

***

### SetRemotePlayEnabled()

> **SetRemotePlayEnabled**(`enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:139](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L139)

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### SetStreamingClientConfig()

> **SetStreamingClientConfig**(`base64`: `string`, `sessionId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:144](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L144)

#### Parameters

##### base64

`string`

Serialized base64 message from [StreamingClientConfig](StreamingClientConfig.md).

##### sessionId

`number`

#### Returns

`void`

***

### SetStreamingClientConfigEnabled()

> **SetStreamingClientConfigEnabled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:149](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L149)

Enables advanced client options.

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetStreamingDesktopToRemotePlayTogetherEnabled()

> **SetStreamingDesktopToRemotePlayTogetherEnabled**(`enabled`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:151](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L151)

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### SetStreamingP2PScope()

> **SetStreamingP2PScope**(`scope`: [`EStreamP2PScope`](../enumerations/EStreamP2PScope.md)): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:153](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L153)

#### Parameters

##### scope

[`EStreamP2PScope`](../enumerations/EStreamP2PScope.md)

#### Returns

`void`

***

### SetStreamingServerConfig()

> **SetStreamingServerConfig**(`base64`: `string`, `sessionId`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:158](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L158)

#### Parameters

##### base64

`string`

Serialized base64 message from [StreamingServerConfig](StreamingServerConfig.md).

##### sessionId

`number`

#### Returns

`void`

***

### SetStreamingServerConfigEnabled()

> **SetStreamingServerConfigEnabled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:163](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L163)

Enables advanced host options.

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### StopStreamingClient()

> **StopStreamingClient**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:165](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L165)

#### Returns

`void`

***

### StopStreamingSession()

> **StopStreamingSession**(`id`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:167](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L167)

#### Parameters

##### id

`number`

#### Returns

`void`

***

### StopStreamingSessionAndSuspendDevice()

> **StopStreamingSessionAndSuspendDevice**(`id`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:168](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L168)

#### Parameters

##### id

`number`

#### Returns

`void`

***

### UnlockH264()

> **UnlockH264**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:170](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L170)

#### Returns

`void`

***

### UnpairRemoteDevices()

> **UnpairRemoteDevices**(): `void`

Defined in: [packages/client/src/globals/steam-client/RemotePlay.ts:175](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/RemotePlay.ts#L175)

Unpairs all devices.

#### Returns

`void`
