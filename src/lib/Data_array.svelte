<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>';
  let svgoutlined = '<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>';
  let svground = '<path d="M15 5c0 .55.45 1 1 1h2v12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1zM6 20h2c.55 0 1-.45 1-1s-.45-1-1-1H6V6h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2z"/>';
  let svgsharp = '<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>';
  let svgtwotone = '<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>';
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
export let ariaLabel="data array";
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
