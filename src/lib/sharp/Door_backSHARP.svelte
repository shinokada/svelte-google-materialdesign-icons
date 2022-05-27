<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'door_back';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M19 19V3H5v16H3v2h18v-2h-2zm-8-6H9v-2h2v2z" /></svg
>
