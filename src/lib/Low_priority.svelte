<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>';
  let svgoutlined =
    '<path d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>';
  let svground =
    '<path d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm-5.15 3.15 1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 0 0-.85.35v3.59c0 .44.54.66.85.35zM9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.509 4.509 0 0 1 8.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9"/>';
  let svgsharp =
    '<path d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>';
  let svgtwotone =
    '<path d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>';
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
  export let ariaLabel = 'low priority';
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
