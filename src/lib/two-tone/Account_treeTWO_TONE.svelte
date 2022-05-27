<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'account_tree';
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
	><path
		d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"
	/><path d="M7 5v4H4V5h3m13 0v4h-3V5h3m0 10v4h-3v-4h3" opacity=".3" /></svg
>
