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
    '<path d="M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42zm-10.6-4.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18 1.41 1.41-1.59 1.59zm3-5.84-7.1-7.1A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65-1.41-1.41-2.65 2.65z"/>';
  let svgoutlined =
    '<path d="M7.94 5.12 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12zm9.72 4.41-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm2.12 13.08-2.27-2.27A9.91 9.91 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm-3.72-3.73L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z"/>';
  let svground =
    '<path d="M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l1.56 1.56a9.944 9.944 0 0 0-1.59 6.7c.53 4.54 4.21 8.22 8.74 8.74 2.49.29 4.81-.34 6.7-1.59l1.56 1.56c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4zm-10.61-4.6-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12.18-.18L12.17 15l-.88.88c-.39.4-1.02.4-1.41.01zm3.71-5.13-7.1-7.1a9.944 9.944 0 0 1 6.7-1.59c4.54.53 8.22 4.21 8.74 8.74.29 2.49-.34 4.82-1.59 6.7L15 12.17l1.94-1.94a.996.996 0 1 0-1.41-1.41l-1.94 1.94z"/>';
  let svgsharp =
    '<path d="M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42zm-10.6-4.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18 1.41 1.41-1.59 1.59zm3-5.84-7.1-7.1A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65-1.41-1.41-2.65 2.65z"/>';
  let svgtwotone =
    '<path d="m13.59 10.76 2.65-2.65 1.41 1.41L15 12.17l3.88 3.88A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12l5.65 5.64zm4.07-1.23-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm-1.6 9.35L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z" opacity=".3"/><path d="M7.94 5.12 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12zm9.72 4.41-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm2.12 13.08-2.27-2.27A9.91 9.91 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm-3.72-3.73L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z"/>';
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
  export let ariaLabel = 'unpublished';
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
@prop export let ariaLabel = 'unpublished';
-->
