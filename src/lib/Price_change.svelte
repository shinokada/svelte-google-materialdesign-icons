<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-8 6H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1H8v-1H6v-2h4v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2zm4 6.25-2-2h4l-2 2zM14 10l2-2 2 2h-4z"/>';
  let svgoutlined = '<path d="M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2v1zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-6-8 2-2 2 2m0 4.25-2 2-2-2"/>';
  let svground = '<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-9 6H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1c0 .55-.45 1-1 1s-1-.45-1-1H7c-.55 0-1-.45-1-1s.45-1 1-1h3v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1c0-.55.45-1 1-1s1 .45 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1zm4.65 5.9L14 14.25h4l-1.65 1.65c-.19.19-.51.19-.7 0zM14 10l1.65-1.65c.2-.2.51-.2.71 0L18 10h-4z"/>';
  let svgsharp = '<path d="M2 4v16h20V4H2zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2v2zm4 6.25-2-2h4l-2 2zM14 10l2-2 2 2h-4z"/>';
  let svgtwotone = '<path d="M4 18h16V6H4v12zM16 8l2 2h-4l2-2zm2 6.25-2 2-2-2h4zM6 14h4v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1H8v-1H6v-2z" opacity=".3"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/><path d="M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2v1zm8-9-2 2h4zm2 6.25h-4l2 2z"/>';
  switch (variation) {
    case "filled":
      svgpath = svgfilled;
      break;
    case "outlined":
      svgpath = svgoutlined;
      break;
    case "round":
      svgpath = svground;
      break;
    case "sharp":
      svgpath = svgsharp;
      break;
    case "two-tone":
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
export let ariaLabel="price change";
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
-->