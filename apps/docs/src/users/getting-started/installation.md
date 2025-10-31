---
order: 1
description: Quick guide to installing Millennium.
---

# Installation

## Windows

### Automatic

To install Millennium on windows, we use a PowerShell installer script. To run the script, open PowerShell, paste the following command, and press enter.

**Millennium is entirely portable, and the following script doesn't change any system configuration.**

```powershell
iwr -useb "https://steambrew.app/install.ps1" | iex
```

<!-- ![Installing Millennium Preview](https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/install.gif) -->

### Manual

Start by downloading the Millennium's Windows assets from [this repository](https://github.com/SteamClientHomebrew/Millennium/releases/latest) under the name `millennium-v0.0.0-windows-x86_64.zip`. Simply put all files into your Steam directory, which can be [here](../guides/finding-steam.md).

## Linux

::: warning
We don't support Steam installed via [Flatpak](https://flatpak.org/) or [Snap](https://snapcraft.io/).
We also don't support any ARM based distributions as they require custom Steam installations.
:::

::: tip
Looking to package Millennium for your favorite distribution? It should be a relatively simple process, the filesystem hierarchy is easily change-able [here](https://github.com/SteamClientHomebrew/Millennium/blob/main/src/sys/env.cc). From there you can build Millennium to use any filesystem standard!
:::

::: details Arch Linux (AUR)

We officially offer support for Millennium on the [Arch User Repository (AUR)](https://aur.archlinux.org/packages/millennium).

#### Post Installation

After installing Millennium through the AUR, simply launch steam.

:::

::: details NixOS

We officially offer nix package for millennium. Currently, it isn't available in nixpkgs, but you can use our flake.
- Step 1 is done in flake.nix file.
- Steps 2, 3.a, 3.b are done in configuration.nix file.

1. Add input to your flake:

```nix
inputs.millennium.url = "git+https://github.com/SteamClientHomebrew/Millennium";
```

2. Import millennium overlay:

```nix
nixpkgs.overlays = [ inputs.millennium.overlays.default ];
```

3.a If you're using a NixOS Steam module, set millennium as the Steam package:

```nix
programs.steam = {
  enable = true;
  package = pkgs.steam-millennium;
};
```

3.b If you're not using the Steam module, just replace steam with millennium in your list of packages:

```nix
environment.systemPackages = with pkgs; [
# Your other packages...
steam-millennium
];
```

::: tip 
If on rebuild you get hash related errors, you should run `nix flake update millennium` command in terminal to download newest git commits for millennium.
:::

::: details Other Distributions

### Automatic

**Shell (pre-built binary)**

This installer is entirely open source and we encourage the community audit the [source code](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.sh).

```bash
curl -fsSL "https://raw.githubusercontent.com/SteamClientHomebrew/Millennium/main/scripts/install.sh" | sudo sh
```

### Post Installation

Run `millennium patch`, this will patch your Steam start script to bootstrap Millennium.
You can then start Steam as normal!

:::
