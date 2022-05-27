<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'view_day';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z" /></svg
>
