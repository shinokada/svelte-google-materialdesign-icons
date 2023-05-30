<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm-3.44-2h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>';
  let svgoutlined =
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm3.44-8c.26.45.44.96.51 1.5h-7.9c.07-.54.24-1.05.51-1.5h6.88zm.51 2.5c-.07.54-.24 1.05-.51 1.5H8.56c-.26-.45-.44-.96-.51-1.5h7.9zM9.38 15h5.24c-.7.61-1.61 1-2.62 1s-1.91-.39-2.62-1zm5.24-6H9.38c.7-.61 1.61-1 2.62-1s1.91.39 2.62 1z"/>';
  let svground =
    '<path d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm-3.44-2h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>';
  let svgsharp =
    '<path d="M8.56 14h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm0-8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"/><path d="M3 3v18h18V3H3zm9 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>';
  let svgtwotone =
    '<path d="M5 19h14V5H5v14zm7-13c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-2c-1.01 0-1.91-.39-2.62-1h5.24c-.71.61-1.61 1-2.62 1zm0-8c1.01 0 1.91.39 2.62 1H9.38c.71-.61 1.61-1 2.62-1zm-3.44 2h6.89c.26.45.44.96.51 1.5h-7.9c.06-.54.23-1.05.5-1.5zm7.39 2.5c-.07.54-.24 1.05-.51 1.5H8.56c-.26-.45-.44-.96-.51-1.5h7.9z"/>';
  switch (variation) {
    case 'filled':
      svgpath = svgfilled;
      break;
    case 'outlined':
      svgpath = svgoutlined;
      break;
    case 'round':
      svgpath = svground;
      break;
    case 'sharp':
      svgpath = svgsharp;
      break;
    case 'two-tone':
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
  export let ariaLabel = 'hvac';
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
  @prop ariaLabel="icon name"
  ## Event
  - on:click 
  - on:mouseenter 
  - on:mouseleave 
  - on:mouseover 
  - on:mouseout 
  - on:blur 
  - on:focus 
-->
