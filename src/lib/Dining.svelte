<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 8.3c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5.28 0 .5.22.5.5v3.8zm4.58 2.29-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18z"/>';
  let svgoutlined =
    '<path d="M14.75 6c-1.37 0-2.5 1.52-2.5 3.4 0 1.48.7 2.71 1.67 3.18l.08.04V19h1.5v-6.38l.08-.03c.97-.47 1.67-1.7 1.67-3.18 0-1.88-1.12-3.41-2.5-3.41M10.5 6c-.27 0-.5.22-.5.5V9h-.75V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H7.5V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.8c0 .93.64 1.71 1.5 1.93V19h1.5v-6.77c.86-.22 1.5-1 1.5-1.93V6.5c0-.28-.22-.5-.5-.5zM20 4H4v16h16V4m0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z"/>';
  let svground =
    '<path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 8.3c0 .93-.64 1.71-1.5 1.93v6.02c0 .41-.34.75-.75.75S8 18.66 8 18.25v-6.02c-.86-.22-1.5-1-1.5-1.93V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5.28 0 .5.22.5.5v3.8zm4.58 2.29-.08.03v5.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.63l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18z"/>';
  let svgsharp =
    '<path d="M22 2H2v20h20V2zm-11 8.3c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6h1v3h.75V6h1v3H10V6h1v4.3zm4.58 2.29-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18z"/>';
  let svgtwotone =
    '<path d="M4 20h16V4H4v16zM14.75 6c1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18l-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4zm-8.25.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5.28 0 .5.22.5.5v3.8c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6.5z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><path d="M8 12.23V19h1.5v-6.77c.86-.22 1.5-1 1.5-1.93V6.5c0-.28-.22-.5-.5-.5-.27 0-.5.22-.5.5V9h-.75V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H7.5V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.8c0 .93.64 1.71 1.5 1.93zm5.92.35.08.04V19h1.5v-6.38l.08-.03c.97-.47 1.67-1.7 1.67-3.18 0-1.88-1.12-3.41-2.5-3.41-1.37 0-2.5 1.52-2.5 3.4 0 1.48.7 2.71 1.67 3.18z"/>';
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
  export let ariaLabel = 'dining';
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
