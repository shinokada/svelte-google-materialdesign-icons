<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>';
  let svgoutlined =
    '<path d="M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>';
  let svground =
    '<path d="M21 11c0-.55-.45-1-1-1h-1V7l-2.29-2.29a.996.996 0 0 0-1.41 0L14 6l-1.29-1.29a.996.996 0 0 0-1.41 0L10 6 8.71 4.71a.996.996 0 0 0-1.41 0L5 7v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2H4c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1zm-5-4.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>';
  let svgsharp =
    '<path d="M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>';
  let svgtwotone =
    '<path d="m16 6.83 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z" opacity=".3"/><path d="M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>';
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
  export let ariaLabel = 'fence';
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
