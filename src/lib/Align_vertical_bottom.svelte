<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled = '<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>';
  let svgoutlined = '<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>';
  let svground =
    '<path d="M21 22H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM8.5 2C7.67 2 7 2.67 7 3.5v13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-13C10 2.67 9.33 2 8.5 2zm7 6c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z"/>';
  let svgsharp = '<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>';
  let svgtwotone = '<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>';
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
  export let ariaLabel = 'align vertical bottom';
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
