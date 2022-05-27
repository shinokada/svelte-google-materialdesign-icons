<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'hexagon';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" /></svg
>
