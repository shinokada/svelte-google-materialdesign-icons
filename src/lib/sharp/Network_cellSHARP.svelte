<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'network_cell';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z" /></svg
>
