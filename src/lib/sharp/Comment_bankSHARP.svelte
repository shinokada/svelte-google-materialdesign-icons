<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'comment_bank';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M2 2v20l4-4h16V2H2zm17 11-2.5-1.5L14 13V5h5v8z" /></svg
>
