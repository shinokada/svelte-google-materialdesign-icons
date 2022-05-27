<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow_forward_ios';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" /></svg
>
