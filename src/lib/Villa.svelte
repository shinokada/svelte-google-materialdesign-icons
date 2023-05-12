<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M7 21H3V8l13-5v7H7v11zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2z"/>';
  let svgoutlined = '<path d="M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"/>';
  let svground = '<path d="M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 0 1 1.36.94V10H8c-.55 0-1 .45-1 1v10zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2z"/>';
  let svgsharp = '<path d="M7 21H3V8l13-5v7H7v11zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2z"/>';
  let svgtwotone = '<path d="m5 9.37 9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z" opacity=".3"/><path d="M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"/>';
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
export let ariaLabel="villa";
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
