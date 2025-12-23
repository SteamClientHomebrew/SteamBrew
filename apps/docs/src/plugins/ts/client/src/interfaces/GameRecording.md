[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / GameRecording

# Interface: GameRecording

Defined in: [packages/client/src/globals/steam-client/GameRecording.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameRecording.ts#L3)

## Methods

### RegisterForAudioSessionsChanged()

> **RegisterForAudioSessionsChanged**(`callback`: (`data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/GameRecording.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameRecording.ts#L7)

If `data` is deserialized, returns [CGameRecording\_AudioSessionsChanged\_Notification](CGameRecording_AudioSessionsChanged_Notification.md).

#### Parameters

##### callback

(`data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### SetAudioSessionCaptureState()

> **SetAudioSessionCaptureState**(`id`: `string`, `name`: `string`, `state`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/GameRecording.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameRecording.ts#L8)

#### Parameters

##### id

`string`

##### name

`string`

##### state

`boolean`

#### Returns

`void`
