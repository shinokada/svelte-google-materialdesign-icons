<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  let svgpath: string;
  let svgfilled =
    '<path d="m18.89 14.75-4.09-2.04c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.25-.74a.99.99 0 0 0-.92.28l-.83.84 4.54 4.79c.38.38 1.14.59 1.67.59h6.16c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.68-1.09-2.07z"/><path d="M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"/>';
  let svgoutlined =
    '<path d="M20.5 2v2.02C18.18 2.13 15.22 1 12 1S5.82 2.13 3.5 4.02V2H2v5h5V5.5H4.09c2.11-1.86 4.88-3 7.91-3s5.79 1.14 7.91 3H17V7h5V2h-1.5z"/><path d="m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62A2.508 2.508 0 0 0 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44a2 2 0 0 0-1.08-2.12zM18 15.56 17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z"/>';
  let svground =
    '<path d="m21.15 2.85-1.02 1.02C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2.85 2.85a.5.5 0 0 0-.85.36V6.5c0 .28.22.5.5.5h3.29c.45 0 .67-.54.35-.85L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43l-1.22 1.22a.5.5 0 0 0 .36.85h3.29c.28 0 .5-.22.5-.5V3.21a.5.5 0 0 0-.85-.36z"/><path d="M14.5 12.71c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.44-.72a1.12 1.12 0 0 0-1.02 1.89l4.01 4.01c.37.37.88.58 1.41.58h6.41c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.69-1.09-2.07l-4.39-2.04z"/>';
  let svgsharp =
    '<path d="M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"/><path d="M13 12.5v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-4.04-.85-1.21 1.23L10.13 23h8.97l1.09-7.64-6.11-2.86H13z"/>';
  let svgtwotone =
    '<path d="M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"/><path d="M12 13.68V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.17-.89 3.7 3.78h6.55l.92-5.44-4.24-1.89H12z" opacity=".3"/><path d="m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62A2.508 2.508 0 0 0 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44a2 2 0 0 0-1.08-2.12zM17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56 17.08 21z"/>';
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
  export let ariaLabel = 'swipe';
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
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'swipe';
-->
