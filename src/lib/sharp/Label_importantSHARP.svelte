<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'label_important';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" /></svg
>
