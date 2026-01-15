---
order: 1
---

# http

HTTP client module for Millennium Lua plugins. Provides a simple, flexible API for making HTTP requests (built on libcurl in the native implementation).

## Exported Functions

- [request](#request)
- [get](#get)
- [post](#post)
- [put](#put)
- [delete](#delete)

### Usage

```lua
local http = require("http")
```

---

## Types

### HTTPOptions

Request configuration options.

| Field              | Type                  | Default          | Description                                                |
| ------------------ | --------------------- | ---------------- | ---------------------------------------------------------- |
| `method`           | string                | `"GET"`          | HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS) |
| `data`             | string                | -                | Request body data                                          |
| `headers`          | table<string,string>  | -                | HTTP headers as key-value pairs                            |
| `timeout`          | integer               | `30`             | Timeout in seconds                                         |
| `follow_redirects` | boolean               | `true`           | Whether to follow redirects                                |
| `verify_ssl`       | boolean               | `true`           | Whether to verify SSL certificates                         |
| `user_agent`       | string                | `"Lua-HTTP/1.0"` | User agent string                                          |
| `auth`             | HTTPAuth              | -                | Authentication credentials                                 |
| `proxy`            | string                | -                | Proxy URL (e.g., `"http://proxy.example.com:8080"`)        |

### HTTPAuth

Authentication credentials for HTTP requests.

| Field | Type   | Description                 |
| ----- | :----: | --------------------------- |
| user  | string | Username for authentication |
| pass  | string | Password for authentication |

### HTTPResponse

HTTP response object.

| Field   | Type                     | Description                         |
| ------- | ------------------------ | ----------------------------------- |
| status  | integer                  | HTTP status code (e.g., 200, 404)   |
| body    | string                   | Response body content               |
| headers | table<string,string>     | Response headers as key-value pairs |

---

## request

### Abstract

Make a generic HTTP request with full configuration. This is the most flexible entry point and can be used to implement any method or custom behavior by providing an `options` table.

### Parameters

| Parameter | Type        | Description               |
| --------- | :---------: | ------------------------- |
| url       | string      | URL to request            |
| options   | HTTPOptions | Optional request options  |

### Returns

- `response` (HTTPResponse | nil) — Response object, or `nil` on failure  
- `error` (string | nil) — Error message if request failed

### Usage

```lua
local http = require("http")

-- Simple GET
local res, err = http.request("https://api.example.com/data")
if not res then
  print("request failed:", err)
else
  print("status:", res.status)
  print("body:", res.body)
end

-- Custom POST with headers and timeout
local res, err = http.request("https://api.example.com/submit", {
  method = "POST",
  data = '{"key":"value"}',
  headers = {
    ["Content-Type"] = "application/json",
    ["Authorization"] = "Bearer token123"
  },
  timeout = 10,
  verify_ssl = true
})
```

---

## get

### Abstract

Convenience wrapper for making GET requests. Accepts the same options as `request` but defaults to `method = "GET"`.

### Parameters

| Parameter | Type        | Description              |
| --------- | :---------: | ------------------------ |
| url       | string      | URL to request           |
| options   | HTTPOptions | Optional request options |

### Returns

- `response` (HTTPResponse | nil) — Response object or `nil` on failure  
- `error` (string | nil) — Error message if request failed

### Usage

```lua
local http = require("http")

local res, err = http.get("https://api.example.com/users")
if not res then
  print("GET failed:", err)
else
  print("status:", res.status)
  print("body length:", #res.body)
end

-- With custom headers and timeout
local res, err = http.get("https://api.example.com/data", {
  headers = { ["Accept"] = "application/json" },
  timeout = 5
})
```

---

## post

### Abstract

Convenience wrapper for making POST requests. Sends provided `data` as the request body and accepts `options` to control headers, timeouts, authentication, etc.

### Parameters

| Parameter | Type        | Description                  |
| --------- | :---------: | ---------------------------- |
| url       | string      | URL to request               |
| data      | string      | Request body (optional)      |
| options   | HTTPOptions | Optional request options     |

### Returns

- `response` (HTTPResponse | nil) — Response object or `nil` on failure  
- `error` (string | nil) — Error message if request failed

### Usage

```lua
local http = require("http")
local cjson = require("cjson")

local payload = cjson.encode({ username = "alice", email = "a@example.com" })
local res, err = http.post("https://api.example.com/register", payload, {
  headers = { ["Content-Type"] = "application/json" },
  timeout = 10
})

if not res then
  print("POST failed:", err)
elseif res.status == 201 then
  print("created:", res.body)
else
  print("unexpected status:", res.status)
end
```

---

## put

### Abstract

Convenience wrapper for making PUT requests. Useful for updating resources.

### Parameters

| Parameter | Type        | Description                  |
| --------- | :---------: | ---------------------------- |
| url       | string      | URL to request               |
| data      | string      | Request body (optional)      |
| options   | HTTPOptions | Optional request options     |

### Returns

- `response` (HTTPResponse | nil) — Response object or `nil` on failure  
- `error` (string | nil) — Error message if request failed

### Usage

```lua
local http = require("http")
local payload = '{"name":"Updated"}'

local res, err = http.put("https://api.example.com/items/123", payload, {
  headers = { ["Content-Type"] = "application/json" },
  timeout = 15
})

if not res then
  print("PUT failed:", err)
elseif res.status == 200 then
  print("update successful")
else
  print("status:", res.status)
end
```

---

## delete

### Abstract

Convenience wrapper for making DELETE requests.

### Parameters

| Parameter | Type        | Description                  |
| --------- | :---------: | ---------------------------- |
| url       | string      | URL to request               |
| options   | HTTPOptions | Optional request options     |

### Returns

- `response` (HTTPResponse | nil) — Response object or `nil` on failure  
- `error` (string | nil) — Error message if request failed

### Usage

```lua
local http = require("http")

local res, err = http.delete("https://api.example.com/users/123", {
  headers = { ["Authorization"] = "Bearer token123" }
})

if not res then
  print("DELETE failed:", err)
elseif res.status == 204 then
  print("deleted")
else
  print("unexpected status:", res.status)
end
```

---

## Common Patterns

### Error handling

```/dev/null/examples/error_handling.lua#L1-12
local http = require("http")
local res, err = http.get("https://api.example.com/data")
if not res then
  print("request failed:", err)
  return
end

if res.status >= 200 and res.status < 300 then
  print("success")
elseif res.status == 404 then
  print("not found")
else
  print("status:", res.status)
end
```

### JSON APIs

```/dev/null/examples/json_api.lua#L1-16
local http = require("http")
local cjson = require("cjson")

local payload = cjson.encode({ name = "bob" })
local res, err = http.post("https://api.example.com/create", payload, {
  headers = { ["Content-Type"] = "application/json", ["Accept"] = "application/json" }
})

if res and res.status == 201 then
  local obj = cjson.decode(res.body)
  print("id:", obj.id)
end
```

### Timeouts and retries

- Use `timeout` in the `options` table for per-request control.
- Implement retries in Lua by wrapping `http.*` calls in a loop with backoff — the native binding intentionally provides a single-request abstraction.

---

That's the `http` module — a compact, consistent HTTP client API for Millennium Lua plugins. If you want, I can split the inline examples into real example files under `apps/docs/src/plugins/lua/examples/` and update the code-fence paths accordingly.
