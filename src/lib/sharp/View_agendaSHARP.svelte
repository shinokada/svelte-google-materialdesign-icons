<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'view_agenda';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M3 13h18v8H3zM3 3h18v8H3z" /></svg
>
