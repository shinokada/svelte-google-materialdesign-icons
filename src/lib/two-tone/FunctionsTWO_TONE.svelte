<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'functions';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z" /></svg
>
