<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"/>';
	let svgoutlined =
		'<path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm6 14H5V5h4v14zM19 3h-6v8h8V5c0-1.1-.9-2-2-2zm0 6h-4V5h4v4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8v8zm2-6h4v4h-4v-4z"/>';
	let svground =
		'<path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"/>';
	let svgsharp = '<path d="M3 21h8V3H3v18zM21 3h-8v8h8V3zm-8 18h8v-8h-8v8z"/>';
	let svgtwotone =
		'<path d="M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z" opacity=".3"/><path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm6 14H5V5h4v14zM19 3h-6v8h8V5c0-1.1-.9-2-2-2zm0 6h-4V5h4v4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8v8zm2-6h4v4h-4v-4z"/>';
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
	export let ariaLabel = 'auto awesome mosaic';
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
