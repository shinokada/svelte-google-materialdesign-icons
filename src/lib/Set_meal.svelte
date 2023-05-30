<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m21.05 17.56-17.97.94L3 17l17.98-.94.07 1.5zM21 19.48H3v1.5h18v-1.5zM22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2 1c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"/>';
  let svgoutlined =
    '<path d="m21.05 17.56-17.97.94L3 17l17.98-.94.07 1.5zM21 19.48H3v1.5h18v-1.5zM23 13V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 0H3V4h18v9zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"/>';
  let svground =
    '<path d="m20.3 17.6-16.47.86c-.41.02-.77-.3-.79-.71-.02-.41.3-.77.71-.79l16.48-.86c.41-.02.77.3.79.71.02.41-.3.77-.72.79zm-.05 1.88H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h16.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2.88 1.09c-1.25.27-2.19 1.11-2.33 2.14-.64-.73-2.73-2.73-6.54-2.73-3.44 0-5.48 1.63-6.31 2.49-.28.29-.28.74 0 1.03.83.86 2.87 2.49 6.31 2.49 3.81 0 5.9-2 6.54-2.73.14 1.02 1.08 1.86 2.33 2.14.46.1.88-.28.88-.74V6.84c0-.47-.43-.85-.88-.75z"/>';
  let svgsharp =
    '<path d="m21.05 17.56-17.97.94L3 17l17.98-.94.07 1.5zM21 19.48H3v1.5h18v-1.5zM22 3v11H2V3h20zm-2 3c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"/>';
  let svgtwotone =
    '<path d="M21 13H3V4h18v9zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z" opacity=".3"/><path d="m21.05 17.56-17.97.94L3 17l17.98-.94.07 1.5zM21 19.48H3v1.5h18v-1.5zM23 13V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 0H3V4h18v9zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"/>';
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
  export let ariaLabel = 'set meal';
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
