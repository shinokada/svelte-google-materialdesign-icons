<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z"/><path d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>';
  let svgoutlined = '<path d="M3 19h17v2H3c-1.1 0-2-.9-2-2V6h2v13zM23 6v9c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2l.01-11c0-1.1.89-2 1.99-2h5l2 2h7c1.1 0 2 .9 2 2zM7 15h14V6h-7.83l-2-2H7v11z"/>';
  let svground = '<path d="M2 6c-.55 0-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1H3V7c0-.55-.45-1-1-1z"/><path d="M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>';
  let svgsharp = '<path d="M3 6H1v15h19v-2H3z"/><path d="M23 4h-9l-2-2H5.01L5 17h18V4z"/>';
  let svgtwotone = '<path d="M11.17 4H7v11h14V6h-7.83z" opacity=".3"/><path d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 11H7V4h4.17l2 2H21v9z"/><path d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z"/>';
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
export let ariaLabel="folder copy";
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