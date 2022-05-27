<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'switch_left';
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
	><path d="M8.5 8.62v6.76L5.12 12 8.5 8.62" opacity=".3" /><path
		d="M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z"
	/></svg
>
