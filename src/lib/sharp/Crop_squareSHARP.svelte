<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'crop_square';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" /></svg
>
