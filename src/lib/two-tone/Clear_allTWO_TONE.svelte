<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'clear_all';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" /></svg
>
