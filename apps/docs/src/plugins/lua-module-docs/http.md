# http

HTTP module for making HTTP requests using libcurl.

```lua
local http = require("http")
```

## Functions

-   `http.request(url, options)` - Make a generic HTTP request with full configuration
-   `http.get(url, options)` - Make a GET request
-   `http.post(url, data, options)` - Make a POST request
-   `http.put(url, data, options)` - Make a PUT request
-   `http.delete(url, options)` - Make a DELETE request

## Types

### HTTPOptions

Request configuration options.

| Field              | Type                  | Default          | Description                                                |
| ------------------ | --------------------- | ---------------- | ---------------------------------------------------------- |
| `method`           | string                | `"GET"`          | HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS) |
| `data`             | string                | -                | Request body data                                          |
| `headers`          | table<string, string> | -                | HTTP headers as key-value pairs                            |
| `timeout`          | integer               | `30`             | Timeout in seconds                                         |
| `follow_redirects` | boolean               | `true`           | Whether to follow redirects                                |
| `verify_ssl`       | boolean               | `true`           | Whether to verify SSL certificates                         |
| `user_agent`       | string                | `"Lua-HTTP/1.0"` | User agent string                                          |
| `auth`             | HTTPAuth              | -                | Authentication credentials                                 |
| `proxy`            | string                | -                | Proxy URL (e.g., "http://proxy.example.com:8080")          |

### HTTPAuth

Authentication credentials for HTTP requests.

**Fields:**

-   `user` (string) - Username for authentication
-   `pass` (string) - Password for authentication

### HTTPResponse

HTTP response object.

**Fields:**

-   `status` (integer) - HTTP status code (e.g., 200, 404, 500)
-   `body` (string) - Response body content
-   `headers` (table<string, string>) - Response headers as key-value pairs

## Functions

### http.request(url, options)

Make a generic HTTP request with full configuration options.

**Parameters:**

-   `url` (string) - The URL to request
-   `options` (HTTPOptions, optional) - Request configuration options

**Returns:**

-   `response` (HTTPResponse|nil) - Response object or nil on failure
-   `error` (string, optional) - Error message if request failed

**Usage:**

```lua
-- Simple GET request
local response, err = http.request("https://api.example.com/data")
if response then
    print("Status:", response.status)
    print("Body:", response.body)
end

-- POST request with custom headers and timeout
local response, err = http.request("https://api.example.com/submit", {
    method = "POST",
    data = '{"key":"value"}',
    headers = {
        ["Content-Type"] = "application/json",
        ["Authorization"] = "Bearer token123"
    },
    timeout = 10,
    verify_ssl = true
})

-- Request with authentication
local response, err = http.request("https://api.example.com/protected", {
    auth = {
        user = "username",
        pass = "password"
    }
})

-- Request through proxy
local response, err = http.request("https://example.com", {
    proxy = "http://proxy.example.com:8080"
})
```

---

### http.get(url, options)

Make a GET request.

**Parameters:**

-   `url` (string) - The URL to request
-   `options` (HTTPOptions, optional) - Additional request options

**Returns:**

-   `response` (HTTPResponse|nil) - Response object or nil on failure
-   `error` (string, optional) - Error message if request failed

**Usage:**

```lua
-- Simple GET request
local response, err = http.get("https://api.example.com/users")
if response then
    print("Status:", response.status)
    print("Body:", response.body)
else
    print("Error:", err)
end

-- GET with custom headers
local response, err = http.get("https://api.example.com/data", {
    headers = {
        ["Accept"] = "application/json",
        ["X-API-Key"] = "your-api-key"
    },
    timeout = 5
})

-- GET with query parameters (encode them in the URL)
local response, err = http.get("https://api.example.com/search?q=lua&limit=10")
```

---

### http.post(url, data, options)

Make a POST request.

**Parameters:**

-   `url` (string) - The URL to request
-   `data` (string, optional) - Request body data
-   `options` (HTTPOptions, optional) - Additional request options

**Returns:**

-   `response` (HTTPResponse|nil) - Response object or nil on failure
-   `error` (string, optional) - Error message if request failed

**Usage:**

