<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled = '<path d="M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z"/>';
  let svgoutlined = '<path d="M2 4v16h20V4H2zm2 2h16v5H4V6zm0 12v-5h4v5H4zm6 0v-5h10v5H10z"/>';
  let svground =
    '<path d="M2 5v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm9 15h10c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-8 0h4c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1z"/>';
  let svgsharp = '<path d="M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z"/>';
  let svgtwotone =
    '<path d="M10 18h10v-5H10v5zM4 6v5h16V6H4zm0 12h4v-5H4v5z" opacity=".3"/><path d="M2 4v16h20V4H2zm6 14H4v-5h4v5zm12 0H10v-5h10v5zm0-7H4V6h16v5z"/>';
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
  export let ariaLabel = 'view comfy';
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
