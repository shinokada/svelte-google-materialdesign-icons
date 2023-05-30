<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>';
  let svgoutlined = '<path d="M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"/>';
  let svground = '<path d="m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"/>';
  let svgsharp = '<path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>';
  let svgtwotone = '<path d="M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z" opacity=".3"/><path d="m4 18 8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12 13 6v12l8.5-6zM15 9.86 18.03 12 15 14.14V9.86z"/>';
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
export let ariaLabel="fast forward";
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