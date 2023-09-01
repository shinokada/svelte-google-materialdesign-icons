<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/>';
  let svgoutlined =
    '<path d="m21 19.57-1.427 1.428-6.442-6.442 1.43-1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.086 10.086 0 0 0 13.12 3zM6.14 17.27a8.063 8.063 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.063 8.063 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"/>';
  let svground =
    '<path d="m13.13 14.56 1.43-1.43 5.73 5.73c.39.39.39 1.03 0 1.43-.39.39-1.03.39-1.43 0l-5.73-5.73zm4.29-5.73 1.27-1.27c.89-.89.77-2.43-.31-3.08a10.1 10.1 0 0 0-12.4 1.47c3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.36 3.37-3.85 8.51-1.48 12.4.66 1.08 2.19 1.21 3.08.31l1.27-1.27C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/>';
  let svgsharp =
    '<path d="M5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm11.47 2.85 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.97 5.96l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3zm7.156 8.6 1.428-1.428 6.442 6.442-1.43 1.428z"/>';
  let svgtwotone =
    '<path d="M7.6 7.6c-.47 2.34.03 4.78 1.39 6.83l5.45-5.45a9.126 9.126 0 0 0-5.08-1.56c-.6 0-1.19.06-1.76.18zM13.12 5c-.93 0-1.82.16-2.67.46 1.91.19 3.79.89 5.44 2.07l1.39-1.39A8.126 8.126 0 0 0 13.12 5zM5 13.12c0 1.49.4 2.91 1.14 4.15l1.39-1.39a11.247 11.247 0 0 1-2.07-5.44c-.3.86-.46 1.76-.46 2.68z" opacity=".3"/><path d="m13.126 14.56 1.428-1.428 6.442 6.442-1.43 1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.086 10.086 0 0 0 13.12 3zM6.14 17.27a8.063 8.063 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.063 8.063 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"/>';
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
  export let ariaLabel = 'beach access';
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
@prop export let ariaLabel = 'beach access';
-->
