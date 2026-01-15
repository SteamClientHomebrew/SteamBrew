---
order: 3
description: The plugin environment.
---

# Environment

::: warning
Make sure you've read up on how to enable [Steam developer mode](../../developers/devtools.md) before continuing these docs, its very important!
:::

Steams code structure tends to be confuse people when they first start developing. This section will cover most of these quirks - its recommended you read the entirety of this page! 

## Steam's Multi-Window Architecture

Opening developer tools reveals multiple devtool windows—one per Steam window (Main, Settings, Properties, etc). Each has its own Chromium instance with separate DOM and devtools.

## SharedJSContext: The Parent Instance

For plugin development, focus on the **SharedJSContext** devtools. This headless parent instance:
- Contains all Steam UI/logic code
- Spawns child windows (Main, Settings, Properties, etc) via `window.open`, passing its execution context
- Has no visual DOM of its own

## How It Works

Child windows (Main, Settings, etc) render content **owned by SharedJSContext**. While each child has its own DOM and inspector, the actual code executing inside them belongs to SharedJSContext.

**Key implication:** To hook UI in the main window, patch SharedJSContext—not the child window—since that's where the code actually lives.
