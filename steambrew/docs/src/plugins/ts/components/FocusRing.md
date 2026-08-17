# FocusRing

Renders the focus ring outline around its children/`render` element when focused.
This is more useful in BPM.

```ts
interface FocusRingProps {
	className?: string;
	rootClassName?: string;
	render?: ElementType;
	children?: ReactNode;
	NavigationManager?: any;
}
```

### Usage

```tsx
import { FocusRing } from 'millennium';

<FocusRing>
	<div>Focusable content</div>
</FocusRing>;
```
