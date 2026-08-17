# TextField

Steam's text input field.

```ts
interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
	label?: ReactNode;
	requiredLabel?: ReactNode;
	description?: ReactNode;
	disabled?: boolean;
	bShowCopyAction?: boolean;
	bShowClearAction?: boolean;
	bAlwaysShowClearAction?: boolean;
	bIsPassword?: boolean;
	rangeMin?: number;
	rangeMax?: number;
	mustBeNumeric?: boolean;
	mustBeURL?: boolean;
	mustBeEmail?: boolean;
	focusOnMount?: boolean;
	tooltip?: string;
	inlineControls?: ReactNode;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
}
```

### Usage

```tsx
import { TextField } from 'millennium';

<TextField placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} />;
```
