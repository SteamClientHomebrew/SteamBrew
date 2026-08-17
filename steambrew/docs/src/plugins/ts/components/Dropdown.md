# Dropdown

Steam's select/dropdown control.

```ts
interface SingleDropdownOption {
	data: any;
	label: ReactNode;
	options?: never;
}

interface MultiDropdownOption {
	label: ReactNode;
	options: DropdownOption[];
	data?: never;
}

type DropdownOption = SingleDropdownOption | MultiDropdownOption;

interface DropdownProps {
	rgOptions: DropdownOption[];
	selectedOption: any;
	disabled?: boolean;
	onMenuWillOpen?(showMenu: () => void): void;
	onMenuOpened?(): void;
	onChange?(data: SingleDropdownOption): void;
	contextMenuPositionOptions?: { bMatchWidth?: boolean; [_: string]: unknown };
	menuLabel?: string;
	strDefaultLabel?: string;
	renderButtonValue?(element: ReactNode): ReactNode;
	focusable?: boolean;
}
```

### Usage

```tsx
import { Dropdown, Field } from 'millennium';

const options = [
	{ data: 'stable', label: 'Stable' },
	{ data: 'beta', label: 'Beta' },
];

<Field label="Update Channel">
	<Dropdown rgOptions={options} selectedOption={options.findIndex((opt) => opt.data === channel)} onChange={(e) => setChannel(e.data)} strDefaultLabel={options.find((opt) => opt.data === channel)?.label} />
</Field>;
```
