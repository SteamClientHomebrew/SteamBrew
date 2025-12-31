[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / WebChat

# Interface: WebChat

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L4)

## Methods

### BSuppressPopupsInRestore()

> **BSuppressPopupsInRestore**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:5](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L5)

#### Returns

`Promise`\<`boolean`\>

***

### GetCurrentUserAccountID()

> **GetCurrentUserAccountID**(): `Promise`\<`number`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L11)

Gets your Steam3 ID.

#### Returns

`Promise`\<`number`\>

a Steam3 ID.

***

### GetLocalAvatarBase64()

> **GetLocalAvatarBase64**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L17)

Gets the current user's 64x64 avatar as a data URL.

#### Returns

`Promise`\<`string`\>

the data URL.

***

### GetLocalPersonaName()

> **GetLocalPersonaName**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L23)

Gets the current user's nickname.

#### Returns

`Promise`\<`string`\>

the nickname.

***

### GetOverlayChatBrowserInfo()

> **GetOverlayChatBrowserInfo**(): `Promise`\<[`OverlayBrowserInfo`](OverlayBrowserInfo.md)[]\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L25)

#### Returns

`Promise`\<[`OverlayBrowserInfo`](OverlayBrowserInfo.md)[]\>

***

### GetPrivateConnectString()

> **GetPrivateConnectString**(`param0`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:28](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L28)

#### Parameters

##### param0

`number`

#### Returns

`Promise`\<`string`\>

***

### GetPushToTalkEnabled()

> **GetPushToTalkEnabled**(): `Promise`\<[`PushToTalkInfo`](PushToTalkInfo.md)\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:34](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L34)

Gets information about push-to-Talk.

#### Returns

`Promise`\<[`PushToTalkInfo`](PushToTalkInfo.md)\>

***

### GetSignIntoFriendsOnStart()

> **GetSignIntoFriendsOnStart**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L40)

Gets the "Sign in to friends when Steam starts" option value.

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the option is enabled or not.

***

### GetUIMode()

> **GetUIMode**(): `Promise`\<[`EUIMode`](../enumerations/EUIMode.md)\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L46)

Retrieves the current UI mode.

#### Returns

`Promise`\<[`EUIMode`](../enumerations/EUIMode.md)\>

the current UI mode.

***

### OnGroupChatUserStateChange()

> **OnGroupChatUserStateChange**(`chatGroupId`: `number`, `accountId`: `number`, `action`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:48](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L48)

#### Parameters

##### chatGroupId

`number`

##### accountId

`number`

##### action

`number`

#### Returns

`void`

***

### OnNewGroupChatMsgAdded()

> **OnNewGroupChatMsgAdded**(`groupId`: `string`, `chatId`: `string`, `accountId`: `number`, `timestamp`: `number`, `param4`: `number`, `message`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:50](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L50)

#### Parameters

##### groupId

`string`

##### chatId

`string`

##### accountId

`number`

##### timestamp

`number`

##### param4

`number`

##### message

`string`

#### Returns

`void`

***

### OpenURLInClient()

> **OpenURLInClient**(`url`: `string`, `pid`: `number`, `forceExternal`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L64)

Opens a provided URL in the Steam client. Does NOT work on desktop mode -
will open in default web browser instead!

#### Parameters

##### url

`string`

The URL to open.

##### pid

`number`

##### forceExternal

`boolean`

#### Returns

`void`

***

### RegisterForComputerActiveStateChange()

> **RegisterForComputerActiveStateChange**(`callback`: (`state`: [`EComputerActiveState`](../enumerations/EComputerActiveState.md), `time`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L73)

Registers a callback function to be called when the computer's active state changes.

#### Parameters

##### callback

(`state`: [`EComputerActiveState`](../enumerations/EComputerActiveState.md), `time`: `number`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

#### Todo

Changes to 2 after 10 seconds?

#### Todo

Does not affect the keyboard?

***

### RegisterForFriendPostMessage()

> **RegisterForFriendPostMessage**(`callback`: (`data`: [`FriendChatDialogData`](FriendChatDialogData.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:80](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L80)

#### Parameters

##### callback

(`data`: [`FriendChatDialogData`](FriendChatDialogData.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Todo

WebChat.ShowFriendChatDialog does this.

***

### RegisterForMouseXButtonDown()

> **RegisterForMouseXButtonDown**(`callback`: (`param0`: `number`) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L85)

To unregister, use [UnregisterForMouseXButtonDown](#unregisterformousexbuttondown).

#### Parameters

##### callback

(`param0`: `number`) => `void`

#### Returns

`void`

***

### RegisterForPushToTalkStateChange()

> **RegisterForPushToTalkStateChange**(`callback`: (`state`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L92)

Registers a callback function to be called when the push-to-talk state changes.

#### Parameters

##### callback

(`state`: `boolean`) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForUIModeChange()

> **RegisterForUIModeChange**(`callback`: (`mode`: [`EUIMode`](../enumerations/EUIMode.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:99](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L99)

Registers a callback function to be called when the UI mode is changed.

#### Parameters

##### callback

(`mode`: [`EUIMode`](../enumerations/EUIMode.md)) => `void`

The callback function to be called.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterOverlayChatBrowserInfoChanged()

> **RegisterOverlayChatBrowserInfoChanged**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:101](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L101)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### SetActiveClanChatIDs()

> **SetActiveClanChatIDs**(`clanChatIds`: `number`[]): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:103](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L103)

#### Parameters

##### clanChatIds

`number`[]

#### Returns

`void`

***

### SetNumChatsWithUnreadPriorityMessages()

> **SetNumChatsWithUnreadPriorityMessages**(`size`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:105](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L105)

#### Parameters

##### size

`number`

#### Returns

`void`

***

### SetPersonaName()

> **SetPersonaName**(`value`: `string`): `Promise`\<`SetPersonaNameResult`\>

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:107](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L107)

#### Parameters

##### value

`string`

#### Returns

`Promise`\<`SetPersonaNameResult`\>

***

### SetPushToMuteEnabled()

> **SetPushToMuteEnabled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:109](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L109)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetPushToTalkEnabled()

> **SetPushToTalkEnabled**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L111)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetPushToTalkHotKey()

> **SetPushToTalkHotKey**(`param0`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:113](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L113)

#### Parameters

##### param0

`number`

#### Returns

`void`

***

### SetPushToTalkMouseButton()

> **SetPushToTalkMouseButton**(`param0`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:115](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L115)

#### Parameters

##### param0

`number`

#### Returns

`void`

***

### SetVoiceChatActive()

> **SetVoiceChatActive**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:117](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L117)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### SetVoiceChatStatus()

> **SetVoiceChatStatus**(`muted`: `boolean`, `deafened`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:118](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L118)

#### Parameters

##### muted

`boolean`

##### deafened

`boolean`

#### Returns

`void`

***

### ShowChatRoomGroupDialog()

> **ShowChatRoomGroupDialog**(`param0`: `number`, `param1`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:119](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L119)

#### Parameters

##### param0

`number`

##### param1

`number`

#### Returns

`void`

***

### ShowFriendChatDialog()

> **ShowFriendChatDialog**(`steamid64`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:121](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L121)

#### Parameters

##### steamid64

`string`

#### Returns

`void`

***

### UnregisterForMouseXButtonDown()

> **UnregisterForMouseXButtonDown**(): `void`

Defined in: [packages/client/src/globals/steam-client/WebChat.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/WebChat.ts#L123)

#### Returns

`void`
