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
    '<path d="M18 8h-7l-2 5H6l-4 9h20zm-5-7h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z"/>';
  let svgoutlined =
    '<path d="M18 8h-7l-2 5H6l-4 9h20L18 8zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08l2.22-5zM13 1h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z"/>';
  let svground =
    '<path d="M16.49 8h-4.14c-.82 0-1.55.5-1.86 1.26L9 13H7.3c-.79 0-1.51.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10A1.992 1.992 0 0 0 16.49 8zM14 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm5.66 2.34a.996.996 0 0 0-1.41 0l-1.41 1.41a.996.996 0 1 0 1.41 1.41l1.41-1.41a.996.996 0 0 0 0-1.41zm-8.49 1.42L9.76 3.34a.996.996 0 1 0-1.41 1.41l1.41 1.41c.39.39 1.02.39 1.41 0a.984.984 0 0 0 0-1.4z"/>';
  let svgsharp =
    '<path d="M18 8h-7l-2 5H6l-4 9h20zm-5-7h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z"/>';
  let svgtwotone =
    '<path d="M16.49 10h-4.14l-1.49 3.74-.51 1.26H7.3l-2.22 5h14.27z" opacity=".3"/><path d="M18 8h-7l-2 5H6l-4 9h20L18 8zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08l2.22-5zM13 1h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z"/>';
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
  export let ariaLabel = 'volcano';
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
@prop export let ariaLabel = 'volcano';
-->
