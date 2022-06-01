<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M8 8.5c0-.28.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3h-2v-2h3v-2.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5zM14 20H8v-2h6v2z"/>';
	let svgoutlined =
		'<path d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3v-4a3.96 3.96 0 0 0-2.91-3.82l-2.62-.74C12.62 9.19 12 8.39 12 7.5V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zM5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5zm9 4H8v-2h6v2z"/>';
	let svground =
		'<path d="M21.87 17c-.47 0-.85.34-.98.8A2.997 2.997 0 0 1 18 20h-2v-2h1c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h15c2.33 0 4.29-1.6 4.84-3.75.17-.63-.32-1.25-.97-1.25zM14 20H8v-2h6v2z"/>';
	let svgsharp =
		'<path d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3l-.01-6-5.71-1.43A3 3 0 0 1 11.32 9H8V8h3.02L11 7H8V6h3V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zm-7 3H8v-2h6v2z"/>';
	let svgtwotone =
		'<path d="M5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5z" opacity=".3"/><path d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3v-4a3.96 3.96 0 0 0-2.91-3.82l-2.62-.74C12.62 9.19 12 8.39 12 7.5V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zM5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5zm9 4H8v-2h6v2z"/>';
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
	export let ariaLabel = 'ice skating';
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
