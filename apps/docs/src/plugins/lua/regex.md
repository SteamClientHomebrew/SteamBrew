---
order: 1
---

# regex

Regular-expression utilities for Millennium Lua plugins. This module exposes a small set of helpers for matching, searching, replacing, splitting and escaping strings from Lua.

## Exported Functions

- [match](#match)
- [search](#search)
- [find_all](#find_all)
- [replace](#replace)
- [replace_first](#replace_first)
- [split](#split)
- [escape](#escape)
- [test](#test)

### Usage

```lua
local regex = require("regex")
```

---

## match

### Abstract

Check whether the entire input string matches the provided regular expression (equivalent to std::regex_match).

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string to test |
| pattern   | string | Regular expression pattern |

### Returns

- On success: boolean `true` if the whole string matches the pattern, otherwise `false`.
- On error (invalid pattern): `nil, error_message`.

### Usage

```lua
local regex = require("regex")

local ok_or_false, err = regex.match("abc123", "^%w+$")
if ok_or_false == nil then
  print("pattern error:", err)
else
  print("full match:", ok_or_false) -- true/false
end
```

---

## search

### Abstract

Search the input string for the first occurrence of the pattern and return a result table describing the match (equivalent to std::regex_search).

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string to search |
| pattern   | string | Regular expression pattern |

### Returns

- On success when a match is found: a table describing the match.
  - Numeric captures: the matched substrings are stored with numeric indices. Note: the implementation stores the overall match at index `0` and captured subgroups at indices `1..N`.
  - Named fields:
    - `pos` (integer) — 1-based starting position of the overall match in the input string.
    - `len` (integer) — length (in bytes/chars) of the overall match.
- On success when no match is found: `nil`.
- On error (invalid pattern): `nil, error_message`.

Example match table:
{
  [0] = "full match",
  [1] = "first capture",
  [2] = "second capture",
  pos = 5,
  len = 12
}

### Usage

```lua
local regex = require("regex")

local match, err = regex.search("hello 123 world", "(%d+)")
if match == nil and err then
  print("pattern error:", err)
elseif match == nil then
  print("no match")
else
  print("full match:", match[0])
  print("first capture:", match[1])
  print("position:", match.pos, "length:", match.len)
end
```

---

## find_all

### Abstract

Find all non-overlapping occurrences of the pattern in the input string and return an array of match tables (each like the `search` result).

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string to search |
| pattern   | string | Regular expression pattern |

### Returns

- On success: an array-like table (1-based) where each element is a match table. Each match table contains:
  - Numeric captures: index `0` for the overall match, `1..N` for capture groups.
  - `pos` (integer) — 1-based starting position of that match.
  - `len` (integer) — length of that match.
- On error (invalid pattern): `nil, error_message`.
- If no matches are found the function returns an empty table.

### Usage

```lua
local regex = require("regex")

local matches, err = regex.find_all("a1 b2 c3", "(%w)(%d)")
if not matches then
  print("pattern error:", err)
else
  for i, m in ipairs(matches) do
    print(i, "match:", m[0], "caps:", m[1], m[2], "pos:", m.pos)
  end
end
```

---

## replace

### Abstract

Replace all occurrences of a pattern with a replacement string (std::regex_replace semantics).

### Parameters

| Parameter    | Type   | Description |
| ------------ | :----: | ----------- |
| str          | string | Input string |
| pattern      | string | Regular expression pattern |
| replacement  | string | Replacement text (supports standard replacement sequences accepted by std::regex_replace) |

### Returns

- On success: the resulting string after replacement.
- On error (invalid pattern): `nil, error_message`.

### Usage

```lua
local regex = require("regex")

local out, err = regex.replace("apple 1, banana 2", "%d", "#")
if out then
  print(out) -- "apple #, banana #"
else
  print("replace failed:", err)
end
```

---

## replace_first

### Abstract

Replace only the first occurrence of a pattern with a replacement string. If no match is found, the original input string is returned.

### Parameters

| Parameter    | Type   | Description |
| ------------ | :----: | ----------- |
| str          | string | Input string |
| pattern      | string | Regular expression pattern |
| replacement  | string | Replacement text |

### Returns

- On success: string with the first match replaced (or the original string if no match).
- On error (invalid pattern): `nil, error_message`.

### Usage

```lua
local regex = require("regex")

local out, err = regex.replace_first("one 1 two 2", "%d", "X")
if out then
  print(out) -- "one X two 2"
else
  print("replace_first failed:", err)
end
```

---

## split

### Abstract

Split the input string using the provided pattern as the delimiter (equivalent to tokenizing by a regex). Returns an array of substrings.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string |
| pattern   | string | Regular expression used as delimiter |

### Returns

- On success: an array-like table (1-based) where each element is a substring resulting from splitting.
- On error (invalid pattern): `nil, error_message`.
- Note: empty substrings between adjacent delimiters are included.

### Usage

```lua
local regex = require("regex")

local parts, err = regex.split("a,b;;c", "[,;]+")
if not parts then
  print("split failed:", err)
else
  for i, p in ipairs(parts) do print(i, p) end
end
```

---

## escape

### Abstract

Escape regex metacharacters in a string so it can be treated as a literal in a pattern.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string to escape |

### Returns

Escaped string where regex metacharacters are prefixed with a backslash.

### Usage

```lua
local regex = require("regex")

local literal = regex.escape("file.(txt)?")
print(literal) -- e.g. "file\.\(txt\)\?"
```

---

## test

### Abstract

Test whether the pattern is present in the input string. Supports optional flags (see below).

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| str       | string | Input string |
| pattern   | string | Regular expression pattern |
| flags     | string | Optional flags string (supported: `'i'` = case-insensitive, `'g'` = global (ignored by this function)) |

### Returns

- On success: boolean `true` if the pattern is found, otherwise `false`.
- On error (invalid pattern): `nil, error_message`.

### Notes

- The implementation supports the `'i'` flag for case-insensitive matching. The `'g'` flag (global) is accepted but ignored because this function only reports presence/absence; use `find_all` to iterate all matches.
- Flags are provided as a short string, e.g. `"i"` or `"ig"`.

### Usage

```lua
local regex = require("regex")

local ok, err = regex.test("Hello World", "world", "i")
if ok == nil then
  print("pattern error:", err)
else
  print("found:", ok) -- true
end
```

---

## Error handling

When a provided pattern is invalid the underlying library throws a regex_error. The bindings return `nil, error_message` in that case (for functions that normally return non-boolean results). For boolean-returning calls (like `match` or `test`), the binding returns `nil, error_message` rather than a boolean when an error occurs — check the second return value when `nil` is returned.

---

## Common patterns

- Use `test` or `match` for quick boolean checks. Use `search` to extract captures from the first occurrence and `find_all` to iterate every match.
- Use `escape` to safely build patterns that include user-supplied content.
- For positional information check `pos` (1-based) and `len` returned on match/search results.
- Be careful: match tables include the overall match at numeric key `0` and captures at `1..N` (this is how the native binding populates the table).

That's the `regex` module — a small, predictable regex API for Lua plugins.
