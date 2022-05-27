<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'forward';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M12 8V4l8 8-8 8v-4H4V8z" /></svg
>
