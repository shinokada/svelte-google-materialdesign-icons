<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M2 16.5C2 19.54 4.46 22 7.5 22s5.5-2.46 5.5-5.5V10H2v6.5zm5.5 2C6.12 18.5 5 17.83 5 17h5c0 .83-1.12 1.5-2.5 1.5zM10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="M11 3v6h3v2.5c0-.83 1.12-1.5 2.5-1.5s2.5.67 2.5 1.5h-5v2.89c.75.38 1.6.61 2.5.61 3.04 0 5.5-2.46 5.5-5.5V3H11zm3 5.08c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1c0 .56-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1c0 .56-.45 1-1 1z"/>';
  let svgoutlined =
    '<circle cx="19" cy="6.5" r="1"/><circle cx="15" cy="6.5" r="1"/><path d="M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88zM1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5z"/><path d="M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11z"/><circle cx="5" cy="13.5" r="1"/><circle cx="9" cy="13.5" r="1"/><path d="M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88z"/>';
  let svground =
    '<path d="M21 2h-8c-1.1 0-2 .9-2 2v3.5h1.5c1.1 0 2 .9 2 2v4.95c1.04.48 2.24.68 3.5.47 2.93-.49 5-3.17 5-6.14V4c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4.85 4.38h-3.72c-.38 0-.63-.41-.44-.75.39-.66 1.27-1.13 2.3-1.13s1.91.47 2.3 1.14c.19.33-.06.74-.44.74zM19 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M11 9H3c-1.1 0-2 .9-2 2v4.79c0 3.05 2.19 5.77 5.21 6.16C9.87 22.42 13 19.57 13 16v-5c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm5.3 3.25c-.38.67-1.27 1.14-2.3 1.14s-1.91-.47-2.3-1.14c-.19-.34.06-.75.44-.75h3.72c.38 0 .63.41.44.75zM9 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M11 2v5.5h3.5v3.31C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v3.56c.76.36 1.61.56 2.5.56 3.31 0 6-2.69 6-6V2H11zm4 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm6 1.88c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88zm2-5.38c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>';
  let svgtwotone =
    '<path d="M14.5 10.81C14.55 9.8 15.64 9 16.99 9c1.38 0 2.5.84 2.5 1.88H14.5v1.22c.69.55 1.55.9 2.5.9 2.21 0 4-1.79 4-4V4h-8v3.5h1.5v3.31zM19 5.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" opacity=".3"/><path d="M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11z"/><circle cx="19" cy="6.5" r="1"/><circle cx="15" cy="6.5" r="1"/><path d="M16.99 9c-1.35 0-2.44.8-2.49 1.81v.07h4.99c0-1.04-1.12-1.88-2.5-1.88zM1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5z"/><path d="M7 20c2.21 0 4-1.79 4-4v-5H3v5c0 2.21 1.79 4 4 4zm0-2.12c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88zm2-5.38c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" opacity=".3"/><circle cx="5" cy="13.5" r="1"/><circle cx="9" cy="13.5" r="1"/><path d="M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88z"/>';
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
  export let ariaLabel = 'theater comedy';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
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
[Go to docs](https://svelte-google-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let color = 'currentColor';
@prop export let role = 'img';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
@prop export let ariaLabel = 'theater comedy';
-->
