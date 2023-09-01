<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"/>';
  let svgoutlined =
    '<path d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"/>';
  let svground =
    '<path d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"/>';
  let svgsharp =
    '<path d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"/>';
  let svgtwotone =
    '<path d="M12 7c-7.91 0-8 4.8-8 5h16c-.01-.49-.36-5-8-5zM9.14 17h5.72c2.1 0 3.92-1.24 4.71-3H4.42c.8 1.76 2.62 3 4.72 3z" opacity=".3"/><path d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm2.86 12H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3zM4 12c0-.2.09-5 8-5 7.64 0 7.99 4.51 8 5H4z"/>';
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
  export let ariaLabel = 'home mini';
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
@prop export let ariaLabel = 'home mini';
-->
