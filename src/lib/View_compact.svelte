<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M4 18h2.5v-2.5H4V18zm0-4.75h2.5v-2.5H4v2.5zM4 8.5h2.5V6H4v2.5zM17.5 6v2.5H20V6h-2.5zM13 8.5h2.5V6H13v2.5zm4.5 9.5H20v-2.5h-2.5V18zm0-4.75H20v-2.5h-2.5v2.5zM8.5 18H11v-2.5H8.5V18zm4.5 0h2.5v-2.5H13V18zM8.5 8.5H11V6H8.5v2.5zm4.5 4.75h2.5v-2.5H13v2.5zm-4.5 0H11v-2.5H8.5v2.5z"/>';
  let svgoutlined =
    '<path d="M2 4v16h20V4H2zm4.5 14H4v-2.5h2.5V18zm0-4.75H4v-2.5h2.5v2.5zm0-4.75H4V6h2.5v2.5zM11 18H8.5v-2.5H11V18zm0-4.75H8.5v-2.5H11v2.5zm0-4.75H8.5V6H11v2.5zm4.5 9.5H13v-2.5h2.5V18zm0-4.75H13v-2.5h2.5v2.5zm0-4.75H13V6h2.5v2.5zM20 18h-2.5v-2.5H20V18zm0-4.75h-2.5v-2.5H20v2.5zm0-4.75h-2.5V6H20v2.5z"/>';
  let svground =
    '<path d="M4 18h2.5v-2.5H4V18zm0-4.75h2.5v-2.5H4v2.5zM4 8.5h2.5V6H4v2.5zM17.5 6v2.5H20V6h-2.5zM13 8.5h2.5V6H13v2.5zm4.5 9.5H20v-2.5h-2.5V18zm0-4.75H20v-2.5h-2.5v2.5zM8.5 18H11v-2.5H8.5V18zm4.5 0h2.5v-2.5H13V18zM8.5 8.5H11V6H8.5v2.5zm4.5 4.75h2.5v-2.5H13v2.5zm-4.5 0H11v-2.5H8.5v2.5z"/>';
  let svgsharp =
    '<path d="M4 18h2.5v-2.5H4V18zm0-4.75h2.5v-2.5H4v2.5zM4 8.5h2.5V6H4v2.5zM17.5 6v2.5H20V6h-2.5zM13 8.5h2.5V6H13v2.5zm4.5 9.5H20v-2.5h-2.5V18zm0-4.75H20v-2.5h-2.5v2.5zM8.5 18H11v-2.5H8.5V18zm4.5 0h2.5v-2.5H13V18zM8.5 8.5H11V6H8.5v2.5zm4.5 4.75h2.5v-2.5H13v2.5zm-4.5 0H11v-2.5H8.5v2.5z"/>';
  let svgtwotone =
    '<path d="M4 13.25h2.5v-2.5H4v2.5zM4 18h2.5v-2.5H4V18zm4.5-9.5H11V6H8.5v2.5zm9 9.5H20v-2.5h-2.5V18zm0-4.75H20v-2.5h-2.5v2.5zm0-7.25v2.5H20V6h-2.5zM13 8.5h2.5V6H13v2.5zm-4.5 4.75H11v-2.5H8.5v2.5zm0 4.75H11v-2.5H8.5V18zM4 8.5h2.5V6H4v2.5zm9 4.75h2.5v-2.5H13v2.5zM13 18h2.5v-2.5H13V18z" opacity=".3"/><path d="M2 4v16h20V4H2zm4.5 14H4v-2.5h2.5V18zm0-4.75H4v-2.5h2.5v2.5zm0-4.75H4V6h2.5v2.5zM11 18H8.5v-2.5H11V18zm0-4.75H8.5v-2.5H11v2.5zm0-4.75H8.5V6H11v2.5zm4.5 9.5H13v-2.5h2.5V18zm0-4.75H13v-2.5h2.5v2.5zm0-4.75H13V6h2.5v2.5zM20 18h-2.5v-2.5H20V18zm0-4.75h-2.5v-2.5H20v2.5zm0-4.75h-2.5V6H20v2.5z"/>';
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
  export let ariaLabel = 'view compact';
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
