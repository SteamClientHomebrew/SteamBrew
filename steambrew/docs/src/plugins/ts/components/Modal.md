# Modal

`ConfirmModal`, `ModalRoot`, `SimpleModal`, `ModalPosition`

are the main pieces used to build custom modals.
For a quick OK/Cancel dialog use `showModal` + `ConfirmModal`; for a fully custom modal, wrap your content in `ModalRoot`.

```ts
interface ModalRootProps {
	children?: ReactNode;
	onCancel?(): void;
	closeModal?(): void;
	onOK?(): void;
	onEscKeypress?(): void;
	className?: string;
	modalClassName?: string;
	bAllowFullSize?: boolean;
	bDestructiveWarning?: boolean;
	bDisableBackgroundDismiss?: boolean;
	bHideCloseIcon?: boolean;
	bOKDisabled?: boolean;
	bCancelDisabled?: boolean;
}

interface ConfirmModalProps extends ModalRootProps {
	onMiddleButton?(): void; // setting this prop enables the middle button
	strTitle?: ReactNode;
	strDescription?: ReactNode;
	strOKButtonText?: ReactNode;
	strCancelButtonText?: ReactNode;
	strMiddleButtonText?: ReactNode;
	bAlertDialog?: boolean; // only shows the OK button
	bMiddleDisabled?: boolean;
}

const ConfirmModal: FC<ConfirmModalProps>;
const ModalRoot: FC<ModalRootProps>;
const SimpleModal: FC<{ active?: boolean; children: ReactNode }>;
const ModalPosition: FC<{ active?: boolean; children: ReactNode }>;
```

### Usage

```tsx
import { showModal, ConfirmModal } from 'millennium';

showModal(<ConfirmModal strTitle="Confirm" strDescription="Are you sure?" onOK={() => doThing()} />);
```
