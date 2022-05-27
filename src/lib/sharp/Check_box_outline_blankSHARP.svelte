<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'check_box_outline_blank';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m2-2H3v18h18V3z" /></svg
>
