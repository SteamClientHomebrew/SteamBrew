# Uninstalling

## Windows

### Automatic

To uninstall Millennium on windows, we use a PowerShell installer script. To run the script, open PowerShell, paste the following command, and press enter.
The uninstaller lets you uninstall Millennium components in modules, and everything it will/ever has put on the disk will be caught by the uninstaller.

```powershell
iwr -useb "https://steambrew.app/uninstall.ps1" | iex
```

::: tip
If you receive any errors while trying to uninstall Millennium, [reinstall it](../getting-started/installation.md). This will clean your installation of Millennium.
You can then proceed with the removal process.
:::

### Manual

Close Steam and navigate to your Steam directory and then look through the [assets repository](https://github.com/ShadowMonster99/millennium-steam-binaries), or find manually find the filenames associated with Millennium.

The installed binaries on your system may be listed below depending on the version of Millennium.
As of **Millennium v2.25.1** the binaries are:

-   `user32.dll`
-   `python311.dll`
-   `millennium.dll`

If you want a deeper clean of Millennium, you can also remove all of its assets. As of **Millennium v2.25.1**, the assets are found in the paths below (replacing \{steam\} with steams actual location)

-   `{steam}/steamui/skins` - User Themes
-   `{steam}/plugins` - User Plugins
-   `{steam}/ext` - Millennium Internal Data

If you don't know where steam is installed, check how you can [find your steam path](../guides/finding-steam.md)

## Linux

:::danger
This will remove all Millennium files, including your themes and plugins.
:::

::: details Arch Linux

Remove the `millennium` package with your AUR helper:

```sh
paru -Rns millennium
```

You'll need to delete your configuration and plugins manually:

```sh
rm -rf "${XDG_CONFIG_HOME:-$HOME/.config}/millennium" "${XDG_DATA_HOME:-$HOME/.local/share}/millennium"
```

And that's it!

:::

::: details Other Distributions

```sh
sudo rm -rf /usr/lib/millennium /usr/share/millennium "${XDG_CONFIG_HOME:-$HOME/.config}/millennium" "${XDG_DATA_HOME:-$HOME/.local/share}/millennium"
```

Then, replace the patched Steam binary with the original binary:

```sh
sudo mv /usr/bin/steam.millennium.bak /usr/bin/steam
```

:::
