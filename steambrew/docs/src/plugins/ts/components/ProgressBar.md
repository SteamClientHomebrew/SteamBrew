# ProgressBar

`ProgressBar` / `ProgressBarWithInfo` / `ProgressBarItem` — Steam's progress bar, in a plain, an info-annotated (time remaining/operation text), and an `Item`-row form.

```ts
interface ProgressBarProps {
	indeterminate?: boolean;
	nTransitionSec?: number;
	nProgress?: number;
	focusable?: boolean;
}

interface ProgressBarWithInfoProps extends ProgressBarItemProps {
	sTimeRemaining?: ReactNode;
	sOperationText?: ReactNode;
}

interface ProgressBarItemProps extends ItemProps {
	indeterminate?: boolean;
	nTransitionSec?: number;
	nProgress?: number;
	focusable?: boolean;
}
```

### Usage

```tsx
import { ProgressBar } from 'millennium';

<ProgressBar indeterminate nProgress={0} />;
```
