# Panel

`PanelSection`/`PanelSectionRow` — the section+row layout used in the Quick Access Menu (QAM).

```ts
interface PanelSectionProps {
	title?: string;
	spinner?: boolean;
	children?: ReactNode;
}

interface PanelSectionRowProps {
	children?: ReactNode;
}
```

### Usage

```tsx
import { PanelSection, PanelSectionRow, ButtonItem } from 'millennium';

<PanelSection title="My Plugin">
	<PanelSectionRow>
		<ButtonItem label="Do something" onClick={() => {}} />
	</PanelSectionRow>
</PanelSection>;
```
