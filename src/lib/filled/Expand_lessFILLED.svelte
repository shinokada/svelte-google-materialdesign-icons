<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'expand_less';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /></svg
>
