[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / useQuickAccessVisible

# Function: useQuickAccessVisible()

> **useQuickAccessVisible**(): `boolean`

Defined in: [packages/client/src/custom-hooks/useQuickAccessVisible.ts:40](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/custom-hooks/useQuickAccessVisible.ts#L40)

Returns state indicating the visibility of quick access menu.

## Returns

`boolean`

`true` if quick access menu is visible and `false` otherwise.

## Example

```ts
import { FC, useEffect } from "react";
import { useQuickAccessVisible } from "@steambrew/client";

export const PluginPanelView: FC<{}> = ({ }) => {
  const isVisible = useQuickAccessVisible();

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const interval = setInterval(() => console.log("Hello world!"), 1000);
    return () => {
      clearInterval(interval);
    }
  }, [isVisible])

  return (
    <div>
      {isVisible ? "VISIBLE" : "INVISIBLE"}
    </div>
  );
};
```
