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
    '<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>';
  let svgoutlined =
    '<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>';
  let svground =
    '<path d="m19.17 12-3.88-3.88a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17 19.17 12zM2.1 4.93l3.49 3.49-2.88 2.88a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L4.83 12 7 9.83 19.07 21.9a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42z"/>';
  let svgsharp =
    '<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>';
  let svgtwotone =
    '<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>';
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
  export let ariaLabel = 'code off';
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
@prop export let ariaLabel = 'code off';
-->
