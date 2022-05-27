<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'double_arrow';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
	><path d="M15.5 5H11l5 7-5 7h4.5l5-7z" /><path d="M8.5 5H4l5 7-5 7h4.5l5-7z" /></svg
>
