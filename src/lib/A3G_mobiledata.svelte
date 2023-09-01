<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H3zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2H21z"/>';
  let svgoutlined =
    '<path d="M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H3zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2H21z"/>';
  let svground =
    '<path d="M3 8c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h3v2H4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1zm18 4v3c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6h5v-2h-1.5c-.55 0-1-.45-1-1s.45-1 1-1H20c.55 0 1 .45 1 1z"/>';
  let svgsharp = '<path d="M3 7v2h5v2H4v2h4v2H3v2h7V7H3zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2H21z"/>';
  let svgtwotone =
    '<path d="M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H3zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2H21z"/>';
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
  export let ariaLabel = '3g mobiledata';
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
@prop export let ariaLabel = '3g mobiledata';
-->
