# Custom File Structure

::: warning
This is entirely optional, and is not required. It simply provides you more granular control over the theming logic.
:::

As promised in [theme structure](../introduction/structure.md) section, we'll now go over some more advanced theme configurations.

As we've discussed before, we used `UseDefaultPatches` as a placeholder for our config: we let Millennium handle all of the hard work.

Obviously, this whole time `UseDefaultPatches` was actually doing something behind the scenes. Traditionally, Millennium themes require a `Patches` object in the theme config which specifies what files should be loaded into what windows. Essentially, `UseDefaultPatches` tells Millennium to use the following config:

::: details UseDefaultPatches

```json
{
	"Patches": [
		{
			"MatchRegexString": "https://.*.steampowered.com",
			"TargetCss": "webkit.css",
			"TargetJs": "webkit.js"
		},
		{
			"MatchRegexString": "https://steamcommunity.com",
			"TargetCss": "webkit.css",
			"TargetJs": "webkit.js"
		},
		{
			"MatchRegexString": "^Steam$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "^OverlayBrowser_Browser$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "^SP Overlay:",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "Supernav$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "^notificationtoasts_",
			"TargetCss": "notifications.custom.css",
			"TargetJs": "notifications.custom.js"
		},
		{
			"MatchRegexString": "^SteamBrowser_Find$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "^OverlayTab\\d+_Find$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": "^Steam Big Picture Mode$",
			"TargetCss": "bigpicture.custom.css",
			"TargetJs": "bigpicture.custom.js"
		},
		{
			"MatchRegexString": "^QuickAccess_",
			"TargetCss": "bigpicture.custom.css",
			"TargetJs": "bigpicture.custom.js"
		},
		{
			"MatchRegexString": "^MainMenu_",
			"TargetCss": "bigpicture.custom.css",
			"TargetJs": "bigpicture.custom.js"
		},
		{
			"MatchRegexString": ".friendsui-container",
			"TargetCss": "friends.custom.css",
			"TargetJs": "friends.custom.js"
		},
		{
			"MatchRegexString": "Menu$",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": ".ModalDialogPopup",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		},
		{
			"MatchRegexString": ".FullModalOverlay",
			"TargetCss": "libraryroot.custom.css",
			"TargetJs": "libraryroot.custom.js"
		}
	]
}
```

:::

## Should I use my own config instead?

It depends; we don't have a perfect answer.

Many existing themes don't bother changing this and just use the default patches. If we _had_ to give a recommendation, we'd likely recommend sticking with the default patches for a while, and if your theme gets to a point where you _need_ more control, then migrate away from the default patches to custom ones.

## About Patches

The `Patches` object is relatively simple. its a list of regex search tests Millennium will run against Steam.

It runs the regex against:

-   Steam browser view URL (ex: `https://.\*.steampowered.com`)
-   Steam window titles (ex: `^Steam$`)
-   Steam window DOM body classes (ex: `.FullModalOverlay`)

### Example

The following `Patches` object will load `libraryroot.custom.js` and `libraryroot.custom.css` into all open steam windows that have the `FullModalOverlay` classname in the body of the DOM.

::: tip IMPORTANT
When we say "body", this does not include all children elements within `<body />`, its strictly the classnames on `<body />` itself.
:::

```json [skin.json]
{
	"MatchRegexString": ".FullModalOverlay",
	"TargetCss": "libraryroot.custom.css",
	"TargetJs": "libraryroot.custom.js"
}
```

If any of the tests evaluate to true, Millennium loads the `TargetJs` and `TargetCss` into the matching windows DOM.
