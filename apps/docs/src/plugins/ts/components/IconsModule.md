# IconsModule

Steam's built-in icon set, plus the loading `Spinner`. `IconsModule` is a map of icon names to `FC<SVGAttributes<SVGElement>>` components.

```ts
const Spinner: FC<SVGAttributes<SVGElement>>;
```

To browse it, just dump it to the SharedJSContext console with:

```typescript
MILLENNIUM_API.IconsModule;
```

### Usage

```tsx
import { IconsModule, Spinner } from 'millennium';

<IconsModule.Checkmark />;
<IconsModule.ExclamationPoint className="MyIcon" />;
<Spinner />;
```
