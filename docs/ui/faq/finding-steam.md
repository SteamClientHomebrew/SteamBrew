# How can I find my Steam path

## Windows

Running the following PowerShell command will retrieve your current

```powershell
(gp "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam").InstallPath
```

## Linux

All distributions of linux ship steam symlink to, or at `~/.steam/steam`
