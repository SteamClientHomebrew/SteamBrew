# Focusable

Wraps children in a gamepad/keyboard focusable div; the base building block for anything that should be navigable.

```ts
interface FocusableProps extends HTMLAttributes<HTMLDivElement>, FooterLegendProps {
	children: ReactNode;
	'flow-children'?: string;
	focusClassName?: string;
	focusWithinClassName?: string;
	noFocusRing?: boolean;
	onActivate?: (e: CustomEvent) => void;
	onCancel?: (e: CustomEvent) => void;
}
```

### Usage

```tsx
import { Focusable } from 'millennium';

<Focusable onActivate={() => console.log('activated')} className="MyRow">
	Row content
</Focusable>;
```
