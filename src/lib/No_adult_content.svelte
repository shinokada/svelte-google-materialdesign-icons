<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"/><path d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"/>';
  let svgoutlined =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"/><path d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"/>';
  let svground =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"/><path d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"/>';
  let svgsharp =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"/><path d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"/>';
  let svgtwotone =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"/><path d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"/>';
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
  export let ariaLabel = 'no adult content';
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
@prop export let ariaLabel = 'no adult content';
-->
