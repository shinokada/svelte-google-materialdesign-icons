<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1zM14 15v-1.5h-2.5V9H10v6h4z"/>';
  let svgoutlined = '<path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1zM14 15v-1.5h-2.5V9H10v6h4z"/>';
  let svground = '<path d="M10.75 9c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H11.5V9.75c0-.41-.34-.75-.75-.75zm8.29 1.5c.1.29.38.5.71.5.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2.04zM8 9.75C8 9.34 7.66 9 7.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5z"/>';
  let svgsharp = '<path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5v2zM14 15v-1.5h-2.5V9H10v6h4z"/>';
  let svgtwotone = '<path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1zM14 15v-1.5h-2.5V9H10v6h4z"/>';
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
export let ariaLabel="hls";
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


<!--
  @component
  [Go to Document](https://svelte-google-materialdesign-icons.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop color="currentColor";
  @prop variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
-->