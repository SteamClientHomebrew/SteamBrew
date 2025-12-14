# Uninstalling

## Windows

To uninstall Millennium on Windows, run the same installer you originally used. If you've deleted it, you can redownload it below.

The uninstaller removes Millennium components modularly and cleans up all files it has placed on your system.

[📥 MillenniumInstaller-Windows.exe](https://github.com/SteamClientHomebrew/Installer/releases/latest/download/MillenniumInstaller-Windows.exe)

::: tip
If you receive any errors while trying to uninstall Millennium, [reinstall it](../getting-started/installation.md). This will clean your installation of Millennium.
You can then proceed with the removal process.
:::

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

::: details NixOS

Step 1 is done in flake.nix file.
Steps 2, 3.a, 3.b are done in configuration.nix file.

1. Remove input from your flake:

```nix
inputs.millennium.url = "git+https://github.com/SteamClientHomebrew/Millennium";
```

2. Remove millennium overlay:

```nix
nixpkgs.overlays = [ inputs.millennium.overlays.default ];
```

3.a If you're using a NixOS Steam module, remove millennium as the Steam package:

```nix
programs.steam = {
  enable = true;
  package = pkgs.steam-millennium; # [!code --]
};
```

3.b If you're not using the Steam module, just remove millennium from your list of packages:

```nix
environment.systemPackages = with pkgs; [
# Your other packages...
steam-millennium # [!code --]
];
```

4. You may need to manually delete Themes, Config and Plugins. (replacing {steam}, {$HOME} with actual locations)

-   `{steam}/steamui/skins` - User Themes
-   `{$HOME}/.config/millennium` - Config
-   `{$HOME}/.local/share/millennium` - Plugins

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
