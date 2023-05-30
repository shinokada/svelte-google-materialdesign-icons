<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z"/>';
  let svgoutlined =
    '<path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z"/>';
  let svground =
    '<path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27c.62.21 1.27.33 1.96.33a6 6 0 0 0 1.95-.33c.27-.09.57-.02.78.18a.75.75 0 0 1-.3 1.24c-.76.27-1.58.41-2.43.41-.86 0-1.68-.14-2.45-.41L2.7 17.72a.742.742 0 0 1-.45-.95c.14-.39.57-.6.96-.45l6.19 2.25 1.72-4.44-3.57-3.73A2 2 0 0 1 8 7.28l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.29-.89a.748.748 0 1 1 1.42.47l-.6 1.85c-.17.52-.72.82-1.24.65A7.03 7.03 0 0 1 13 8.58l-2.53 1.45 2.23 2.55c.49.56.63 1.34.36 2.04l-1.78 4.63 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.56z"/>';
  let svgsharp =
    '<path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z"/>';
  let svgtwotone =
    '<path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z"/>';
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
  export let ariaLabel = 'downhill skiing';
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
