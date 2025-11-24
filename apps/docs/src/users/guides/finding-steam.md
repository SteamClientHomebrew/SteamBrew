(gp "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam").InstallPath---
order: 3
---

# Find Steam path

A quick guide to help find your Steam path on your operating system. Your steam path more relevant on Windows as Millennium installs directly into your Steam path.

::: code-group

```powershell [Windows]
(gp "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam").InstallPath
```

```[Linux]
~/.steam/steam
```

:::
