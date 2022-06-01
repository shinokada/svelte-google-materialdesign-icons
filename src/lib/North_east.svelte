<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>';
  let svgoutlined = '<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>';
  let svground = '<path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"/>';
  let svgsharp = '<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>';
  let svgtwotone = '<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>';
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
export let ariaLabel="north east";
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
