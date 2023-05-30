<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M18.92 9.01C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01L3 15v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM9.41 5 8 6.41l-3-3L6.41 2l3 3zM16 6.41 14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"/>';
  let svgoutlined =
    '<path d="M18.92 9.01C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01L3 15v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 10h10.29l1.04 3H5.81l1.04-3zM19 20H5v-5h14v5zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM9.41 5 8 6.41l-3-3L6.41 2l3 3zM16 6.41 14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"/>';
  let svground =
    '<path d="M19.5 24c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.68 1.5 1.5 1.5S6 23.33 6 22.5V22h12v.5c0 .83.67 1.5 1.5 1.5zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM8.71 5.71a.996.996 0 0 1-1.41 0L5.71 4.12a.996.996 0 1 1 1.41-1.41L8.71 4.3c.39.38.39 1.02 0 1.41zm9.58-3c.39.39.39 1.02 0 1.41L16.7 5.71a.996.996 0 1 1-1.41-1.41l1.59-1.59a.996.996 0 0 1 1.41 0zM12 5c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9l-2.43-7zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM9.41 5 8 6.41l-3-3L6.41 2l3 3zM16 6.41 14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"/>';
  let svgtwotone =
    '<path d="M5 15v5h14v-5H5zm2.5 4c-.83 0-1.5-.67-1.5-1.5S6.67 16 7.5 16s1.5.67 1.5 1.5S8.33 19 7.5 19zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" opacity=".3"/><path d="M9.41 5 8 6.41l-3-3L6.41 2l3 3zM19 3.41 17.59 2l-3 3L16 6.41l3-3zM13 0h-2v5h2V0zm8 15v8c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-5.99C5.29 8.42 5.84 8 6.5 8h11c.66 0 1.22.42 1.42 1.01L21 15zM5.81 13h12.38l-1.04-3H6.85l-1.04 3zM19 15H5v5h14v-5zM7.5 19c.83 0 1.5-.67 1.5-1.5S8.33 16 7.5 16 6 16.67 6 17.5 6.67 19 7.5 19zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>';
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
  export let ariaLabel = 'minor crash';
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
