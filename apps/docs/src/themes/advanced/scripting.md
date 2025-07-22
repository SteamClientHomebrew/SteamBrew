---
order: 1
---

# User Scripts

::: warning
This guide covers advanced scripting techniques and assumes you're already comfortable with JavaScript fundamentals like variables, functions, DOM manipulation, and event handling. If you're new to JavaScript, you might want to learn the basics first or stick with CSS-only themes until you're ready to dive into scripting.
:::

As mentioned in [the creative process](../basics/process.md), some areas of the client just can't be practically styled with CSS alone. Although we haven't name dropped Javascript directly in these docs yet, its actually a very prevalent part of theming, and is used quite often by developers.

## What is scripting? Do I need it?

Javascript is a web based scripting language that is often used in websites. Opposed to CSS's light weight, and limited feel, JavaScript lets you do **almost anything**.

### How scripting helps with Steam themes

When you're working on Steam themes, you'll eventually run into situations where CSS just can't do what you want. That's where JavaScript comes in handy. It's commonly used for:

-   Better control over elements
-   Custom animations and effects
-   Smarter element positioning
-   Enhanced user interactions

## The bottom line

Take note that JavaScript isn't always necessary. If you're just changing colors and fonts, CSS will do fine. But once you want to add behavior, interactivity, or dynamic content, you'll need to dive into scripting.

## Implementing JavaScript

As you've likely seen in other parts of this documentation, JavaScript is inserted into Steam pages under the same protocol that inserts CSS.

See [theme config](../basics/config.md#patches-property-node) and [user configuration](../intermediate/custom-structure.md).

Once you get your JavaScript module loaded into the relevant window your modifying, you can being messing around immediately.

If you need to polish up your JavaScript skills, checkout [MDN's amazing docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting).

### Hello World!

Try something like the example below to see if you've set it up properly:

```js [some-code.js]
console.log('Hello, World!');
```

### Caveats

Since Steam is written with [React](../../developers/environment.md#web-application), it's very possible your JavaScript will run before Steams UI is properly mounted.
To get around this, use this helper function; it's available from all Steam windows (excluding Steam browser views).

Although it's primarily used for plugins, there is no issue using it in your themes:

```js [some-code.js]
// No matter how long the DOM or Steam's UI takes to load, this helper function will find target DOM element (if it exists)
const elements = await window.opener.Millennium.findElement(window.document, 'body');
// Timeout and reject the promise if the element isn't found within 3 seconds
const timeoutElements = await window.opener.Millennium.findElement(window.document, 'body', 3_000);

console.log(elements, timeoutElements); // the <body /> element is logged.
```

### And that's it!

Theres nothing left to document here, do as you wish with your JavaScript as long as it doesn't break any of our [guidelines](../introduction/guidelines.md).
The world is your oyster!
