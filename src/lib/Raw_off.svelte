<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m17.15 14.32.59-2.36.76 3.04h1.48l1.5-6h-1.5l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-.67l1.43 1.43L8.75 15h1.5l.38-1.5h.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z"/>';
  let svgoutlined =
    '<path d="m17.15 14.32.59-2.36.76 3.04h1.48l1.5-6h-1.5l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-.67l1.43 1.43L8.75 15h1.5l.38-1.5h.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z"/>';
  let svground =
    '<path d="M20.55 9c-.33 0-.63.23-.71.55l-.6 2.45-.56-2.26c-.1-.44-.49-.74-.94-.74s-.84.3-.94.74L16.24 12l-.6-2.45a.73.73 0 0 0-1.42.35l.5 1.99 2.42 2.42c0-.01.01-.02.01-.03l.58-2.32.58 2.32c.12.42.5.72.93.72s.81-.3.92-.72l1.09-4.38a.72.72 0 0 0-.7-.9zM3.51 3.51A.996.996 0 1 0 2.1 4.92L6.17 9H4c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V13h1.1l.72 1.59c.12.25.37.41.64.41.5 0 .83-.51.64-.97L7.1 12.9c.5-.3.9-.8.9-1.4v-.67l1.43 1.43-.45 1.84c-.12.46.23.9.7.9.33 0 .62-.23.7-.55l.24-.95h.04l8.4 8.4a.996.996 0 1 0 1.41-1.41L3.51 3.51zM6.5 11.5h-2v-1h2v1z"/>';
  let svgsharp =
    '<path d="m17.15 14.32.59-2.36.76 3.04h1.48l1.5-6h-1.5l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-.67l1.43 1.43L8.75 15h1.5l.38-1.5h.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z"/>';
  let svgtwotone =
    '<path d="m17.15 14.32.59-2.36.76 3.04h1.48l1.5-6h-1.5l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-.67l1.43 1.43L8.75 15h1.5l.38-1.5h.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z"/>';
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
  export let ariaLabel = 'raw off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
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
  [Go to Document](https://svelte-google-materialdesign-icons.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop color="currentColor";
  @prop variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  @prop ariaLabel="icon name"
  ## Event
  - on:click
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->
