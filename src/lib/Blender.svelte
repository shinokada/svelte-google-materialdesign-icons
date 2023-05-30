<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"/>';
  let svgoutlined =
    '<path d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z"/><circle cx="12" cy="18" r="1"/>';
  let svground =
    '<path d="m16.13 15.13 1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"/>';
  let svgsharp =
    '<path d="M18 3h-4V2h-4v1H3v8h4.23l.64 4.13L6 17v5h12v-5l-1.87-1.87L18 3zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"/>';
  let svgtwotone =
    '<path d="M13 16h-2c-1.65 0-3 1.35-3 3v1h8v-1c0-1.65-1.35-3-3-3zm-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3"/><path d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z"/><circle cx="12" cy="18" r="1"/>';
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
  export let ariaLabel = 'blender';
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
