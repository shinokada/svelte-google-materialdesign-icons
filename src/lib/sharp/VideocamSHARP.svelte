<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'videocam';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" /></svg
>
