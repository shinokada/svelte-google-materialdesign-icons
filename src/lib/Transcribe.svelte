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
    '<path d="m17.93 16 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.317 3.317 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"/>';
  let svgoutlined =
    '<path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 19H3v-.78c0-.38.2-.72.52-.88C4.71 16.73 6.63 16 9 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19zm2.93-3 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.317 3.317 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69z"/>';
  let svground =
    '<path d="M22.54 10.28a3.29 3.29 0 0 1 0-2.54c.19-.45.1-.96-.24-1.3l-.1-.1c-.56-.56-1.51-.44-1.88.26-.8 1.48-.79 3.24.03 4.79.37.69 1.31.83 1.86.27l.1-.1c.34-.33.42-.84.23-1.28zm-3.72 4.83c.4-.4.46-1.02.13-1.48-1.97-2.73-1.96-6.39.01-9.23.32-.47.26-1.1-.14-1.5-.5-.5-1.34-.46-1.78.1-2.73 3.54-2.73 8.36.02 12 .43.56 1.27.61 1.76.11zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1.78c0-1.12-.61-2.15-1.61-2.66z"/>';
  let svgsharp =
    '<path d="m17.93 16 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.317 3.317 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"/>';
  let svgtwotone =
    '<circle cx="9" cy="9" r="2" opacity=".3"/><path d="M14.48 17.34C13.29 16.73 11.37 16 9 16c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88z" opacity=".3"/><path d="M17.93 2c-3.9 3.89-3.91 9.95 0 14l1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 19H3v-.78c0-.38.2-.72.52-.88C4.71 16.73 6.63 16 9 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19z"/><path d="m22.92 7.06-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69a3.317 3.317 0 0 1 0-3.89z"/>';
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
  export let ariaLabel = 'transcribe';
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
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'transcribe';
-->
