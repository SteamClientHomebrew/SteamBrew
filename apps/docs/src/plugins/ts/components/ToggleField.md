# ToggleField

An `Item` row with a [`Toggle`](/plugins/ts/components/Toggle) built in.

```ts
interface ToggleFieldProps extends ItemProps {
	highlightOnFocus?: boolean;
	checked: boolean;
	disabled?: boolean;
	onChange?(checked: boolean): void;
}
```

### Usage

```tsx
import { ToggleField } from 'millennium';

<ToggleField label="Enable feature" checked={enabled} onChange={setEnabled} />;
```
