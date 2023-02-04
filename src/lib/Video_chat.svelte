<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 11-2-1.99V13c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1.99L17 7v6z"/>';
  let svgoutlined =
    '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M8 14h6c.55 0 1-.45 1-1v-1.99L17 13V7l-2 1.99V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z"/>';
  let svground =
    '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.85 10.15L15 11.01V13c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1.99l1.15-1.14c.31-.32.85-.09.85.35v3.59c0 .45-.54.68-.85.36z"/>';
  let svgsharp = '<path d="M2 2v20l4-4h16V2H2zm15 11-2-1.99V14H7V6h8v2.99L17 7v6z"/>';
  let svgtwotone =
    '<path d="M4 17.17 5.17 16H20V4H4v13.17zM7 7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1.99L17 7v6l-2-1.99V13c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V7z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M8 14h6c.55 0 1-.45 1-1v-1.99L17 13V7l-2 1.99V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z"/>';
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
  export let ariaLabel = 'video chat';
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
