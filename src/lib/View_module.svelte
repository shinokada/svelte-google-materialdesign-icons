<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"/>';
  let svgoutlined =
    '<path d="M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"/>';
  let svground =
    '<path d="M14.67 6v4.5c0 .55-.45 1-1 1h-3.33c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.33c.55 0 1 .45 1 1zm2 5.5H20c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1v4.5c0 .55.44 1 1 1zm-2 6.5v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1zm1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1zm-8.34-1H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1v-4.5c0-.55-.44-1-1-1zm1-2V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4.5c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1z"/>';
  let svgsharp =
    '<path d="M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"/>';
  let svgtwotone =
    '<path d="M19 11h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z" opacity=".3"/><path d="M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"/>';
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
  export let ariaLabel = 'view module';
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
