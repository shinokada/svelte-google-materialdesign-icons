<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>';
  let svgoutlined = '<path d="m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>';
  let svground = '<path d="M18.75 3.94 4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14a1 1 0 0 1 .57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z"/>';
  let svgsharp = '<path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>';
  let svgtwotone = '<path d="m11.39 12.61.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z" opacity=".3"/><path d="m3 11.51 6.84 2.65L12.48 21h.98L21 3 3 10.53v.98zm14.27-4.78-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23z"/>';
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
export let ariaLabel="near me";
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
