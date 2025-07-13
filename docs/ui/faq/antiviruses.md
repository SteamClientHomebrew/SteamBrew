# Antivirus detections?

Due to the nature of Millennium, especially on Windows, some antivirus software may mistakenly identify it as a virus. This is particularly true for Windows Defender, which often flags Millennium (user32.dll) as malicious, despite it being harmless. This detection is attributable to one of Millennium's core assets, namely user32.dll. Millennium's core file is named user32.dll to trick Steam into loading it instead of the actual user32.dll shipped by windows, therefor forcing Steam to load Millennium, instead of the Windows USER32 [Learn more...](https://en.wikipedia.org/wiki/Microsoft_Windows_library_files) This method allows Millennium to run and safely modify Steam's appearance without altering any of its files or interfering with its process memory. As you might have imagined, Windows detects this as a threat because it notices a file named user32.dll that isn't owned by the operating system, which it sees as harmful (ex. A virus that tries to hide itself as a Windows file).

This detection most notably occurs with Windows Defender, and other AV's don't have an issue with it. Run it through virus total and you'll see for yourself.

It's important to approach everything you read online with caution, including this information. We encourage you to verify it yourself—compile, test, and audit Millennium's source code, and you'll find that it behaves exactly as described here.

Remember, the best antivirus is a smart end-user!
