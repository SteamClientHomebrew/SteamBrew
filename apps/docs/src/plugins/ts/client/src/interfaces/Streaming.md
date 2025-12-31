[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Streaming

# Interface: Streaming

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L4)

## Methods

### AcceptStreamingEULA()

> **AcceptStreamingEULA**(`appId`: `number`, `id`: `string`, `version`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L5)

#### Parameters

##### appId

`number`

##### id

`string`

##### version

`number`

#### Returns

`void`

***

### CancelStreamGame()

> **CancelStreamGame**(): `void`

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L7)

#### Returns

`void`

***

### RegisterForStreamingClientFinished()

> **RegisterForStreamingClientFinished**(`callback`: (`code`: [`EResult`](../enumerations/EResult.md), `result`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L14)

Registers a callback function to be called when the streaming client finishes.

#### Parameters

##### callback

(`code`: [`EResult`](../enumerations/EResult.md), `result`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForStreamingClientLaunchProgress()

> **RegisterForStreamingClientLaunchProgress**(`callback`: (`actionType`: `string`, `taskDetails`: `string`, `done`: `number`, `total`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L21)

Registers a callback function to be called when there is progress in the launch of the streaming client.

#### Parameters

##### callback

(`actionType`: `string`, `taskDetails`: `string`, `done`: `number`, `total`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForStreamingClientStarted()

> **RegisterForStreamingClientStarted**(`callback`: (`appId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:30](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L30)

Registers a callback function to be called when the streaming client is started (e.g., when clicking the stream button).

#### Parameters

##### callback

(`appId`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForStreamingLaunchComplete()

> **RegisterForStreamingLaunchComplete**(`callback`: (`code`: [`EResult`](../enumerations/EResult.md), `result`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:37](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L37)

Registers a callback function to be called when the streaming launch is complete.

#### Parameters

##### callback

(`code`: [`EResult`](../enumerations/EResult.md), `result`: `string`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForStreamingShowEula()

> **RegisterForStreamingShowEula**(`callback`: (`appId`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:39](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L39)

#### Parameters

##### callback

(`appId`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForStreamingShowIntro()

> **RegisterForStreamingShowIntro**(`callback`: (`appId`: `number`, `param`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:41](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L41)

#### Parameters

##### callback

(`appId`: `number`, `param`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForStreamingShowLaunchOptions()

> **RegisterForStreamingShowLaunchOptions**(`callback`: (`appId`: `number`, `launchOptions`: [`LaunchOption`](LaunchOption.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L48)

Registers a callback function to be called when the streaming client receives launch options from the host.

#### Parameters

##### callback

(`appId`: `number`, `launchOptions`: [`LaunchOption`](LaunchOption.md)[]) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### StreamingContinueStreamGame()

> **StreamingContinueStreamGame**(): `void`

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L52)

#### Returns

`void`

***

### StreamingSetLaunchOption()

> **StreamingSetLaunchOption**(`index`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Streaming.ts:58](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Streaming.ts#L58)

Chooses the launch option for the streamed app by its index
and restarts the stream.

#### Parameters

##### index

`number`

#### Returns

`void`
