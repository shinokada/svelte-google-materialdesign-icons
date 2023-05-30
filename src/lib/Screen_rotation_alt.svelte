<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"/>';
  let svgoutlined =
    '<path d="m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"/>';
  let svground =
    '<path d="M18.53 9.29c.63.63.18 1.71-.71 1.71-.27 0-.52-.11-.71-.29L10.4 4 5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0l6.7 6.7zM5.47 14.71c-.63-.63-.18-1.71.71-1.71.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0l-6.7-6.7z"/>';
  let svgsharp =
    '<path d="m4 7.59 6.41-6.41L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l9.83 9.83L20 16.41V19z"/>';
  let svgtwotone =
    '<path d="m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"/>';
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
  export let ariaLabel = 'screen rotation alt';
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
