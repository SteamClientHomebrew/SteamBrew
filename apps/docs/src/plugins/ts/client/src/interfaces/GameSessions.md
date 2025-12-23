[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / GameSessions

# Interface: GameSessions

Defined in: [packages/client/src/globals/steam-client/GameSessions.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameSessions.ts#L8)

Represents functions related to Steam Game Sessions.

## Methods

### RegisterForAchievementNotification()

> **RegisterForAchievementNotification**(`callback`: (`notification`: [`AchievementNotification`](AchievementNotification.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/GameSessions.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameSessions.ts#L14)

Registers a callback function to be called when an achievement notification is received.

#### Parameters

##### callback

(`notification`: [`AchievementNotification`](AchievementNotification.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForAppLifetimeNotifications()

> **RegisterForAppLifetimeNotifications**(`callback`: (`notification`: [`AppLifetimeNotification`](AppLifetimeNotification.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/GameSessions.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameSessions.ts#L23)

Registers a callback function to be called when an app lifetime notification is received.

#### Parameters

##### callback

(`notification`: [`AppLifetimeNotification`](AppLifetimeNotification.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForScreenshotNotification()

> **RegisterForScreenshotNotification**(`callback`: (`notification`: [`ScreenshotNotification`](ScreenshotNotification.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/GameSessions.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/GameSessions.ts#L32)

Registers a callback function to be called when a screenshot notification is received.

#### Parameters

##### callback

(`notification`: [`ScreenshotNotification`](ScreenshotNotification.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.
