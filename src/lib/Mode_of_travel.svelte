<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h3.53L19 14l-4.5-4.5h3.47C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39z"/>';
  let svgoutlined =
    '<path d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4.19 0 7.99 3.21 8 8.17l2.09-2.09L23.5 9.5 19 14l-4.5-4.5 1.41-1.41L18 10.17C17.99 6.55 15.34 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39z"/>';
  let svground =
    '<path d="M4 10.2C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h2.32c.45 0 .67.54.35.85l-3.29 3.29c-.2.2-.51.2-.71 0l-3.29-3.29a.5.5 0 0 1 .35-.85h2.26C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39c-.78.82-1.67 1.66-2.65 2.52-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2z"/>';
  let svgsharp =
    '<path d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h3.53L19 14l-4.5-4.5h3.47C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39z"/>';
  let svgtwotone =
    '<path d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h3.53L19 14l-4.5-4.5h3.47C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39z"/>';
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
  export let ariaLabel = 'mode of travel';
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
