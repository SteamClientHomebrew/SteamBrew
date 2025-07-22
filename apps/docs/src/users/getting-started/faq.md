---
order: 4
description: Questions asked frequently.
---

# FAQ

::: details Antivirus detections?

Due to the nature of Millennium, especially on Windows, some antivirus software may mistakenly identify it as a virus. This is particularly true for Windows Defender, which often flags Millennium (user32.dll) as malicious, despite it being harmless. This detection is attributable to one of Millennium's core assets, namely user32.dll. Millennium's core file is named user32.dll to trick Steam into loading it instead of the actual user32.dll shipped by windows, therefor forcing Steam to load Millennium, instead of the Windows USER32 [Learn more...](https://en.wikipedia.org/wiki/Microsoft_Windows_library_files) This method allows Millennium to run and safely modify Steam's appearance without altering any of its files or interfering with its process memory. As you might have imagined, Windows detects this as a threat because it notices a file named user32.dll that isn't owned by the operating system, which it sees as harmful (ex. A virus that tries to hide itself as a Windows file).

This detection most notably occurs with Windows Defender, and other AV's don't have an issue with it. Run it through virus total and you'll see for yourself.

It's important to approach everything you read online with caution, including this information. We encourage you to verify it yourself—compile, test, and audit Millennium's source code, and you'll find that it behaves exactly as described here.

Remember, the best antivirus is a smart end-user!

:::

::: details Can I Get Banned?

No, in short, you will not get banned for using Millennium as it doesn't violate any of Steam's policies. With that said, Millennium, and any of its developers are not responsible for any of your actions, or the potential repercussions nonetheless. Learn more about MIT Licensing [here](https://github.com/SteamClientHomebrew/Millennium/blob/main/LICENSE)

:::

::: details Is Millennium against the Steam® Subscriber Agreement?

No, Millennium and all official plugins and themes do not violate Steam's Subscriber Agreement. While Steam strictly prohibits modifying, disassembling, and decompiling services and content distributed through Steam (such as games and applications), these restrictions do not apply to the Steam client software itself.

[Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/)

:::

::: details Is Millennium against the Steam® Privacy Policy?

No, Millennium does not store or log any form of user data and ensures that approved plugins do not store user data without consent.

:::

::: details Where does Millennium save data?

#### Windows

In your Steam folder:

-   `user32.dll`
-   `python311.dll`
-   `millennium.dll`
-   `ext/` - Millennium Internal Data
-   `plugins/` - User Plugins
-   `steamui/skins/` - User Themes

#### Linux

-   `/usr/bin/steam` - Patched Steam Binary
-   `/usr/lib/millennium/` - Millennium Core Files
-   `/usr/share/millennium/` - Millennium Shims
-   `~/.local/share/millennium/` - Millennium Skins and Plugins
-   `~/.config/millennium/` - Millennium Configuration

:::

::: details How do I uninstall Millennium?

Refer to the [uninstaller guide](/users/uninstalling). There you will find documentation on how to uninstall Millennium's components.
:::
