<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'price_check';
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
		d="M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zm8.59 4.52-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"
	/></svg
>
