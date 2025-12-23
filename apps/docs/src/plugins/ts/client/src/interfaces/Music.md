[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Music

# Interface: Music

Defined in: [packages/client/src/globals/steam-client/Music.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L6)

Represents functions related to controlling music playback in the Steam client.

## Methods

### DecreaseVolume()

> **DecreaseVolume**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L10)

Decreases the music volume by 10%.

#### Returns

`void`

***

### IncreaseVolume()

> **IncreaseVolume**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L15)

Increases the music volume by 10%.

#### Returns

`void`

***

### PlayNext()

> **PlayNext**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L20)

Plays the next track in the music playlist.

#### Returns

`void`

***

### PlayPrevious()

> **PlayPrevious**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L25)

Plays the previous track in the music playlist.

#### Returns

`void`

***

### RegisterForMusicPlaybackChanges()

> **RegisterForMusicPlaybackChanges**(`callback`: (`param0`: `boolean` \| [`MusicTrack`](MusicTrack.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Music.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L32)

Registers a callback function to be called when music playback changes.

#### Parameters

##### callback

(`param0`: `boolean` \| [`MusicTrack`](MusicTrack.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForMusicPlaybackPosition()

> **RegisterForMusicPlaybackPosition**(`callback`: (`position`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Music.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L39)

Registers a callback function to be called when the music playback position changes.

#### Parameters

##### callback

(`position`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### SetPlaybackPosition()

> **SetPlaybackPosition**(`position`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L45)

Sets the playback position of the music track.

#### Parameters

##### position

`number`

The position to set in seconds.

#### Returns

`void`

***

### SetPlayingRepeatStatus()

> **SetPlayingRepeatStatus**(`status`: [`EMusicPlayingRepeatStatus`](../enumerations/EMusicPlayingRepeatStatus.md)): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L51)

Sets the repeat status for music playback.

#### Parameters

##### status

[`EMusicPlayingRepeatStatus`](../enumerations/EMusicPlayingRepeatStatus.md)

The repeat status.

#### Returns

`void`

***

### SetPlayingShuffled()

> **SetPlayingShuffled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L57)

Sets the shuffle status for music playback.

#### Parameters

##### value

`boolean`

True to enable shuffle, false to disable shuffle.

#### Returns

`void`

***

### SetVolume()

> **SetVolume**(`volume`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L64)

Sets the volume for music playback.

#### Parameters

##### volume

`number`

The volume level to set.

#### Returns

`void`

#### Remarks

Ranges from 0 to 100.

***

### ToggleMuteVolume()

> **ToggleMuteVolume**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:69](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L69)

Toggles the mute state of the music volume.

#### Returns

`void`

***

### TogglePlayPause()

> **TogglePlayPause**(): `void`

Defined in: [packages/client/src/globals/steam-client/Music.ts:74](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Music.ts#L74)

Toggles between play and pause for music playback.

#### Returns

`void`
