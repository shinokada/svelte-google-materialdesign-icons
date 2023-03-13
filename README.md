<h1 align="center">Svelte Google Materialdesign Icons</h1>

<p align="center">
<a href="https://svelte-google-materialdesign-icons.codewithshin.com/">Svelte-Google-Materialdesign-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-google-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-google-materialdesign-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="http://www.apache.org/licenses/" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-google-materialdesign-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-google-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-google-materialdesign-icons.svg" alt="npm" height="25"></a>
</p>

10600+ SVG Google Materialdesign icon components for Svelte. Icons support major CSS frameworks using the `class` props. There are five types, filled, outlined, round, sharp, and two-tone.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


<p align="center">
<img width="650" src="/static/images/google-outlined-optimized-650-1050.png" />
</p>

## Installation

```sh
npm i -D svelte-google-materialdesign-icons
```

## Icon names

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

Since a component name can't be started with a number, if a SVG file name starts with a number, `A` is prefixed.
For example, `30fps_select.svg` will be named as `A30fps_select.svelte`.

## Usages

In a svelte file:

```html
<script>
  import { Hiking, Double_arrow, Javascript } from 'svelte-google-materialdesign-icons';
</script>

<Hiking />
<Double_arrow />
<Javascript />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Hiking from 'svelte-google-materialdesign-icons/Hiking.svelte';
</script>

<Hiking />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

| Name                                                 | Default   |
| ---------------------------------------------------- | --------- |
| size                                                 | 24        |
| class                                                |           |
| ariaLabel                                            | file name |
| variation (filled, outlined, round, sharp, two-tone) | outlined  |

## Variation

The default variation value is outline. Use the `variation` prop to change it to solid.

```html
<Hiking variation="two-tone" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<Hiking size="30" />
<Double_arrow size="40" />
<Javascript size="50" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Hiking size="50" color="#ff0000" />
<Double_arrow size="50" color="#3a7cff" />
<Javascript size="50" color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<Hiking class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<Hiking class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Hiking class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `Hiking` has `aria-label="hiking"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Hiking ariaLabel="Hiking icon" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Hiking tabindex="-1" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<Hiking tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Hiking } from 'svelte-google-materialdesign-icons';
</script>

<svelte:component this="{Hiking}" />
```

## Using onMount

```html
<script>
  import { Hiking } from 'svelte-google-materialdesign-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Hiking({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-google-materialdesign-icons`.

```html
<script>
  import * as Icon from 'svelte-google-materialdesign-icons';
</script>

<Icon.Hiking />
<Icon.Double_arrow />

<h1>Size</h1>
<Icon.Hiking size="50" />
<Icon.Double_arrow size="50" />

<h1>CSS HEX color</h1>
<Icon.Hiking size="50" color="#ff0000" />
<Icon.Double_arrow size="50" color="#3a7cff" />

<h1>Tailwind CSS</h1>
<Icon.Hiking size="50" class="text-pink-700" />
<Icon.Double_arrow size="50" class="text-blue-500" />
```

## Orignal SVG icons

[marella/material-design-icons](https://github.com/marella/material-design-icons/tree/main/svg/filled)

## Icon finder

You can find icon images at [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
