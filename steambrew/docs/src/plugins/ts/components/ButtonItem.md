# ButtonItem

A clickable [`Item`](/plugins/ts/components/Field) row — same label/description layout, but the whole row is a button.

```ts
interface ButtonItemProps extends ItemProps {
	onClick?(e: MouseEvent): void;
	disabled?: boolean;
}
```

### Usage

```tsx
import { ButtonItem } from 'millennium';

<ButtonItem label="Restore Defaults" description="Resets all settings" onClick={() => resetSettings()} />;
```
