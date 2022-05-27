<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'horizontal_split';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z" /></svg
>
