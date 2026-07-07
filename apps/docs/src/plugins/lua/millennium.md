---
order: 1
---

# millennium

## Exported Functions

- [ready](#ready)
- [version](#version)
- [steam_path](#steam-path)
- [call_frontend_method](#call-frontend-method)
- [cmp_version](#cmp-version)

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
