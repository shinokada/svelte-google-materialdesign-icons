<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'electric_bolt';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z" /></svg
>
