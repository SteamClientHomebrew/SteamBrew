---
order: 6
---

# Guidelines

::: danger PLEASE READ
These are guidelines that all themes are expected to abide by. Any themes that violates these <u>will not</u> be added to the Millennium website or marked as official or approved in any fashion. Existing themes that push updates that violate these guidelines will have their updates denied and themes permanently removed.
:::

## General Guidelines

1.  Themes must be in public GitHub repositories.
1.  Themes must not negatively affect users.
    -   e.g., ban risk, disabling security features, accessing private information
1.  Themes must not discriminate whom can use it.
1.  Themes must not collect user data under any circumstance.
1.  Themes must not include explicit sexual material or other adult content.
1.  Themes must have English language support.
1.  Themes must not load or import foreign JS/CSS, the entirety of the theme must be local.

## Usability

1. Do not degrade the user experience by removing core functionality.
    - e.g. hiding potentially important actions, unreadable text contrast, use of harmful animations, and flashing text.
1. Maintain performance on modern hardware.
    - This can be done by limiting the use of intensive animations, filters and effects.

## Code

1. Your theme's codebase must be owned and operated by you, or someone you directly work in collaboration with.
1. Any remote references must be trusted services. (Github, Gitlab, Google Fonts, etc...)
1. You may reverse-engineer or use other people's code, provided you have proper permission and your theme's core design does not rely on third-party code.
1. Minimize usage of language-specific selectors (e.g. `aria-label` attributes).
    - If used, provide sensible fallbacks for other languages.

## Design

1. Themes should provide a cohesive design that notably alters the look and feel of Steam.
    - A simple recoloring via CSS variables or adding a background image is not considered notable.
1. Themes should be designed to seamlessly integrate with any unthemed sections, ensuring a smooth and consistent experience across the entire interface
    - Try to leave as few unthemed sections as possible in order to improve the user experience.
