<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'trending_flat';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="m22 12-4-4v3H3v2h15v3z" /></svg
>
