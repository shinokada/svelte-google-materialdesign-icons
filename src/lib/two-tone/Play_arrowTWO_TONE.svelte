<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'play_arrow';
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
	><path d="M10 8.64v6.72L15.27 12z" opacity=".3" /><path
		d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"
	/></svg
>
