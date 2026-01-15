---
order: 1
---

# logger

## Exported Functions

- [info](#info)
- [warn](#warn)
- [error](#error)

### Usage

```lua
local logger = require("logger")
```

---

## info

### Abstract

Log an informational message. Use for routine runtime information and progress updates.

### Parameters

| Parameter | Type   | Description             |
| --------- | :----: | ----------------------- |
| message   | string | Message to log          |

### Returns

None.

### Usage

```lua
local logger = require("logger")
logger:info("Plugin initialized successfully")
logger:info("Processed " .. count .. " items")
```

---

## warn

### Abstract

Log a warning message. Use for recoverable issues or unexpected states that do not prevent operation.

### Parameters

| Parameter | Type   | Description             |
| --------- | :----: | ----------------------- |
| message   | string | Warning message         |

### Returns

None.

### Usage

```lua
local logger = require("logger")
logger:warn("API rate limit approaching")
logger:warn("Configuration file missing, using defaults")
```

---

## error

### Abstract

Log an error message. Use for errors that indicate a failure or require attention.

### Parameters

| Parameter | Type   | Description             |
| --------- | :----: | ----------------------- |
| message   | string | Error message           |

### Returns

None.

### Usage

```lua
local logger = require("logger")
logger:error("Failed to connect to database")
logger:error("Unhandled exception: " .. tostring(err))
```

---

## Common Patterns

### Basic logging

```lua
local logger = require("logger")

logger:info("Starting task")
logger:warn("Low disk space")
logger:error("Task failed")
```

### Logging with context

- Include relevant context (IDs, filenames, user identifiers) to make logs actionable.
- Prefer concise interpolated strings rather than large tables.

```lua
local logger = require("logger")
local user_id = 12345
logger:info("User " .. user_id .. " logged in")
logger:error("Payment failed for user " .. user_id .. " : code " .. err_code)
```

### Error handling and propagation

- Use `logger:error` when an operation fails and you need an audit trail.
- Avoid logging sensitive information (passwords, tokens, PII).

```lua
local logger = require("logger")
local http = require("http")

local res, err = http.get("https://api.example.com/data")
if not res then
  logger:error("HTTP request failed: " .. tostring(err))
  return nil, err
end

if res.status ~= 200 then
  logger:warn("Unexpected status: " .. tostring(res.status))
end
```

### Conditional / debug-style logging

- If you need verbose or debug logging, gate it behind configuration in your plugin and call the appropriate logger method when necessary.

```lua
local logger = require("logger")
local verbose = plugin_config.verbose

if verbose then
  logger:info("Verbose mode enabled - detailed startup logs follow")
end
```

---

That's the `logger` module — a tiny, consistent logging interface for Millennium Lua plugins. Use `info` for normal runtime events, `warn` for recoverable issues, and `error` for failures that need attention.
