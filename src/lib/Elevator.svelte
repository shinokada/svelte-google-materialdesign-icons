<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2V14zm4.5 3L13 13h5l-2.5 4zM13 11l2.5-4 2.5 4h-5z"/>';
  let svgoutlined =
    '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z"/>';
  let svground =
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2.5 7c0 .55-.45 1-1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c-.55 0-1-.45-1-1v-1.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2V13zm6.52.76-1.6 2.56c-.2.31-.65.31-.85 0l-1.6-2.56c-.2-.33.04-.76.43-.76h3.2c.39 0 .63.43.42.76zM17.1 11h-3.2c-.39 0-.63-.43-.42-.77l1.6-2.56c.2-.31.65-.31.85 0l1.6 2.56c.2.34-.04.77-.43.77z"/>';
  let svgsharp =
    '<path d="M21 3H3v18h18V3zM8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2.5 8h-1v4H7v-4H6V9.5h5V14zm4.5 3L13 13h5l-2.5 4zM13 11l2.5-4 2.5 4h-5z"/>';
  let svgtwotone =
    '<path d="M19 5v14H5V5h14m-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z" opacity=".3"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z"/>';
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
  export let ariaLabel = 'elevator';
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
