[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / TabsProps

# Interface: TabsProps

Defined in: [packages/client/src/components/Tabs.tsx:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L61)

Props for the [Tabs](../variables/Tabs.md)

`tabs` array of [Tab](Tab.md)
`activeTab` tab currently active, needs to be one of the tabs [Tab.id](Tab.md#id), must be set using a `useState` in the `onShowTab` handler
`onShowTab` Called when the active tab should change, needs to set `activeTab`. See example.
`autoFocusContents` Whether to automatically focus the tab contents or not.
`footer` Sets up button handlers and labels

## Example

```ts
const Component: FC = () => {
const [currentTab, setCurrentTab] = useState<string>("Tab1");

return (
  <Tabs
    title="Theme Manager"
    activeTab={currentTabRoute}
    onShowTab={(tabID: string) => {
       setCurrentTabRoute(tabID);
    }}
    tabs={[
      {
        title: "Tab 1",
        content: <Tab1Component />,
        id: "Tab1",
      },
      {
        title: "Tab 2",
        content: <Tab2Component />,
        id: "Tab2",
      },
    ]}
  />
 );
};
```

## Properties

### activeTab

> **activeTab**: `string`

Defined in: [packages/client/src/components/Tabs.tsx:63](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L63)

***

### autoFocusContents?

> `optional` **autoFocusContents**: `boolean`

Defined in: [packages/client/src/components/Tabs.tsx:65](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L65)

***

### onShowTab()

> **onShowTab**: (`tab`: `string`) => `void`

Defined in: [packages/client/src/components/Tabs.tsx:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L64)

#### Parameters

##### tab

`string`

#### Returns

`void`

***

### tabs

> **tabs**: [`Tab`](Tab.md)[]

Defined in: [packages/client/src/components/Tabs.tsx:62](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Tabs.tsx#L62)
