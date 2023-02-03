<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>';
  let svgoutlined = '<path d="M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>';
  let svground = '<path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A6.999 6.999 0 0 1 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.66 0 3-1.34 3-3v-7c0-5.17-4.36-9.32-9.6-8.98z"/>';
  let svgsharp = '<path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A6.999 6.999 0 0 1 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98z"/>';
  let svgtwotone = '<path d="M17 18h1c.55 0 1-.45 1-1v-3h-2v4zM5 17c0 .55.45 1 1 1h1v-4H5v3z" opacity=".3"/><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 3c0 .55-.45 1-1 1h-1v-4h2v3z"/>';
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
export let ariaLabel="headset";
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
