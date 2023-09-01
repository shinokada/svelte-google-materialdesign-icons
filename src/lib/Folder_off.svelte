<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M20 6h-8l-2-2H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1z"/>';
  let svgoutlined =
    '<path d="M20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1zM4 18V6.83L15.17 18H4z"/>';
  let svground =
    '<path d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.85.85c-.14.28-.23.59-.23.93L2 18c0 1.1.9 2 2 2h13.17l2.61 2.61a.996.996 0 1 0 1.41-1.41L2.81 2.81zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"/>';
  let svgsharp =
    '<path d="m12 6-2-2H6.83L22 19.17V6zM2.1 2.1.69 3.51 2 4.83V20h15.17l3.32 3.31 1.41-1.41z"/>';
  let svgtwotone =
    '<path d="M15.17 18 4 6.83V18zm-4-10L20 17.17V8z" opacity=".3"/><path d="m.69 3.51 1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1.69 3.51zM15.17 18H4V6.83L15.17 18zM20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"/>';
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
  export let ariaLabel = 'folder off';
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
@prop export let ariaLabel = 'folder off';
-->
