[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / BrowserViewContextMenu

# Interface: BrowserViewContextMenu

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:283](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L283)

## Properties

### coord\_x

> **coord\_x**: `number`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:287](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L287)

Mouse X position inside the browser view.

***

### coord\_y

> **coord\_y**: `number`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:292](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L292)

Mouse Y position inside the browser view.

***

### custom\_commands

> **custom\_commands**: [`BrowserViewContextMenuCustomCommand`](BrowserViewContextMenuCustomCommand.md)[]

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:294](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L294)

***

### edit\_state\_flags?

> `optional` **edit\_state\_flags**: `number`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:300](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L300)

Bitmask representing edit state. Appears on editable elements like `<input>`, etc.

#### See

[EBrowserViewContextMenuEditFlag](../enumerations/EBrowserViewContextMenuEditFlag.md)

***

### link\_url?

> `optional` **link\_url**: `string`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:311](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L311)

Browser page URL.

#### Todo

Appears when there is selected text?

***

### misspelled\_word?

> `optional` **misspelled\_word**: `string`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:305](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L305)

The misspelled word the cursor is on. Appears on an editable element with text.

***

### page\_url

> **page\_url**: `string`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:316](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L316)

Browser page URL.

***

### selection\_text?

> `optional` **selection\_text**: `string`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:321](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L321)

Selected text. Appears when there is selected text.

***

### type\_flags

> **type\_flags**: `number`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:327](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L327)

Bitmask representing context menu type.

#### See

[EBrowserViewContextMenuTypeFlag](../enumerations/EBrowserViewContextMenuTypeFlag.md)

***

### unfiltered\_link\_url?

> `optional` **unfiltered\_link\_url**: `string`

Defined in: [packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts:333](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/browser-view/BrowserViewPopup.ts#L333)

Browser page URL.

#### Todo

Appears when there is selected text?
