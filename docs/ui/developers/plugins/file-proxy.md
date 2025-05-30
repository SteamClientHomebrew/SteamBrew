# Internal File Proxy System

The file proxy system provides secure access to local files through virtual URLs, allowing plugins to load JavaScript modules, CSS stylesheets, and other assets without using potentially insecure file:// URLs. This system handles security permissions and path resolution automatically, making local file access both safer and more convenient for plugin development.

## Virtual URL Endpoints for Your Plugins

You can use these virtual URLs to access your local files.
All of them resolve the correct content type automatically as there is little difference between the js and css endpoints.
> Note that the `pseudo` endpoint is deprecated and will be removed in a future version. Use the `js` and `css` endpoints instead.

- `https://js.millennium.app/` - For loading JavaScript modules, scripts, and other assets
- `https://css.millennium.app/` - For loading CSS stylesheets
- `https://pseudo.millennium.app/` - Legacy endpoint (use the above URLs for new plugins)

## Accessing the File Proxy

To access the file proxy, you can use either relative paths (starting from your Steam installation directory) or absolute paths:

- **Relative paths** are resolved from your Steam installation directory (typically `C:\Program Files (x86)\Steam` on Windows)
- **Absolute paths** must include the full file system path

The file proxy system handles path resolution and security permissions automatically.

### Relative Path
```javascript
fetch('https://js.millennium.app/plugins/my-plugin/some-file.js')
  .then(response => response.text())
  .then(data => {
    // Do something with the data
  });
```

### Absolute Path
```javascript
fetch('https://js.millennium.app/C:/Program Files (x86)/Steam/plugins/my-plugin/some-file.js')
  .then(response => response.text())
  .then(data => {
    // Do something with the data
  });
```

## Path Whitelisting

For security reasons, Millennium only allows access to files in specific whitelisted directories. By default, these include:

- `plugins/`
- `steamui/`
- Millennium skins directory
- Millennium plugins directory

Attempts to access files outside these directories will result in a 403 Forbidden error.
You can add more directories to the whitelist by adding them with the [add-proxy-pattern()](./python/add-proxy-pattern.md) python function.
