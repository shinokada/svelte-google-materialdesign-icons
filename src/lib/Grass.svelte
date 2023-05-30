<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>';
  let svgoutlined =
    '<path d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>';
  let svground =
    '<path d="M15.64 11.02a10.02 10.02 0 0 1 2.56-3.83c.38-.36.04-1-.46-.85-3.32.98-5.75 4.05-5.74 7.69.95-1.28 2.2-2.31 3.64-3.01zm-4.22-2.17a8.556 8.556 0 0 0-2.96-3.87c-.42-.3-.96.19-.72.65C8.54 7.15 9 8.88 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29zM12 20H3c-.55 0-1-.45-1-1s.45-1 1-1h4.75a8.027 8.027 0 0 0-4-5.06.486.486 0 0 1-.26-.44c0-.27.22-.49.49-.5H4c4.42 0 8 3.58 8 8zm8.26-7.06a7.995 7.995 0 0 0-4 5.06H21c.55 0 1 .45 1 1s-.45 1-1 1h-7c0-.68-.07-1.35-.2-2-.15-.72-.38-1.42-.67-2.07A7.97 7.97 0 0 1 20 12h.02a.5.5 0 0 1 .49.5c.01.19-.1.35-.25.44z"/>';
  let svgsharp =
    '<path d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>';
  let svgtwotone =
    '<path d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>';
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
  export let ariaLabel = 'grass';
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
