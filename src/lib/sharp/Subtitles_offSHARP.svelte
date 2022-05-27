<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'subtitles_off';
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
	><path
		d="m6.83 4 8 8H20v2h-3.17L22 19.17V4zm-5.79-.13.96.96V20h15.17l2.96 2.96 1.41-1.41L2.45 2.45 1.04 3.87zM4 12h4v2H4v-2zm0 4h9.17l.83.83V18H4v-2z"
	/></svg
>
