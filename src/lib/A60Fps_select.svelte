<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M18 6v6h-3V6h3zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h5zm-2 4v2H6v-2h3zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"/>';
  let svgoutlined =
    '<path d="M18 6v6h-3V6h3zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h5zm-2 4v2H6v-2h3zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"/>';
  let svground =
    '<path d="M18 6v6h-3V6h3zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 1c0-.55-.45-1-1-1H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h4c.55 0 1-.45 1-1zm-2 5v2H6v-2h3zM4 22c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm8 0h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M18 6v6h-3V6h3zm2-2h-7v10h7V4zm-9 2V4H4v10h7V8H6V6h5zm-2 4v2H6v-2h3zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"/>';
  let svgtwotone =
    '<path d="M18 6v6h-3V6h3zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h5zm-2 4v2H6v-2h3zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"/>';
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
  export let ariaLabel = '60fps select';
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
@prop export let ariaLabel = '60fps select';
-->
