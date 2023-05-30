<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"/>';
  let svgoutlined = '<path d="m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"/>';
  let svground = '<path d="m10.8 3.9-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm1.7 8.6c0 .83-.67 1.5-1.5 1.5v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14c-.83 0-1.5-.67-1.5-1.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5zm2 5.5c-.28 0-.5-.22-.5-.5v-3h-.5c-.28 0-.5-.22-.5-.5v-2.5c0-.88.57-1.63 1.36-1.89.31-.11.64.14.64.48v7.41c0 .28-.22.5-.5.5z"/>';
  let svgsharp = '<path d="M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"/>';
  let svgtwotone = '<path d="m12 5.5 6 4.5v9H6v-9l6-4.5m-.5 4v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z" opacity=".3"/><path d="m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"/>';
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
export let ariaLabel="food bank";
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