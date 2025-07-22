# File System Structure

Here's where to find everything! Use this handy reference when you need to locate specific files and folders.

::: tip
The abbreviation `%STEAM%` is just a placeholder for your actual Steam path. If you're unsure where Steam is installed, checkou [how to find your steam path](../guides/finding-steam.md)
:::

## Windows

| Component                  | Absolute Path                                  |
| -------------------------- | ---------------------------------------------- |
| Millennium                 | `%STEAM%/user32.dll`, `%STEAM%/millennium.dll` |
| Millennium Assets          | `%STEAM%/ext/data/assets`                      |
| Millennium API             | `%STEAM%/ext/data/shims`                       |
| Plugins                    | `%STEAM%/plugin`                               |
| Themes                     | `%STEAM%/steamui/skins`                        |
| Logs                       | `%STEAM%/ext/logs`                             |
| User Config                | `%STEAM%/ext`                                  |
| Plugin Runtime Environment | `%STEAM%/ext/data/cache`                       |

## Linux

| Component                  | Absolute Path                       |
| -------------------------- | ----------------------------------- |
| Millennium                 | `/usr/lib/millennium`               |
| Millennium Assets          | `/usr/share/millennium/assets`      |
| Millennium API             | `/usr/share/millennium/shims`       |
| Plugins                    | `~/.local/share/millennium/plugins` |
| Themes                     | `~/.steam/steam/steamui/skins`      |
| Logs                       | `~/.local/share/millennium/logs`    |
| User Config                | `~/.config/millennium`              |
| Plugin Runtime Environment | `~/.local/share/millennium/.venv`   |
