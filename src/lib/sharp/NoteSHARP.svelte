<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'note';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z" /></svg
>
