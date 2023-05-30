<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path fill-rule="evenodd" d="m8.79 12.4 3.26 6.22 3.17-6.21c-.11-.08-.21-.16-.3-.25-.84.53-1.85.84-2.92.84s-2.08-.31-2.92-.84c-.09.09-.19.17-.29.24zm-1.96.59A2.995 2.995 0 0 1 4 10a3 3 0 0 1 2.52-2.96C6.75 4.22 9.12 2 12 2s5.25 2.22 5.48 5.04A3 3 0 0 1 20 10c0 1.59-1.24 2.9-2.81 2.99L12.07 23 6.83 12.99z"/>';
  let svgoutlined =
    '<path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42a4.52 4.52 0 0 1-4.78-.01l-.66-.41-.56.54c-.38.35-.87.56-1.39.56a1.999 1.999 0 0 1-.32-3.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2z"/>';
  let svground =
    '<path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02l3.83 7.31c.38.72 1.41.71 1.78-.01l3.73-7.31c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23z"/>';
  let svgsharp =
    '<path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23z"/>';
  let svgtwotone =
    '<path d="m9.32 13.42 2.73 5.21 2.67-5.23a6.468 6.468 0 0 1-5.4.02zm7.99-5.4-.77-.12-.06-.78C16.29 4.8 14.34 3 12 3S7.71 4.8 7.51 7.12l-.06.78-.77.13A1.999 1.999 0 0 0 7 12c.52 0 1.01-.21 1.39-.56l.56-.54.66.41a4.52 4.52 0 0 0 4.78.01l.66-.42.56.54c.38.36.87.56 1.39.56 1.1 0 2-.9 2-2 0-.99-.72-1.82-1.69-1.98z" opacity=".3"/><path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42a4.52 4.52 0 0 1-4.78-.01l-.66-.41-.56.54c-.38.35-.87.56-1.39.56a1.999 1.999 0 0 1-.32-3.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2z"/>';
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
  export let ariaLabel = 'icecream';
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
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
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
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->
