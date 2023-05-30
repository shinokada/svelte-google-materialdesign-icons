<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M6 2h12v3H6zm0 5v1l2 3v11h8V11l2-3V7H6zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>';
  let svgoutlined =
    '<path d="M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z"/><circle cx="12" cy="14" r="1.5"/>';
  let svground =
    '<path d="M6 4v1h12V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm0 3v1l2 3v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-9l2-3V7H6zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>';
  let svgsharp =
    '<path d="M6 2h12v3H6zm0 5v1l2 3v11h8V11l2-3V7H6zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>';
  let svgtwotone =
    '<path d="m8 7.39 2 3V20h4v-9.6l2-3.01V7H8v.39zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM8 4h8v1H8z" opacity=".3"/><path d="M6 2v6l2 3v11h8V11l2-3V2H6zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8v.39zM16 5H8V4h8v1z"/><circle cx="12" cy="14" r="1.5"/>';
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
  export let ariaLabel = 'flashlight on';
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
