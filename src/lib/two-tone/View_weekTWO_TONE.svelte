<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'view_week';
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
	><path d="M8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" opacity=".3" /><path
		d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
	/></svg
>
