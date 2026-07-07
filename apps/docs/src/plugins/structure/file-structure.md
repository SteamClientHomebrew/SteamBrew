---
order: 1
---

# File Structure

::: tip

This page only goes over the structure of the plugin template. Make sure you've read up on [quick start](../introduction/quick-start.md) before reading this.

:::

## Plugin Template File Structure

- [Backend](#backend) (optional)
- [Frontend](#frontend)
- [Webkit](#webkit) (optional)

## Backend

### Optional Native System Access

As the `frontend` and `webkit` run inside Steam's Chromium sandbox, they can't interact with the host system.
Backends solve this by running natively on the user's PC via [LuaJIT](https://luajit.org/), providing full system access when needed.

## Frontend

The `frontend` contains your plugin's main code that executes within Steam's UI (excluding browser views).
Running inside Steam's UI gives it access to Steam's React instance, allowing you to create custom React components using Steam's own framework.

## Webkit

the `webkit` is optional. The `webkit` contains your plugin's code that executes in the Steam browser views (ex: Steam store, community, etc.)
Running outside Steam's UI means we unfortunately don't have access to React, so we're stuck with plain TypeScript.
