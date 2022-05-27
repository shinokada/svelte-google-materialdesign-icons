<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'height';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z" /></svg
>
