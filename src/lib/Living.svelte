<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M16.5 11.5c-.55 0-1 .45-1 1v2h-7v-2c0-.55-.45-1-1-1s-1 .45-1 1V16c0 .28.22.5.5.5h10c.28 0 .5-.22.5-.5v-3.5c0-.55-.45-1-1-1z"/><path d="M10 12.5v.5h4v-.5c0-1.3.99-2.35 2.25-2.47V9c0-.83-.67-1.5-1.5-1.5h-5.5c-.83 0-1.5.67-1.5 1.5v1.03A2.48 2.48 0 0 1 10 12.5z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16z"/>';
  let svgoutlined =
    '<path d="M17.75 10.35V9c0-1.66-1.34-3-3-3h-5.5c-1.66 0-3 1.34-3 3v1.35C5.51 10.78 5 11.58 5 12.5V16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5c0-.92-.51-1.72-1.25-2.15zM9.25 7.5h5.5c.83 0 1.5.67 1.5 1.5v1.03A2.48 2.48 0 0 0 14 12.5v.5h-4v-.5c0-1.3-.99-2.35-2.25-2.47V9c0-.83.67-1.5 1.5-1.5zM17.5 16c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3.5c0-.55.45-1 1-1s1 .45 1 1v2h7v-2c0-.55.45-1 1-1s1 .45 1 1V16zM20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>';
  let svground =
    '<path d="M16.5 11.5c-.55 0-1 .45-1 1v2h-7v-2c0-.55-.45-1-1-1s-1 .45-1 1V16c0 .28.22.5.5.5h10c.28 0 .5-.22.5-.5v-3.5c0-.55-.45-1-1-1z"/><path d="M10 12.5v.5h4v-.5c0-1.3.99-2.35 2.25-2.47V9c0-.83-.67-1.5-1.5-1.5h-5.5c-.83 0-1.5.67-1.5 1.5v1.03A2.48 2.48 0 0 1 10 12.5z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16z"/>';
  let svgsharp =
    '<path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z"/><path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z"/><path d="M22 2H2v20h20V2zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99H19z"/>';
  let svgtwotone =
    '<path d="M4 20h16V4H4v16zm1-7.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM7 18h10c1.1 0 2-.9 2-2v-3.5c0-.92-.51-1.72-1.25-2.15V9c0-1.66-1.34-3-3-3h-5.5c-1.66 0-3 1.34-3 3v1.35C5.51 10.78 5 11.58 5 12.5V16c0 1.1.9 2 2 2zm.75-9c0-.83.67-1.5 1.5-1.5h5.5c.83 0 1.5.67 1.5 1.5v1.03A2.48 2.48 0 0 0 14 12.5v.5h-4v-.5c0-1.3-.99-2.35-2.25-2.47V9zM6.5 12.5c0-.55.45-1 1-1s1 .45 1 1v2h7v-2c0-.55.45-1 1-1s1 .45 1 1V16c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3.5z"/>';
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
  export let ariaLabel = 'living';
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
