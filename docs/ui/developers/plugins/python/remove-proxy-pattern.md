# remove_proxy_pattern()

Removes a previously added regular expression pattern from the file proxy whitelist.

|Parameter|Type|Description|
|-----|:------:|-----------|
|regex_path|str|The exact regular expression string that was previously added to the whitelist.|

## Description

This function allows plugins to remove custom whitelist patterns that were previously added with [add_proxy_pattern()](./add-proxy-pattern.md). This is useful for cleaning up temporary access permissions or disabling access to certain paths when they're no longer needed. Any file paths that matched only this pattern (and no other whitelisted patterns) will no longer be accessible through the file proxy system.

## Important Considerations

- The pattern string must exactly match the one used in [add_proxy_pattern()](./add-proxy-pattern.md) to be removed successfully
- Removing a pattern takes effect immediately for all new file proxy requests
- Any ongoing file operations using the removed pattern may fail if they make new requests

## Examples

### Basic Usage

```python
import Millennium

# First add a pattern
Millennium.add_proxy_pattern(r'^steamui\/my-plugin\/temp\/')

# Use the file proxy to access files in that directory
# ...

# When done, remove the pattern
Millennium.remove_proxy_pattern(r'^steamui\/my-plugin\/temp\/')
```

### Temporary Access with Context Manager

```python
import Millennium
import contextlib

@contextlib.contextmanager
def temporary_proxy_access(pattern):
    """Context manager for temporary file proxy access."""
    try:
        Millennium.add_proxy_pattern(pattern)
        yield
    finally:
        Millennium.remove_proxy_pattern(pattern)

# Use in your code
with temporary_proxy_access(r'^steamui\/temp-assets\/'):
    # Access files within this block
    # Pattern will be automatically removed when exiting the block
    pass
```

### Conditional Pattern Management

```python
import Millennium

def toggle_game_assets_access(game_id, enable=True):
    """Enable or disable access to a game's assets directory."""
    pattern = f"^steamapps\/common\/{game_id}\/assets\/"

    if enable:
        Millennium.add_proxy_pattern(pattern)
        return True
    else:
        Millennium.remove_proxy_pattern(pattern)
        return False

# Enable access
toggle_game_assets_access("440")  # Team Fortress 2

# Later, disable access
toggle_game_assets_access("440", enable=False)
```

## Related Functions

- [Millennium.add_proxy_pattern()](./add-proxy-pattern.md) - Adds a regex pattern to the file proxy whitelist.

## Notes

- Always remove temporary patterns when they're no longer needed to maintain security
- The whitelist is reset when Steam or Millennium restarts, so you don't need to worry about cleaning up patterns before exiting
- If multiple identical patterns were added, a single call to `remove_proxy_pattern()` will remove all instances of that pattern
