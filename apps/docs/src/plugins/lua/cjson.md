---
order: 1
---

# [cjson](https://github.com/mpx/lua-cjson)

Lua JSON encoding/decoding module embedded into Millennium.

The `cjson` module is included in Millennium. While Millennium's fork may differ slightly internally, the public API remains compatible with the upstream `lua-cjson` project. You can refer to the upstream manual for additional background: https://kyne.au/~mark/software/lua-cjson-manual.html

The module can be required directly:

```lua
local cjson = require("json")
```

## Exported Functions

- [encode](#encode)
- [decode](#decode)
- [new](#new)
- [encode_sparse_array](#encode-sparse-array)
- [encode_max_depth](#encode-max-depth)
- [decode_max_depth](#decode-max-depth)
- [encode_number_precision](#encode-number-precision)
- [encode_keep_buffer](#encode-keep-buffer)
- [encode_invalid_numbers](#encode-invalid-numbers)
- [decode_invalid_numbers](#decode-invalid-numbers)
- [safe.encode](#safe-encode)
- [safe.decode](#safe-decode)
- [safe.new](#safe-new)

## Module Fields

- `cjson.null` — lightuserdata representing JSON null
- `cjson._NAME` — module name
- `cjson._VERSION` — module version

---

## Usage

```lua
local cjson = require("cjson")

local json = cjson.encode({ name = "Alice", online = true })
local obj  = cjson.decode('{"name":"Alice","online":true}')
```

---

## encode

### Abstract

Encode a Lua value to a JSON string. This function throws on encoding errors.

### Parameters

| Parameter | Type | Description |
| --------- | :--: | ----------- |
| value     | any  | Lua value to encode (tables, numbers, strings, booleans, `cjson.null`, etc.) |

### Returns

JSON string on success.

### Throws

Raises a Lua error on failure (e.g., unsupported types, nesting too deep, invalid numbers depending on settings).

### Example

```lua
local json_str = cjson.encode({ name = "John", age = 30, active = true })
-- -> '{"name":"John","age":30,"active":true}'
```

---

## decode

### Abstract

Decode a JSON string into a Lua value. This function throws on parse errors unless using the `safe` variant.

### Parameters

| Parameter   | Type   | Description |
| ----------- | :----: | ----------- |
| json_string | string | JSON string to decode |

### Returns

Decoded Lua value (tables, numbers, strings, booleans, `cjson.null` mapped to a lightuserdata).

### Throws

Raises a Lua error on parse failure or when encountering disallowed values depending on decode settings.

### Example

```lua
local data = cjson.decode('{"name":"John","age":30}')
print(data.name) -- "John"
```

---

## new

### Abstract

Create a new `cjson` instance with independent configuration. Useful to maintain different encoder/decoder settings without global side effects.

### Returns

A new `cjson` instance (table) with the same functions and configurable settings.

### Example

```lua
local custom = cjson.new()
custom.encode_max_depth(5)
local s = custom.encode({ value = 1 })
```

---

# Configuration Functions

The following functions configure encoder/decoder behavior. When called without arguments they return the current setting; when called with an argument they set the value and return the new/current setting.

---

## encode_sparse_array

### Abstract

Control how sparse arrays are encoded. If an array is sparse beyond the configured threshold, it will be encoded as an object (map) instead of a JSON array.

### Parameters

| Parameter | Type             | Description |
| --------- | :--------------: | ----------- |
| convert   | boolean|number   | Enable conversion of sparse arrays (or treat as integer toggle) |
| ratio     | integer         | Sparseness ratio threshold |
| safe      | integer         | Maximum index count considered safe to keep as an array |

### Returns

Current settings as `convert, ratio, safe`.

### Example

```lua
local convert, ratio, safe = cjson.encode_sparse_array()
cjson.encode_sparse_array(true, 3, 5)
local sparse = { [1] = "a", [100] = "b" }
local json = cjson.encode(sparse) -- becomes {"1":"a","100":"b"} if conversion triggered
```

---

## encode_max_depth

### Abstract

Get or set maximum encoding nesting depth.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| depth     | integer | Maximum allowed nesting depth (1..2^31-1) |

### Returns

Current maximum depth (integer).

### Example

```lua
cjson.encode_max_depth(5)
-- cjson.encode({ { { { { "deep" } } } } })  -- may error if deeper than 5
```

---

## decode_max_depth

### Abstract

Get or set maximum decoding nesting depth.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| depth     | integer | Maximum allowed nesting depth for decoding |

### Returns

Current maximum depth (integer).

### Example

```lua
cjson.decode_max_depth(10)
```

---

## encode_number_precision

### Abstract

Get or set decimal precision used for encoding numbers.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| precision | integer | Precision 1..14 (default 14) |

### Returns

Current precision (integer).

### Example

```lua
cjson.encode_number_precision(2)
-- cjson.encode({ pi = 3.14159 }) -> {"pi":3.14}
cjson.encode_number_precision(14) -- restore
```

---

## encode_keep_buffer

### Abstract

Control whether the encoder reuses an internal buffer between calls (improves performance at the cost of memory retention).

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| keep      | boolean | Keep buffer between calls when true (default true) |

### Returns

Current setting (boolean).

### Example

```lua
cjson.encode_keep_buffer(false)
```

---

## encode_invalid_numbers

### Abstract

Controls handling of invalid numbers (NaN, Infinity) during encoding.

### Parameters

| Parameter | Type                | Description |
| --------- | :-----------------: | ----------- |
| setting   | boolean|string      | "off"|"on"|"null" or boolean; "off" by default |

### Returns

Current setting.

### Examples

```lua
cjson.encode_invalid_numbers("null")
local json = cjson.encode({ value = 0/0 }) -- {"value":null}

cjson.encode_invalid_numbers(true)
local json = cjson.encode({ inf = math.huge }) -- {"inf":inf}  -- non-standard JSON
```

---

## decode_invalid_numbers

### Abstract

Controls whether invalid numbers are permitted during decoding.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| setting   | boolean | Allow invalid numbers (default true) |

### Returns

Current setting (boolean).

### Example

```lua
cjson.decode_invalid_numbers(true)
local data = cjson.decode('{"value":NaN,"inf":Infinity}')
```

---

# Safe Variant

`cjson.safe` exposes safe versions of encode/decode that return `nil, error_message` instead of throwing.

## safe.encode

### Returns

JSON string on success, or `nil, error_message` on failure.

### Example

```lua
local json, err = cjson.safe.encode({ name = "John" })
if not json then
  print("Encoding failed:", err)
end
```

---

## safe.decode

### Returns

Decoded value on success, or `nil, error_message` on failure.

### Example

```lua
local data, err = cjson.safe.decode('{"name":"John"}')
if not data then
  print("Decode failed:", err)
end
```

---

## safe.new

### Returns

New safe instance with the same API but returning errors instead of throwing.

### Example

```lua
local safe_json = cjson.safe.new()
safe_json.encode_max_depth(5)
local json, err = safe_json.encode({ data = "value" })
if not json then print("Error:", err) end
```

---

## Notes & Common Patterns

- Use `cjson.safe` if you prefer `nil, err` style error handling rather than exceptions.
- Create independent instances with `cjson.new()` when you need different encoder/decoder settings concurrently.
- Be mindful of `encode_max_depth` / `decode_max_depth` to avoid unexpected errors when handling deeply nested data.
- `cjson.null` is a special lightuserdata value used to represent JSON `null`; it is not equal to `nil` in Lua and must be handled explicitly.

That's the `cjson` module — a compact, fast JSON encoder/decoder exposed to Lua plugins in Millennium.
