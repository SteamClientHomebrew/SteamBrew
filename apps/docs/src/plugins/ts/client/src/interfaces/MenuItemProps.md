[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / MenuItemProps

# Interface: MenuItemProps

Defined in: [packages/client/src/components/Menu.ts:147](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L147)

## Extends

- [`FooterLegendProps`](FooterLegendProps.md)

## Properties

### actionDescriptionMap?

> `optional` **actionDescriptionMap**: [`ActionDescriptionMap`](../type-aliases/ActionDescriptionMap.md)

Defined in: [packages/client/src/components/FooterLegend.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L51)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`actionDescriptionMap`](FooterLegendProps.md#actiondescriptionmap)

***

### bInteractableItem?

> `optional` **bInteractableItem**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:148](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L148)

***

### bPlayAudio?

> `optional` **bPlayAudio**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:155](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L155)

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [packages/client/src/components/Menu.ts:157](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L157)

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:154](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L154)

***

### onButtonDown()?

> `optional` **onButtonDown**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L57)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonDown`](FooterLegendProps.md#onbuttondown)

***

### onButtonUp()?

> `optional` **onButtonUp**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:58](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L58)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonUp`](FooterLegendProps.md#onbuttonup)

***

### onCancelActionDescription?

> `optional` **onCancelActionDescription**: `ReactNode`

Defined in: [packages/client/src/components/FooterLegend.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L53)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelActionDescription`](FooterLegendProps.md#oncancelactiondescription)

***

### onCancelButton()?

> `optional` **onCancelButton**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L60)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelButton`](FooterLegendProps.md#oncancelbutton)

***

### onGamepadBlur()?

> `optional` **onGamepadBlur**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L65)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadBlur`](FooterLegendProps.md#ongamepadblur)

***

### onGamepadDirection()?

> `optional` **onGamepadDirection**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:63](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L63)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadDirection`](FooterLegendProps.md#ongamepaddirection)

***

### onGamepadFocus()?

> `optional` **onGamepadFocus**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L64)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadFocus`](FooterLegendProps.md#ongamepadfocus)

***

### onMenuActionDescription?

> `optional` **onMenuActionDescription**: `ReactNode`

Defined in: [packages/client/src/components/FooterLegend.ts:56](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L56)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuActionDescription`](FooterLegendProps.md#onmenuactiondescription)

***

### onMenuButton()?

> `optional` **onMenuButton**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L66)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuButton`](FooterLegendProps.md#onmenubutton)

***

### onOKActionDescription?

> `optional` **onOKActionDescription**: `ReactNode`

Defined in: [packages/client/src/components/FooterLegend.ts:52](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L52)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKActionDescription`](FooterLegendProps.md#onokactiondescription)

***

### onOKButton()?

> `optional` **onOKButton**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:59](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L59)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKButton`](FooterLegendProps.md#onokbutton)

***

### onOptionsActionDescription?

> `optional` **onOptionsActionDescription**: `ReactNode`

Defined in: [packages/client/src/components/FooterLegend.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L55)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsActionDescription`](FooterLegendProps.md#onoptionsactiondescription)

***

### onOptionsButton()?

> `optional` **onOptionsButton**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:62](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L62)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsButton`](FooterLegendProps.md#onoptionsbutton)

***

### onSecondaryActionDescription?

> `optional` **onSecondaryActionDescription**: `ReactNode`

Defined in: [packages/client/src/components/FooterLegend.ts:54](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L54)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryActionDescription`](FooterLegendProps.md#onsecondaryactiondescription)

***

### onSecondaryButton()?

> `optional` **onSecondaryButton**: (`evt`: [`GamepadEvent`](../type-aliases/GamepadEvent.md)) => `void`

Defined in: [packages/client/src/components/FooterLegend.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/FooterLegend.ts#L61)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryButton`](FooterLegendProps.md#onsecondarybutton)

***

### selected?

> `optional` **selected**: `boolean`

Defined in: [packages/client/src/components/Menu.ts:153](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L153)

***

### tone?

> `optional` **tone**: `"positive"` \| `"emphasis"` \| `"destructive"`

Defined in: [packages/client/src/components/Menu.ts:156](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L156)

## Methods

### onClick()?

> `optional` **onClick**(`evt`: `Event`): `void`

Defined in: [packages/client/src/components/Menu.ts:149](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L149)

#### Parameters

##### evt

`Event`

#### Returns

`void`

***

### onMouseEnter()?

> `optional` **onMouseEnter**(`evt`: `MouseEvent`): `void`

Defined in: [packages/client/src/components/Menu.ts:151](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L151)

#### Parameters

##### evt

`MouseEvent`

#### Returns

`void`

***

### onMoveRight()?

> `optional` **onMoveRight**(): `void`

Defined in: [packages/client/src/components/Menu.ts:152](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L152)

#### Returns

`void`

***

### onSelected()?

> `optional` **onSelected**(`evt`: `Event`): `void`

Defined in: [packages/client/src/components/Menu.ts:150](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/components/Menu.ts#L150)

#### Parameters

##### evt

`Event`

#### Returns

`void`
