<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/>';
  let svgoutlined = '<path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z"/>';
  let svground = '<path d="M18.89 7.7 12 14.59 6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0z"/>';
  let svgsharp = '<path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z"/>';
  let svgtwotone = '<path d="m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"/>';
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
export let ariaLabel="call missed";
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
