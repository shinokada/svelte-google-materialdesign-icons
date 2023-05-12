<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M8 9v1.5h2.25V15h1.5v-4.5H14V9zM6 9H3c-.55 0-1 .45-1 1v5h1.5v-1.5h2V15H7v-5c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v5H17v-4.5h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1z"/>';
  let svgoutlined = '<path d="M8 9v1.5h2.25V15h1.5v-4.5H14V9H8zM6 9H3c-.55 0-1 .45-1 1v5h1.5v-1.5h2V15H7v-5c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v5H17v-4.5h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1z"/>';
  let svground = '<path d="M8 9.75c0 .41.34.75.75.75h1.5v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1.5c.41 0 .75-.34.75-.75S13.66 9 13.25 9h-4.5c-.41 0-.75.34-.75.75zM6 9H3c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75v-.75h2v.75c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1z"/>';
  let svgsharp = '<path d="M8 9v1.5h2.25V15h1.5v-4.5H14V9H8zM7 9H2v6h1.5v-1.5h2V15H7V9zm-1.5 3h-2v-1.5h2V12zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22V9z"/>';
  let svgtwotone = '<path d="M3.5 13.5h2V15H7v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5h1.5v-1.5zm0-3h2V12h-2v-1.5zm13.5 0h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1h-4.5c-.55 0-1 .45-1 1v5H17v-4.5zM10.25 15h1.5v-4.5H14V9H8v1.5h2.25z"/>';
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
export let ariaLabel="atm";
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
