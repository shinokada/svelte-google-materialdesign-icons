<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27 0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"/>';
  let svgoutlined = '<path d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V20c0 1.1.9 2 2 2h15.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z"/>';
  let svground = '<path d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2H8zm8 0h3c.55 0 1 .45 1 1v3h-4V4zm6.16 17.88L2.12 1.84A.996.996 0 1 0 .71 3.25L2 4.55V20c0 1.1.9 2 2 2h15.45l1.3 1.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H5c-.55 0-1-.45-1-1v-3h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z"/>';
  let svgsharp = '<path d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V22h17.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z"/>';
  let svgtwotone = '<path d="M20 14v-4h-4v2.89L17.11 14zm-10-1.45V14h1.45zM14 10h-.89l.89.89zm5.11 6 .89.89V16zM8 4h-.89l.89.89zm6 4V4h-4v2.89L11.11 8zm2-4h4v4h-4zm-6 12v4h4v-3.45l-.55-.55zm-6-6v4h4v-3.45L7.45 10zm12 10h1.45L16 18.55zM4 16h4v4H4zm0-9.45V8h1.45z" opacity=".3"/><path d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V20c0 1.1.9 2 2 2h15.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z"/>';
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
export let ariaLabel="grid off";
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