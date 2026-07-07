# Field

The standard label/description + control row used throughout Settings.

```ts
interface FieldProps extends FooterLegendProps {
	children?: ReactNode;
	label?: ReactNode;
	bottomSeparator?: 'standard' | 'thick' | 'none';
	description?: ReactNode;
	disabled?: boolean;
	icon?: ReactNode;
	inlineWrap?: 'keep-inline' | 'shift-children-below';
	childrenLayout?: 'below' | 'inline';
	childrenContainerWidth?: 'min' | 'max' | 'fixed';
	spacingBetweenLabelAndChild?: 'none';
	padding?: 'none' | 'standard' | 'compact';
	className?: string;
	highlightOnFocus?: boolean;
	indentLevel?: number;
	verticalAlignment?: 'center' | 'none';
	focusable?: boolean;
	onActivate?: (e: CustomEvent | MouseEvent) => void;
	onClick?: (e: CustomEvent | MouseEvent) => void;
}
```

### Usage

```tsx
import { Field, Toggle } from 'millennium';

<Field label="Enable feature" description="Turns the thing on or off" bottomSeparator="none">
	<Toggle value={enabled} onChange={setEnabled} />
</Field>;
```
