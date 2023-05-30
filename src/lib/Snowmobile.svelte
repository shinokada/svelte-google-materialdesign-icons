<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"/>';
  let svgoutlined =
    '<path d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l.8.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2zm9-4h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8z"/>';
  let svground =
    '<path d="M11 6c0 .55.45 1 1 1h1.25l1.45 1.3L11 11l-9.12-.96a1.7 1.7 0 0 0-.67 3.32l3.33 1-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h5c1.13 0 2.11-.62 2.63-1.55.36-.65-.15-1.45-.9-1.45-.34 0-.68.16-.84.47-.17.31-.51.53-.89.53h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-.89-7.72-7.75-7.72-7.75a.985.985 0 0 0-.66-.25H12c-.55 0-1 .45-1 1zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"/>';
  let svgsharp =
    '<path d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C21.6 15.18 23 13 23 13l-9-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"/>';
  let svgtwotone =
    '<path d="M17 14h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8z" opacity=".3"/><path d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l.8.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2zm9-4h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8z"/>';
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
  export let ariaLabel = 'snowmobile';
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
