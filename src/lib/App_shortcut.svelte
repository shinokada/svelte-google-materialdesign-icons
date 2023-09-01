<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm3.38-8.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/>';
  let svgoutlined =
    '<path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1zm3.38-11.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/>';
  let svground =
    '<path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm3.38-8.38.4.87c.09.2.37.2.46 0l.4-.87.87-.4c.2-.09.2-.37 0-.46l-.87-.4-.4-.87c-.09-.2-.37-.2-.46 0l-.4.87-.87.4c-.2.09-.2.37 0 .46l.87.4z"/><path d="m15.54 9-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79L16.46 9a.508.508 0 0 0-.92 0zm5.23 4.5-.4.87-.87.4c-.2.09-.2.37 0 .46l.87.4.4.87c.09.2.37.2.46 0l.4-.87.87-.4c.2-.09.2-.37 0-.46l-.87-.4-.4-.87a.257.257 0 0 0-.46 0z"/>';
  let svgsharp =
    '<path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2zm3.38-8.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/>';
  let svgtwotone =
    '<path d="M7 20h10v1H7zM7 3h10v1H7z" opacity=".3"/><path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1zm3.38-11.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/>';
  switch (variation) {
    case 'filled':
      svgpath = svgfilled;
      break;
    case 'outlined':
      svgpath = svgoutlined;
      break;
    case 'round':
      svgpath = svground;
      break;
    case 'sharp':
      svgpath = svgsharp;
      break;
    case 'two-tone':
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
  export let ariaLabel = 'app shortcut';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
@prop export let ariaLabel = 'app shortcut';
-->
