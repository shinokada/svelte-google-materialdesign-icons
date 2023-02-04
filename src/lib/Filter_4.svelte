<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>';
  let svgoutlined =
    '<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>';
  let svground =
    '<path d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm14 10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v3h-2V6c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1zm5-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z"/>';
  let svgtwotone =
    '<path d="M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z" opacity=".3"/><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm4-4h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3zm8 6h-2V5h-2v6h4v4h2V5h-2z"/>';
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
  export let ariaLabel = 'filter 4';
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
