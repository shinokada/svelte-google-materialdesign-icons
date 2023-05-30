<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"/>';
  let svgoutlined =
    '<path d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20V6zM6.47 6 12 3.24 17.53 6H6.47zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"/>';
  let svground =
    '<path d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1zM2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1zm17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26l2-1zm.55 1.96-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.986.986 0 0 0-.9-.01zm-.97 6.08-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44 1.88-1.85c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0z"/>';
  let svgsharp =
    '<path d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"/>';
  let svgtwotone =
    '<path d="M6.47 6h11.06L12 3.24z" opacity=".3"/><path d="M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20V6zM6.47 6 12 3.24 17.53 6H6.47zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"/>';
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
  export let ariaLabel = 'assured workload';
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
