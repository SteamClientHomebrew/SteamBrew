# DialogCheckbox

A checkbox row with a label/description, in the same style as [`Field`](/plugins/ts/components/Field).

```ts
interface DialogCheckboxProps extends Omit<DialogCommonProps, 'onChange'>, FooterLegendProps {
	onChange?(checked: boolean): void;
	label?: ReactNode;
	description?: ReactNode;
	disabled?: boolean;
	tooltip?: string;
	color?: string;
	highlightColor?: string;
	bottomSeparator?: 'standard' | 'thick' | 'none';
	controlled?: boolean;
	checked?: boolean;
}
```

### Usage

```tsx
import { DialogCheckbox } from 'millennium';

<DialogCheckbox label="I agree" checked={agreed} onChange={setAgreed} />;
```
