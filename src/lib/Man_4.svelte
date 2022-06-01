<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z"/><circle cx="12" cy="4" r="2"/>';
	let svgoutlined =
		'<path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z"/><circle cx="12" cy="4" r="2"/>';
	let svground =
		'<path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L9.82 20.7c.1.74.74 1.3 1.49 1.3h1.38a1.5 1.5 0 0 0 1.49-1.3l1.56-11.44C15.89 8.07 14.96 7 13.75 7z"/><circle cx="12" cy="4" r="2"/>';
	let svgsharp = '<path d="M7.96 7 10 22h4l2.04-15z"/><circle cx="12" cy="4" r="2"/>';
	let svgtwotone =
		'<path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z"/><circle cx="12" cy="4" r="2"/>';
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
	export let ariaLabel = 'man 4';
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
