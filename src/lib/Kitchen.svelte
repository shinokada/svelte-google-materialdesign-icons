<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>';
	let svgoutlined =
		'<path d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/>';
	let svground =
		'<path d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM17 20H7c-.55 0-1-.45-1-1v-7.02c0-.55.45-1 1-1h10c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1zm0-11H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zM9 5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm0 7c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1z"/>';
	let svgsharp =
		'<path d="M20 2.01 4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z"/>';
	let svgtwotone =
		'<path d="M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6V20zm2-8h2v5H8v-5zM6 9h12V4H6v5zm2-4h2v3H8V5z" opacity=".3"/><path d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>';
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
	export let ariaLabel = 'kitchen';
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
