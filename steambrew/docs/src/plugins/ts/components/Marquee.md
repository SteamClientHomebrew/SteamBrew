# Marquee

Scrolls overflowing text/content horizontally, like long game titles in the library.

```ts
interface MarqueeProps {
	play?: boolean;
	direction?: 'left' | 'right';
	speed?: number;
	delay?: number;
	fadeLength?: number;
	center?: boolean;
	resetOnPause?: boolean;
	style?: CSSProperties;
	className?: string;
	children: React.ReactNode;
}
```

### Usage

```tsx
import { Marquee } from 'millennium';

<Marquee play speed={30}>
	A really long title that doesn't fit in the available space
</Marquee>;
```
