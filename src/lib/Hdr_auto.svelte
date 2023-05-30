<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M12.04 8.04h-.09l-1.6 4.55h3.29z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 15-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z"/>';
  let svgoutlined = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59 1.6-4.55h.09l1.6 4.55h-3.29z"/>';
  let svground = '<path d="M12.04 8.04h-.09l-1.6 4.55h3.29z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14.41-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2-.38 0-.72-.24-.84-.59z"/>';
  let svgsharp = '<path d="M12.04 8.04h-.09l-1.6 4.55h3.29z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 15-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z"/>';
  let svgtwotone = '<path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" opacity=".3"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.21 13-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11.01 6 6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59 1.6-4.55h.09l1.6 4.55h-3.29z"/>';
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
export let ariaLabel="hdr auto";
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