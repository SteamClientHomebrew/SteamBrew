---
order: 1
---

# datetime

## Exported Functions

- [now](#now)
- [unix](#unix)
- [from_unix](#from_unix)
- [to_unix](#to_unix)
- [format](#format)
- [parse](#parse)
- [add](#add)
- [diff](#diff)
- [components](#components)
- [create](#create)

### Usage

```lua
local datetime = require("datetime")
```

---

## now

### Abstract

Return the current time as milliseconds since the Unix epoch (1970-01-01T00:00:00Z).

### Parameters

None.

### Returns

Integer: number of milliseconds since epoch.

### Usage

```lua
local datetime = require("datetime")
local ms = datetime.now()
print("milliseconds since epoch:", ms)
```

---

## unix

### Abstract

Return the current time as seconds since the Unix epoch.

### Parameters

None.

### Returns

Integer: number of seconds since epoch.

### Usage

```lua
local datetime = require("datetime")
local s = datetime.unix()
print("seconds since epoch:", s)
```

---

## from_unix

### Abstract

Convert seconds-since-epoch to milliseconds (simple helper).

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| sec       | integer | Seconds since epoch |

### Returns

Integer: milliseconds since epoch (sec * 1000).

### Usage

```lua
local datetime = require("datetime")
local ms = datetime.from_unix(1620000000)
print(ms) -- 1620000000000
```

---

## to_unix

### Abstract

Convert milliseconds-since-epoch to seconds (integer division).

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| ms        | integer | Milliseconds since epoch |

### Returns

Integer: seconds since epoch (ms // 1000).

### Usage

```lua
local datetime = require("datetime")
local s = datetime.to_unix(1620000000000)
print(s) -- 1620000000
```

---

## format

### Abstract

Format a millisecond timestamp into a human-readable string using strftime-style format specifiers.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| ms        | integer | Timestamp in milliseconds since epoch |
| fmt       | string  | Optional. strftime format string. Default: "%Y-%m-%d %H:%M:%S" |
| utc       | boolean | Optional. If truthy, formats in UTC; otherwise local time. Default: false |

### Returns

String: formatted date/time.

### Usage

```lua
local datetime = require("datetime")
local ms = datetime.now()
print(datetime.format(ms)) -- default format, local time
print(datetime.format(ms, "%Y-%m-%dT%H:%M:%SZ", true)) -- ISO-like in UTC
```

---

## parse

### Abstract

Parse a date/time string according to a strftime-style format and return milliseconds since epoch.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input date/time string |
| fmt       | string | Optional. strftime format used to parse. Default: "%Y-%m-%d %H:%M:%S" |

### Returns

- On success: integer milliseconds since epoch.
- On failure: `nil, error_message` (the binding returns `nil, "Parse failed"` on parse errors).

### Usage

```lua
local datetime = require("datetime")
local ms, err = datetime.parse("2025-01-15 12:34:56")
if not ms then
  print("parse failed:", err)
else
  print("timestamp (ms):", ms)
end
```

Notes: parsing uses std::get_time behavior — unsupported format/specifier combinations or mismatched input will cause a parse failure.

---

## add

### Abstract

Add a delta to a millisecond timestamp and return the resulting timestamp (in milliseconds). Supports units: `milliseconds`, `seconds`, `minutes`, `hours`, `days`.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| ms        | integer | Base timestamp in milliseconds |
| delta     | integer | Amount to add (signed integer) |
| unit      | string  | Optional. Unit name: "milliseconds", "seconds", "minutes", "hours", "days". Default: "seconds" |

### Returns

Integer: resulting timestamp in milliseconds.

### Usage

```lua
local datetime = require("datetime")
local now_ms = datetime.now()
local later = datetime.add(now_ms, 30, "minutes")
print("30 minutes later:", datetime.format(later))
```

---

## diff

### Abstract

Compute the difference between two millisecond timestamps and return the result in the requested unit.

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| ms1       | integer | Minuend timestamp in milliseconds |
| ms2       | integer | Subtrahend timestamp in milliseconds |
| unit      | string  | Optional. Unit for result: "milliseconds", "seconds", "minutes", "hours", "days". Default: "seconds" |

### Returns

Integer: difference (ms1 - ms2) converted to the requested unit (integer division).

### Usage

```lua
local datetime = require("datetime")
local a = datetime.now()
local b = datetime.add(a, -3600 * 1000) -- 1 hour earlier
print("diff in hours:", datetime.diff(a, b, "hours")) -- ~1
```

---

## components

### Abstract

Break a millisecond timestamp into calendar components (year, month, day, hour, minute, second, weekday).

### Parameters

| Parameter | Type    | Description |
| --------- | :-----: | ----------- |
| ms        | integer | Timestamp in milliseconds |
| utc       | boolean | Optional. If truthy return UTC components; otherwise local time. Default: false |

### Returns

Table with fields:
- `year` (integer)
- `month` (1-12)
- `day` (1-31)
- `hour` (0-23)
- `minute` (0-59)
- `second` (0-60) — note: tm_sec behavior
- `weekday` (integer) — tm_wday from C (0 = Sunday)

### Usage

```lua
local datetime = require("datetime")
local ms = datetime.now()
local c = datetime.components(ms, true) -- UTC components
print(c.year, c.month, c.day, c.hour, c.minute, c.second, c.weekday)
```

---

## create

### Abstract

Create a timestamp (milliseconds since epoch) from a table of components. The table should contain numeric fields: `year`, `month`, `day`, `hour`, `minute`, `second`. Missing fields default to zero-like values as per std::tm semantics.

### Parameters

| Parameter | Type  | Description |
| --------- | :---: | ----------- |
| t         | table | Table with fields `year`, `month`, `day`, `hour`, `minute`, `second` |

### Returns

Integer: milliseconds since epoch representing the supplied date/time in the local timezone (constructed via std::mktime).

### Usage

```lua
local datetime = require("datetime")
local ts = datetime.create({
  year = 2025,
  month = 1,
  day = 15,
  hour = 12,
  minute = 0,
  second = 0
})
print("ms:", ts)
print("formatted:", datetime.format(ts))
```

Notes: `create` uses local time when constructing the std::tm and calling mktime. If you need UTC semantics, construct accordingly or adjust after creation.

---

## Notes & Common Patterns

- All timestamps in this module are integers representing milliseconds since the Unix epoch unless otherwise noted.
- Use `now()` for high-resolution integer timestamps. Use `unix()` when seconds precision is sufficient.
- `format` accepts any strftime-style format supported by the platform's std::put_time implementation (common specifiers are supported).
- `parse` uses std::get_time. Some platforms' std::get_time implementations are stricter; always check for `nil, error_message`.
- Timezone behavior:
  - `format(ms, fmt, true)` and `components(ms, true)` use UTC (gmtime).
  - Without the UTC flag they use the system local timezone (localtime).
- Arithmetic functions (`add`, `diff`) perform integer math on milliseconds — be mindful of DST and calendar-specific adjustments when performing date arithmetic across DST transitions (the module performs simple epoch-based arithmetic).
- When creating timestamps with `create`, the result depends on local timezone because `mktime` is used.

That's the `datetime` module — small, predictable helpers for timestamps, formatting, parsing, and simple arithmetic in Millennium Lua plugins.
