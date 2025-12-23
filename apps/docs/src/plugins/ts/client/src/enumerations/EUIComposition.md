[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / EUIComposition

# Enumeration: EUIComposition

Defined in: [packages/client/src/globals/steam-client/shared.ts:149](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L149)

Controls how Gamescope renders the GamepadUI window when a game is running.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `Hidden` | `0` | Steam is not rendered on the screen. | [packages/client/src/globals/steam-client/shared.ts:151](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L151) |
| <a id="notification"></a> `Notification` | `1` | Transparent divs will allow pixels from the app behind Steam to penetrate. Input goes to **the app**. | [packages/client/src/globals/steam-client/shared.ts:157](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L157) |
| <a id="opaque"></a> `Opaque` | `3` | Take all of the pixels on the screen, nothing "behind" Steam is shown. | [packages/client/src/globals/steam-client/shared.ts:166](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L166) |
| <a id="overlay"></a> `Overlay` | `2` | Transparent divs will allow pixels from the app behind Steam to penetrate. Input goes to **Steam**. | [packages/client/src/globals/steam-client/shared.ts:163](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L163) |
| <a id="overlaykeyboard"></a> `OverlayKeyboard` | `4` | Special composition mode that matches [Overlay](#overlay), but forwards synthetic keyboard events to the Gamescope foreground app (game) instead of Steam. | [packages/client/src/globals/steam-client/shared.ts:172](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L172) |
