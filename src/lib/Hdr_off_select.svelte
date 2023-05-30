<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zM6.34 2.34 4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66 1.41-1.41L6.34 2.34zm1.81 4.64 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z"/>';
  let svgoutlined =
    '<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zM6.34 2.34 4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66 1.41-1.41L6.34 2.34zm1.81 4.64 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z"/>';
  let svground =
    '<path d="M18 18.5v-1c0-.83-.67-1.5-1.5-1.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75V18zm6.5-2H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm13.25-.5H22v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20h-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zm-5.35-1.1a.996.996 0 0 0 0 1.41l.96.96c-2.42 5.1 2.88 10.41 7.99 7.99l.95.95a.996.996 0 1 0 1.41-1.41l-9.9-9.91c-.38-.38-1.02-.38-1.41.01zm2.52 3.93 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z"/>';
  let svgsharp =
    '<path d="M18 20v-4h-5v6h1.5v-2h1.1l.9 2H18l-.86-2H18zm-1.5-1.5h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zM6.34 2.34 4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66 1.41-1.41L6.34 2.34zm1.81 4.64 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z"/>';
  let svgtwotone =
    '<path d="M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zM6.34 2.34 4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66 1.41-1.41L6.34 2.34zm1.81 4.64 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z"/>';
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
  export let ariaLabel = 'hdr off select';
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
