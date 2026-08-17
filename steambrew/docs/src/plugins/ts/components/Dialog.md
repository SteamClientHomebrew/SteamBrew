# Dialog

The building blocks Steam's `Dialog*`/`ConfirmModal` layouts are made of: headers, body, footer, and buttons.

```ts
type DialogCommonProps = HTMLAttributes<HTMLDivElement>;

interface DialogButtonProps extends FooterLegendProps, ButtonHTMLAttributes<HTMLButtonElement> {
	noFocusRing?: boolean;
	disabled?: boolean;
	focusable?: boolean;
}

const DialogHeader: FC<DialogCommonProps>;
const DialogSubHeader: FC<DialogCommonProps>;
const DialogFooter: FC<DialogCommonProps>;
const DialogLabel: FC<DialogCommonProps>;
const DialogBodyText: FC<DialogCommonProps>;
const DialogBody: FC<DialogCommonProps>;
const DialogControlsSection: FC<DialogCommonProps>;
const DialogControlsSectionHeader: FC<DialogCommonProps>;

const DialogButtonPrimary: FC<DialogButtonProps>;
const DialogButtonSecondary: FC<DialogButtonProps>;
const DialogButton: FC<DialogButtonProps>; // alias for DialogButtonSecondary
```

### Usage

```tsx
import { DialogControlsSection, DialogButton, Field, Toggle } from 'millennium';

<DialogControlsSection>
	<Field label="Enable feature">
		<Toggle value={enabled} onChange={setEnabled} />
	</Field>
	<DialogButton onClick={save}>Save</DialogButton>
</DialogControlsSection>;
```
