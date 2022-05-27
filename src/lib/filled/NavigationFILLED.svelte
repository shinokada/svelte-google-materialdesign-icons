<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'navigation';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg
>
