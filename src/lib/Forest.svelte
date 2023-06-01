<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"/><path d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"/>';
  let svgoutlined =
    '<path d="m24 18-3.86-6H22L15 2l-3 4.29L9 2 2 12h1.86L0 18h7v4h4v-4h2v4h4v-4h7zM15 5.49 18.16 10h-1.68l3.86 6h-3.62l-2.57-4H16l-2.78-3.97L15 5.49zM3.66 16l3.86-6H5.84L9 5.49 12.16 10h-1.68l3.86 6H3.66z"/>';
  let svground =
    '<path d="M14.14 12h-.06c.81 0 1.28-.91.82-1.57L9.82 3.17a1 1 0 0 0-1.64 0L3.1 10.43c-.46.66.01 1.57.82 1.57h-.06L.99 16.46c-.43.66.05 1.54.84 1.54H7v2c0 1.1.9 2 2 2s2-.9 2-2v-2h5.17c.79 0 1.27-.88.84-1.54L14.14 12z"/><path d="M23.01 16.46 20.14 12h-.06c.81 0 1.28-.91.82-1.57l-5.08-7.26a1 1 0 0 0-1.64 0l-1.57 2.24 3.11 4.44a2.004 2.004 0 0 1-.16 2.5l2.29 3.57c.4.62.42 1.4.07 2.04-.01.02-.02.03-.03.04h4.28c.79 0 1.27-.88.84-1.54zM13 20c0 1.1.9 2 2 2s2-.9 2-2v-1h-4v1z"/>';
  let svgsharp =
    '<path d="M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"/><path d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"/>';
  let svgtwotone =
    '<path d="M16.48 10h1.68L15 5.49l-1.78 2.54L16 12h-1.86l2.57 4h3.63zm-4.32 0L9 5.49 5.84 10h1.68l-3.86 6h10.68l-3.86-6z" opacity=".3"/><path d="M20.14 12H22L15 2l-3 4.29L9 2 2 12h1.86L0 18h7v4h4v-4h2v4h4v-4h7l-3.86-6zM3.66 16l3.86-6H5.84L9 5.49 12.16 10h-1.68l3.86 6H3.66zm13.05 0-2.57-4H16l-2.78-3.97L15 5.49 18.16 10h-1.68l3.86 6h-3.63z"/>';
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
  export let ariaLabel = 'forest';
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
