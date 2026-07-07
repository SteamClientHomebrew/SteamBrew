# Hooking

Millennium offers built in utilities to hook into Steams code. Millennium hooks into Steams server router
which lets us edit Steams JavaScript as its being served to Steam - no runtime patching, race conditions, etc.

The following example patches the Steam Clients icon, replacing it with the SteamClientHomebrews icon.

### Backend

```lua [Backend]
return {
  -- existing exports: on_unload, on_load, etc.
  patches = {
    {
      find = [["#Menu_Account"\):\(0,\w+\.jsxs\)\("div",\{className:\w+\(\)\.SteamButton,children:\[\(0,\w+\.jsx\)\(\w+\.SteamLogo]],
      file = [[chunk~[0-9a-f]+\.js]],
      transforms = {
        {
          match = [[\(0,(\w+\.jsx)\)\(\w+\.SteamLogo]],
          replace = [[(0,\1)(#{{self}}?.hookedSettingsIcon?.SteamButton||(()=>null)]],
        }
      }
    }
  }
}
```

### Frontend

```tsx [Frontend]
/** @ffi */
export const hookedSettingsIcon = {
	// <Icon /> is defined elsewhere
	SteamButton: () => <Icon />,
};
```

### Result

![](https://s6.imgcdn.dev/YqAlAC.png)

You can see the Steam icon has been replaced with a custom `<Icon />`, which is our SteamClientHomebrew logo.

From Chromiums inspector, it believes this is what Steam served over the network. It's not aware of any patching.

![](https://s6.imgcdn.dev/YqAHSD.png)

## Usage Documentation

### `find`

`find` segments dictate the content your hook is able to edit. It essentially casts a net over a portion of the file content and tells Millennium you'll be editing it.
This helps with optimization, and preventing Millennium from selecting content you didn't me to select.
It uses RE2 regex syntax matched against file content.

### `file`

Specify a match pattern for files.

In our case, we are telling Millennium to only target files starting with "chunk" as this is the file we are concerned with.
This helps Millennium optimize your selector, and prevent accidentally patching files you didn't mean to.

### `transforms`

Transform the JavaScript captured by the `find` segment. `transforms` can **ONLY MODIFY CAPTURED DATA**.

### `match`

Match against the content from the `find` segment.

### `replace`

Replace the found `match` from the `find` segment with the content of `replace`.

"#{{self}}" is a macro that expands to your plugins frontend instance.

```typescript
#{{self}}?.hookedSettingsIcon?.SteamButton()
```

Expands to the plugin frontend, and resolves to the `hookedSettingsIcon` defined in the frontend example above.
