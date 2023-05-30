<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="m22 20.59-4.69-4.69A7.902 7.902 0 0 0 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"/><path d="M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"/>';
  let svgoutlined =
    '<path d="m22 20.59-4.69-4.69A7.902 7.902 0 0 0 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"/><path d="M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"/>';
  let svground =
    '<path d="m21.29 19.88-3.98-3.98a7.93 7.93 0 0 0 1.58-6.2c-.54-3.41-3.33-6.14-6.75-6.62C7.57 2.44 3.61 5.69 3.07 10h2.02a6.01 6.01 0 0 1 6.85-4.93c2.61.4 4.7 2.57 5.02 5.2A6.011 6.011 0 0 1 11 17c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69l3.98 3.98a.996.996 0 1 0 1.41-1.41z"/><path d="m8.43 9.69 1.03 4.47c.11.49.55.84 1.05.84.46 0 .87-.3 1.02-.74l1.01-3.04.69 1.66c.16.37.52.62.92.62h.58c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.23l-.97-2.34c-.17-.4-.56-.66-1-.66h-.05c-.46 0-.87.3-1.02.74l-.88 2.63-1.04-4.54C9.43 7.35 8.99 7 8.49 7c-.47 0-.89.31-1.03.76L6.45 11h-4.7c-.41 0-.75.34-.75.75s.34.75.75.75h5.07c.44 0 .82-.28.95-.7l.66-2.11z"/>';
  let svgsharp =
    '<path d="m22 20.59-4.69-4.69A7.902 7.902 0 0 0 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"/><path d="M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"/>';
  let svgtwotone =
    '<path d="m22 20.59-4.69-4.69A7.902 7.902 0 0 0 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"/><path d="M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"/>';
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
  export let ariaLabel = 'troubleshoot';
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
