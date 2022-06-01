<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled = '<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>';
	let svgoutlined = '<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>';
	let svground =
		'<path d="M11.29 8.71 6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z"/>';
	let svgsharp = '<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>';
	let svgtwotone = '<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>';
	switch (variation) {
		case 'filled':
			svgpath = svgfilled;
			break;
		case 'outlined':
			svgpath = svgoutlined;
			break;
		case 'round':
			svgpath = svground;
			break;
		case 'sharp':
			svgpath = svgsharp;
			break;
		case 'two-tone':
			svgpath = svgtwotone;
			break;
		default:
			svgpath = svgoutlined;
	}
	export let ariaLabel = 'expand less';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
>
	{@html svgpath}
</svg>
