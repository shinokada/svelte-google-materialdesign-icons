# Svelte-Google-Materialdesign-Icons

[![npm version](https://badgen.net/npm/v/svelte-google-materialdesign-icons)](https://www.npmjs.com/package/svelte-google-materialdesign-icons)
[![license](https://badgen.net/npm/license/svelte-google-materialdesign-icons)](https://github.com/shinokada/svelte-google-materialdesign-icons/blob/main/LICENSE)

10600+ SVG Google Materialdesign icon components for Svelte. Icons support major CSS frameworks using the `class` props.

## Icon name list

[Icon list](https://github.com/shinokada/svelte-google-materialdesign-icons/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-google-materialdesign-icons
```

## Usages

In a svelte file:

```html
<script>
	import {
		HistoryFILLED,
		Heart_brokenOUTLINED,
		Heart_brokenFILLED,
		Heart_brokenSHARP,
		Heart_brokenROUND,
		AirplayROUND,
		AirplaySHARP,
		AirplayTWO_TONE,
		AirplayOUTLINED
	} from 'svelte-google-materialdesign-icons';
</script>

<HistoryFILLED />
<Heart_brokenOUTLINED />
<Heart_brokenFILLED />
<Heart_brokenSHARP />
<Heart_brokenROUND />
<Heart_brokenTWO_TONE />
<AirplayROUND />
<AirplaySHARP />
<AirplayTWO_TONE />
<AirplayOUTLINED />
```

## Size

Use the `size` prop to change the size of icons.

```html
<HistoryFILLED size="50" />
<Heart_brokenOUTLINED size="50" />
<Heart_brokenFILLED size="50" />
<Heart_brokenSHARP size="50" />
<Heart_brokenROUND size="50" />
<Heart_brokenTWO_TONE size="50" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<HistoryFILLED size="50" color="#ff0000" />
<Heart_brokenOUTLINED size="50" color="#3a7cff" />
<Heart_brokenFILLED size="50" color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<AirplayOUTLINED class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<AirplayOUTLINED class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AirplayOUTLINED class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `AirplayOUTLINED` has `aria-label="airplay"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AirplayOUTLINED ariaLabel="Airplay outlined" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AirplayOUTLINED tabindex="0" />
```

## Using svelte:component

```html
<script>
	import { AirplayOUTLINED } from 'svelte-google-materialdesign-icons';
</script>

<svelte:component this="{AirplayOUTLINED}" />
```

## Using onMount

```html
<script>
	import { AirplayOUTLINED } from 'svelte-google-materialdesign-icons';
	import { onMount } from 'svelte';
	const props = {
		size: '50',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new AirplayOUTLINED({ target: document.body, props });
	});
</script>
```

## Import all

Use `import * as Icon from 'svelte-google-materialdesign-icons`.

```html
<script>
	import * as Icon from 'svelte-google-materialdesign-icons';
</script>

<Icon.HistoryFILLED />
<Icon.Heart_brokenOUTLINED />

<h1>Size</h1>
<Icon.HistoryFILLED size="50" />
<Icon.Heart_brokenOUTLINED size="50" />

<h1>CSS HEX color</h1>
<Icon.HistoryFILLED size="50" color="#ff0000" />
<Icon.Heart_brokenOUTLINED size="50" color="#3a7cff" />

<h1>Tailwind CSS</h1>
<Icon.HistoryFILLED size="50" class="text-pink-700" />
<Icon.Heart_brokenOUTLINED size="50" class="text-blue-500" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
