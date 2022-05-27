<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'unfold_less_double';
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
	><path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" /><path
		d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
	/><path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" /></svg
>
