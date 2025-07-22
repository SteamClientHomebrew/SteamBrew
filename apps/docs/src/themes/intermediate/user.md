---
order: 1
---

# User Configuration

Letting users configure your theme to their personal preference is one of the most important pieces to add to your theme to give it a nice polish. You'll find that many users love to be able to play around with and tweak these values to their preference.

Millennium allows your theme configuration file to have control flow directives, which allows it to conditionally load CSS/JS into the Steam Client based on user configuration. These settings are directly changeable from within the Steam client with little hassle.

::: tip
If you’re looking for an easy way to for users to edit your theme color variables, we’ve got a dedicated system for that — just not this one. Check out the [color documentation](./colors.md) for more info.
:::

## Adding Configuration

Although the example config we'll show below is relatively self explanatory, we'll still highlight the key points of creating a configurable option in your theme.

Although more might be on the way, we currently support two types of config within themes:

-   Dropdowns
-   Checkboxes

## Dropdown format vs. Checkbox format

Millennium automatically decides whether to render the option as a dropdown of checkbox depending on its options. If it contains, and only contains `yes` and `no` values, it will be a checkbox. Everything else is handled as a dropdown.

## Dropdown Configuration

The following dropdown example is already pretty verbose, but what it essentially does is create a render-able config item in your themes config page within the Millennium interface.

::: tip
For the sake of simplification, just ignore the **TargetCSS** section. It might look a little daunting or even confusing, but don't worry, we'll cover it in depth at a further point on this page.
:::

### What it looks like

It will have the name `A ComboBox Item`, a description below it `A simple combo box`, a default value of `Dark` (meaning when the theme is freshly installed thats what its value is set as), the values `Dark`, `Amoled`, and `Nord` respectively, and apart of the `Theme` tab in the theme settings.

```json [skin.json]
"Conditions": {
  "A ComboBox Item": {
    "description": "A simple combo box",
    "tab": "Theme",
    "default": "Dark",
    "values": {
      "Dark": {
        "TargetCss": {
          "affects": ["^Steam$", "^Steam Big Picture Mode$"],
          "src": "dark.css"
        }
      },
      "Amoled": {
        "TargetCss": {
          "affects": [".*"],
          "src": "amoled.css"
        }
      },
      "Nord": {
        "TargetCss": {
          "affects": [".*"],
          "src": "nord.css"
        }
      }
    }
  }
}
```

## Checkbox Configuration

The following dropdown example is already pretty verbose, but what it essentially does is create a render-able config item in your themes config page within the Millennium interface.

::: tip
For the sake of simplification, just ignore the **TargetCSS** section. It might look a little daunting or even confusing, but don't worry, we'll cover it in depth at a further point on this page.
:::

### What it looks like

It will have the name `A Boolean Checkbox`, a description below it `A simple boolean checkbox`, a default value of `yes` (meaning when the theme is freshly installed thats what its value is set as), and apart of the `General` tab in the theme settings.

```json [skin.json]
"Conditions": {
  "A Boolean Checkbox": {
    "default": "yes",
    "description": "A simple boolean checkbox",
    "tab": "General",
    "values": {
      "no": {
        "TargetCss": {
          "affects": [".*"],  "src": "no.css"
        }
      },
      "yes": {
        "TargetCss": {
          "affects": [".*"], "src": "yes.css"
        }
      }
    }
  }
}
```

## TargetCss & TargetJs Sections

Each configuration option can contain either `TargetCss`, `TargetJs` or both. Within these objects you simply specify the relative path to the CSS/JS file, and a list of regex selectors used to select a Steam window.

::: warning
Take not that the selector isn't a simplified form of regex, its a full blown implementation of regex search. This means selections like `*` will not actually select anything as its not valid search regex. It must be `.*`.

Take a peek at [regex101](https://regex101.com/) if you need a way to test your regex.
:::

### How to use the regex selector

::: tip
Millennium will test your regex against all open window titles, and the loaded URL in the Steam browser view.
:::

As mentioned above, simplified regex isn't supported, so to select for example the steam community page, you'd need:

-   `https:\/\/steamcommunity\.com\/.*`, not `https://steamcommunity.com*` to select the community page
-   `.*` not `*` to select everything
-   `^Steam$` not `Steam` to select the main UI

### Example

The following config loads `some.css` into all windows, and loads `some.js` into the main Steam UI and the community page.

```json [Full skin.json example]
{
	"TargetCss": {
		"affects": [".*"],
		"src": "some.css"
	},
	"TargetJs": {
		"affects": ["^Steam$", "https:\\/\\/steamcommunity.com\\/.*"],
		"src": "some.js"
	}
}
```

## Useful Notes

-   If between updates you change the name of a config item, All users will have it reset to the default option.
-   It is entirely safe to remove a dropdown option between updates, if a user has it selected they will simply be reverted to the default setting.
-   It is entirely safe to remove an entire option between updates.

## Summary of Properties

| Field                    |      Type      | Description                                                                                                                                     |
| ------------------------ | :------------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| default                  |     `Any`      | The preselected default option from `values`                                                                                                    |
| description              |    `String`    | A basic description of the what the config does. Supports [BB code][guide]                                                                      |
| tab                      |    `String`    | Title of the custom settings tab that the option is displayed under. (optional)                                                                 |
| values                   |    `Object`    | An object containing keys `yes`/`no` for checkbox config, and other string values for combobox                                                  |
| `values` item            |    `Object`    | Contains a `TargetCss` and/or a `TargetJs` object                                                                                               |
| `TargetJs` & `TargetCss` |    `Object`    | Contains an `affects` key, and a `src` key                                                                                                      |
| `affects`                | `List<String>` | A list of regex strings that are matched against all open Steam windows. If there is a match, the TargetCss/Js will be injected into the window |
| `src`                    | `List<String>` | A relative path to the target Js/Css module                                                                                                     |

[guide]: https://steamcommunity.com/sharedfiles/filedetails/?id=2807121939
