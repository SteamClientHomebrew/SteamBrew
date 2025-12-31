[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / injectFCTrampoline

# Function: injectFCTrampoline()

> **injectFCTrampoline**(`component`: `FC`, `customHooks?`: `any`): [`FCTrampoline`](../interfaces/FCTrampoline.md)

Defined in: [packages/client/src/utils/react/fc.ts:32](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/utils/react/fc.ts#L32)

Directly hooks a function component from its reference, redirecting it to a user-patchable wrapper in its returned object.
This only works if the original component when called directly returns either nothing, null, or another child element.

This works by tricking react into thinking it's a class component by cleverly working around its class component checks,
keeping the unmodified function component intact as a mostly working constructor (as it is impossible to direcly modify a function),
stubbing out hooks to prevent errors by detecting setter/getter triggers that occur direcly before/after the class component is instantiated by react,
and creating a fake class component render method to trampoline out into your own handler.

Due to the nature of this method of hooking a component, please only use this where it is *absolutely necessary.*
Incorrect hook stubs can cause major instability, be careful when writing them. Refer to fakeRenderComponent for the hook stub implementation.
Make sure your hook stubs can handle all the cases they could possibly need to within the component you are injecting into.
You do not need to worry about its children, as they are never called due to the first instance never actually rendering.

## Parameters

### component

`FC`

### customHooks?

`any`

## Returns

[`FCTrampoline`](../interfaces/FCTrampoline.md)
