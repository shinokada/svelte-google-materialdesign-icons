<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"/>';
  let svgoutlined =
    '<path d="m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"/>';
  let svground =
    '<path d="M21.34 6.77a1 1 0 0 0-1.45.04l-3.33 3.74-5.65-5.24c-.79-.73-2.01-.71-2.77.05L2.7 10.81a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.02.39 1.41 0l5.44-5.45 5.59 5.19L13.5 14l-2.58-2.58c-.78-.78-2.05-.78-2.83 0L2.7 16.8a.996.996 0 0 0 0 1.41l.1.09c.39.39 1.02.39 1.41 0l5.3-5.3 2.5 2.5c.81.81 2.14.77 2.91-.09l1.78-2.01 3.19 2.96c.39.36 1 .35 1.38-.03l.01-.01c.4-.4.39-1.05-.03-1.43l-3.22-2.99 3.35-3.77c.35-.39.33-.99-.04-1.36z"/>';
  let svgsharp =
    '<path d="m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"/>';
  let svgtwotone =
    '<path d="m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"/>';
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
  export let ariaLabel = 'line axis';
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
@prop export let ariaLabel = 'line axis';
-->
