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

We currently support three types of config within themes:

-   Dropdowns
-   Checkboxes
-   Sliders

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

## Slider Configuration

Sliders let users pick a numeric value within a range. Instead of swapping CSS/JS files like dropdowns and checkboxes, sliders set a **CSS custom property** (variable) on `:root`, which your theme's CSS can reference directly.

A condition is treated as a slider when it has a `slider` object and no `values`.

### What it looks like

It will have the name `Transparency`, a description below it `Controls the overall transparency`, a default value of `80`, and a slider ranging from 0 to 100 in steps of 5.

```json [skin.json]
"Conditions": {
  "Transparency": {
    "description": "Controls the overall transparency",
    "default": "80",
    "tab": "General",
    "slider": {
      "min": 0,
      "max": 100,
      "step": 5,
      "unit": "%",
      "cssVariable": "--theme-transparency"
    }
  }
}
```

When the user sets this slider to `80`, Millennium injects the following into every Steam window:

```css
:root {
  --theme-transparency: 80%;
}
```

Your theme CSS can then use this variable anywhere:

```css
.some-panel {
  opacity: var(--theme-transparency);
  /* or */
  background: rgba(0, 0, 0, var(--theme-transparency));
}
```

The CSS variable updates **live** as the user drags the slider — no reload required.

### Slider Properties

