<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41 6.41 21z"/>';
  let svgoutlined =
    '<path d="M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41 6.41 21z"/>';
  let svground =
    '<path d="M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12a.996.996 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a.996.996 0 1 1-1.41-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88a.996.996 0 0 1-1.41 0z"/>';
  let svgsharp =
    '<path d="M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41 6.41 21z"/>';
  let svgtwotone =
    '<path d="M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41 6.41 21z"/>';
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
  export let ariaLabel = 'merge';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
>
  {@html svgpath}
</svg>
