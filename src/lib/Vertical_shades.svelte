<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z"/>';
  let svgoutlined = '<path d="M20 19V3H4v16H2v2h20v-2h-2zM14 5v14h-4V5h4zM6 5h2v14H6V5zm10 14V5h2v14h-2z"/>';
  let svground = '<path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zm-10 0V5h4v14h-4z"/>';
  let svgsharp = '<path d="M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z"/>';
  let svgtwotone = '<path d="M6 5h2v14H6zm10 0h2v14h-2z" opacity=".3"/><path d="M20 19V3H4v16H2v2h20v-2h-2zM8 19H6V5h2v14zm6 0h-4V5h4v14zm4 0h-2V5h2v14z"/>';
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
export let ariaLabel="vertical shades";
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