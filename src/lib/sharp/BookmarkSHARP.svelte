<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'bookmark';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M19 3H5v18l7-3 7 3V3z" /></svg
>
