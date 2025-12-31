[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / JsPbMessage

# Interface: JsPbMessage

Defined in: [packages/client/src/globals/steam-client/shared.ts:251](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L251)

Deserialized ProtoBuf message.

## Extended by

- [`CLibraryBootstrapData`](CLibraryBootstrapData.md)
- [`CAppOverview_Change`](CAppOverview_Change.md)
- [`CMsgCloudPendingRemoteOperations`](CMsgCloudPendingRemoteOperations.md)
- [`CAuthentication_DeviceDetails`](CAuthentication_DeviceDetails.md)
- [`CGameRecording_AudioSessionsChanged_Notification`](CGameRecording_AudioSessionsChanged_Notification.md)
- [`ClientNotificationGroupChatMessage`](ClientNotificationGroupChatMessage.md)
- [`ClientNotificationFriendMessage`](ClientNotificationFriendMessage.md)
- [`ClientNotificationCloudSyncFailure`](ClientNotificationCloudSyncFailure.md)
- [`ClientNotificationCloudSyncConflict`](ClientNotificationCloudSyncConflict.md)
- [`ClientNotificationScreenshot`](ClientNotificationScreenshot.md)
- [`ClientNotificationDownloadCompleted`](ClientNotificationDownloadCompleted.md)
- [`ClientNotificationFriendInvite`](ClientNotificationFriendInvite.md)
- [`ClientNotificationFriendInviteRollup`](ClientNotificationFriendInviteRollup.md)
- [`ClientNotificationFriendInGame`](ClientNotificationFriendInGame.md)
- [`ClientNotificationFriendOnline`](ClientNotificationFriendOnline.md)
- [`ClientNotificationAchievement`](ClientNotificationAchievement.md)
- [`ClientNotificationLowBattery`](ClientNotificationLowBattery.md)
- [`ClientNotificationSystemUpdate`](ClientNotificationSystemUpdate.md)
- [`ClientNotificationFamilySharingDeviceAuthorizationChanged`](ClientNotificationFamilySharingDeviceAuthorizationChanged.md)
- [`ClientNotificationFamilySharingStopPlaying`](ClientNotificationFamilySharingStopPlaying.md)
- [`ClientNotificationFamilySharingLibraryAvailable`](ClientNotificationFamilySharingLibraryAvailable.md)
- [`ClientNotificationIncomingVoiceChat`](ClientNotificationIncomingVoiceChat.md)
- [`ClientNotificationClaimSteamDeckRewards`](ClientNotificationClaimSteamDeckRewards.md)
- [`ClientNotificationGiftReceived`](ClientNotificationGiftReceived.md)
- [`ClientNotificationItemAnnouncement`](ClientNotificationItemAnnouncement.md)
- [`ClientNotificationHardwareSurveyPending`](ClientNotificationHardwareSurveyPending.md)
- [`ClientNotificationLowDiskSpace`](ClientNotificationLowDiskSpace.md)
- [`ClientNotificationBatteryTemperature`](ClientNotificationBatteryTemperature.md)
- [`ClientNotificationDockUnsupportedFirmware`](ClientNotificationDockUnsupportedFirmware.md)
- [`ClientNotificationPeerContentUpload`](ClientNotificationPeerContentUpload.md)
- [`ClientNotificationCannotReadControllerGuideButton`](ClientNotificationCannotReadControllerGuideButton.md)
- [`ClientNotificationOverlaySplashScreen`](ClientNotificationOverlaySplashScreen.md)
- [`ClientNotificationBroadcastAvailableToWatch`](ClientNotificationBroadcastAvailableToWatch.md)
- [`ClientNotificationTimedTrialRemaining`](ClientNotificationTimedTrialRemaining.md)
- [`ClientNotificationLoginRefresh`](ClientNotificationLoginRefresh.md)
- [`ClientNotificationTimerExpired`](ClientNotificationTimerExpired.md)
- [`ClientNotificationSteamInputActionSetChanged`](ClientNotificationSteamInputActionSetChanged.md)
- [`ClientNotificationRemoteClientConnection`](ClientNotificationRemoteClientConnection.md)
- [`ClientNotificationRemoteClientStartStream`](ClientNotificationRemoteClientStartStream.md)
- [`ClientNotificationStreamingClientConnection`](ClientNotificationStreamingClientConnection.md)
- [`ClientNotificationPlaytimeWarning`](ClientNotificationPlaytimeWarning.md)
- [`ClientNotificationGameRecordingError`](ClientNotificationGameRecordingError.md)
- [`ClientNotificationGameRecordingStart`](ClientNotificationGameRecordingStart.md)
- [`ClientNotificationGameRecordingStop`](ClientNotificationGameRecordingStop.md)
- [`ClientNotificationGameRecordingUserMarkerAdded`](ClientNotificationGameRecordingUserMarkerAdded.md)
- [`CClientNotificationGameRecordingInstantClip`](CClientNotificationGameRecordingInstantClip.md)
- [`MsgMonitorInfo`](MsgMonitorInfo.md)
- [`MsgClientSettings`](MsgClientSettings.md)
- [`CMsgHotkey`](CMsgHotkey.md)
- [`CMsgSystemManagerSettings`](CMsgSystemManagerSettings.md)
- [`MsgSystemUpdateState`](MsgSystemUpdateState.md)

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:252](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L252)

#### Returns

`string`

***

### serializeBase64String()

> **serializeBase64String**(): `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:254](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L254)

#### Returns

`string`

***

### serializeBinary()

> **serializeBinary**(): `Uint8Array`

Defined in: [packages/client/src/globals/steam-client/shared.ts:256](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L256)

#### Returns

`Uint8Array`

***

### toObject()

> **toObject**(`includeJsPbInstance`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/shared.ts:261](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/shared.ts#L261)

Converts the message to an object.

#### Parameters

##### includeJsPbInstance

`boolean`

#### Returns

`any`
