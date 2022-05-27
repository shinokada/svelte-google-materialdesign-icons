<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'south_east';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z" /></svg
>
