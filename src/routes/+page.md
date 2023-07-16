# Svelte Google Materialdesign Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-google-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-google-materialdesign-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="http://www.apache.org/licenses/" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-google-materialdesign-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-google-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-google-materialdesign-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

2120+ SVG Google Materialdesign icon components for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on [GitHub sponsor](https://github.com/sponsors/shinokada). Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-google-materialdesign-icons)

## Original source

[Google Fonts](https://github.com/google/fonts)

## License

[Svelte-Coreui-Icons License](https://github.com/google/fonts#license)

[Google Fonts LICENSE](https://github.com/coreui/coreui-icons/blob/main/LICENSE)

## Installation

```sh
pnpm i -D svelte-google-materialdesign-icons
```

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

Since a component name can't be started with a number, if a SVG file name starts with a number, `A` is prefixed.
For example, `30fps_select.svg` will be named as `A30fps_select.svelte`.

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Hiking from 'svelte-google-materialdesign-icons/Hiking.svelte';
</script>

<Hiking />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

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

- size = '24';
- role = 'img';
- ariaLabel = 'icon file name';
- variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.

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

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Hiking class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Hiking size="50" color="#ff0000" />
<Double_arrow size="50" color="#3a7cff" />
<Javascript size="50" color="#3fe537" />
```

## CSS framworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

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

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

## Icon finder

You can find icon images at [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)