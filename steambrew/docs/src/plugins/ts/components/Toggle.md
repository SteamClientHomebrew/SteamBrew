# Toggle

Steam's toggle switch. For a labeled row, use [`ToggleField`](/plugins/ts/components/ToggleField) or wrap it in a [`Field`](/plugins/ts/components/Field).

```ts
interface ToggleProps {
	value: boolean;
	disabled?: boolean;
	onChange?(checked: boolean): void;
	navRef?: any;
}
```

### Usage

```tsx
import { Field, Toggle } from 'millennium';

<Field label="Enable feature">
	<Toggle value={enabled} onChange={setEnabled} />
</Field>;
```
