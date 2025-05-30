# add_proxy_pattern()

Adds a new regular expression pattern to the file proxy whitelist, allowing your plugin to access files in additional directories.

|Parameter|Type|Description|
|-----|:------:|-----------|
|regex_path|str|A regular expression (as a string) describing the filesystem path(s) to whitelist.|

## Purpose

Millennium restricts file access for security reasons. Only paths that match certain whitelisted patterns (regexes) are accessible via the internal proxy.
`add_proxy_pattern` enables plugins or scripts to dynamically extend this whitelist at runtime by adding custom regex patterns.

## Description

The `add_proxy_pattern` function extends Millennium's file proxy system by adding custom directory paths to the whitelist. By default, Millennium only allows access to files in specific directories like `plugins/`, `steamui/`, and the Millennium directories, see [Internal File Proxy System - Whitelisting](../file-proxy.md#path-whitelisting) for more information. This function lets your plugin access files in additional locations.

The pattern is added to the global whitelist, which means it applies to all file proxy requests, not just those from your plugin.

## Regular Expression Format

The function accepts standard regular expressions. Here are some examples:

- `^C:\/MyCustomFolder\/` - Whitelist a specific Windows folder
- `^\/home\/user\/custom-folder\/` - Whitelist a specific Linux folder
- `\.json$` - Whitelist all JSON files (not recommended for security reasons)
- `^plugins\/my-plugin\/data\/` - Whitelist a specific subfolder in the plugins directory

## Security Considerations

:::warning
Adding overly permissive patterns (like `.*`) can create security vulnerabilities by allowing access to sensitive files. Always use the most specific pattern possible.
:::

## Examples

### Basic Usage

```python
import Millennium

# Allow access to a custom data directory for your plugin at "{steamfolder}/steamui/my-plugin/data"
Millennium.add_proxy_pattern(r'^steamui\/my-plugin\/data\/')

# Now you can access files in this directory via the file proxy:
# https://js.millennium.app/steamui/my-plugin/data/config.json
```

### Temporary Access

```python
import Millennium

# Add temporary access to a directory
Millennium.add_proxy_pattern(r'^temp\/exports\/')

# Do some operations with files in that directory
# ...

# Remove the pattern when done
Millennium.remove_proxy_pattern(r'^temp\/exports\/')
```

## Common Patterns

### Game-specific Resources

```python
import Millennium
import os

# Allow access to resources for a specific game
game_id = "440"  # Team Fortress 2
game_path = os.path.join("steamapps", "common", "Team Fortress 2")
Millennium.add_proxy_pattern(f"^{game_path.replace('\\', '\\\\')}")
```

### User Documents

```python
import Millennium
import os

# Get user documents path
docs_path = os.path.expanduser("~\\Documents\\MyPluginData")
# Escape backslashes for regex
docs_path_escaped = docs_path.replace("\\", "\\\\")
# Add to whitelist
Millennium.add_proxy_pattern(f"^{docs_path_escaped}")
```

## Related Functions

- [Millennium.remove_proxy_pattern()](./remove-proxy-pattern.md) - Removes a previously added regex pattern from the whitelist.

## Notes

- Patterns are evaluated as regular expressions, so be sure to escape special characters.
- Changes to the whitelist take effect immediately for all new file proxy requests.
- The whitelist is reset when Steam or Millennium restarts.
- Invalid regex patterns will cause an error and won't be added to the whitelist.