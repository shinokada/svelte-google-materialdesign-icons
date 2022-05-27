<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'call_to_action';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M23 3H1v18h22V3zm-2 16H3v-3h18v3z" /></svg
>
