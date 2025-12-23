[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ClientNotifications

# Interface: ClientNotifications

Defined in: [packages/client/src/globals/steam-client/ClientNotifications.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ClientNotifications.ts#L3)

## Methods

### DisplayClientNotification()

> **DisplayClientNotification**(`notification`: [`EClientUINotificationType`](../enumerations/EClientUINotificationType.md), `options`: `string`, `callback`: (`context`: [`BrowserContext`](BrowserContext.md)) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/ClientNotifications.ts:10](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ClientNotifications.ts#L10)

Displays a Steam notification.

#### Parameters

##### notification

[`EClientUINotificationType`](../enumerations/EClientUINotificationType.md)

Notification type.

##### options

`string`

Stringified object of [SteamNotificationOptions](SteamNotificationOptions.md).

##### callback

(`context`: [`BrowserContext`](BrowserContext.md)) => `void`

#### Returns

`void`

***

### OnRespondToClientNotification()

> **OnRespondToClientNotification**(`notificationId`: `number`, `handleAction`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/ClientNotifications.ts:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/ClientNotifications.ts#L20)

#### Parameters

##### notificationId

`number`

The ID of the notification to handle.

##### handleAction

`boolean`

`true` to execute the callback function associated with the notification.

#### Returns

`void`
