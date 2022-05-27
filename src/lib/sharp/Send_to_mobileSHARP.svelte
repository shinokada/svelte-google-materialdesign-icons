<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'send_to_mobile';
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
	><path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z" /><path d="m22 12-4-4v3h-5v2h5v3z" /></svg
>
