<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/>';
  let svgoutlined = '<path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8V4zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10v3.53z"/>';
  let svground = '<path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-.55 0-1 .45-1 1v4.7c0 .2.06.39.17.55L8 19v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2l2.83-5.75a.99.99 0 0 0 .17-.55V8c0-.55-.45-1-1-1zm-2 0h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7H8V4h8v3z"/>';
  let svgsharp = '<path d="M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/>';
  let svgtwotone = '<path d="M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47l.21-.42L17 12.53V9h-1z" opacity=".3"/><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8V4zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10v3.53z"/>';
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
export let ariaLabel="settings input hdmi";
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