```lua
-- POST JSON data
local json_data = cjson.encode({ name = "John", age = 30 })
local response, err = http.post("https://api.example.com/users", json_data, {
    headers = {
        ["Content-Type"] = "application/json"
    }
})

-- POST form data
local form_data = "username=john&password=secret"
local response, err = http.post("https://example.com/login", form_data, {
    headers = {
        ["Content-Type"] = "application/x-www-form-urlencoded"
    }
})

-- POST with authentication
local response, err = http.post("https://api.example.com/submit", '{"data":"value"}', {
    headers = {
        ["Content-Type"] = "application/json"
    },
    auth = {
        user = "apiuser",
        pass = "apipass"
    }
})
```

---

### http.put(url, data, options)

Make a PUT request.

**Parameters:**

-   `url` (string) - The URL to request
-   `data` (string, optional) - Request body data
-   `options` (HTTPOptions, optional) - Additional request options

**Returns:**

-   `response` (HTTPResponse|nil) - Response object or nil on failure
-   `error` (string, optional) - Error message if request failed

**Usage:**

```lua
-- Update a resource with PUT
local updated_data = cjson.encode({ name = "John Doe", age = 31 })
local response, err = http.put("https://api.example.com/users/123", updated_data, {
    headers = {
        ["Content-Type"] = "application/json",
        ["Authorization"] = "Bearer token123"
    }
})

if response and response.status == 200 then
    print("Update successful")
else
    print("Update failed:", err or response.status)
end

-- PUT with custom options
local response, err = http.put("https://api.example.com/resource/456", '{"field":"value"}', {
    headers = {
        ["Content-Type"] = "application/json"
    },
    timeout = 15,
    verify_ssl = true
})
```

---

### http.delete(url, options)

Make a DELETE request.

**Parameters:**

-   `url` (string) - The URL to request
-   `options` (HTTPOptions, optional) - Additional request options

**Returns:**

-   `response` (HTTPResponse|nil) - Response object or nil on failure
-   `error` (string, optional) - Error message if request failed

**Usage:**

```lua
-- Simple DELETE request
local response, err = http.delete("https://api.example.com/users/123")
if response and response.status == 204 then
    print("Resource deleted successfully")
end

-- DELETE with authorization
local response, err = http.delete("https://api.example.com/posts/456", {
    headers = {
        ["Authorization"] = "Bearer token123"
    }
})

-- DELETE with error handling
local response, err = http.delete("https://api.example.com/items/789", {
    timeout = 10
})

if not response then
    print("Request failed:", err)
elseif response.status == 404 then
    print("Resource not found")
elseif response.status == 204 then
    print("Resource deleted")
else
    print("Unexpected status:", response.status)
end
```

## Common Patterns

### Error Handling

```lua
local response, err = http.get("https://api.example.com/data")

if not response then
    print("Request failed:", err)
    return
end

if response.status >= 200 and response.status < 300 then
    print("Success:", response.body)
elseif response.status == 404 then
    print("Resource not found")
elseif response.status >= 500 then
    print("Server error:", response.status)
else
    print("Unexpected status:", response.status)
end
```

### Working with JSON APIs

```lua
-- Making a JSON API request
local payload = cjson.encode({
    username = "user123",
    email = "user@example.com"
})

local response, err = http.post("https://api.example.com/register", payload, {
    headers = {
        ["Content-Type"] = "application/json",
        ["Accept"] = "application/json"
    }
})

if response and response.status == 201 then
    local data = cjson.decode(response.body)
    print("User ID:", data.id)
end
```

### Accessing Response Headers

```lua
local response, err = http.get("https://api.example.com/data")

if response then
    print("Content-Type:", response.headers["content-type"])
    print("Content-Length:", response.headers["content-length"])

    -- Headers are case-insensitive in HTTP, but stored as-is
    for key, value in pairs(response.headers) do
        print(key .. ": " .. value)
    end
end
```

### Using Timeouts

```lua
-- Short timeout for health checks
local response, err = http.get("https://api.example.com/health", {
    timeout = 2
})

-- Longer timeout for data processing endpoints
local response, err = http.post("https://api.example.com/process", data, {
    timeout = 60
})
```
