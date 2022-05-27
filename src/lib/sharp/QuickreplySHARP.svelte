<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'quickreply';
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
	><path d="M22 2H2v20l4-4h9v-8h7z" /><path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z" /></svg
>
