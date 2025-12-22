---
order: 1
---

# millennium

## Exported Functions

-   [ready](#ready)
-   [add_browser_css](#add-browser-css)
-   [add_browser_js](#add-browser-js)
-   [remove_browser_module](#remove-browser-module)
-   [get_user_settings](#get-user-settings)
-   [set_user_settings_key](#set-user-settings-key)
-   [version](#version)
-   [steam_path](#steam-path)
-   [get_install_path](#get-install-path)
-   [get_plugin_logs](#get-plugin-logs)
-   [call_frontend_method](#call-frontend-method)
-   [change_plugin_status](#change-plugin-status)
-   [is_plugin_enabled](#is-plugin-enabled)
-   [\_\_internal_get_build_date](#internal-get-build-date)
-   [cmp_version](#cmp-version)

### Usage

```lua
local millennium = require("millennium")
-- Ex. use Millennium module to get Steam path
millennium.steam_path()
```

## ready

### Abstract

Used to let Millennium know when your plugin's Lua backend is ready.
Millennium will wait for 10 seconds for `millennium.ready()` to be called, otherwise it will assume your plugin has crashed.
For the sake of user experience, it should never take longer than 1 second to call `millennium.ready()`. Expensive tasks should be offloaded to run after Steam has loaded.

### Returns

True if the ready message was sent successfully (boolean).

### Usage

```lua
local millennium = require("millennium")

local function on_load()
    -- let millennium know your plugin has loaded.
    millennium.ready()
end

return {
    -- ... other functions ...
    on_load = on_load
}
```

## add_browser_css

### Abstract

Add a CSS module to the steam browser. This includes the main browser in the Steam window, and all browsers in the in game overlay.

### Parameters

| Parameter     |  Type  | Description                                     |
| ------------- | :----: | ----------------------------------------------- |
| moduleItem    | string | Path to CSS file relative to steamui directory  |
| regexSelector | string | Regex pattern for URL matching (default: ".\*") |

CSS module paths are resolved from %steam%/steamui and all CSS modules must reside there.

### Returns

The module ID (integer) for later removal, or 0 on failure.

### Usage

```lua
-- absolute path C:/Program Files (x86)/Steam/steamui/module.css
local module_id = millennium.add_browser_css("module.css")

-- with regex selector
local module_id = millennium.add_browser_css("module.css", "^https://steamcommunity.com/.*")
```

## add_browser_js

### Abstract

Add a JavaScript module to the steam browser. This includes the main browser in the Steam window, and all browsers in the in game overlay.

### Parameters

| Parameter     |  Type  | Description                                     |
| ------------- | :----: | ----------------------------------------------- |
| moduleItem    | string | Path to JS file relative to steamui directory   |
| regexSelector | string | Regex pattern for URL matching (default: ".\*") |

The Javascript modules are resolved from %steam%/steamui and all Javascript modules must reside there.

### Returns

The module ID (integer) for later removal, or 0 on failure.

### Usage

```lua
-- absolute path C:/Program Files (x86)/Steam/steamui/module.js
local module_id = millennium.add_browser_js("module.js")

-- with regex selector
local module_id = millennium.add_browser_js("module.js", "^https://store.steampowered.com/.*")
```

## remove_browser_module

### Abstract

Remove a module from the Steam browser.

### Parameters

| Parameter |  Type   | Description                                                                                          |
| --------- | :-----: | ---------------------------------------------------------------------------------------------------- |
| moduleId  | integer | The module ID returned from [add_browser_css](#add_browser_css) or [add_browser_js](#add_browser_js) |

### Returns

True if module was successfully removed (boolean).

### Usage

```lua
local module_id = millennium.add_browser_js("module.js")
millennium.remove_browser_module(module_id)
```

## get_user_settings

### Abstract

Get user settings.

::: warning
This function is not implemented yet and will likely be removed in future versions.
:::

### Usage

```lua
local settings = millennium.get_user_settings()
```

## set_user_settings_key

### Abstract

Set user settings key.

::: warning
This function is not implemented yet and will likely be removed in future versions.
:::

### Usage

```lua
millennium.set_user_settings_key()
```

## version

### Abstract

Returns the current version of Millennium.

The version string will always be in the Semantic Versioning format like `v2.30.0`. Read more about it [here](https://semver.org/).

### Returns

Millennium version string (e.g., "1.0.0").

::: warning
Note that if the user is using a pre-release version of Millennium, the version format will be in
`(v)major.minor.patch-prerelease.xx`. For example, `v2.30.0-alpha.2`
:::

### Usage

```lua
local version = millennium.version()
```

## steam_path

### Abstract

Returns the Steam path.

### Returns

Full path to Steam installation directory (string).

::: warning
This is not guaranteed to be the path Millennium is installed to.
:::

### Usage

```lua
local path = millennium.steam_path()
```

## get_install_path

### Abstract

Returns the install path of Millennium.

### Returns

Full path to Millennium installation directory (string).

::: warning
This is not guaranteed to be the same path Steam is installed to.
:::

### Usage

```lua
local path = millennium.get_install_path()
```

## get_plugin_logs

### Abstract

Get all current stored logs from all loaded and previously loaded plugins during this instance.

### Returns

JSON string containing array of PluginLogs objects. Each PluginLogs object contains:

-   `name` (string): Display name of the plugin
-   `logs` (array): Array of log entries, each containing:
    -   `message` (string): Base64 encoded log message
    -   `level` (integer): Log level (0=debug, 1=info, 2=warn, 3=error)

### Usage

```lua
local logs_json = millennium.get_plugin_logs()
```

## call_frontend_method

### Abstract

Call a frontend method (Javascript Method) with list of params. The order of the parameters are important.

### Parameters

| Parameter  |  Type  | Description                                                                                                  |
| ---------- | :----: | ------------------------------------------------------------------------------------------------------------ |
| methodName | string | The name of the function on the frontend that will be called.                                                |
| params     | table  | An ordered table of arguments to pass to the function. Only string, number, and boolean types are supported. |

::: warning
If the target function is a non-static class member, it must be called via an instance variable.
:::

### Returns

The result from the frontend method call.

### Usage

```lua
-- backend
local value = millennium.call_frontend_method("classname.method", { 18, "USA" })
```

```js
// frontend
class classname {
	static method(age, country) {
		console.log(`age: ${age}, country: ${country}`);
		return 'method called';
	}
}
Millennium.exposeObj({ classname });
```

::: info
Millennium will not type check your payload sent from the backend to the frontend. This means nothing is stopping classname.method from accepting ex: country as a boolean, and age as a string. Always check the received data type in the frontend.
:::

## change_plugin_status

### Abstract

Toggle the status of a plugin.

::: warning
Use with caution, this is an internal function and may change without notice.
:::

### Parameters

| Parameter  |  Type  | Description                  |
| ---------- | :----: | ---------------------------- |
| pluginName | string | Name of the plugin to toggle |

### Returns

The result of the toggle operation.

### Usage

```lua
millennium.change_plugin_status('my-plugin')
```

## is_plugin_enabled

### Abstract

Check if a plugin is enabled from its internal name.

::: warning
Use with caution, this is an internal function and may change without notice.
:::

### Parameters

| Parameter  |  Type  | Description                 |
| ---------- | :----: | --------------------------- |
| pluginName | string | Name of the plugin to check |

### Returns

True if the plugin is enabled (boolean).

### Usage

```lua
-- this is a redundant check, but for the sake of this explanation:
-- check if millennium itself is enabled.
local is_enabled = millennium.is_plugin_enabled('core')
```

## \_\_internal_get_build_date

### Abstract

Get the build date of Millennium.

::: warning
Use with caution, this is an internal function and may change without notice.
:::

### Returns

Build timestamp string.

### Usage

```lua
local build_date = millennium.__internal_get_build_date()
```

## cmp_version

### Abstract

Compare two semantic versions against one another. Very useful when you need to conditionally add features depending on the version of Millennium.

### Parameters

| Parameter |  Type  | Description                   |
| --------- | :----: | ----------------------------- |
| version1  | string | The first version to compare  |
| version2  | string | The second version to compare |

### Returns

-1 if v1 < v2, 0 if v1 == v2, 1 if v1 > v2, -2 if there was an error parsing or comparing versions (integer).

### Usage

```lua
-- Check if a feature introduced in Millennium 2.30.0 is available
if millennium.cmp_version(millennium.version(), "2.30.0") >= 0 then
    -- Feature is available
    print("Feature available")
else
    -- Feature is not available
    print("Feature not available")
end
```
