<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>';
	let svgoutlined =
		'<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"/>';
	let svground =
		'<path d="m11.3 2.26-6 2.25C4.52 4.81 4 5.55 4 6.39v4.71c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V6.39a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01zm-1.07 12.57-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01z"/>';
	let svgsharp =
		'<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>';
	let svgtwotone =
		'<path d="M6 6.31v4.78c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83V6.31l-6-2.12-6 2.12zm10.6 3.57-5.66 5.66L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.43 1.41z" opacity=".3"/><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"/>';
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
	export let ariaLabel = 'gpp good';
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
