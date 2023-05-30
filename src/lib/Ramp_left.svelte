<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>';
  let svgoutlined = '<path d="M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>';
  let svground = '<path d="M12 21c-.55 0-1-.45-1-1V6.83l-.88.88A.996.996 0 1 1 8.71 6.3l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62a.99.99 0 0 1 .14 1.53c-.33.33-.87.4-1.26.13-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 .56-.45 1.01-1 1.01z"/>';
  let svgsharp = '<path d="M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>';
  let svgtwotone = '<path d="M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>';
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
export let ariaLabel="ramp left";
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