<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'rectangle';
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
	><path d="M4 6h16v12H4z" opacity=".3" /><path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" /></svg
>
