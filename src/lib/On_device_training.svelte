<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let role = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  let svgpath: string;
  let svgfilled =
    '<path d="M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z"/><path d="M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 18H6V6h12v12z"/><path d="M16.01 15.95c.62-.83.99-1.84.99-2.95s-.37-2.12-.99-2.95l-1.07 1.07c.35.54.56 1.19.56 1.88s-.21 1.34-.56 1.88l1.07 1.07zm-6.95-1.07c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.11.37 2.12.99 2.95l1.07-1.07z"/>';
  let svgoutlined =
    '<path d="M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z"/><path d="M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 21H6v-1h12v1zm0-3H6V6h12v12zm0-14H6V3h12v1z"/><path d="M16.01 15.95c.62-.83.99-1.84.99-2.95s-.37-2.12-.99-2.95l-1.07 1.07c.35.54.56 1.19.56 1.88s-.21 1.34-.56 1.88l1.07 1.07zm-6.95-1.07c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.11.37 2.12.99 2.95l1.07-1.07z"/>';
  let svground =
    '<path d="M11.5 17h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5zm.02-5.94c-.71.16-1.29.74-1.46 1.44-.23.94.21 1.8.94 2.22v.53c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-.53c.6-.35 1-.98 1-1.72a2 2 0 0 0-2.48-1.94z"/><path d="M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 18H6V6h12v12z"/><path d="M15.33 15.27c.36.36.99.26 1.21-.2.29-.63.46-1.33.46-2.07s-.17-1.44-.46-2.07a.748.748 0 0 0-1.21-.2.75.75 0 0 0-.15.84c.2.44.31.92.31 1.43s-.11.99-.31 1.43c-.12.29-.07.62.15.84zm-6.66 0a.75.75 0 0 0 .15-.84c-.21-.44-.32-.92-.32-1.43 0-1.93 1.57-3.5 3.5-3.5v.69c0 .22.25.33.42.19l1.62-1.44c.11-.1.11-.27 0-.37l-1.62-1.44c-.17-.15-.42-.04-.42.18V8c-2.76 0-5 2.24-5 5 0 .74.17 1.44.46 2.07.22.47.84.57 1.21.2z"/>';
  let svgsharp =
    '<path d="M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z"/><path d="M20 1.01 4 1v22h16V1.01zM18 18H6V6h12v12z"/><path d="M16.01 15.95c.62-.83.99-1.84.99-2.95s-.37-2.12-.99-2.95l-1.07 1.07c.35.54.56 1.19.56 1.88s-.21 1.34-.56 1.88l1.07 1.07zm-6.95-1.07c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.11.37 2.12.99 2.95l1.07-1.07z"/>';
  let svgtwotone =
    '<path d="M6 20h12v1H6zM6 3h12v1H6z" opacity=".3"/><path d="M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z"/><path d="M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 21H6v-1h12v1zm0-3H6V6h12v12zm0-14H6V3h12v1z"/><path d="M16.01 15.95c.62-.83.99-1.84.99-2.95s-.37-2.12-.99-2.95l-1.07 1.07c.35.54.56 1.19.56 1.88s-.21 1.34-.56 1.88l1.07 1.07zm-6.95-1.07c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.11.37 2.12.99 2.95l1.07-1.07z"/>';
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
  export let ariaLabel = 'on device training';
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
@prop export let ariaLabel = 'on device training';
-->
