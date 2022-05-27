<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'drag_handle';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" /></svg
>
