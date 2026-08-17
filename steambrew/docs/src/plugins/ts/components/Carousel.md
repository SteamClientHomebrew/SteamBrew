# Carousel

Horizontally scrolling, focusable item carousel (used for things like the app library shelves).

```ts
interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
	autoFocus?: boolean;
	enableBumperPaging?: boolean;
	fnDoesItemTakeFocus?: (...unknown: any[]) => boolean;
	fnGetColumnWidth?: (...unknown: any[]) => number;
	fnGetId?: (id: number) => number;
	fnItemRenderer?: (id: number, ...unknown: any[]) => ReactNode;
	fnUpdateArrows?: (...unknown: any[]) => any;
	initialColumn?: number;
	nHeight?: number;
	nIndexLeftmost?: number;
	nItemHeight?: number;
	nItemMarginX?: number;
	nNumItems?: number;
	name?: string;
	scrollToAlignment?: 'center';
}
```

### Usage

```tsx
import { Carousel } from 'millennium';

<Carousel nNumItems={10} nItemHeight={200} nHeight={220} fnGetId={(id) => id} fnItemRenderer={(id) => <div key={id}>{id}</div>} />;
```
