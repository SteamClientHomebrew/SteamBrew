[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Notifications

# Interface: Notifications

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L7)

Everything is taken from here:
https://github.com/SteamDatabase/SteamTracking/blob/master/Protobufs/steammessages_clientnotificationtypes.proto

## Methods

### RegisterForNotifications()

> **RegisterForNotifications**(`callback`: (`notificationIndex`: `number`, `type`: [`EClientNotificationType`](../enumerations/EClientNotificationType.md), `data`: `ArrayBuffer`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Notifications.ts:12](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Notifications.ts#L12)

If `data` is deserialized, returns one of the following here: Notifications

#### Parameters

##### callback

(`notificationIndex`: `number`, `type`: [`EClientNotificationType`](../enumerations/EClientNotificationType.md), `data`: `ArrayBuffer`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.
