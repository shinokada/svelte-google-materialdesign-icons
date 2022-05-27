<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'vertical_align_top';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z" /></svg
>
