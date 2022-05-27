<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'view_array';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z" /></svg
>
