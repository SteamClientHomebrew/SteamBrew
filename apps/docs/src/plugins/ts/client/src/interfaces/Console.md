[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / Console

# Interface: Console

Defined in: [packages/client/src/globals/steam-client/Console.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Console.ts#L6)

Represents the console functionality for executing commands and handling spew output.

## Methods

### ExecCommand()

> **ExecCommand**(`command`: `string`): `void`

Defined in: [packages/client/src/globals/steam-client/Console.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Console.ts#L11)

Executes a console command.

#### Parameters

##### command

`string`

The command to execute in the console.

#### Returns

`void`

***

### GetAutocompleteSuggestions()

> **GetAutocompleteSuggestions**(`command`: `string`): `Promise`\<`string`[]\>

Defined in: [packages/client/src/globals/steam-client/Console.ts:18](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Console.ts#L18)

Retrieves autocomplete suggestions for a given console command.

#### Parameters

##### command

`string`

The console command to provide autocomplete suggestions for.

#### Returns

`Promise`\<`string`[]\>

an array of autocomplete suggestions.

***

### RegisterForSpewOutput()

> **RegisterForSpewOutput**(`callback`: (`output`: [`SpewOutput`](SpewOutput.md)) => `void`): [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/Console.ts:25](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/Console.ts#L25)

Registers a callback function to receive spew output.

#### Parameters

##### callback

(`output`: [`SpewOutput`](SpewOutput.md)) => `void`

The callback function that will receive spew output.

#### Returns

[`Unregisterable`](Unregisterable.md)

an object that can be used to unregister the callback.
