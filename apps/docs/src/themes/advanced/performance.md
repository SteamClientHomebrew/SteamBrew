---
order: 3
---

# Optimizing Performance

This guide goes over what it means when we say CSS performance as well as some potential optimizations you can take advantage of.

## CSS Performance

For many, the performance of CSS may sound crazy. It's a stylesheet language not a programming language. But the way you write your CSS can have a serious effect on the performance of rendering the page. This is especially evident in applications with many moving parts and constantly shifting elements. Steam is definitely one of those applications. For some detailed information, take a look at [how browsers perform style computations](https://web.dev/howbrowserswork/#style-computation).

### Selectors

#### Descendant Selectors

If you're a developer using CSS, you probably think about descendant selectors from left to right or top to bottom. Meaning if you see the selector `.container .row` you might read or interpret it as "from `.container` find `.row` and apply styles". But browsers do the opposite and process from the right-most to the left-most. So for the selector `.container .row` every time the browser encounters and element matching `.row` it walks the ancestors of this element until it finds `.container` and if it isn't found, that means it will walk the **entire tree**. You can read a bit more about this process in the article linked above.

But how might this affect performance? In a complex DOM tree like Steam there might be many instances of `.container .row` and even more instances of just `.row`. So by adding your style you'll be causing the browser to walk the DOM tree several times over. This can get compounded even more when we deal with [specificity](../basics/selectors.md) and try to overwrite Steam's styles. If Steam's style uses `.container .row` it might be instinctual to use `.main .container .row` to override their styles. This means that not only will every `.row` be tree walked to find `.container`, now every `.container .row` will be tree walked to additionally look for `.main`.

On their own having some styles with many descendant selectors will not have much of an effect on the performance of the client except on the absolute lowest power of machines. But it's easy to see how compounding your selectors can easily add up, especially in large themes with hundreds and hundreds of styles.

#### Attribute Selectors

Attribute selectors are great and very useful. But they also mean more computations for every single element in an attempt to match them. This is worse for attribute selectors that do partial matching rather than exact matching.

### Animations & Transitions

This section may feel a little more obvious than the last, but having more animations can lead to a drop in performance. More animations means more calculations for the users computer to handle and more rendering for it to deal with. The same can be said for transitions. This is usually not as bad when the user has a dedicated GPU and they have hardware acceleration enabled, but this is definitely not the case for all users. What's worse, is that web rendering doesn't always get put onto the dedicated GPU even if it exists and hardware acceleration is on. There are some ways to try and trick it though that we'll go over in the next section.

## Optimizations

So we've talked about some potential performance issues with selectors and animations. Now let's talk about how we can improve them.

### Selectors

#### Descendant Selectors

Here are a few tips for improving your descendant selectors while keeping up specificity.

-   Use an element closer in the tree for the next ancestor (`.main .container .row` => `.container .row-wrap .row`)
-   Use another class on the target or parent element (`.card-container .card` => `.card.card-info`)
-   Use IDs whenever possible
-   Make use of pseudo-classes on target elements
-   Consider the use of `!important` sparingly
-   Duplicate your selectors (`.container .row` => `.row.row.row`)

#### Attribute Selectors

Here are a few tips for improving your attribute selectors.

-   Consider if it's absolutely necessary.
-   Try using an exact match `[attr=value]` over a wildcard `[attr*=val]`
-   Try using native attribute selection via pseudo-classes
-   Try using state checks rather than attributes
-   Monitor the classes on the element to see if a state related class (e.g. `active`) is added when needed

### Animations & Transitions

There are a few different techniques that improve your animations and transitions. One of the first is understanding the rule of thumb: "Do not animate CSS properties that trigger layout or painting whenever possible." This includes properties like heigh and width that could cause other elements to move around as you animate. It is very difficult to produce smooth and performant animations in these cases.

You can indicate to the browser before animations and transitions what properties will change which can help the browser optimize performance. Just add `will-change: property;` to the element in question.

As we talked about above, not all animations will be rendering on the GPU when available. There a couple ways to try and trigger this, and it usually involves creating new paint layers. If you're unfamiliar with this concept, that's understandable, it's a concept internal to web browsers. But if you do want to go down this route, you can try adding a 3d `transform` to the element that does nothing (`transform: translateZ(0)`). This works in all browsers. If you're targeting just modern browsers (like Chrome/Steam) then it's enough to just do `will-change: transform`.

If you want to learn more about performant CSS animations and even learn how to debug your own, check out the [animation guide](https://web.dev/animations-guide/) from web.dev.
