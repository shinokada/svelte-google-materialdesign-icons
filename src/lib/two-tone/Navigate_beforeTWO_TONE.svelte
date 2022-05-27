<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'navigate_before';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="m14.2 6-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" /></svg
>
