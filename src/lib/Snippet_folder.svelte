<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="m15.88 10.5 1.62 1.62v3.38h-3v-5h1.38zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2zm-3 3.5L16.5 9H13v8h6v-5.5z"/>';
  let svgoutlined = '<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2.5-5.88v3.38h-3v-5h1.38l1.62 1.62zM13 9v8h6v-5.5L16.5 9H13z"/>';
  let svground = '<path d="m15.88 10.5 1.62 1.62v3.38h-3v-5h1.38zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h5.17c.53 0 1.04.21 1.41.59L12 6h8c1.1 0 2 .9 2 2zm-3 3.91c0-.27-.11-.52-.29-.71L16.8 9.29c-.19-.18-.45-.29-.71-.29H14c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.09z"/>';
  let svgsharp = '<path d="m12 6-2-2H2v16h20V6H12zm7 11h-6V9h3.5l2.5 2.5V17zm-3.12-6.5 1.62 1.62v3.38h-3v-5h1.38z"/>';
  let svgtwotone = '<path d="M9.17 6H4v12h16V8h-8.83l-2-2z" opacity=".3"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2.5-5.88v3.38h-3v-5h1.38l1.62 1.62zM16.5 9H13v8h6v-5.5L16.5 9z"/>';
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
export let ariaLabel="snippet folder";
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