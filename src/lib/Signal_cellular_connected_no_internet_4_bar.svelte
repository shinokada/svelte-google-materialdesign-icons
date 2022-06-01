<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled = '<path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>';
	let svgoutlined = '<path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>';
	let svground =
		'<path d="M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4.41 22H18V11c0-1.66 1.34-3 3-3h1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z"/>';
	let svgsharp = '<path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>';
	let svgtwotone = '<path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>';
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
	export let ariaLabel = 'signal cellular connected no internet 4 bar';
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
