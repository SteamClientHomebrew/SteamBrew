[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Input

# Interface: Input

Defined in: [packages/client/src/globals/steam-client/Input.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L6)

Represents functions related to input and controllers in Steam.

## Properties

### CloseDesktopConfigurator

> **CloseDesktopConfigurator**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:17](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L17)

***

### OpenDesktopConfigurator

> **OpenDesktopConfigurator**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L81)

***

### RegisterForActiveControllerChanges

> **RegisterForActiveControllerChanges**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L89)

***

### RegisterForControllerAccountChanges

> **RegisterForControllerAccountChanges**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:94](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L94)

***

### RegisterForUserKeyboardMessages

> **RegisterForUserKeyboardMessages**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:185](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L185)

***

### SaveControllerSounds

> **SaveControllerSounds**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:201](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L201)

***

### SetControllerNintendoLayoutSetting

> **SetControllerNintendoLayoutSetting**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:214](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L214)

***

### SetControllerPersonalizationName

> **SetControllerPersonalizationName**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:215](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L215)

***

### SwapControllerConfigurationSourceModes

> **SwapControllerConfigurationSourceModes**: `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:347](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L347)

## Methods

### CalibrateControllerIMU()

> **CalibrateControllerIMU**(`controllerIndex`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L7)

#### Parameters

##### controllerIndex

`any`

#### Returns

`any`

***

### CalibrateControllerJoystick()

> **CalibrateControllerJoystick**(`controllerIndex`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L9)

#### Parameters

##### controllerIndex

`any`

#### Returns

`any`

***

### CalibrateControllerTrackpads()

> **CalibrateControllerTrackpads**(`controllerIndex`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L11)

#### Parameters

##### controllerIndex

`any`

#### Returns

`any`

***

### CancelGyroSWCalibration()

> **CancelGyroSWCalibration**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:13](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L13)

#### Returns

`any`

***

### ClearSelectedConfigForApp()

> **ClearSelectedConfigForApp**(`appId`: `number`, `controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:15](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L15)

#### Parameters

##### appId

`number`

##### controllerIndex

`number`

#### Returns

`any`

***

### ControllerKeyboardSendText()

> **ControllerKeyboardSendText**(`textToWrite`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:23](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L23)

Writes text.

#### Parameters

##### textToWrite

`string`

The text to write.

#### Returns

`void`

***

### ControllerKeyboardSetKeyState()

> **ControllerKeyboardSetKeyState**(`key`: [`EHIDKeyboardKey`](../enumerations/EHIDKeyboardKey.md), `state`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:38](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L38)

Sets a specified key's pressed state.

#### Parameters

##### key

[`EHIDKeyboardKey`](../enumerations/EHIDKeyboardKey.md)

The key index to set the state for.

##### state

`boolean`

`true` for pressed, `false` otherwise.

#### Returns

`void`

#### Example

Send paste command:
```
SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, true);
SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, true);
SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, false);
SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, false);
```

***

### DecrementCloudedControllerConfigsCounter()

> **DecrementCloudedControllerConfigsCounter**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L40)

#### Returns

`any`

***

### DeletePersonalControllerConfiguration()

> **DeletePersonalControllerConfiguration**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:42](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L42)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### DuplicateControllerConfigurationSourceMode()

> **DuplicateControllerConfigurationSourceMode**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L45)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### EndControllerDeviceSupportFlow()

> **EndControllerDeviceSupportFlow**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:47](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L47)

#### Returns

`any`

***

### ExportCurrentControllerConfiguration()

> **ExportCurrentControllerConfiguration**(`controllerIndex`: `number`, `appId`: `number`, `param2`: `number`, `title`: `string`, `description`: `string`, `param5`: `string`): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:49](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L49)

#### Parameters

##### controllerIndex

`number`

##### appId

`number`

##### param2

`number`

##### title

`string`

##### description

`string`

##### param5

`string`

