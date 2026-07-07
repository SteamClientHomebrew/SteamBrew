# Configuration API

The following example shows how to use Millenniums config API to store/sync user data between the backend and frontend.

:::tip
This is a high level example, not meant for API usage documentation purposes. For more information on any relevant APIs below,
check their documentation under **Lua API** or **TypeScript API** respectively.
:::

## Frontend

The following toggles a config key back, which can be listened to from the backend.

Configuration is entirely reactive. If any of the config keys being updated are used in a mounted React component, it will automatically re-render; no additional work required.

```tsx
import { usePluginConfig } from 'millennium';

const Component = () => {
	const [greeting, setGreeting] = usePluginConfig<string>('greeting');

	return (
		<Field label="Greeting" description={greeting ?? 'Loading...'} icon={<IconsModule.Settings />} bottomSeparator="standard" focusable>
			<DialogButton
				onClick={() => {
					const next = greeting === 'Hello from Lua!' ? 'Hello from Frontend!' : 'Hello from Lua!';
					setGreeting(next);
				}}
			>
				Toggle Greeting
			</DialogButton>
		</Field>
	);
};
```

## Backend

Register a listener for config changes.

```lua
-- register listener
millennium.config.on_change(function(key, value)
    logger:info("Config changed: " .. key .. " = " .. tostring(value))
end)

-- get config key
local greeting = millennium.config.get("greeting")

-- fire a config change
millennium.config.set("greeting", "Hello from Lua!")
```
