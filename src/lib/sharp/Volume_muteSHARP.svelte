<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'volume_mute';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M7 9v6h4l5 5V4l-5 5H7z" /></svg
>