| Field         |    Type    | Required | Description                                                                    |
| ------------- | :--------: | :------: | ------------------------------------------------------------------------------ |
| `min`         |  `Number`  |   Yes    | Minimum slider value                                                           |
| `max`         |  `Number`  |   Yes    | Maximum slider value                                                           |
| `step`        |  `Number`  |    No    | Increment between values. Defaults to `1`                                      |
| `unit`        |  `String`  |    No    | CSS unit appended to the value. See [unit reference](#slider-unit-reference)   |
| `cssVariable` |  `String`  |   Yes    | The CSS custom property name to set (must start with `--`)                     |

### Slider Unit Reference {#slider-unit-reference}

The `unit` field is a CSS unit string that gets appended to the raw numeric value before it's injected as a CSS variable. This lets you control exactly what kind of CSS value the variable represents.

| Unit   | Name                 | Example output          | Typical use case                             |
| ------ | -------------------- | ----------------------- | -------------------------------------------- |
| _(omitted)_ | Unitless        | `--my-var: 50;`         | Opacity, z-index, `flex-grow`, counters      |
| `%`    | Percentage           | `--my-var: 50%;`        | Width, height, transparency, background size |
| `px`   | Pixels               | `--my-var: 16px;`       | Spacing, border radius, font size            |
| `em`   | Em                   | `--my-var: 1.5em;`      | Spacing relative to parent font size         |
| `rem`  | Root em              | `--my-var: 1.5rem;`     | Spacing relative to root font size           |
| `vw`   | Viewport width       | `--my-var: 50vw;`       | Responsive widths                            |
| `vh`   | Viewport height      | `--my-var: 50vh;`       | Responsive heights                           |
| `deg`  | Degrees              | `--my-var: 180deg;`     | Hue rotation, gradients, transforms          |
| `s`    | Seconds              | `--my-var: 0.3s;`       | Transition/animation duration                |
| `ms`   | Milliseconds         | `--my-var: 300ms;`      | Transition/animation duration                |

::: tip
If you omit `unit`, the value is injected as a raw number. This is useful for properties like `opacity` that accept unitless values, or when you want to apply the unit yourself in CSS using `calc()`:

```css
.panel {
  /* slider value is unitless "50", apply unit in CSS */
  width: calc(var(--panel-width) * 1px);
}
```
:::

### Full Slider Example

```json [skin.json]
{
  "name": "My Theme",
  "Conditions": {
    "Border Radius": {
      "description": "Roundness of UI corners",
      "default": "8",
      "tab": "Appearance",
      "slider": {
        "min": 0,
        "max": 24,
        "step": 2,
        "unit": "px",
        "cssVariable": "--theme-border-radius"
      }
    },
    "Animation Speed": {
      "description": "Speed of transition effects",
      "default": "300",
      "tab": "Appearance",
      "slider": {
        "min": 0,
        "max": 1000,
        "step": 50,
        "unit": "ms",
        "cssVariable": "--theme-transition-speed"
      }
    },
    "Sidebar Opacity": {
      "description": "Transparency of the sidebar",
      "default": "0.85",
      "tab": "Appearance",
      "slider": {
        "min": 0,
        "max": 1,
        "step": 0.05,
        "cssVariable": "--sidebar-opacity"
      }
    }
  }
}
```

```css [theme.css]
.LibrarySidebar {
  border-radius: var(--theme-border-radius);
  transition: all var(--theme-transition-speed) ease;
  opacity: var(--sidebar-opacity);
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

## Sections

When a tab has many conditions, you can group them under labeled sub-headers using the `section` field. This is purely visual — it adds a heading above a group of conditions within the same tab to help users find related settings.

The `section` field works with all condition types (dropdowns, checkboxes, and sliders). Conditions without a `section` are rendered first, followed by each section group with its heading.

### Example

```json [skin.json]
"Conditions": {
  "Color Scheme": {
    "description": "Overall color palette",
    "tab": "Store",
    "default": "Dark",
    "values": {
      "Dark": { "TargetCss": { "affects": [".*"], "src": "dark.css" } },
      "Light": { "TargetCss": { "affects": [".*"], "src": "light.css" } }
    }
  },
  "Store Gamepage": {
    "description": "Store Gamepage from the concept",
    "default": "no",
    "tab": "Store",
    "section": "Experimental",
    "values": {
      "yes": { "TargetCss": { "affects": ["https://.*\\.steampowered\\.com(/.*)?"], "src": "options/experimental/storeGamepage.css" } },
      "no": {}
    }
  },
  "Store Wishlist": {
    "description": "Redesigned wishlist page",
    "default": "no",
    "tab": "Store",
    "section": "Experimental",
    "values": {
      "yes": { "TargetCss": { "affects": ["https://.*\\.steampowered\\.com(/.*)?"], "src": "options/experimental/storeWishlist.css" } },
      "no": {}
    }
  }
}
```

In this example, the "Store" tab will show "Color Scheme" at the top (no section header), followed by an "Experimental" sub-header with "Store Gamepage" and "Store Wishlist" grouped underneath it.

## Useful Notes

-   If between updates you change the name of a config item, All users will have it reset to the default option.
-   It is entirely safe to remove a dropdown option between updates, if a user has it selected they will simply be reverted to the default setting.
-   It is entirely safe to remove an entire option between updates.

## Summary of Properties

### Common Properties

These fields are shared across all condition types (dropdowns, checkboxes, and sliders).

| Field                    |      Type      | Description                                                                                                |
| ------------------------ | :------------: | ---------------------------------------------------------------------------------------------------------- |
| `default`                |    `String`    | The preselected default value                                                                              |
| `description`            |    `String`    | A basic description of the what the config does. Supports [BB code][guide]                                 |
| `tab`                    |    `String`    | Title of the custom settings tab that the option is displayed under. (optional)                            |
| `section`                |    `String`    | Groups conditions under a labeled sub-header within a tab. (optional)                                      |

### Dropdown & Checkbox Properties

| Field                    |      Type      | Description                                                                                                                                     |
| ------------------------ | :------------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`                 |    `Object`    | An object containing keys `yes`/`no` for checkbox config, and other string values for combobox                                                  |
| `values` item            |    `Object`    | Contains a `TargetCss` and/or a `TargetJs` object                                                                                               |
| `TargetJs` & `TargetCss` |    `Object`    | Contains an `affects` key, and a `src` key                                                                                                      |
| `affects`                | `List<String>` | A list of regex strings that are matched against all open Steam windows. If there is a match, the TargetCss/Js will be injected into the window |
| `src`                    | `List<String>` | A relative path to the target Js/Css module                                                                                                     |

### Slider Properties

| Field                    |      Type      | Description                                                                                                |
| ------------------------ | :------------: | ---------------------------------------------------------------------------------------------------------- |
| `slider`                 |    `Object`    | Slider configuration. Presence of this field (without `values`) makes the condition render as a slider     |
| `slider.min`             |    `Number`    | Minimum slider value                                                                                       |
| `slider.max`             |    `Number`    | Maximum slider value                                                                                       |
| `slider.step`            |    `Number`    | Increment between values. Defaults to `1` (optional)                                                       |
| `slider.unit`            |    `String`    | CSS unit appended to the value, e.g. `%`, `px`, `rem`, `deg`, `ms`. Omit for unitless values (optional)   |
| `slider.cssVariable`     |    `String`    | The CSS custom property name set on `:root` (must start with `--`)                                         |

[guide]: https://steamcommunity.com/sharedfiles/filedetails/?id=2807121939
