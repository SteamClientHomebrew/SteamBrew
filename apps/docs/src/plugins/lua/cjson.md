# [cjson](https://github.com/mpx/lua-cjson)

Lua JSON encoding/decoding module.

The cjson module is embedded directly into Millennium. Although Millennium's fork of cjson is slightly different under the hood, everything will still work the same. Although these docs should cover everything you need, you can refer to their documentation [here](https://kyne.au/%7Emark/software/lua-cjson-manual.html).

The cjson module can be imported directly into any lua file in your backend.

```lua
local cjson = require("cjson")
```

## Functions

-   `cjson.encode(value)` - Encode Lua value to JSON string
-   `cjson.decode(json_string)` - Decode JSON string to Lua value
-   `cjson.new()` - Create new CJSON instance
-   `cjson.encode_sparse_array([convert, ratio, safe])` - Configure sparse array encoding
-   `cjson.encode_max_depth([depth])` - Configure maximum encoding depth
-   `cjson.decode_max_depth([depth])` - Configure maximum decoding depth
-   `cjson.encode_number_precision([precision])` - Configure number precision
-   `cjson.encode_keep_buffer([keep])` - Configure buffer persistence
-   `cjson.encode_invalid_numbers([setting])` - Configure invalid number encoding
-   `cjson.decode_invalid_numbers([setting])` - Configure invalid number decoding
-   `cjson.safe.encode(value)` - Safe encode (returns nil, error on failure)
-   `cjson.safe.decode(json_string)` - Safe decode (returns nil, error on failure)
-   `cjson.safe.new()` - Create new safe CJSON instance

## Module Fields

-   `cjson.null` - Lightuserdata representing JSON null values
-   `cjson._NAME` - Module name string
-   `cjson._VERSION` - Module version string

## Core Functions

### cjson.encode(value)

Encodes a Lua value as a JSON string.

**Parameters:**

-   `value` (any) - The Lua value to encode

**Returns:** JSON string representation

**Throws:** Error on encoding failure

**Usage:**

```lua
local json_str = cjson.encode({ name = "John", age = 30, active = true })
-- Result: '{"name":"John","age":30,"active":true}'

local array_json = cjson.encode({ 1, 2, 3, 4, 5 })
-- Result: '[1,2,3,4,5]'
```

---

### cjson.decode(json_string)

Decodes a JSON string into a Lua value.

**Parameters:**

-   `json_string` (string) - The JSON string to decode

**Returns:** The decoded Lua value

**Throws:** Error on decoding failure

**Usage:**

```lua
local data = cjson.decode('{"name":"John","age":30}')
print(data.name)  -- "John"
print(data.age)   -- 30

local array = cjson.decode('[1,2,3,4,5]')
print(array[1])   -- 1
```

---

### cjson.new()

Creates a new CJSON instance with default configuration.

**Returns:** New cjson instance

**Usage:**

```lua
local custom_json = cjson.new()
custom_json.encode_max_depth(5)
custom_json.encode_number_precision(3)

local json_str = custom_json.encode({ value = 3.14159 })
-- Custom instance has its own configuration
```

---

## Configuration Functions

### cjson.encode_sparse_array([convert, ratio, safe])

Configures sparse array encoding. Arrays exceeding the sparseness threshold are encoded as objects.

**Parameters:**

-   `convert` (boolean|integer, optional) - Convert sparse arrays to objects (default: false)
-   `ratio` (integer, optional) - Sparseness ratio threshold (default: 2)
-   `safe` (integer, optional) - Always use array when max index ≤ safe (default: 10)

**Returns:** Current settings (convert, ratio, safe)

**Usage:**

```lua
-- Get current settings
local convert, ratio, safe = cjson.encode_sparse_array()

-- Enable sparse array conversion with ratio 3, safe 5
cjson.encode_sparse_array(true, 3, 5)

local sparse = { [1] = "a", [100] = "b" }
local json = cjson.encode(sparse)
-- Encoded as object: '{"1":"a","100":"b"}'
```

---

### cjson.encode_max_depth([depth])

Configures maximum encoding nesting depth.

**Parameters:**

-   `depth` (integer, optional) - Maximum depth, range 1-2147483647 (default: 1000)

**Returns:** Current maximum depth

**Usage:**

```lua
-- Get current depth
local current = cjson.encode_max_depth()

-- Set max depth to 5
cjson.encode_max_depth(5)

-- This will fail if nesting exceeds 5 levels
local deeply_nested = { { { { { { "too deep" } } } } } }
-- cjson.encode(deeply_nested)  -- Error: exceeds max depth
```

