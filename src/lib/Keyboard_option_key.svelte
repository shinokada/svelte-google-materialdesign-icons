<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>';
  let svgoutlined = '<path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>';
  let svground = '<path d="M15 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM9.58 6c-.36-.62-1.02-1-1.73-1H4c-.55 0-1 .45-1 1s.45 1 1 1h3.85l6.35 11c.36.62 1.02 1 1.73 1H20c.55 0 1-.45 1-1s-.45-1-1-1h-4.07L9.58 6z"/>';
  let svgsharp = '<path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>';
  let svgtwotone = '<path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>';
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
export let ariaLabel="keyboard option key";
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
