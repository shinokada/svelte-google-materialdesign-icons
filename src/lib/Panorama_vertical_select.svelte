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
    '<path d="M19.93 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.05-.11.07-.22.07-.31 0-.34-.24-.57-.64-.57H4.62c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.7 8.91 5.7 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57 0-.1-.02-.2-.07-.31z"/>';
  let svgoutlined =
    '<path d="M18.5 12c0-3.89.84-6.95 1.43-8.69A.993.993 0 0 0 18.98 2H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69z"/>';
  let svground =
    '<path d="M18.5 12c0-3.89.84-6.95 1.43-8.69A.993.993 0 0 0 18.98 2H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69z"/>';
  let svgsharp =
    '<path d="M18.49 11.99c0-5.25 1.54-9.01 1.92-10H3.59c.76 2.16 1.9 5.21 1.9 10 0 4.78-1.17 7.91-1.9 10H20.4c-.74-2.08-1.91-5.23-1.91-10z"/>';
  let svgtwotone =
    '<path d="M18.5 12c0-3.89.84-6.95 1.43-8.69A.993.993 0 0 0 18.98 2H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69z"/>';
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
  export let ariaLabel = 'panorama vertical select';
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
@prop export let ariaLabel = 'panorama vertical select';
-->
