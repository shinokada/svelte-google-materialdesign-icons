<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'system_security_update_warning';
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
	><path d="M11 15h2v2h-2zm0-8h2v6h-2z" /><path d="M5.01 1v22H19V1H5.01zM17 18H7V6h10v12z" /></svg
>
