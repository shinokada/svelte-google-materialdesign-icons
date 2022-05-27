<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'priority_high';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /></svg
>
