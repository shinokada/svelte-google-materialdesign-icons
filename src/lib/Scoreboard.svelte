<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"/>';
  let svgoutlined = '<path d="M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5H16v-3h1.5v3zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3V15zm3.25-4h-1.5V9.5h1.5V11zm0 3.5h-1.5V13h1.5v1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2zm-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20z"/>';
  let svground = '<path d="M17.5 13.5H16v-3h1.5v3zM16 2c-.55 0-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1zM9.5 14.25c0 .41-.34.75-.75.75H6c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1H5.75c-.41 0-.75-.34-.75-.75S5.34 9 5.75 9H8.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h2.25c.41 0 .75.34.75.75zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4zm-6.25-7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75S11.59 6 12 6s.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z"/>';
  let svgsharp = '<path d="M17.5 13.5H16v-3h1.5v3zM22 4h-5V2h-2v2H9V2H7v2H2v16h20V4zM9.5 12.5h-3v1h3V15H5v-3.5h3v-1H5V9h4.5v3.5zm3.25 5.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 9v6h-4.5V9H19z"/>';
  let svgtwotone = '<path d="M17.5 13.5H16v-3h1.5v3zM12.75 6v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20V6h-7.25zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 3h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z" opacity=".3"/><path d="M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5H16v-3h1.5v3zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3V15zm3.25-4h-1.5V9.5h1.5V11zm0 3.5h-1.5V13h1.5v1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2zm-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20z"/>';
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
export let ariaLabel="scoreboard";
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