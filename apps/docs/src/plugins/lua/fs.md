---
order: 1
---

# fs

## Exported Functions

- [exists](#exists)
- [is_directory](#is-directory)
- [is_file](#is-file)
- [is_symlink](#is-symlink)
- [is_empty](#is-empty)
- [create_directory](#create-directory)
- [create_directories](#create-directories)
- [remove](#remove)
- [remove_all](#remove-all)
- [list](#list)
- [list_recursive](#list-recursive)
- [copy](#copy)
- [copy_recursive](#copy-recursive)
- [rename](#rename)
- [file_size](#file-size)
- [last_write_time](#last-write-time)
- [current_path](#current-path)
- [set_current_path](#set-current-path)
- [absolute](#absolute)
- [canonical](#canonical)
- [relative](#relative)
- [filename](#filename)
- [extension](#extension)
- [stem](#stem)
- [parent_path](#parent-path)
- [join](#join)
- [space_info](#space-info)

### Usage

```lua
local fs = require("fs")
print(fs.exists("config.json"))
```

## exists

### Abstract

Check whether a filesystem path exists.

### Parameters

| Parameter | Type   | Description        |
| --------- | :----: | ------------------ |
| path      | string | Path to check      |

### Returns

Boolean: `true` if the path exists, otherwise `false`.

### Usage

```lua
local fs = require("fs")
print(fs.exists("/etc/passwd"))
```

## is_directory

### Abstract

Return whether the path is an existing directory.

### Parameters

| Parameter | Type   | Description   |
| --------- | :----: | ------------- |
| path      | string | Path to check |

### Returns

Boolean: `true` if the path exists and is a directory, otherwise `false`.

### Usage

```lua
local fs = require("fs")
print(fs.is_directory("/tmp"))
```

## is_file

### Abstract

Return whether the path is an existing regular file.

### Parameters

| Parameter | Type   | Description   |
| --------- | :----: | ------------- |
| path      | string | Path to check |

### Returns

Boolean: `true` if the path exists and is a file, otherwise `false`.

### Usage

```lua
local fs = require("fs")
print(fs.is_file("README.md"))
```

## is_symlink

### Abstract

Return whether the path is a symbolic link.

### Parameters

| Parameter | Type   | Description   |
| --------- | :----: | ------------- |
| path      | string | Path to check |

### Returns

Boolean: `true` if the path is a symlink, otherwise `false`.

### Usage

```lua
local fs = require("fs")
print(fs.is_symlink("my-link"))
```

## is_empty

### Abstract

Return whether the path is empty. For files this means zero bytes; for directories this means contains no entries.

### Parameters

| Parameter | Type   | Description   |
| --------- | :----: | ------------- |
| path      | string | Path to check |

### Returns

Boolean: `true` if empty, otherwise `false`.

### Usage

```lua
local fs = require("fs")
print(fs.is_empty("empty.txt"))
```

## create_directory

### Abstract

Create a single directory. Does not create parent directories.

### Parameters

| Parameter | Type   | Description         |
| --------- | :----: | ------------------- |
| path      | string | Directory to create |

### Returns

`true` on success, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.create_directory("/tmp/mydir")
if not ok then
  print("failed:", err)
end
```

## create_directories

### Abstract

Create a directory and any missing parent directories.

### Parameters

| Parameter | Type   | Description         |
| --------- | :----: | ------------------- |
| path      | string | Directory to create |

### Returns

`true` on success, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.create_directories("tmp/project/sub")
if not ok then
  print("create_directories failed:", err)
end
```

## remove

### Abstract

Remove a file or an empty directory.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Path to remove |

### Returns

`true` if an element was removed, `false` if nothing was removed, or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.remove("old.txt")
if ok then
  print("removed")
elseif err then
  print("remove failed:", err)
else
  print("nothing removed")
end
```

## remove_all

### Abstract

Recursively remove a path and its contents.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Path to remove |

### Returns

Number of removed entries on success, or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
local count, err = fs.remove_all("tmp/project")
if not count then
  print("remove_all failed:", err)
else
  print("removed entries:", count)
end
```

## list

### Abstract

List entries in a directory (non-recursive). Returns an array of entry tables.

### Parameters

| Parameter | Type   | Description      |
| --------- | :----: | ---------------- |
| path      | string | Directory to list |

### Returns

On success, an array-like table of entries. Each entry contains:
- `name` (string)
- `path` (string)
- `is_directory` (boolean)
- `is_file` (boolean)
- `is_symlink` (boolean)
- `size` (number) — present for regular files when available

On failure: `nil, error_message`.

### Usage

```lua
local fs = require("fs")
local entries, err = fs.list(".")
if not entries then
  print("list failed:", err)
else
  for i, e in ipairs(entries) do
    print(i, e.name, e.is_directory and "(dir)" or tostring(e.size))
  end
end
```

## list_recursive

### Abstract

Recursively list directory entries. Each entry includes a `depth` field (0 = entries directly under the provided path).

### Parameters

| Parameter | Type   | Description      |
| --------- | :----: | ---------------- |
| path      | string | Directory to list |

### Returns

Array of entry tables (same fields as `list` plus `depth`), or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
local entries, err = fs.list_recursive(".")
if not entries then
  print("list_recursive failed:", err)
else
  for _, e in ipairs(entries) do
    print(string.rep("  ", e.depth) .. e.name)
  end
end
```

## copy

### Abstract

Copy a file or directory (non-recursive). Overwrites existing destination by default.

### Parameters

| Parameter   | Type    | Description |
| ----------- | :-----: | ----------- |
| from        | string  | Source path |
| to          | string  | Destination path |
| throw_error | boolean | If truthy, raises a Lua error on failure. Otherwise returns `nil, err`. |

### Returns

`true` on success; on failure either raises (if `throw_error`) or returns `nil, error_message`.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.copy("a.txt", "b.txt", false)
if not ok then
  print("copy failed:", err)
end
```

## copy_recursive

### Abstract

Recursive copy. Copies directories and their contents. Overwrites existing files.

### Parameters

| Parameter   | Type    | Description |
| ----------- | :-----: | ----------- |
| from        | string  | Source path |
| to          | string  | Destination path |
| throw_error | boolean | If truthy, raises a Lua error on failure. Otherwise returns `nil, err`. |

### Returns

`true` on success; on failure either raises (if `throw_error`) or returns `nil, error_message`.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.copy_recursive("src_dir", "dst_dir", false)
if not ok then
  print("copy_recursive failed:", err)
end
```

## rename

### Abstract

Rename or move a file/directory.

### Parameters

| Parameter   | Type    | Description |
| ----------- | :-----: | ----------- |
| from        | string  | Source path |
| to          | string  | Destination path |
| throw_error | boolean | If truthy, raises a Lua error on failure. Otherwise returns `nil, err`. |

### Returns

`true` on success; on failure either raises (if `throw_error`) or returns `nil, error_message`.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.rename("old.txt", "new.txt", false)
if not ok then
  print("rename failed:", err)
end
```

## file_size

### Abstract

Return the size of a regular file in bytes.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | File path   |

### Returns

Number (size in bytes) on success, or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
local size, err = fs.file_size("b.txt")
if size then
  print("b.txt size:", size)
else
  print("file_size failed:", err)
end
```

## last_write_time

### Abstract

Return the last modification time of a file/directory as a Unix timestamp.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Path        |

### Returns

Integer Unix timestamp on success, or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
local t, err = fs.last_write_time("b.txt")
if t then
  print("last write:", t)
else
  print("last_write_time failed:", err)
end
```

## current_path

### Abstract

Return the current working directory of the process.

### Returns

String path on success, or `nil, error_message` on error.

### Usage

```lua
local fs = require("fs")
print("cwd:", fs.current_path())
```

## set_current_path

### Abstract

Set the current working directory for the process.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Directory to set as CWD |

### Returns

`true` on success or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
local ok, err = fs.set_current_path("/tmp")
if not ok then
  print("set_current_path failed:", err)
end
```

## absolute

### Abstract

Return the absolute form of a path.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Absolute path string, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
print(fs.absolute("./docs"))
```

## canonical

### Abstract

Return the canonical (resolved symlinks) path.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Canonical path string, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
local p, err = fs.canonical("some/symlink")
if not p then print("canonical failed:", err) end
```

## relative

### Abstract

Return `path` relative to an optional `base` path (or current working directory if `base` omitted).

### Parameters

| Parameter | Type     | Description                 |
| --------- | :------: | --------------------------- |
| path      | string   | Path to relativize         |
| base      | string?  | Optional base path         |

### Returns

Relative path string on success, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
print(fs.relative("/tmp/project/file.txt", "/tmp"))
```

## filename

### Abstract

Return the filename component of a path.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Filename string.

### Usage

```lua
local fs = require("fs")
print(fs.filename("/tmp/archive.tar.gz")) -- archive.tar.gz
```

## extension

### Abstract

Return the file extension (including leading dot) or empty string if none.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Extension string (e.g. `.txt`) or `""`.

### Usage

```lua
local fs = require("fs")
print(fs.extension("archive.tar.gz")) -- .gz
```

## stem

### Abstract

Return the stem of a filename (filename without extension).

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Stem string.

### Usage

```lua
local fs = require("fs")
print(fs.stem("/tmp/archive.tar.gz")) -- archive.tar
```

## parent_path

### Abstract

Return the parent path of the provided path.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Input path  |

### Returns

Parent path string.

### Usage

```lua
local fs = require("fs")
print(fs.parent_path("/tmp/archive.tar.gz")) -- /tmp
```

## join

### Abstract

Join multiple path components using the native separator and return the resulting path string.

### Parameters

Varargs: multiple string path components.

### Returns

Joined path string.

### Usage

```lua
local fs = require("fs")
print(fs.join("tmp", "data", "file.txt"))
```

## space_info

### Abstract

Return filesystem space information for the volume containing `path`.

### Parameters

| Parameter | Type   | Description |
| --------- | :----: | ----------- |
| path      | string | Path on target volume |

### Returns

On success a table `{ capacity = number, free = number, available = number }`, or `nil, error_message` on failure.

### Usage

```lua
local fs = require("fs")
local info, err = fs.space_info(".")
if info then
  print("capacity:", info.capacity)
else
  print("space_info failed:", err)
end
```

---

## Common patterns

- Prefer returning `nil, err` for failures and reserve `throw_error` for cases where you want a Lua error to be raised and caught via `pcall`.
- Always check for `nil, err` on operations that can fail:
```lua
local fs = require("fs")
local ok, err = fs.create_directory("/protected/dir")
if not ok then
  print("failed:", err)
end
```
- Use `fs.list` / `fs.list_recursive` and read the entry fields instead of calling multiple single-purpose queries per entry to reduce overhead.

That's the `fs` module — a small, safe set of filesystem primitives for Millennium Lua plugins.
