<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'wifi_1_bar';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><circle cx="12" cy="18" r="2" /></svg
>
