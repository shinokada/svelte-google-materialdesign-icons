<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M21.9 21.9 2.1 2.1.69 3.51l1.55 1.55c-.15.28-.23.6-.23.94L2 18c0 1.11.89 2 2 2h13.17l3.31 3.31 1.42-1.41zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17l-4-4z"/>';
  let svgoutlined = '<path d="M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83l-2-2zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z"/>';
  let svground = '<path d="M21.19 21.19 2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.84.84c-.14.28-.22.6-.22.94L2 18c0 1.11.89 2 2 2h13.17l2.61 2.61c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17l-4-4z"/>';
  let svgsharp = '<path d="M6.83 4H22v15.17L14.83 12H20V8h-9.17l-4-4zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM9.17 12l-4-4H4v4h5.17z"/>';
  let svgtwotone = '<path d="M20 17.17V12h-5.17L20 17.17zM10.83 8H20V6H8.83l2 2zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z" opacity=".3"/><path d="M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83l-2-2zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z"/>';
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
export let ariaLabel="credit card off";
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
