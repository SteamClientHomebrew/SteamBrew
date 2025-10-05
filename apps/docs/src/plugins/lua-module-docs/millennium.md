---
order: 1
---

# millennium

## Exported Functions

-   [ready](#ready)
-   [add_browser_css](#add-browser-css)
-   [add_browser_js](#add-browser-js)
-   [remove_browser_module](#remove-browser-module)
-   [version](#version)
-   [steam_path](#steam-path)
-   [get_install_path](#get-install-path)
-   [call_frontend_method](#call-frontend-method)
-   [is_plugin_enabled](#is-plugin-enabled)

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

| Parameter         |  Type  | Description                           |
| ----------------- | :----: | ------------------------------------- |
| css_relative_path | string | The desired css modules relative path |

CSS module path's are resolved from %steam%/steamui and all CSS modules must reside there.

### Returns

The id (int) of the module that was added into Steam.

### Usage

```lua
-- absolute path C:/Program Files (x86)/Steam/steamui/module.css
millennium.add_browser_css("module.css")
```

## add_browser_js

### Abstract

Add a JavaScript module to the steam browser. This includes the main browser in the Steam window, and all browsers in the in game overlay.

### Parameters

| Parameter        |  Type  | Description                                  |
| ---------------- | :----: | -------------------------------------------- |
| js_relative_path | string | The desired javascript modules relative path |

The Javascript modules are resolved from %steam%/steamui and all Javascript modules must reside there.

### Returns

The id (int) of the module that was added into Steam.

### Usage

```lua
-- absolute path C:/Program Files (x86)/Steam/steamui/module.js
millennium.add_browser_js("module.js")
```

## remove_browser_module

### Abstract

Remove a module from the Steam browser.

### Parameters

| Parameter | Type | Description                                                                                                               |
| --------- | :--: | ------------------------------------------------------------------------------------------------------------------------- |
| id        | int  | The id if the inserted module. Returned from [add_browser_css()](#add_browser_css) or [add_browser_js()](#add_browser_js) |

### Usage

```lua
local module_id = millennium.add_browser_js("module.js")
millennium.remove_browser_module(module_id)
```

## version

### Abstract

Returns the current version of millennium

The version string will always be in the Semantic Versioning format like `v2.30.0`. Read more about it [here](https://semver.org/).

::: warning
Note that if the user is using a pre-release version of Millennium, the version format will be in
`(v)major.minor.patch-prerelease.xx`. For example, `v2.30.0-alpha.2`
:::

### Usage

```lua
millennium.version()
```

## steam_path

### Abstract

Returns the Steam path.

::: warning
This is not guaranteed to be the path Millennium is installed to
:::

### Usage

```lua
millennium.steam_path()
```

## get_install_path

### Abstract

Returns the install path of Millennium.

::: warning
This is not guaranteed to be the same path Steam is installed to.
:::

### Usage

```lua
millennium.get_install_path()
```

## call_frontend_method

### Abstract

Call a frontend method (Javascript Method) with list of params. The order of the parameters are important

### Parameters

| Parameter     |                           Type                           | Description                                                   |
| ------------- | :------------------------------------------------------: | ------------------------------------------------------------- |
| function name |                          string                          | The name of the function on the frontend that will be called. |
| varargs       | table[JSON serializable object, string, int, bool, void] | An ordered table of arguments to pass to the function.        |

::: warning
If the target function is a non-static class member, it must be called via an instance variable.
:::

### Usage

```lua
-- backend
local value = millennium.call_frontend_method("classname.method", { 18, "USA" })
```

```js
// frontend
class classname {
	static method(country: string, age: number) {
		console.log(`age: ${age}, country: ${country}`);
		return 'method called';
	}
}
Millennium.exposeObj({ classname });
```

::: info

Millennium will not type check your payload sent from the backend to the frontend. This means nothing is stopping classname.method from accepting ex: country as a boolean, and age as a string. Always check the received data type in the frontend.
:::

## is_plugin_enabled

### Abstract

Check if a plugin is enabled from its internal name.

### Usage

```lua
-- this an redundant check, but for the sake of this explanation:
-- check if millennium itself is enabled.
millennium.is_plugin_enabled('core')
```
