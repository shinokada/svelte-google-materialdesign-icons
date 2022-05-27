<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'web_asset';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" /></svg
>
