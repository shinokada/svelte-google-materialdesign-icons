<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'change_history';
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
	><path d="M12 7.77 5.61 18h12.78z" opacity=".3" /><path
		d="M12 4 2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"
	/></svg
>