#### Returns

`Promise`\<`any`\>

***

### ForceConfiguratorFocus()

> **ForceConfiguratorFocus**(`param0`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L51)

#### Parameters

##### param0

`boolean`

#### Returns

`any`

***

### ForceSimpleHapticEvent()

> **ForceSimpleHapticEvent**(`param0`: `number`, `param1`: `number`, `param2`: `number`, `param3`: `number`, `param4`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:53](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L53)

#### Parameters

##### param0

`number`

##### param1

`number`

##### param2

`number`

##### param3

`number`

##### param4

`number`

#### Returns

`any`

***

### FreeControllerConfig()

> **FreeControllerConfig**(`m_ChordSummaryConfiguration`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L55)

#### Parameters

##### m\_ChordSummaryConfiguration

`any`

#### Returns

`any`

***

### GetConfigForAppAndController()

> **GetConfigForAppAndController**(`appId`: `number`, `unControllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:57](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L57)

#### Parameters

##### appId

`number`

##### unControllerIndex

`number`

#### Returns

`any`

***

### GetControllerMappingString()

> **GetControllerMappingString**(`unControllerIndex`: `number`): `Promise`\<`string`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:64](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L64)

Retrieves the controller mapping string for the specified controller index.

#### Parameters

##### unControllerIndex

`number`

The controller index.

#### Returns

`Promise`\<`string`\>

the controller mapping string.

***

### GetControllerPreviouslySeen()

> **GetControllerPreviouslySeen**(): `Promise`\<`number`[]\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:66](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L66)

#### Returns

`Promise`\<`number`[]\>

***

### GetSteamControllerDongleState()

> **GetSteamControllerDongleState**(): `Promise`\<`boolean`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:68](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L68)

#### Returns

`Promise`\<`boolean`\>

***

### GetTouchMenuIconsForApp()

> **GetTouchMenuIconsForApp**(`appId`: `number`): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:70](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L70)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<`any`\>

***

### GetXboxDriverInstallState()

> **GetXboxDriverInstallState**(): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:72](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L72)

#### Returns

`Promise`\<`any`\>

***

### IdentifyController()

> **IdentifyController**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:73](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L73)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### InitControllerSounds()

> **InitControllerSounds**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:75](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L75)

#### Returns

`any`

***

### InitializeControllerPersonalizationSettings()

> **InitializeControllerPersonalizationSettings**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L77)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### ModalKeyboardDismissed()

> **ModalKeyboardDismissed**(): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:79](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L79)

#### Returns

`void`

***

### PreviewConfigForAppAndController()

> **PreviewConfigForAppAndController**(`appId`: `number`, `controllerIndex`: `number`, `workshopUri`: `string`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L83)

#### Parameters

##### appId

`number`

##### controllerIndex

`number`

##### workshopUri

`string`

#### Returns

`any`

***

### PreviewControllerLEDColor()

> **PreviewControllerLEDColor**(`flHue`: `number`, `flSaturation`: `number`, `flBrightness`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L85)

#### Parameters

##### flHue

`number`

##### flSaturation

`number`

##### flBrightness

`number`

#### Returns

`any`

***

### QueryControllerConfigsForApp()

> **QueryControllerConfigsForApp**(`appId`: `number`, `controllerIndex`: `number`, `param2`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:87](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L87)

#### Parameters

##### appId

`number`

##### controllerIndex

`number`

##### param2

`boolean`

#### Returns

`any`

***

### RegisterForConfigSelectionChanges()

> **RegisterForConfigSelectionChanges**(`callback`: (`param0`: `number`, `param1`: `number`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:92](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L92)

#### Parameters

##### callback

(`param0`: `number`, `param1`: `number`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerAnalogInputMessages()

> **RegisterForControllerAnalogInputMessages**(`callback`: (`msgs`: [`ControllerAnalogInputMessage`](ControllerAnalogInputMessage.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:96](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L96)

#### Parameters

##### callback

(`msgs`: [`ControllerAnalogInputMessage`](ControllerAnalogInputMessage.md)[]) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerBatteryChanges()

> **RegisterForControllerBatteryChanges**(`callback`: `any`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:100](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L100)

#### Parameters

##### callback

`any`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerCommandMessages()

> **RegisterForControllerCommandMessages**(`callback`: (`msg`: [`ControllerCommandMessage`](ControllerCommandMessage.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:102](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L102)

#### Parameters

##### callback

(`msg`: [`ControllerCommandMessage`](ControllerCommandMessage.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerConfigCloudStateChanges()

> **RegisterForControllerConfigCloudStateChanges**(`callback`: (`state`: [`ControllerConfigCloudState`](ControllerConfigCloudState.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:111](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L111)

Registers a callback for changes in controller configuration cloud state.

#### Parameters

##### callback

(`state`: [`ControllerConfigCloudState`](ControllerConfigCloudState.md)) => `void`

The callback function for config cloud state changes.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForControllerConfigInfoMessages()

> **RegisterForControllerConfigInfoMessages**(`callback`: (`msgs`: [`ControllerConfigInfoMessageList`](ControllerConfigInfoMessageList.md)[] \| [`ControllerConfigInfoMessageQuery`](ControllerConfigInfoMessageQuery.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:121](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L121)

Registers a callback for receiving controller configuration info messages (controller layouts query, personal controller layout query).

#### Parameters

##### callback

(`msgs`: [`ControllerConfigInfoMessageList`](ControllerConfigInfoMessageList.md)[] \| [`ControllerConfigInfoMessageQuery`](ControllerConfigInfoMessageQuery.md)[]) => `void`

The callback function for controller config info messages.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

#### Remarks

Do Not Use, this will break the controller layout selection unless you know what you are doing.

***

### RegisterForControllerInputMessages()

> **RegisterForControllerInputMessages**(`callback`: (`msgs`: [`ControllerInputMessage`](ControllerInputMessage.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:132](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L132)

Registers a callback function to be invoked when controller input messages are received.

#### Parameters

##### callback

(`msgs`: [`ControllerInputMessage`](ControllerInputMessage.md)[]) => `void`

The callback function to be invoked when controller input messages are received.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForControllerListChanges()

> **RegisterForControllerListChanges**(`callback`: (`controllerListChanges`: [`ControllerInfo`](ControllerInfo.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:136](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L136)

#### Parameters

##### callback

(`controllerListChanges`: [`ControllerInfo`](ControllerInfo.md)[]) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForControllerStateChanges()

> **RegisterForControllerStateChanges**(`callback`: (`changes`: [`ControllerStateChange`](ControllerStateChange.md)[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:143](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L143)

Registers a callback for changes in the controller state (buttons presses, triggers presses, joystick changes etc...).

#### Parameters

##### callback

(`changes`: [`ControllerStateChange`](ControllerStateChange.md)[]) => `void`

The callback function for controller state changes.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForDualSenseUpdateNotification()

> **RegisterForDualSenseUpdateNotification**(`callback`: (`m_strDualSenseUpdateProduct`: `string`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:147](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L147)

#### Parameters

##### callback

(`m_strDualSenseUpdateProduct`: `string`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForGameKeyboardMessages()

> **RegisterForGameKeyboardMessages**(`callback`: (`msg`: [`GameKeyboardMessage`](GameKeyboardMessage.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:154](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L154)

Registers a callback for receiving game keyboard messages (text field popup for inputting text for games when in character creation or etc...).

#### Parameters

##### callback

(`msg`: [`GameKeyboardMessage`](GameKeyboardMessage.md)) => `void`

The callback function for game keyboard messages.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.

***

### RegisterForRemotePlayConfigChanges()

> **RegisterForRemotePlayConfigChanges**(`callback`: () => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:156](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L156)

#### Parameters

##### callback

() => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForShowControllerLayoutPreviewMessages()

> **RegisterForShowControllerLayoutPreviewMessages**(`callback`: (`data`: `any`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:159](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L159)

#### Parameters

##### callback

(`data`: `any`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForTouchMenuInputMessages()

> **RegisterForTouchMenuInputMessages**(`callback`: (`inputs`: `number`[]) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:169](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L169)

#### Parameters

##### callback

(`inputs`: `number`[]) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForTouchMenuMessages()

> **RegisterForTouchMenuMessages**(`callback`: (`msg`: [`TouchMenuMessage`](TouchMenuMessage.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:171](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L171)

#### Parameters

##### callback

(`msg`: [`TouchMenuMessage`](TouchMenuMessage.md)) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForUIVisualization()

> **RegisterForUIVisualization**(`param0`: `any`, `param1`: `any`, `param2`: `any`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:174](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L174)

#### Parameters

##### param0

`any`

##### param1

`any`

##### param2

`any`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForUnboundControllerListChanges()

> **RegisterForUnboundControllerListChanges**(`callback`: (`m_unboundControllerList`: `any`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:176](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L176)

#### Parameters

##### callback

(`m_unboundControllerList`: `any`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RegisterForUserDismissKeyboardMessages()

> **RegisterForUserDismissKeyboardMessages**(`callback`: (`param0`: `any`) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Input.ts:183](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L183)

#### Parameters

##### callback

(`param0`: `any`) => `void`

#### Returns

[`Unregisterable`](Unregisterable.md)

***

### RequestGyroActive()

> **RequestGyroActive**(`controllerIndex`: `number`, `param1`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:187](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L187)

#### Parameters

##### controllerIndex

`number`

##### param1

`boolean`

#### Returns

`any`

***

### RequestRemotePlayControllerConfigs()

> **RequestRemotePlayControllerConfigs**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:189](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L189)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### ResetControllerBindings()

> **ResetControllerBindings**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:191](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L191)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### ResolveCloudedControllerConfigConflict()

> **ResolveCloudedControllerConfigConflict**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:193](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L193)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### RestoreControllerPersonalizationSettings()

> **RestoreControllerPersonalizationSettings**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:195](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L195)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### SaveControllerCalibration()

> **SaveControllerCalibration**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:197](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L197)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### SaveControllerPersonalizationSettings()

> **SaveControllerPersonalizationSettings**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:199](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L199)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### SaveEditingControllerConfiguration()

> **SaveEditingControllerConfiguration**(`controllerIndex`: `number`, `sharedConfig`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:203](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L203)

#### Parameters

##### controllerIndex

`number`

##### sharedConfig

`boolean`

#### Returns

`any`

***

### SetControllerConfigurationModeShiftBinding()

> **SetControllerConfigurationModeShiftBinding**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:206](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L206)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetControllerHapticSetting()

> **SetControllerHapticSetting**(`controllerIndex`: `number`, `eHapticSetting`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:208](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L208)

#### Parameters

##### controllerIndex

`number`

##### eHapticSetting

`any`

#### Returns

`any`

***

### SetControllerMappingString()

> **SetControllerMappingString**(`mapping`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:210](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L210)

#### Parameters

##### mapping

`string`

#### Returns

`void`

***

### SetControllerName()

> **SetControllerName**(`controllerIndex`: `number`, `controllerName`: `string`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:212](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L212)

#### Parameters

##### controllerIndex

`number`

##### controllerName

`string`

#### Returns

`any`

***

### SetControllerPersonalizationSetting()

> **SetControllerPersonalizationSetting**(`param0`: `string`, `param1`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:240](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L240)

#### Parameters

##### param0

`string`

##### param1

`number`

#### Returns

`any`

***

### SetControllerPersonalizationSettingFloat()

> **SetControllerPersonalizationSettingFloat**(`param0`: `string`, `param1`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:251](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L251)

#### Parameters

##### param0

`string`

##### param1

`number`

#### Returns

`any`

***

### SetControllerRumbleSetting()

> **SetControllerRumbleSetting**(`controllerIndex`: `number`, `rumblePreference`: [`EControllerRumbleSetting`](../enumerations/EControllerRumbleSetting.md)): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:253](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L253)

#### Parameters

##### controllerIndex

`number`

##### rumblePreference

[`EControllerRumbleSetting`](../enumerations/EControllerRumbleSetting.md)

#### Returns

`any`

***

### SetControllerUseUniversalFaceButtonGlyphs()

> **SetControllerUseUniversalFaceButtonGlyphs**(`controllerIndex`: `number`, `value`: `boolean`): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:255](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L255)

#### Parameters

##### controllerIndex

`number`

##### value

`boolean`

#### Returns

`void`

***

### SetCursorActionset()

> **SetCursorActionset**(`param0`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:257](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L257)

#### Parameters

##### param0

`boolean`

#### Returns

`any`

***

### SetDualSenseUpdateNotification()

> **SetDualSenseUpdateNotification**(`param0`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:259](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L259)

#### Parameters

##### param0

`boolean`

#### Returns

`any`

***

### SetEditingControllerConfigurationActionSet()

> **SetEditingControllerConfigurationActionSet**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:279](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L279)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetEditingControllerConfigurationInputActivator()

> **SetEditingControllerConfigurationInputActivator**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:282](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L282)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetEditingControllerConfigurationInputActivatorEnabled()

> **SetEditingControllerConfigurationInputActivatorEnabled**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:285](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L285)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetEditingControllerConfigurationInputBinding()

> **SetEditingControllerConfigurationInputBinding**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:288](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L288)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetEditingControllerConfigurationMiscSetting()

> **SetEditingControllerConfigurationMiscSetting**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:291](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L291)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetEditingControllerConfigurationSourceMode()

> **SetEditingControllerConfigurationSourceMode**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:294](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L294)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SetGamepadKeyboardText()

> **SetGamepadKeyboardText**(`param0`: `boolean`, `param1`: `string`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:296](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L296)

#### Parameters

##### param0

`boolean`

##### param1

`string`

#### Returns

`any`

***

### SetKeyboardActionset()

> **SetKeyboardActionset**(`param0`: `boolean`, `param1`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:298](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L298)

#### Parameters

##### param0

`boolean`

##### param1

`boolean`

#### Returns

`any`

***

### SetMousePosition()

> **SetMousePosition**(`pid`: `number`, `x`: `number`, `y`: `number`): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:306](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L306)

Sets the mouse position.

#### Parameters

##### pid

`number`

0

##### x

`number`

Mouse X position.

##### y

`number`

Mouse Y position.

#### Returns

`void`

***

### SetSelectedConfigForApp()

> **SetSelectedConfigForApp**(`appId`: `number`, `controllerIndex`: `number`, `url`: `string`, `param3`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:308](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L308)

#### Parameters

##### appId

`number`

##### controllerIndex

`number`

##### url

`string`

##### param3

`boolean`

#### Returns

`any`

***

### SetSteamControllerDonglePairingMode()

> **SetSteamControllerDonglePairingMode**(`bEnable`: `boolean`, `bSilent`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:310](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L310)

#### Parameters

##### bEnable

`boolean`

##### bSilent

`boolean`

#### Returns

`any`

***

### SetVirtualMenuKeySelected()

> **SetVirtualMenuKeySelected**(`unControllerIndex`: `number`, `unMenuIndex`: `number`, `m_controllerMenuActiveMenuItem`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:312](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L312)

#### Parameters

##### unControllerIndex

`number`

##### unMenuIndex

`number`

##### m\_controllerMenuActiveMenuItem

`number`

#### Returns

`any`

***

### SetWebBrowserActionset()

> **SetWebBrowserActionset**(`param0`: `boolean`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:313](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L313)

#### Parameters

##### param0

`boolean`

#### Returns

`any`

***

### SetXboxDriverInstallState()

> **SetXboxDriverInstallState**(`param0`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:315](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L315)

#### Parameters

##### param0

`any`

#### Returns

`any`

***

### ShowControllerSettings()

> **ShowControllerSettings**(): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:321](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L321)

Opens the Steam Input controller settings.
This function displays the Steam Input controller settings for configuration.

#### Returns

`void`

***

### StandaloneKeyboardDismissed()

> **StandaloneKeyboardDismissed**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:323](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L323)

#### Returns

`any`

***

### StartControllerDeviceSupportFlow()

> **StartControllerDeviceSupportFlow**(`param0`: `any`, `param1`: `any`, `callback`: (`param2`: `any`) => `void`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:325](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L325)

#### Parameters

##### param0

`any`

##### param1

`any`

##### callback

(`param2`: `any`) => `void`

#### Returns

`any`

***

### StartEditingControllerConfigurationForAppIDAndControllerIndex()

> **StartEditingControllerConfigurationForAppIDAndControllerIndex**(`m_appId`: `number`, `m_unControllerIndex`: `number`): `Promise`\<`any`\>

Defined in: [packages/client/src/globals/steam-client/Input.ts:341](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L341)

#### Parameters

##### m\_appId

`number`

##### m\_unControllerIndex

`number`

#### Returns

`Promise`\<`any`\>

***

### StartGyroSWCalibration()

> **StartGyroSWCalibration**(`callback`: () => `void`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:343](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L343)

#### Parameters

##### callback

() => `void`

#### Returns

`any`

***

### StopEditingControllerConfiguration()

> **StopEditingControllerConfiguration**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:345](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L345)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### SwapControllerModeInputBindings()

> **SwapControllerModeInputBindings**(`controllerIndex`: `number`, `param1`: `any`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:350](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L350)

#### Parameters

##### controllerIndex

`number`

##### param1

`any`

#### Returns

`any`

***

### SwapControllerOrder()

> **SwapControllerOrder**(`controllerIndex1`: `number`, `controllerIndex2`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:352](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L352)

#### Parameters

##### controllerIndex1

`number`

##### controllerIndex2

`number`

#### Returns

`any`

***

### SyncCloudedControllerConfigs()

> **SyncCloudedControllerConfigs**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:354](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L354)

#### Returns

`any`

***

### TriggerHapticPulse()

> **TriggerHapticPulse**(`controllerIndex`: `number`, `eHapticType`: `number`, `param2`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:360](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L360)

#### Parameters

##### controllerIndex

`number`

##### eHapticType

`number`

##### param2

`number`

#### Returns

`any`

***

### TriggerSimpleHapticEvent()

> **TriggerSimpleHapticEvent**(`controllerIndex`: `number`, `eHapticType`: `number`, `unIntensity`: `number`, `ndBGain`: `number`, `param4`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:362](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L362)

#### Parameters

##### controllerIndex

`number`

##### eHapticType

`number`

##### unIntensity

`number`

##### ndBGain

`number`

##### param4

`number`

#### Returns

`any`

***

### UnregisterForControllerStateChanges()

> **UnregisterForControllerStateChanges**(): `void`

Defined in: [packages/client/src/globals/steam-client/Input.ts:370](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L370)

#### Returns

`void`

***

### UnregisterForUIVisualization()

> **UnregisterForUIVisualization**(`controllerIndex`: `number`): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:372](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L372)

#### Parameters

##### controllerIndex

`number`

#### Returns

`any`

***

### UploadChangesForCloudedControllerConfigs()

> **UploadChangesForCloudedControllerConfigs**(): `any`

Defined in: [packages/client/src/globals/steam-client/Input.ts:374](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Input.ts#L374)

#### Returns

`any`
