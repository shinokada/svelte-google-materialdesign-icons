<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'logout';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M5 5h7V3H3v18h9v-2H5z" /><path d="m21 12-4-4v3H9v2h8v3z" /></svg
>
