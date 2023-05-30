<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z"/>';
  let svgoutlined =
    '<path d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z"/>';
  let svground =
    '<path d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zm-.35 4.92-1.79 1.79c-.32.32-.86.1-.86-.35v-.8L5 15v.79c0 .45-.54.67-.85.35l-1.79-1.79c-.2-.2-.2-.51 0-.71l1.79-1.79a.5.5 0 0 1 .85.36v.8L19 13v-.79c0-.45.54-.67.85-.35l1.79 1.79c.2.19.2.51.01.7zM10 18.5c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h1.5c.28 0 .5-.22.5-.5zm-1 2v.5H8v-.5h1zm8-1.5h-.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V19H15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5s-.22.5-.5.5zm-3-.5c0 .28-.22.5-.5.5h-1v.5h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h1.5c.28 0 .5.22.5.5z"/>';
  let svgsharp =
    '<path d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7v4h3v-2.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z"/>';
  let svgtwotone =
    '<path d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z"/>';
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
  export let ariaLabel = '6 ft apart';
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
