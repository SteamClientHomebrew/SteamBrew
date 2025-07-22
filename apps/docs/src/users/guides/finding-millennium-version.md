---
order: 4
---

# Find Millennium version

::: warning
If the following command returns in an error on empty version, you are using a version prior to v2.25.1
:::

::: code-group

```powershell [Windows]
(gi "$(gp 'HKLM:\SOFTWARE\Wow6432Node\Valve\Steam' | % InstallPath)\millennium.dll").VersionInfo.FileVersion
```

```bash [Linux]
# Arch Linux
pacman -Q millennium
# NixOS
nix eval --raw '.#nixpkgs.legacyPackages.x86_64-linux.millennium.version'
# Other Distributions
# There is no current documentation on how find Millennium's version from the terminal.
# You'll need run 'steam' directly from the terminal and
# monitor the logs, or check Millennium's version within Millennium Settings.
```

:::
