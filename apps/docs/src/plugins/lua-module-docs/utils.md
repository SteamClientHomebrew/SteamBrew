# utils

Utility module for common helper functions.

::: info
As of current, this module is rather barren. If there are common functions or useful utilities that aren't supported in native lua, let us know and we'll likely add it!
:::

```lua
local utils = require("utils")
```

## Functions

-   `utils.sleep(milliseconds)` - Pause execution for the specified duration

## Functions

### utils.sleep(milliseconds)

Pause execution for the specified number of milliseconds.

**Parameters:**

-   `milliseconds` (integer) - Number of milliseconds to sleep

**Throws:** Error message if argument is not a number

**Usage:**

```lua
-- Sleep for 1 second
utils.sleep(1000)

-- Sleep for 500 milliseconds
utils.sleep(500)

-- Sleep for 2.5 seconds
utils.sleep(2500)
```
