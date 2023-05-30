<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>';
  let svgoutlined = '<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>';
  let svground = '<path d="M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11a.996.996 0 1 0-1.41-1.41L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z"/>';
  let svgsharp = '<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>';
  let svgtwotone = '<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>';
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
export let ariaLabel="south west";
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