<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'keyboard_double_arrow_down';
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
	><path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" /><path
		d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
	/></svg
>
