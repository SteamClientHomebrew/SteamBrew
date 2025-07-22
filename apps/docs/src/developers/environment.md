---
order: 3
description: The development environment for Steam client modifications.
---

# Environment

Understanding the development environment for Steam client modifications means diving into both Steam's underlying architecture and the modification frameworks that enable extensibility. Let's explore what makes it all work.

## Steam Client

### Desktop Application

Steam runs on the [Chromium Embedded Framework (CEF)](https://cef-project.org/), which provides a web-based UI framework within a native application shell. This is similar to Electron but uses CEF specifically for embedding web content into desktop applications. Essentially, Steam runs a specialized Chromium browser that displays the interface while maintaining full desktop integration capabilities.

This CEF-based approach lets Steam leverage modern web technologies while still providing deep system integration. Hardware detection, file system access, game launching, and system notifications are handled through the native application layer, while the UI benefits from the flexibility and rapid development capabilities of web technologies.

The hybrid architecture allows web-based UI components and native functionality to coexist seamlessly, creating an application that can interact with the system in ways pure web applications cannot.

### Web Application

Steam's interface is built with [React](https://reactjs.org/), which enables the dynamic, responsive interfaces you see throughout the client. The friends list updating in real-time, store pages loading smoothly, and library management all leverage React's component-based architecture.

Steam makes extensive use of React's component system for reusable UI elements across the application. Game tiles in your library, chat windows, and store pages are all built as React components, making the codebase more maintainable and giving plugin developers a familiar framework to work with.

The implementation uses [Webpack](https://webpack.js.org/) for bundling and module management, along with custom styling systems and component libraries that create Steam's distinctive design language.

We've reverse engineered Steam's React implementation, allowing us to hook directly into Steam's component system and use standard React patterns for creating modifications.

::: warning
Familiarity with React, CEF, and modern JavaScript development will make plugin development significantly more straightforward.
:::

## Modification Environment

Millennium plugins work by injecting JavaScript into the CEF-rendered pages that compose Steam's interface. From there, they can hook into Steam's React component tree and extend functionality using the same patterns you'd use in any React application.

The modification approach typically involves:

-   JavaScript injection into CEF pages
-   React component hooking and modification
-   Utilizing Steam's internal APIs and data structures
