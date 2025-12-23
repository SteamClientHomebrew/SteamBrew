[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / User

# Interface: User

Defined in: [packages/client/src/globals/steam-client/User.ts:3](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L3)

## Methods

### AuthorizeMicrotxn()

> **AuthorizeMicrotxn**(`txnId`: `string` \| `number`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:4](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L4)

#### Parameters

##### txnId

`string` | `number`

#### Returns

`void`

***

### CancelLogin()

> **CancelLogin**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L6)

#### Returns

`void`

***

### CancelMicrotxn()

> **CancelMicrotxn**(`txnId`: `string` \| `number`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:8](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L8)

#### Parameters

##### txnId

`string` | `number`

#### Returns

`void`

***

### CancelShutdown()

> **CancelShutdown**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:14](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L14)

Tries to cancel Steam shutdown.

#### Returns

`void`

#### Remarks

Used in the "Shutting down" dialog.

***

### ChangeUser()

> **ChangeUser**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L19)

Opens the "Change Account" dialog.

#### Returns

`void`

***

### Connect()

> **Connect**(): `Promise`\<[`OperationResponse`](OperationResponse.md)\>

Defined in: [packages/client/src/globals/steam-client/User.ts:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L21)

#### Returns

`Promise`\<[`OperationResponse`](OperationResponse.md)\>

***

### FlipToLogin()

> **FlipToLogin**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L23)

#### Returns

`void`

***

### ForceShutdown()

> **ForceShutdown**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:29](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L29)

Forces a shutdown while shutting down.

#### Returns

`void`

#### Remarks

Used in the "Shutting down" dialog.

***

### ForgetPassword()

> **ForgetPassword**(`accountName`: `string`): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/User.ts:36](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L36)

Forgets an account's password.

#### Parameters

##### accountName

`string`

Login of the account to forget.

#### Returns

`Promise`\<`boolean`\>

a boolean indicating whether the operation succeeded or not.

***

### GetIPCountry()

> **GetIPCountry**(): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/User.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L42)

Gets your country code.

#### Returns

`Promise`\<`string`\>

a string containing your country code.

***

### GetLoginProgress()

> **GetLoginProgress**(`callback`: (`param0`: `number`, `param1`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:47](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L47)

#### Parameters

##### callback

(`param0`: `number`, `param1`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

#### Todo

param0 mirrors param3 of [RegisterForLoginStateChange](#registerforloginstatechange)

***

### GetLoginUsers()

> **GetLoginUsers**(): `Promise`\<[`LoginUser`](LoginUser.md)[]\>

Defined in: [packages/client/src/globals/steam-client/User.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L49)

#### Returns

`Promise`\<[`LoginUser`](LoginUser.md)[]\>

***

### GoOffline()

> **GoOffline**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L51)

#### Returns

`void`

***

### GoOnline()

> **GoOnline**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L53)

#### Returns

`void`

***

### OptOutOfSurvey()

> **OptOutOfSurvey**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L55)

#### Returns

`void`

***

### PrepareForSystemSuspend()

> **PrepareForSystemSuspend**(): `Promise`\<\{ `result`: [`EResult`](../enumerations/EResult.md); \}\>

Defined in: [packages/client/src/globals/steam-client/User.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L57)

#### Returns

`Promise`\<\{ `result`: [`EResult`](../enumerations/EResult.md); \}\>

***

### Reconnect()

> **Reconnect**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L61)

#### Returns

`void`

***

### RegisterForConnectionAttemptsThrottled()

