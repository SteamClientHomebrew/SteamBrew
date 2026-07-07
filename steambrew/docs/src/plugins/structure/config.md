---
order: 2
---

# Configuring A Plugin

This reference page covers the config types available in `millennium.toml`.

If you're using the plugin template, you don't need to add anything; it will work as is. If you're building from scratch or want to customize further, you can skim through this page for the essentials.

## `[plugin]`

| Key           | Type   | Description                                                |
| ------------- | ------ | ---------------------------------------------------------- |
| `id`          | string | Unique plugin identifier (e.g. `com.example.boilerplate`). |
| `name`        | string | Human-readable plugin name.                                |
| `version`     | string | Plugin version.                                            |
| `author`      | string | Plugin author.                                             |
| `description` | string | Short plugin description.                                  |

## `[assets]`

| Key         | Type            | Description                                             |
| ----------- | --------------- | ------------------------------------------------------- |
| `resources` | string[] (glob) | Resource files bundled into the plugin at compile time. |

## `[backend]`

Simply don't define `[backend]` if you do not need one.

| Key       | Type                   | Description                                         |
| --------- | ---------------------- | --------------------------------------------------- |
| `entry`   | string                 | Entry point for the backend (Lua).                  |
| `sources` | string[] (glob syntax) | All Lua source files included in the backend build. |

## `[frontend]`

| Key     | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| `entry` | string | Entry point for the frontend (TSX). |

### `[frontend.globals]`

Maps import specifiers to global references, rewritten at compile time.

```toml
"react" = "window.SOME_FAKE_REACT"
```

`import { useEffect } from "react"` compiles to `window.SOME_FAKE_REACT.useEffect` at runtime.

## `[webkit]`

| Key       | Type   | Description                                                         |
| --------- | ------ | ------------------------------------------------------------------- |
| `entry`   | string | Entry point for the webview preload script (TS).                    |
| `globals` | table  | Same rewrite behavior as `frontend.globals`, scoped to the webview. |

## `[compiler]`

| Key           | Type   | Description                                                                                                                    |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `output_path` | string | `"auto"` detects the Millennium install and installs the plugin there; any other value is used as a literal build output path. |

## `[dev]`

| Key                   | Type   | Default           | Description                                                                                                                   |
| --------------------- | ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `plugin_name`         | string | `[plugin].id`     | Dev-mode plugin name override.                                                                                                |
| `socket`              | string | platform MEP path | MEP socket path. Recommended to leave as-is.                                                                                  |
| `auto_restart`        | bool   | `true`            | Restart the plugin backend on any source change.                                                                              |
| `reload_steamui_when` | string | `"never"`         | When to reload Steam's UI: `"never"`, `"backend"` (.lua changes), `"frontend"` (.ts/.tsx/.js/.jsx/.css changes), or `"both"`. |

## `[inspect]`

| Key           | Type | Description                               |
| ------------- | ---- | ----------------------------------------- |
| `depth`       | int  | Max object inspection depth in logs.      |
| `colors`      | bool | Colorize inspected output.                |
| `show_hidden` | bool | Include hidden/non-enumerable properties. |

## `[logger]`

| Key               | Type      | Description                                                                                       |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `padding`         | int       | Prefix padding: negative = right-align (pad left), positive = left-align (pad right), `0` = none. |
| `backend_prefix`  | string    | Log prefix for backend output. Supports `{file}` → `filename:Lline`.                              |
| `frontend_prefix` | string    | Log prefix for frontend output.                                                                   |
| `webview_prefix`  | string    | Log prefix for webview output.                                                                    |
| `webview_col`     | `[r,g,b]` | RGB color overrides per log source.                                                               |
| `backend_col`     | `[r,g,b]` | RGB color overrides per log source.                                                               |
| `frontend_col`    | `[r,g,b]` | RGB color overrides per log source.                                                               |

## `[patches]`

| Key     | Type | Description                      |
| ------- | ---- | -------------------------------- |
| `debug` | bool | Enable/disable patch debug mode. |
