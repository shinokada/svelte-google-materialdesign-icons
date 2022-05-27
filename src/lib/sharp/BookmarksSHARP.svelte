<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'bookmarks';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" /></svg
>
