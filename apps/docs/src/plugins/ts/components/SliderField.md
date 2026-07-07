# SliderField

An `Item` row with a slider control.

```ts
interface NotchLabel {
	notchIndex: number;
	label: string;
	value?: number;
}

interface SliderFieldProps extends ItemProps {
	value: number;
	min?: number;
	max?: number;
	step?: number;
	notchCount?: number;
	notchLabels?: NotchLabel[];
	notchTicksVisible?: boolean;
	showValue?: boolean;
	resetValue?: number;
	disabled?: boolean;
	editableValue?: boolean;
	validValues?: 'steps' | 'range' | ((value: number) => boolean);
	valueSuffix?: string;
	minimumDpadGranularity?: number;
	onChange?(value: number): void;
	className?: string;
}
```

### Usage

```tsx
import { SliderField } from 'millennium';

<SliderField label="Volume" value={volume} min={0} max={100} step={1} showValue onChange={setVolume} />;
```