> **RegisterForConnectionAttemptsThrottled**(`callback`: (`data`: [`ConnectionAttempt`](ConnectionAttempt.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:63](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L63)

#### Parameters

##### callback

(`data`: [`ConnectionAttempt`](ConnectionAttempt.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForCurrentUserChanges()

> **RegisterForCurrentUserChanges**(`callback`: (`user`: [`CurrentUser`](CurrentUser.md)) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L65)

#### Parameters

##### callback

(`user`: [`CurrentUser`](CurrentUser.md)) => `void`

#### Returns

`void`

***

### RegisterForLoginStateChange()

> **RegisterForLoginStateChange**(`callback`: (`accountName`: `string`, `state`: [`ELoginState`](../enumerations/ELoginState.md), `result`: [`EResult`](../enumerations/EResult.md), `param3`: `number`, `percentage`: `number`, `emailDomain`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:67](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L67)

#### Parameters

##### callback

(`accountName`: `string`, `state`: [`ELoginState`](../enumerations/ELoginState.md), `result`: [`EResult`](../enumerations/EResult.md), `param3`: `number`, `percentage`: `number`, `emailDomain`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForPrepareForSystemSuspendProgress()

> **RegisterForPrepareForSystemSuspendProgress**(`callback`: (`progress`: [`SuspendProgress`](SuspendProgress.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:84](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L84)

#### Parameters

##### callback

(`progress`: [`SuspendProgress`](SuspendProgress.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForResumeSuspendedGamesProgress()

> **RegisterForResumeSuspendedGamesProgress**(`callback`: (`progress`: [`SuspendProgress`](SuspendProgress.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L86)

#### Parameters

##### callback

(`progress`: [`SuspendProgress`](SuspendProgress.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShowHardwareSurvey()

> **RegisterForShowHardwareSurvey**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L88)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShutdownDone()

> **RegisterForShutdownDone**(`callback`: (`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `param2`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:94](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L94)

Register a function to be executed when shutdown completes.

#### Parameters

##### callback

(`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `param2`: `boolean`) => `void`

The function to be executed on completion.

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShutdownFailed()

> **RegisterForShutdownFailed**(`callback`: (`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `success`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:96](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L96)

#### Parameters

##### callback

(`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `success`: `boolean`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShutdownStart()

> **RegisterForShutdownStart**(`callback`: (`param0`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L102)

Register a function to be executed when Steam starts shutting down.

#### Parameters

##### callback

(`param0`: `boolean`) => `void`

The function to be executed on shutdown start.

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShutdownState()

> **RegisterForShutdownState**(`callback`: (`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `allowForceQuit`: `boolean`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/User.ts:108](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L108)

Register a function to be executed when shutdown state changes.

#### Parameters

##### callback

(`state`: [`EShutdownStep`](../enumerations/EShutdownStep.md), `appid`: `number`, `allowForceQuit`: `boolean`) => `void`

The function to be executed on change.

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RemoveUser()

> **RemoveUser**(`accountName`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:114](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L114)

Removes an account from remembered users.

#### Parameters

##### accountName

`string`

The account to remove.

#### Returns

`void`

***

### RequestSupportSystemReport()

> **RequestSupportSystemReport**(`reportId`: `string`): `Promise`\<\{ `bSuccess`: `boolean`; \}\>

Defined in: [packages/client/src/globals/steam-client/User.ts:116](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L116)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<\{ `bSuccess`: `boolean`; \}\>

***

### ResumeSuspendedGames()

> **ResumeSuspendedGames**(`param0`: `boolean`): `Promise`\<[`ResumeSuspendedGamesResult`](ResumeSuspendedGamesResult.md)\>

Defined in: [packages/client/src/globals/steam-client/User.ts:120](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L120)

#### Parameters

##### param0

`boolean`

#### Returns

`Promise`\<[`ResumeSuspendedGamesResult`](ResumeSuspendedGamesResult.md)\>

***

### RunSurvey()

> **RunSurvey**(`callback`: (`surveySections`: [`SurveySection`](SurveySection.md)[]) => `void`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:123](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L123)

#### Parameters

##### callback

(`surveySections`: [`SurveySection`](SurveySection.md)[]) => `void`

#### Returns

`void`

***

### SendSurvey()

> **SendSurvey**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:125](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L125)

#### Returns

`void`

***

### SetAsyncNotificationEnabled()

> **SetAsyncNotificationEnabled**(`appId`: `number`, `enable`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:127](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L127)

#### Parameters

##### appId

`number`

##### enable

`boolean`

#### Returns

`void`

***

### SetLoginCredentials()

> **SetLoginCredentials**(`accountName`: `string`, `password`: `string`, `rememberMe`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:135](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L135)

Sets given login credentials, but don't log in to that account.

#### Parameters

##### accountName

`string`

Account name.

##### password

`string`

Account password.

##### rememberMe

`boolean`

Whether to remember that account.

#### Returns

`void`

***

### SetOOBEComplete()

> **SetOOBEComplete**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:137](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L137)

#### Returns

`void`

***

### ShouldShowUserChooser()

> **ShouldShowUserChooser**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/User.ts:139](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L139)

#### Returns

`Promise`\<`boolean`\>

***

### SignOutAndRestart()

> **SignOutAndRestart**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:144](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L144)

Signs out and restarts Steam.

#### Returns

`void`

***

### StartLogin()

> **StartLogin**(): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:150](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L150)

Relogin after disabling offline mode. Not sure what else it's useful for,
there isn't even a single mention of it in steam's js, lol

#### Returns

`void`

***

### StartOffline()

> **StartOffline**(`value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:158](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L158)

Toggles offline mode.

Note that after disabling offline mode, you have to relogin with
[StartLogin](#startlogin).

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### StartRestart()

> **StartRestart**(`force`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:166](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L166)

Restarts the Steam client.

#### Parameters

##### force

`boolean`

#### Returns

`void`

#### Todo

I don't remember what the arg is, but IIRC with `true` it disables
some ldd check or whatever, really it's only noticeable on slow PCs.

***

### StartShutdown()

> **StartShutdown**(`force`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/User.ts:172](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/User.ts#L172)

#### Parameters

##### force

`boolean`

#### Returns

`void`

#### Todo

I don't remember what the arg is, but IIRC with `true` it disables
some ldd check or whatever, really it's only noticeable on slow PCs.
