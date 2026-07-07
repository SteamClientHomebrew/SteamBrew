# SteamSpinner

Full loading spinner, used as a page-level loading state.

```ts
interface SteamSpinnerProps extends SVGAttributes<SVGElement> {
	children?: ReactNode;
	background?: 'transparent'; // defaults to black otherwise
}
```

### Usage

```tsx
import { SteamSpinner } from 'millennium';

if (!hasLoaded) return <SteamSpinner background="transparent" />;
```
