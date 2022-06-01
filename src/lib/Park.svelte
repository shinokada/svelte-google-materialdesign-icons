<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"/>';
  let svgoutlined = '<path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"/>';
  let svground = '<path d="M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25a1 1 0 0 0-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98 1.09 0 1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55L16.96 12z"/>';
  let svgsharp = '<path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"/>';
  let svgtwotone = '<path d="M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z" opacity=".3"/><path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"/>';
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
export let ariaLabel="park";
 </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
>
  {@html svgpath}
</svg>
