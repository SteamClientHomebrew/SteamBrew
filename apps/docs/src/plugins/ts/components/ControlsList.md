# ControlsList

Lays out a row of controls (buttons, toggles, etc.) with consistent spacing/alignment.

```ts
interface ControlsListProps {
	alignItems?: 'left' | 'right' | 'center';
	spacing?: 'standard' | 'extra';
	children?: ReactNode;
}
```

### Usage

```tsx
import { ControlsList, DialogButton } from 'millennium';

<ControlsList alignItems="right" spacing="standard">
	<DialogButton onClick={onCancel}>Cancel</DialogButton>
	<DialogButton onClick={onConfirm}>OK</DialogButton>
</ControlsList>;
```
