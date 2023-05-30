<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"/>';
  let svgoutlined = '<path d="M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7V2h10v14zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z"/>';
  let svground = '<path d="M10.85 18.85a.5.5 0 0 0-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zM17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"/>';
  let svgsharp = '<path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm5-20H5v18h14V0zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"/>';
  let svgtwotone = '<path d="M7 16h10V2H7v14zm4.99-13c1.1 0 2 .9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-.9-2-2s.89-2 1.99-2z" opacity=".3"/><path d="M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2zm-2 14H7V2h10v14zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z"/>';
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
export let ariaLabel="camera rear";
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