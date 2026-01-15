---
order: 1
---

# Quick Start

## Prerequisites

::: tip
Using VSCode is not required, but the plugin documentation is written specifically for it. If you're using a different editor, the docs likely won't be as helpful.
:::

-   Git - https://git-scm.com/downloads
-   VSCode - https://code.visualstudio.com/download

## Hello World

If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic plugin template.

https://github.com/SteamClientHomebrew/PluginTemplate

::: tip
Many developers choose to place their work in a folder outside of the plugin directory.
To do this, simply create a soft or hard symbolic link from your development folder, to the skins folder.
:::

::: code-group

```powershell [Windows]
# Note: this is a PowerShell script
# cd into Steam skins folder
cd "$(gp 'HKLM:\SOFTWARE\Wow6432Node\Valve\Steam' | % InstallPath)\plugins"
# clone the repository
git clone "https://github.com/SteamClientHomebrew/PluginTemplate"
cd PluginTemplate

# Optional: Open VSCode
code .
```

```bash [Linux]
# cd into Steam skins folder
cd ~/.local/share/millennium/plugins
# clone the repository
git clone "https://github.com/SteamClientHomebrew/PluginTemplate"
cd PluginTemplate

# Optional: Open VSCode
code .
```

:::
