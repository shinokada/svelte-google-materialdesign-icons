<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>';
	let svgoutlined =
		'<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>';
	let svground =
		'<path d="M18 18.5v-1c0-.83-.67-1.5-1.5-1.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75V18zm6.5-2H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm13.25-.5H22v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20h-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>';
	let svgsharp =
		'<path d="M18 19.9V16h-5v6h1.5v-2h1.1l.9 2H18l-.9-2.1h.9zm-1.5-1.4h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>';
	let svgtwotone =
		'<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>';
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
	export let ariaLabel = 'hdr on select';
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
