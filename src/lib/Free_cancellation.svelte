<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M11.21 20H5V10h14v4.38l2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h8.21l-2-2zm5.33 2.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14 12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z"/>';
  let svgoutlined =
    '<path d="M11.21 20H5V10h14v4.38l2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h8.21l-2-2zM5 6h14v2H5V6zm11.54 16.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14 12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z"/>';
  let svground =
    '<path d="M10.79 20H5V10h14v2.96c0 .89 1.08 1.34 1.71.71a.99.99 0 0 0 .29-.71V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h5.79c.89 0 1.34-1.08.71-1.71-.19-.18-.44-.29-.71-.29zm2.92-1.74a.996.996 0 0 1 1.41 0l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24a.996.996 0 0 1-1.41 0l-2.12-2.12a.984.984 0 0 1 0-1.4zm-2.42-1.97a.996.996 0 0 1-1.41 0L9 15.41l-.88.88a.996.996 0 1 1-1.41-1.41l.88-.88-.88-.88a.996.996 0 1 1 1.41-1.41l.88.88.88-.88a.996.996 0 1 1 1.41 1.41l-.88.88.88.88c.39.39.39 1.02 0 1.41z"/>';
  let svgsharp =
    '<path d="M11.21 20H5V10h14v4.38l2-2V4h-3V2h-2v2H8V2H6v2H3v18h10.21l-2-2zm5.33 2.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14 12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z"/>';
  let svgtwotone =
    '<path d="M5 6h14v2H5z" opacity=".3"/><path d="M11.21 20H5V10h14v4.38l2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h8.21l-2-2zM5 6h14v2H5V6zm11.54 16.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14 12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z"/>';
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
  export let ariaLabel = 'free cancellation';
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
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
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
  - on:mouseenter 
  - on:mouseleave 
  - on:mouseover 
  - on:mouseout 
  - on:blur 
  - on:focus 
-->
