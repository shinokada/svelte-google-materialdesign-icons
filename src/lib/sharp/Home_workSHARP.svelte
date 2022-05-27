<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'home_work';
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
	><path d="M1 11v10h5v-6h4v6h5V11L8 6z" /><path
		d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"
	/></svg
>
