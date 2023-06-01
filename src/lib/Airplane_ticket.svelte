<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2zm-2.46 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19z"/>';
  let svgoutlined =
    '<path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2zM20 18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v12zM8.87 15.66l-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19l-8.86 2.36z"/>';
  let svground =
    '<path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2zm-2.46 9.3-8.49 2.26a.499.499 0 0 1-.56-.23l-1.12-1.95c-.18-.3-.01-.69.32-.78.16-.04.34-.01.47.1l1.05.82 2.39-.64L9.9 9.6a.788.788 0 0 1 .47-1.15.8.8 0 0 1 .74.18l3.69 3.44 2.44-.65a.967.967 0 0 1 1.18.68.994.994 0 0 1-.69 1.2z"/>';
  let svgsharp =
    '<path d="M22 4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20V4zm-4.27 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19z"/>';
  let svgtwotone =
    '<path d="M4.01 8.54C5.2 9.23 6 10.52 6 12c0 1.47-.81 2.77-2 3.46V18h16V6H4l.01 2.54zm4.13 3.99 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19l-8.86 2.36-1.66-2.88.93-.25z" opacity=".3"/><path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2zM20 18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v12z"/><path d="M17.73 13.3c.52-.15.82-.68.69-1.19a.967.967 0 0 0-1.18-.68l-2.44.65-4.01-3.74-1.4.38 2.4 4.16-2.39.64-1.26-.99-.93.25 1.66 2.88 8.86-2.36z"/>';
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
  export let ariaLabel = 'airplane ticket';
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
