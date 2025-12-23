[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / BrowserContext

# Interface: BrowserContext

Defined in: [packages/client/src/globals/steam-client/shared.ts:184](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L184)

## Properties

### m\_eBrowserType?

> `optional` **m\_eBrowserType**: [`EBrowserType`](../enumerations/EBrowserType.md)

Defined in: [packages/client/src/globals/steam-client/shared.ts:188](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L188)

Window type.

***

### m\_eUIMode?

> `optional` **m\_eUIMode**: [`EUIMode`](../enumerations/EUIMode.md)

Defined in: [packages/client/src/globals/steam-client/shared.ts:193](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L193)

The UI mode in use.

***

### m\_gameID?

> `optional` **m\_gameID**: `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:198](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L198)

#### Todo

Appears when [m\_eBrowserType](#m_ebrowsertype) == 0 ?

***

### m\_nBrowserID

> **m\_nBrowserID**: `number`

Defined in: [packages/client/src/globals/steam-client/shared.ts:203](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L203)

#### Todo

Same as `SteamClient.Browser.GetBrowserID()` ?

***

### m\_unAppID?

> `optional` **m\_unAppID**: `number`

Defined in: [packages/client/src/globals/steam-client/shared.ts:208](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L208)

Game's app ID.

***

### m\_unPID

> **m\_unPID**: `number`

Defined in: [packages/client/src/globals/steam-client/shared.ts:213](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L213)

If overlay, game's PID.
