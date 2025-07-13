# How can I find Millennium's version?

-   Windows

    ```powershell
    (gi "$(gp 'HKLM:\SOFTWARE\Wow6432Node\Valve\Steam' | % InstallPath)\millennium.dll").VersionInfo.FileVersion
    ```

    If the following command returns in an error on empty version, you are using a version prior to v2.25.1

-   Linux
    -   Use relevant package manager script.
