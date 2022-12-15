<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>';
  let svgoutlined =
    '<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>';
  let svground =
    '<path d="M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41z"/><path d="M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41z"/>';
  let svgsharp =
    '<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>';
  let svgtwotone =
    '<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>';
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
  export let ariaLabel = 'keyboard double arrow up';
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
