# Millennium

```typescript
export declare const Millennium: {
	/** DEPRECATED (USE HOOKING API): DO NOT USE */
	AddWindowCreateHook?: ((cb: any) => void) | undefined;

	/** DEPRECATED (USE STARLIGHT AKA millennium.toml PLUGINS): DO NOT USE */
	/** 06/JUL/2026: Removed usage documentation entirely */
	callServerMethod: (pluginName: string, methodName: string, kwargs?: any, callSite?: Error) => Promise<any>;

	/** DEPRECATED (USE HOOKING API): DO NOT USE */
	findElement: (doc: Document, selector: string, timeout?: number) => Promise<NodeListOf<Element>>;

	/** DEPRECATED (USE STARLIGHT AKA millennium.toml PLUGINS): DO NOT USE */
	exposeObj: <T extends object>(exportsOrObj: any, obj?: T) => any;

	openQuickAccess: (target?: { plugin: string } | { theme: string }) => Promise<void>;
};
```

## <s>AddWindowCreateHook</s>

Fires whenever a new Steam window spawns, ex: Main window, Settings, Properties, etc.

:::warning DEPRECATION WARNING (06/JUL/2026)
Generally speaking this is a legacy API, used before we had a proper config API, and _should not be used_ as a method of patching the window. Use the config API.

See [Configuration API](/plugins/structure/config) for more information.
:::

### Usage

```typescript
function windowCreated(context: any) {
	// window create event.
	console.log(context);
}

export default definePlugin(() => {
	Millennium.AddWindowCreateHook(windowCreated);

	// ... the rest
});
```

## <s>findElement</s>

Waits for elements matching a CSS selector to appear in the DOM.

:::warning DEPRECATION WARNING (06/JUL/2026)
Generally speaking this is a legacy API, used before we had a proper config API, and _should not be used_ as a method of patching the window. Use the config API.

See [Configuration API](/plugins/structure/config) for more information.
:::

### Usage

```ts
const elements = await Millennium.findElement(document, '.my-class');

// with timeout (ms)
try {
	const elements = await Millennium.findElement(document, '.my-class', 5000);
} catch {
	// timed out, no matching elements
}
```

- `doc`: document to search in
- `selector`: CSS selector
- `timeout`: optional, ms to wait before rejecting. If omitted, waits indefinitely.
- Resolves immediately if matches already exist; otherwise resolves as soon as matching elements are added to the DOM.

## exposeObj

:::warning DEPRECATION WARNING (06/JUL/2026)
This is a legacy only plugin API. If you are developing a starlight plugin (plugins with `millennium.toml`), do _not use_ this API.
:::

Expose a local function from the frontend to the backend.

### Usage

```typescript
class SomeClass {
	static method(country: string, age: number) {
		console.log(`country: ${country}, age: ${age}`);
		return 'method called';
	}
}

Millennium.exposeObj({ SomeClass });
```

`SomeClass` is now callable from the backend.

## openQuickAccess

Open Millenniums Quick Access Menu (QAM) to the home page, a theme, or plugin.

### Usage

```typescript
Millennium.openQuickAccess();
Millennium.openQuickAccess({ theme: 'themeName' });
Millennium.openQuickAccess({ plugin: 'pluginName' });
```
