<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'view_week';
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
	><path d="M7.33 20H2V4h5.33v16zM22 20V4h-5.33v16H22zm-7.33 0V4H9.33v16h5.34z" /></svg
>
