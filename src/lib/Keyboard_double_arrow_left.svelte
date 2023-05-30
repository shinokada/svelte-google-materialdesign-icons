<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"/><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/>';
  let svgoutlined =
    '<path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"/><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/>';
  let svground =
    '<path d="M18.29 17.29a.996.996 0 0 0 0-1.41L14.42 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L12.3 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"/><path d="M11.7 17.29a.996.996 0 0 0 0-1.41L7.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L5.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"/>';
  let svgsharp =
    '<path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"/><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/>';
  let svgtwotone =
    '<path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"/><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/>';
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
  export let ariaLabel = 'keyboard double arrow left';
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
