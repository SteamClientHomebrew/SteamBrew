[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Tab

# Interface: Tab

Defined in: [packages/client/src/components/Tabs.tsx:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L17)

Individual tab objects for the Tabs component

`id` ID of this tab, can be used with activeTab to auto-focus a given tab
`title` Title shown in the header bar
`renderTabAddon` Return a ReactNode to render it next to the tab title, i.e. the counts for each tab on the Media page
`content` Content of the tab
`footer` Sets up button handlers and labels

## Properties

### content

> **content**: `ReactNode`

Defined in: [packages/client/src/components/Tabs.tsx:21](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L21)

***

### footer?

> `optional` **footer**: [`FooterLegendProps`](FooterLegendProps.md)

Defined in: [packages/client/src/components/Tabs.tsx:22](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L22)

***

### id

> **id**: `string`

Defined in: [packages/client/src/components/Tabs.tsx:18](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L18)

***

### renderTabAddon()?

> `optional` **renderTabAddon**: () => `ReactNode`

Defined in: [packages/client/src/components/Tabs.tsx:20](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L20)

#### Returns

`ReactNode`

***

### title

> **title**: `string`

Defined in: [packages/client/src/components/Tabs.tsx:19](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L19)
