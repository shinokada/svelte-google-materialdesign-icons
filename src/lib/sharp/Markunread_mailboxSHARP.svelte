<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'markunread_mailbox';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"><path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" /></svg
>
