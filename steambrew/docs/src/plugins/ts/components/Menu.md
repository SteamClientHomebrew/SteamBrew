# Menu

`Menu`, `MenuGroup`, `MenuItem`, `MenuSeparator` are the main pieces used to build a context menu, shown with [`showContextMenu`](/plugins/ts/components/Menu#showcontextmenu).

```ts
interface MenuProps extends FooterLegendProps {
	label: string;
	onCancel?(): void;
	cancelText?: string;
	children?: ReactNode;
}

interface MenuGroupProps {
	label: string;
	disabled?: boolean;
	children?: ReactNode;
}

interface MenuItemProps extends FooterLegendProps {
	bInteractableItem?: boolean;
	onClick?(evt: Event): void;
	onSelected?(evt: Event): void;
	onMouseEnter?(evt: MouseEvent): void;
	onMoveRight?(): void;
	selected?: boolean;
	disabled?: boolean;
	bPlayAudio?: boolean;
	tone?: 'positive' | 'emphasis' | 'destructive';
	children?: ReactNode;
}

const Menu: FC<MenuProps>;
const MenuGroup: FC<MenuGroupProps>;
const MenuItem: FC<MenuItemProps>;
const MenuSeparator: FC;
```

### showContextMenu

```ts
interface ContextMenuInstance {
	Hide(): void;
	Show(): void;
}

const showContextMenu: (children: ReactNode, parent?: EventTarget, options?: ContextMenuPositionOptions) => ContextMenuInstance;
```

### Usage

```tsx
import { Menu, MenuItem, MenuSeparator, showContextMenu } from 'millennium';

showContextMenu(
	<Menu label="My Plugin">
		<MenuItem onSelected={() => doThing()}>Do Thing</MenuItem>
		<MenuSeparator />
		<MenuItem onSelected={() => doOtherThing()}>Do Other Thing</MenuItem>
	</Menu>,
	parentElement,
);
```
