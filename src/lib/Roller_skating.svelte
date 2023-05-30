<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M9 6.5c0-.28.22-.5.5-.5h2.52L12 5H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12V1H4v15h16v-2.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H9.5c-.28 0-.5-.22-.5-.5zM5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>';
  let svgoutlined = '<path d="M20 12a3.96 3.96 0 0 0-2.91-3.82l-2.62-.74C13.62 7.19 13 6.39 13 5.5V1H4v15h16v-4zm-2 2H6V3h5v1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5H11l.1 1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C17.4 10.33 18 11.1 18 12v2zM5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14-4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-7-4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svground = '<path d="M18 16c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L12 5H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12V3c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12zM5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>';
  let svgsharp = '<path d="m20 16-.01-6-5.71-1.43A3 3 0 0 1 12.32 7H9V6h3.02L12 5H9V4h3V1H4v15h16zM5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>';
  let svgtwotone = '<path d="M18 14H6V3h5v1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5H11l.1 1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C17.4 10.33 18 11.1 18 12v2zM5 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-7 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3"/><path d="M20 12a3.96 3.96 0 0 0-2.91-3.82l-2.62-.74C13.62 7.19 13 6.39 13 5.5V1H4v15h16v-4zm-2 2H6V3h5v1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5H11l.1 1H9.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C17.4 10.33 18 11.1 18 12v2zM5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14-4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-7-4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
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
export let ariaLabel="roller skating";
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