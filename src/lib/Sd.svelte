<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm-3.5 4.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1h1.5v.5h2zm5 0h2v-3h-2v3z"/>';
  let svgoutlined =
    '<path d="M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1zm11-1v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z"/><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>';
  let svground =
    '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm-3.5 4.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1h1.5v.5h2zm5 0h2v-3h-2v3z"/>';
  let svgsharp =
    '<path d="M2 4v16h20V4H2zm11 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm-3.5 4.5v-1H6V9h5v2H9.5v-.5h-2v1H11V15H6v-2h1.5v.5h2zm5 0h2v-3h-2v3z"/>';
  let svgtwotone =
    '<path d="M4 18h16V6H4v12zm9-9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm-7 4h1.5v.5h2v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1z" opacity=".3"/><path d="M14.5 10.5h2v3h-2z" opacity=".3"/><path d="M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1zm11-1v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z"/><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>';
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
  export let ariaLabel = 'sd';
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
