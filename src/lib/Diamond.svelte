<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H5L2.38 8.25z"/>';
  let svgoutlined = '<path d="M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z"/>';
  let svground = '<path d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16l-2.07-4.14A2 2 0 0 0 17.76 3h-3.93l2.63 5.25zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H6.24a2 2 0 0 0-1.79 1.11L2.38 8.25h5.16z"/>';
  let svgsharp = '<path d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H5L2.38 8.25z"/>';
  let svgtwotone = '<path d="M8.88 5H6.24l-1.5 3h2.64zm10.38 3-1.5-3h-2.64l1.5 3zM11 16.68V10H5.44zm2 0L18.56 10H13zM12.88 5h-1.76l-1.5 3h4.76z" opacity=".3"/><path d="M19 3H5L2 9l10 12L22 9l-3-6zm-1.24 2 1.5 3h-2.65l-1.5-3h2.65zM6.24 5h2.65l-1.5 3H4.74l1.5-3zM11 16.68 5.44 10H11v6.68zM9.62 8l1.5-3h1.76l1.5 3H9.62zM13 16.68V10h5.56L13 16.68z"/>';
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
export let ariaLabel="diamond";
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