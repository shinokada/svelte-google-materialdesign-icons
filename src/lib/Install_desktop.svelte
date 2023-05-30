<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z"/><path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"/>';
  let svgoutlined = '<path d="M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z"/><path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"/>';
  let svground = '<path d="M20 17H4V5h8V3H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 2-.9 2-2v-3h-2v3z"/><path d="M17.71 13.29 21.3 9.7a.996.996 0 1 0-1.41-1.41L18 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88A.996.996 0 1 0 12.7 9.7l3.59 3.59c.4.39 1.03.39 1.42 0z"/>';
  let svgsharp = '<path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z"/><path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"/>';
  let svgtwotone = '<path d="M14.83 9 16 10.17zM4 17h16v-3.17l-3 3L9.17 9 13 5.17V5H4z" opacity=".3"/><path d="M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2V17z"/><path d="M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5 5-5-1.41-1.41z"/>';
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
export let ariaLabel="install desktop";
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