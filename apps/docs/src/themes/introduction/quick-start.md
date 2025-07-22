---
order: 1
---

# Quick Start

## Prerequisites

::: tip
Using VSCode is not required, but the theme documentation is written specifically for it. If you're using a different editor, the docs likely won't be as helpful.
:::

-   Git - https://git-scm.com/downloads
-   VSCode - https://code.visualstudio.com/download

## Hello World

If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic theme template.

https://github.com/SteamClientHomebrew/ThemeTemplate

::: tip
Many developers choose to place their work in a folder outside of the theme directory.
To do this, simply create a soft or hard symbolic link from your development folder, to the skins folder.
:::

::: code-group

```powershell [Windows]
# Note: this is a PowerShell script
# cd into Steam skins folder
cd "$(gp 'HKLM:\SOFTWARE\Wow6432Node\Valve\Steam' | % InstallPath)\steamui\skins"
# clone the repository
git clone "https://github.com/SteamClientHomebrew/ThemeTemplate"
cd ThemeTemplate

# Optional: Open VSCode
code .
```

```bash [Linux]
# cd into Steam skins folder
cd ~/.steam/steam/steamui/skins
# clone the repository
git clone "https://github.com/SteamClientHomebrew/ThemeTemplate"
cd ThemeTemplate

# Optional: Open VSCode
code .
```

:::
