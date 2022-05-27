<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'shop_2';
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
	><path d="M3 9H1v13h18v-2H3z" /><path
		d="M18 5V1h-8v4H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3.5L12 15z"
	/></svg
>
