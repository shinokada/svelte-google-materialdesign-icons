<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41zm-.709 4.946 1.414-1.414 4.243 4.243-1.414 1.414z"/><circle cx="18.5" cy="5.5" r="3.5"/>';
  let svgoutlined =
    '<path d="m15.04 12.79-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29.26 0 .51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43zm-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09-1.42 1.42zm2.841 2.836 1.414-1.414 4.243 4.243-1.414 1.414zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2zm0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7z"/>';
  let svground =
    '<path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41zm-.71 4.95 3.53 3.53c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42l-3.53-3.53-1.42 1.42z"/><circle cx="18.5" cy="5.5" r="3.5"/>';
  let svgsharp =
    '<path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41zm-.709 4.946 1.414-1.414 4.243 4.243-1.414 1.414z"/><circle cx="18.5" cy="5.5" r="3.5"/>';
  let svgtwotone =
    '<path d="m4.414 7.84 1.421-1.422 7.085 7.085-1.42 1.422z" opacity=".3"/><circle cx="18.5" cy="5.5" r="1.5" opacity=".3"/><path d="m15.04 12.79-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29.26 0 .51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43zm-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09-1.42 1.42zm2.841 2.836 1.414-1.414 4.243 4.243-1.414 1.414zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2zm0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7z"/>';
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
  export let ariaLabel = 'sports cricket';
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
