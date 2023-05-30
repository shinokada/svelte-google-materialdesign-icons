<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>';
  let svgoutlined =
    '<path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>';
  let svground =
    '<path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H13c-.55 0-1 .45-1 1s.45 1 1 1h2.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>';
  let svgsharp =
    '<path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74L17.49 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>';
  let svgtwotone =
    '<path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>';
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
  export let ariaLabel = 'electric scooter';
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
