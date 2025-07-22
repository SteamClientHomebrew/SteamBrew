---
order: 3
description: The theming environment.
---

# Environment

::: warning
Make sure you've read up on how to enable [Steam developer mode](../../developers/devtools.md) before continuing these docs, its very important!
:::

The theming environment on Steam is relatively simple. In this section, you'll learn how to setup your Steam Client to easily theme it. If you're already familiar with Steam's developer tools layout feel free to skip this section.

## Steam CSS Variables

As you'll likely notice from browsing Steams CSS, they rarely use color variables for their styles. This can make styling a little more difficult in some regions as there is no reusability.

## Class Name Conventions

Steams's class names are generated automatically. You'll notice a common pattern of a classname that is entirely randomly generated. These do not normally regenerate on every release of the client, they only regenerate when Steam changes a component that uses a specific classname. Anecdotally speaking, the current classnames have been fairly stable without a large change for quite some time (around a year).

To keep things simple we won't go over any classname auto updaters right now, but they will be covered later in the docs for more advanced users.
