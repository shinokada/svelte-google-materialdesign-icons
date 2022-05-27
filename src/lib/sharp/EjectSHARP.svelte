<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'eject';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" /></svg
>
