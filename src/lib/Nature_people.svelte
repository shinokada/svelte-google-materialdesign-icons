<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"/>';
  let svgoutlined =
    '<circle cx="4.5" cy="9.5" r="1.5"/><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>';
  let svground =
    '<circle cx="4.5" cy="9.5" r="1.5"/><path d="M22.17 9.17c0-3.91-3.19-7.06-7.11-7-3.83.06-6.99 3.37-6.88 7.19a6.986 6.986 0 0 0 5.83 6.7V20H6v-3h.5c.28 0 .5-.22.5-.5V13c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.5c0 .28.22.5.5.5H3v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-2v-3.88a7 7 0 0 0 6.17-6.95z"/>';
  let svgsharp =
    '<path d="M22.17 9.17c0-3.91-3.19-7.06-7.11-7-3.83.06-6.99 3.37-6.88 7.19a6.986 6.986 0 0 0 5.83 6.7V20H6v-3h1v-5H2v5h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"/>';
  let svgtwotone =
    '<circle cx="15.17" cy="9.17" r="5" opacity=".3"/><circle cx="4.5" cy="9.5" r="1.5"/><path d="M15.17 2.17c-3.87 0-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>';
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
  export let ariaLabel = 'nature people';
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
