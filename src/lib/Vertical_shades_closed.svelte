<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>';
  let svgoutlined = '<path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>';
  let svground = '<path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>';
  let svgsharp = '<path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>';
  let svgtwotone = '<path d="M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z" opacity=".2"/><path d="M20 19V3H4v16H2v2h20v-2h-2zM7.5 19H6V5h1.5v14zm3.5 0H9.5V5H11v14zm3.5 0H13V5h1.5v14zm3.5 0h-1.5V5H18v14z"/>';
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
export let ariaLabel="vertical shades closed";
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
