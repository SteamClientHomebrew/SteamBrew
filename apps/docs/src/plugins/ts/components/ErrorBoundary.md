# ErrorBoundary

Steam's React error boundary, it catches render errors in its subtree instead of crashing the whole window.

```ts
type ErrorBoundaryProps = PropsWithChildren;
```

### Usage

```tsx
import { ErrorBoundary } from 'millennium';

<ErrorBoundary>{/* some data that may cause a react error */}</ErrorBoundary>;
```
