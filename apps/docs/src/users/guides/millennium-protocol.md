---
order: 2
---

# Millennium URL Protocol

If for any reason you can't interact with the Steam interface, or prefer to navigate Millennium through commands, you can!

Millennium supports a custom URL scheme on top of Steam's builtin one.

## Executing commands

### Linux

You can run command's directly from your terminal through `steam`

```bash
steam steam://your_command
```

### Windows

You can run these commands in a plethora of ways.

-   URL address bar on your browser
-   Windows+R Run menu.
-   File address bar on file explorer.

or from PowerShell:

::: code-group

```powershell [PowerShell]
Start-Process "steam://your_command"
```

```cmd [Command Prompt]
start "steam://your_command"
```

:::

-   **steam://millennium/settings** -> Open Millennium.
-   **steam://millennium/settings/updates** -> Open the **Updates** tab.
-   **steam://millennium/settings/themes/disable** -> Use default theme.
-   **steam://millennium/settings/themes/enable/aerothemesteam** -> Enable aerothemesteam plugin.
-   **steam://millennium/settings/plugins/disable/steam-db** -> Disable the steam-dev plugin.
-   **steam://millennium/settings/plugins/disable** -> Disable all plugins.
-   **steam://millennium/settings/devtools/open** -> Open developer tools.
