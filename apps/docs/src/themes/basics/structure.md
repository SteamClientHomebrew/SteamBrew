---
order: 1
---

# File Structure

::: tip

This page only goes over the structure of the theme template. Make sure you've read up on [quick start](../introduction/quick-start.md) before reading this.

:::

## Details

Millennium themes must be in vanilla CSS. That means if you want to use something like Sass, or Stylus it must be transpiled. These topics are covered later in the documentation.

Themes must contain a `skin.json`. This is where the brain of a theme resides. It contains vital metadata about the theme like its name, developers, description, how Millennium should load it, etc. We'll cover this more later in the documentation, so don't focus on it too much here.

### Structure

Although the template theme may seem like file structure is strict, it is quite the opposite. You can organize your theme however you'd like, as long as you tell Millennium where to look in your `skin.json`. However in this section we're just going to stick with the structure given in the example, you'll learn more about restructuring your theme later in these docs.

#### Why are there multiple CSS files in the example?

To give you maximum control, we've segmented the CSS files so they only affect specific Steam windows. This makes it easy to apply different styles to different windows without unintentionally affecting others.

#### Do their file names matter?

Yes, in the example theme the names are important; it tells Millennium what files should be added to the DOM in what windows. This is because of `UseDefaultPatches` in the `skin.json`. `UseDefaultPatches` is a special config that essentially lets Millennium handle the structuring of your theme.

As you'd likely imagine, with `UseDefaultPatches`:

-   **bigpicture.custom.css** & **bigpicture.custom.js** are inserted into the Steam Big Picture window.
-   **friends.custom.css** & **friends.custom.js** are inserted into the Steam Friends List.
-   **libraryroot.custom.css** & **libraryroot.custom.js** are inserted into the main Steam window.
-   **webkit.css** is loaded into all Steam web views (Store, Community, etc.)
