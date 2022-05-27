<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'label';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z" /></svg
>
