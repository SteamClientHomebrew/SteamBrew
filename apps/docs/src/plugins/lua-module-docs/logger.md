# logger

Logger module for Millennium plugin development. Provides logging functionality with different severity levels.

```lua
local logger = require("logger")
```

## Functions

-   `logger:info(message)` - Log an informational message
-   `logger:warn(message)` - Log a warning message
-   `logger:error(message)` - Log an error message

## Functions

### logger:info(message)

Log an informational message.

**Parameters:**

-   `message` (string) - The message to log

**Usage:**

```lua
logger:info("Plugin initialized successfully")
logger:info("Processing 10 items")
logger:info("Configuration loaded from config.json")
```

---

### logger:warn(message)

Log a warning message.

**Parameters:**

-   `message` (string) - The warning message to log

**Usage:**

```lua
logger:warn("API rate limit approaching")
logger:warn("Deprecated function called")
logger:warn("Configuration file not found, using defaults")
```

---

### logger:error(message)

Log an error message.

**Parameters:**

-   `message` (string) - The error message to log

**Usage:**

```lua
logger:error("Failed to connect to database")
logger:error("Invalid JSON in response")
logger:error("Missing required configuration parameter")
```

## Common Patterns

### Basic Logging

```lua
-- Log at different severity levels
logger:info("Starting data processing")
logger:warn("Cache is getting full")
logger:error("Failed to save data")
```

### Logging with Context

```lua
-- Include relevant context in log messages
local user_id = 12345
logger:info("User " .. user_id .. " logged in")

local error_code = 404
logger:error("API request failed with status " .. error_code)
```

### Error Handling with Logging

```lua
local response, err = http.get("https://api.example.com/data")

if not response then
    logger:error("HTTP request failed: " .. err)
    return
end

if response.status ~= 200 then
    logger:warn("Unexpected status code: " .. response.status)
end

logger:info("Successfully retrieved data")
```

### Conditional Logging

```lua
local function process_data(data)
    if not data then
        logger:error("Cannot process nil data")
        return false
    end

    if #data == 0 then
        logger:warn("Processing empty dataset")
        return true
    end

    logger:info("Processing " .. #data .. " records")
    -- Process data...
    return true
end
```
