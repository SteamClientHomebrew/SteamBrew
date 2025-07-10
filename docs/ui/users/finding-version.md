# Get Millennium Version

-   Windows

    ```powershell
    (gi "$(gp 'HKLM:\SOFTWARE\Wow6432Node\Valve\Steam' | % InstallPath)\millennium.dll").VersionInfo.FileVersion
    ```

-   Linux
    -   Use relevant package manager script.
