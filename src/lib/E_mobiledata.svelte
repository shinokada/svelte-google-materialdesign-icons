<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>';
  let svgoutlined = '<path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>';
  let svground = '<path d="M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1z"/>';
  let svgsharp = '<path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>';
  let svgtwotone = '<path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>';
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
export let ariaLabel="e mobiledata";
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
