<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>';
  let svgoutlined =
    '<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>';
  let svground =
    '<path d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12 5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"/><path d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>';
  let svgsharp =
    '<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>';
  let svgtwotone =
    '<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>';
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
  export let ariaLabel = 'keyboard double arrow right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
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
  @prop role = "img";
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