---

### cjson.decode_max_depth([depth])

Configures maximum decoding nesting depth.

**Parameters:**

-   `depth` (integer, optional) - Maximum depth, range 1-2147483647 (default: 1000)

**Returns:** Current maximum depth

**Usage:**

```lua
-- Set max decoding depth to 10
cjson.decode_max_depth(10)

-- This will fail if JSON nesting exceeds 10 levels
local json = '{"a":{"b":{"c":{"d":{"e":{"f":{"g":{"h":{"i":{"j":{"k":"value"}}}}}}}}}}}'
-- cjson.decode(json)  -- Error: exceeds max depth
```

---

### cjson.encode_number_precision([precision])

Configures decimal precision for number encoding.

**Parameters:**

-   `precision` (integer, optional) - Precision, range 1-14 (default: 14)

**Returns:** Current precision setting

**Usage:**

```lua
-- Set precision to 2 decimal places
cjson.encode_number_precision(2)

local json = cjson.encode({ pi = 3.14159265359 })
-- Result: '{"pi":3.14}'

-- Reset to full precision
cjson.encode_number_precision(14)
```

---

### cjson.encode_keep_buffer([keep])

Configures whether the encoding buffer persists between calls.

**Parameters:**

-   `keep` (boolean, optional) - Keep buffer between calls (default: true)

**Returns:** Current buffer setting

**Usage:**

```lua
-- Disable buffer persistence (may reduce memory usage)
cjson.encode_keep_buffer(false)

-- Re-enable buffer persistence (better performance)
cjson.encode_keep_buffer(true)

local json = cjson.encode({ data = "value" })
```

---

### cjson.encode_invalid_numbers([setting])

Configures how invalid numbers (NaN, Inf) are encoded.

**Parameters:**

-   `setting` (boolean|string, optional) - "off", "on", "null", or boolean (default: "off")

**Returns:** Current setting

**Usage:**

```lua
-- Encode invalid numbers as null
cjson.encode_invalid_numbers("null")

local json = cjson.encode({ value = 0/0 })  -- NaN
-- Result: '{"value":null}'

-- Allow invalid numbers (non-standard JSON)
cjson.encode_invalid_numbers(true)

local json = cjson.encode({ inf = math.huge })
-- Result: '{"inf":inf}'
```

---

### cjson.decode_invalid_numbers([setting])

Configures whether invalid numbers are allowed during decoding.

**Parameters:**

-   `setting` (boolean, optional) - Allow invalid numbers (default: true)

**Returns:** Current setting

**Usage:**

```lua
-- Allow decoding of invalid numbers (default)
cjson.decode_invalid_numbers(true)

local data = cjson.decode('{"value":NaN,"inf":Infinity}')
-- Accepts non-standard JSON with NaN/Infinity

-- Strict mode: reject invalid numbers
cjson.decode_invalid_numbers(false)
-- cjson.decode('{"value":NaN}')  -- Error
```

---

## Safe Variant

`cjson.safe` provides error-safe versions of encode/decode that return `nil, error_message` instead of throwing.

### cjson.safe.encode(value)

**Returns:** JSON string on success, or `nil, error_message` on failure

**Usage:**

```lua
local json, err = cjson.safe.encode({ name = "John" })
if not json then
    print("Encoding failed: " .. err)
else
    print("Success: " .. json)
end

-- Handle encoding errors gracefully
local json, err = cjson.safe.encode({ func = function() end })
if not json then
    print("Cannot encode functions: " .. err)
end
```

---

### cjson.safe.decode(json_string)

**Returns:** Decoded value on success, or `nil, error_message` on failure

**Usage:**

```lua
local data, err = cjson.safe.decode('{"name":"John"}')
if not data then
    print("Decoding failed: " .. err)
else
    print("Name: " .. data.name)
end

-- Handle malformed JSON
local data, err = cjson.safe.decode('invalid json')
if not data then
    print("Parse error: " .. err)
end
```

---

### cjson.safe.new()

**Returns:** New safe CJSON instance

**Usage:**

```lua
local safe_json = cjson.safe.new()
safe_json.encode_max_depth(5)

local json, err = safe_json.encode({ data = "value" })
if not json then
    print("Error: " .. err)
end
```

---

All configuration functions and module fields are identical to the regular `cjson` module.
