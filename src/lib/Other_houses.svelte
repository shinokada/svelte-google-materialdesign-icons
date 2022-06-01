<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
	let svgpath: string;
	let svgfilled =
		'<path d="M12 3 1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
	let svgoutlined =
		'<path d="M12 3 1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16H6v-8.9l6-4.58 6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>';
	let svground =
		'<path d="M1.61 12.19c.34.44.96.52 1.4.19l.99-.76V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19a.992.992 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0l-9.6 7.33c-.43.34-.52.97-.18 1.4zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
	let svgsharp =
		'<path d="M12 3 1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
	let svgtwotone =
		'<path d="M12 5.52 6 10.1V19h12v-8.9l-6-4.58zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3"/><path d="M12 3 1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16H6v-8.9l6-4.58 6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>';
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
	export let ariaLabel = 'other houses';
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
