---
order: 2
---

# utils

## Exported Functions

-   [Time/Sleep](#timesleep)
    -   [sleep](#sleep)
    -   [time](#time)
    -   [time_ms](#time-ms)
    -   [time_micro](#time-micro)
-   [Math](#math)
    -   [round](#round)
    -   [clamp](#clamp)
    -   [sign](#sign)
    -   [lerp](#lerp)
-   [Random](#random)
    -   [random_int](#random-int)
    -   [random_float](#random-float)
    -   [random_seed](#random-seed)
-   [String Operations](#string-operations)
    -   [split](#split)
    -   [trim](#trim)
    -   [ltrim](#ltrim)
    -   [rtrim](#rtrim)
    -   [startswith](#startswith)
    -   [endswith](#endswith)
    -   [join](#join)
-   [Table Operations](#table-operations)
    -   [contains](#contains)
    -   [slice](#slice)
    -   [keys](#keys)
    -   [values](#values)
    -   [merge](#merge)
-   [System/Environment](#systemenvironment)
    -   [getenv](#getenv)
    -   [setenv](#setenv)
    -   [exec](#exec)
-   [Encoding](#encoding)
    -   [base64_encode](#base64-encode)
    -   [url_encode](#url-encode)
    -   [hex_encode](#hex-encode)
    -   [to_hex](#to-hex)
    -   [from_hex](#from-hex)
-   [UUID & Hash](#uuid--hash)
    -   [uuid](#uuid)
    -   [hash](#hash)
-   [File I/O](#file-io)
    -   [read_file](#read-file)
    -   [write_file](#write-file)
    -   [append_file](#append-file)
-   [Millennium Specific](#millennium-specific)
    -   [get_backend_path](#get-backend-path)

### Usage

```lua
local utils = require("utils")
-- Ex. use utils module to sleep
utils.sleep(1000)
```

## Time/Sleep

### sleep

#### Abstract

Pause execution for the specified number of milliseconds.

#### Parameters

| Parameter    |  Type   | Description                     |
| ------------ | :-----: | ------------------------------- |
| milliseconds | integer | Number of milliseconds to sleep |

#### Usage

```lua
-- Sleep for 1 second
utils.sleep(1000)
```

### time

#### Abstract

Get current Unix timestamp in seconds with decimal precision.

#### Returns

The current time (number) in seconds.

#### Usage

```lua
local timestamp = utils.time()
```

### time_ms

#### Abstract

Get current Unix timestamp in milliseconds.

#### Returns

The current time (integer) in milliseconds.

#### Usage

```lua
local timestamp = utils.time_ms()
```

### time_micro

#### Abstract

Get current Unix timestamp in microseconds.

#### Returns

The current time (integer) in microseconds.

#### Usage

```lua
local timestamp = utils.time_micro()
```

## Math

### round

#### Abstract

Round a number to the nearest integer.

#### Parameters

| Parameter |  Type  | Description     |
| --------- | :----: | --------------- |
| num       | number | Number to round |

#### Returns

The rounded number.

#### Usage

```lua
local result = utils.round(3.7) -- returns 4
```

### clamp

#### Abstract

Clamp a value between min and max.

#### Parameters

| Parameter |  Type  | Description    |
| --------- | :----: | -------------- |
| value     | number | Value to clamp |
| min       | number | Minimum value  |
| max       | number | Maximum value  |

#### Returns

The clamped value.

#### Usage

```lua
local result = utils.clamp(15, 0, 10) -- returns 10
```

### sign

#### Abstract

Get the sign of a number.

#### Parameters

| Parameter |  Type  | Description     |
| --------- | :----: | --------------- |
| num       | number | Number to check |

#### Returns

-1 for negative, 0 for zero, 1 for positive (integer).

#### Usage

```lua
local result = utils.sign(-5) -- returns -1
```

### lerp

#### Abstract

Linear interpolation between two values.

#### Parameters

| Parameter |  Type  | Description                       |
| --------- | :----: | --------------------------------- |
| a         | number | Start value                       |
| b         | number | End value                         |
| t         | number | Interpolation factor (0.0 to 1.0) |

#### Returns

The interpolated value (number).

#### Usage

```lua
local result = utils.lerp(0, 100, 0.5) -- returns 50
```

## Random

### random_int

#### Abstract

Generate a random integer between min and max (inclusive).

#### Parameters

| Parameter |  Type   | Description   |
| --------- | :-----: | ------------- |
| min       | integer | Minimum value |
| max       | integer | Maximum value |

#### Returns

A random integer.

#### Usage

```lua
local num = utils.random_int(1, 100)
```

### random_float

#### Abstract

Generate a random float between min and max.

#### Parameters

| Parameter |  Type  | Description                  |
| --------- | :----: | ---------------------------- |
| min       | number | Minimum value (default: 0.0) |
| max       | number | Maximum value (default: 1.0) |

#### Returns

A random float (number).

#### Usage

```lua
local num = utils.random_float(0.0, 1.0)
```

### random_seed

#### Abstract

Set the random number generator seed.

#### Parameters

| Parameter |  Type   | Description |
| --------- | :-----: | ----------- |
| seed      | integer | Seed value  |

#### Usage

```lua
utils.random_seed(12345)
```

## String Operations

### split

#### Abstract

Split a string by delimiter.

#### Parameters

| Parameter |  Type  | Description     |
| --------- | :----: | --------------- |
| str       | string | String to split |
| delim     | string | Delimiter       |

#### Returns

An array (table) of split strings.

#### Usage

```lua
local parts = utils.split("hello,world", ",")
```

### trim

#### Abstract

Trim whitespace from both ends of a string.

#### Parameters

| Parameter |  Type  | Description    |
| --------- | :----: | -------------- |
| str       | string | String to trim |

#### Returns

The trimmed string.

#### Usage

```lua
local result = utils.trim("  hello  ")
```

### ltrim

#### Abstract

Trim whitespace from the left end of a string.

#### Parameters

| Parameter |  Type  | Description    |
| --------- | :----: | -------------- |
| str       | string | String to trim |

#### Returns

The trimmed string.

#### Usage

```lua
local result = utils.ltrim("  hello")
```

### rtrim

#### Abstract

Trim whitespace from the right end of a string.

#### Parameters

| Parameter |  Type  | Description    |
| --------- | :----: | -------------- |
| str       | string | String to trim |

#### Returns

The trimmed string.

#### Usage

```lua
local result = utils.rtrim("hello  ")
```

### startswith

#### Abstract

Check if a string starts with a prefix.

#### Parameters

| Parameter |  Type  | Description        |
| --------- | :----: | ------------------ |
| str       | string | String to check    |
| prefix    | string | Prefix to look for |

#### Returns

True if string starts with prefix (boolean).

#### Usage

```lua
local result = utils.startswith("hello", "hel")
```

### endswith

#### Abstract

Check if a string ends with a suffix.

#### Parameters

| Parameter |  Type  | Description        |
| --------- | :----: | ------------------ |
| str       | string | String to check    |
| suffix    | string | Suffix to look for |

#### Returns

True if string ends with suffix (boolean).

#### Usage

```lua
local result = utils.endswith("hello", "lo")
```

### join

#### Abstract

Join an array of strings with a delimiter.

#### Parameters

| Parameter |   Type   | Description      |
| --------- | :------: | ---------------- |
| arr       | string[] | Array of strings |
| delim     |  string  | Delimiter        |

#### Returns

The joined string.

#### Usage

```lua
local result = utils.join({"hello", "world"}, ",")
```

## Table Operations

### contains

#### Abstract

Check if a table contains a value.

#### Parameters

| Parameter | Type  | Description     |
| --------- | :---: | --------------- |
| tbl       | table | Table to search |
| value     |  any  | Value to find   |

#### Returns

True if value is in table (boolean).

#### Usage

```lua
local result = utils.contains({1, 2, 3}, 2)
```

### slice

#### Abstract

Extract a slice of a table.

#### Parameters

| Parameter |  Type   | Description                          |
| --------- | :-----: | ------------------------------------ |
| tbl       |  table  | Table to slice                       |
| start     | integer | Start index (1-based)                |
| end_idx   | integer | End index (default: length of table) |

#### Returns

A new table containing the slice.

#### Usage

```lua
local result = utils.slice({1, 2, 3, 4, 5}, 2, 4)
```

### keys

#### Abstract

Get all keys from a table.

#### Parameters

| Parameter | Type  | Description                |
| --------- | :---: | -------------------------- |
| tbl       | table | Table to extract keys from |

#### Returns

An array of keys.

#### Usage

```lua
local keys = utils.keys({a = 1, b = 2})
```

### values

#### Abstract

Get all values from a table.

#### Parameters

| Parameter | Type  | Description                  |
| --------- | :---: | ---------------------------- |
| tbl       | table | Table to extract values from |

#### Returns

An array of values.

#### Usage

```lua
local values = utils.values({a = 1, b = 2})
```

### merge

#### Abstract

Merge two tables into a new table. The second table overwrites the first.

#### Parameters

| Parameter | Type  | Description  |
| --------- | :---: | ------------ |
| tbl1      | table | First table  |
| tbl2      | table | Second table |

#### Returns

A new merged table.

#### Usage

```lua
local result = utils.merge({a = 1}, {b = 2})
```

## System/Environment

### getenv

#### Abstract

Get an environment variable.

#### Parameters

| Parameter |  Type  | Description               |
| --------- | :----: | ------------------------- |
| name      | string | Environment variable name |

#### Returns

The environment variable value (string) or nil if not found.

#### Usage

```lua
local path = utils.getenv("PATH")
```

### setenv

#### Abstract

Set an environment variable.

#### Parameters

| Parameter |  Type  | Description                |
| --------- | :----: | -------------------------- |
| name      | string | Environment variable name  |
| value     | string | Environment variable value |

#### Returns

True if successful (boolean).

#### Usage

```lua
utils.setenv("MY_VAR", "value")
```

### exec

#### Abstract

Execute a shell command and capture output.

#### Parameters

| Parameter |  Type  | Description        |
| --------- | :----: | ------------------ |
| cmd       | string | Command to execute |

#### Returns

Command output (string) or nil on error, and exit status (integer) or error message (string).

#### Usage

```lua
local output, status = utils.exec("echo hello")
```

## Encoding

### base64_encode

#### Abstract

Encode a string to Base64.

#### Parameters

| Parameter |  Type  | Description      |
| --------- | :----: | ---------------- |
| input     | string | String to encode |

#### Returns

The Base64 encoded string.

#### Usage

```lua
local encoded = utils.base64_encode("hello")
```

### url_encode

#### Abstract

URL encode a string.

#### Parameters

| Parameter |  Type  | Description      |
| --------- | :----: | ---------------- |
| input     | string | String to encode |

#### Returns

The URL encoded string.

#### Usage

```lua
local encoded = utils.url_encode("hello world")
```

### hex_encode

#### Abstract

Encode binary data to hexadecimal string.

#### Parameters

| Parameter |  Type  | Description           |
| --------- | :----: | --------------------- |
| input     | string | Binary data to encode |

#### Returns

The hexadecimal string.

#### Usage

```lua
local hex = utils.hex_encode("data")
```

### to_hex

#### Abstract

Convert an integer to hexadecimal string.

#### Parameters

| Parameter |  Type   | Description       |
| --------- | :-----: | ----------------- |
| num       | integer | Number to convert |

#### Returns

The hexadecimal string (e.g., "0xff").

#### Usage

```lua
local hex = utils.to_hex(255) -- returns "0xff"
```

### from_hex

#### Abstract

Convert a hexadecimal string to integer.

#### Parameters

| Parameter |  Type  | Description        |
| --------- | :----: | ------------------ |
| hex       | string | Hexadecimal string |

#### Returns

The integer value.

#### Usage

```lua
local num = utils.from_hex("0xff") -- returns 255
```

## UUID & Hash

### uuid

#### Abstract

Generate a random UUID v4.

#### Returns

A UUID string (e.g., "550e8400-e29b-41d4-a716-446655440000").

#### Usage

```lua
local id = utils.uuid()
```

### hash

#### Abstract

Generate a hash of a string.

#### Parameters

| Parameter |  Type  | Description    |
| --------- | :----: | -------------- |
| str       | string | String to hash |

#### Returns

The hash value (integer).

#### Usage

```lua
local hash = utils.hash("hello")
```

## File I/O

### read_file

#### Abstract

Read entire file contents.

#### Parameters

| Parameter |  Type  | Description |
| --------- | :----: | ----------- |
| path      | string | File path   |

#### Returns

File contents (string) or nil on error, and error message (string) if failed.

#### Usage

```lua
local content, err = utils.read_file("/path/to/file.txt")
```

### write_file

#### Abstract

Write content to a file. This overwrites existing files.

#### Parameters

| Parameter |  Type  | Description      |
| --------- | :----: | ---------------- |
| path      | string | File path        |
| content   | string | Content to write |

#### Returns

True if successful (boolean) or nil on error, and error message (string) if failed.

#### Usage

```lua
local success, err = utils.write_file("/path/to/file.txt", "hello")
```

### append_file

#### Abstract

Append content to a file.

#### Parameters

| Parameter |  Type  | Description       |
| --------- | :----: | ----------------- |
| path      | string | File path         |
| content   | string | Content to append |

#### Returns

True if successful (boolean) or nil on error, and error message (string) if failed.

#### Usage

```lua
local success, err = utils.append_file("/path/to/file.txt", "world")
```

## Millennium Specific

### get_backend_path

#### Abstract

Get the backend path from MILLENNIUM_PLUGIN_SECRET_BACKEND_ABSOLUTE variable.

#### Returns

The backend path (string) or nil if not set.

#### Usage

```lua
local path = utils.get_backend_path()
```
