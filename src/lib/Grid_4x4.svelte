<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>';
  let svgoutlined = '<path d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>';
  let svground = '<path d="M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>';
  let svgsharp = '<path d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>';
  let svgtwotone = '<path d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>';
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
export let ariaLabel="grid 4x4";
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
